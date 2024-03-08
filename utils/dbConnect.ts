"use server";
import { Client } from 'pg';
import bcrypt from 'bcrypt';

export default async function dbConnect(): Promise<Client> {
    const client = new Client({
        user: process.env.USER_NAME,
        host: process.env.HOST_NAME,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.PORT_NUMBER,
    });

    try {
        await client.connect();
        console.log("Connected to database!");
        return client;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

interface User {
    name: string;
    email: string;
    password: string;
}

export async function createUser({ name, email, password }: User): Promise<any> {
    "use server"
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Connect to the database
    const db = await dbConnect();

    try {
        const emailExistsQuery = `
            SELECT * FROM users WHERE email = $1
        `;
        const emailExistsResult = await db.query(emailExistsQuery, [email]);
        if (emailExistsResult.rows.length > 0) {
            const response = { success: false, message: 'Email already exists' };
            return response;
        }

        // Insert the new user into the database with the hashed password
        const query = `
            INSERT INTO users (name, email, password, user_type, created_at)
            VALUES ($1, $2, $3, $4, $5)
        `;
        await db.query(query, [name, email, hashedPassword, "credentials", new Date()]);
        console.log('User created successfully.');
        const response = { success: true, message: 'User created successfully.' };
        return response;
    } catch (error) {
        console.error('Error creating user:', error);
        const response = { success: false, message: 'error' };
        return response;
    } finally {
        await db.end();
    }
}
