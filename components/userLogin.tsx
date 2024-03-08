import {signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const UserLogin = () => {
    const { data: session} = useSession();

    if(session) {
        return (
            <div className="font-medium text-gray-600 hover:text-gray-900 px-3 py-3 flex flex-col items-center transition duration-150 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M12 21v-2h7V5h-7V3h9v18zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"></path></svg>
                <button onClick={() => signOut()}>Logout</button>
            </div>
        )
    }

    return (
        <>
            <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-3 py-3 flex flex-col items-center transition duration-150 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24">
                    <path fill="black" d="M17 2H7C5.3 2 4 3.3 4 5v6h8.6l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l4 4c.4.4.4 1 0 1.4l-4 4c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3H4v6c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3" />
                </svg>
                <span>Login / Register</span>
            </Link>
        </>
    );
};

export default UserLogin;
