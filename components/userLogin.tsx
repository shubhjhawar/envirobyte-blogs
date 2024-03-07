import {signIn, signOut, useSession } from 'next-auth/react';

const UserLogin = () => {
    const { data: session} = useSession();

    if(session) {
        return (
            <>
                {session?.user?.name}
                <button onClick={() => signOut()}>Signout</button>
            </>
        )
    }

    return (
        <>
            Not Signed in <br />
            <button onClick={() => signIn()}>Sign In</button>
        </>
    );
};

export default UserLogin;
