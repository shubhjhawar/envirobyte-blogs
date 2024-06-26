import GitHubProvider from "next-auth/providers/github";
import LinkedInProvider from 'next-auth/providers/linkedin';
import CredentialsProvider from "next-auth/providers/credentials";
import connectToMongoDB from "./mongoDbConnect";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign In",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@email.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to authenticate user using provided credentials
        const db = await connectToMongoDB();
        try {
          const email = credentials?.email;
          const password = credentials?.password;

          // Check if email and password are defined
          if (email && password) {
            const usersCollection = db.collection('users');
            const user = await usersCollection.findOne({ email: email });
            if (user) {
              // Compare the provided password with the hashed password stored in the database
              const passwordMatch = await bcrypt.compare(password, user.password);
              if (passwordMatch) {
                return user as any; // Return user if passwords match
              }
            }
          }
          return null; // Return null if user doesn't exist or passwords don't match
        } catch (error) {
          console.error("Error in authorize:", error);
          throw error;
        }
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_ID as string,
      clientSecret: process.env.LINKEDIN_SECRET as string,
      authorization: { params: { scope: 'profile email openid' } },
        issuer: 'https://www.linkedin.com',
        jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
        async profile(profile) {
            return {
                id: profile.sub,
                name: profile.name,
                firstname: profile.given_name,
                lastname: profile.family_name,
                email: profile.email
            }
        },
      }),
  ],
  callbacks: {
    async signIn(params:any) {
      const { user, account, profile } = params;
      // If the user is coming from GitHub, check if they exist in the database
      if (account?.provider === "linkedin" && profile?.email) {
        const db = await connectToMongoDB();
        try {
          const usersCollection = db.collection('users');
          const existingUser = await usersCollection.findOne({ email: profile.email });
          if (!existingUser) {
            // Add user to the database if they don't exist
            await usersCollection.insertOne({
              email: profile.email,
              name: user?.name,
              user_type: 'linkedin',
              created_at: new Date()
            });
            return true;
          }
        } catch (error) {
          console.error("Error in signIn:", error);
          throw error;
        }
      }
      return true; // If not GitHub provider, simply return true
    }
  }
};