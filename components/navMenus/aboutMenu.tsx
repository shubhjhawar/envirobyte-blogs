import React from 'react';
import Link from 'next/link';

const AboutMenu = () => {
    return (
        <div className='w-[250px]'>
            <ul className='p-2'>
                <li>
                    <Link href="/about/team" className='relative group'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5m-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6z"></path></svg>
                            <span className="text-gray-600 ml-3">Team</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                </li>
                <li>
                    <Link href="/about/data_driven_approach" className='relative group'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M20 17V7c0-2.168-3.663-4-8-4S4 4.832 4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4M12 5c3.691 0 5.931 1.507 6 1.994C17.931 7.493 15.691 9 12 9S6.069 7.493 6 7.006C6.069 6.507 8.309 5 12 5M6 9.607C7.479 10.454 9.637 11 12 11s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2zM6 17v-2.393C7.479 15.454 9.637 16 12 16s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2"></path></svg>
                            <span className="text-gray-600 ml-3">Data Driven Approach</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                </li>
                <li>
                    <Link href="/about/contact" className='relative group'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001c0-1.649 1.353-3 3-3M19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5z"></path></svg>
                            <span className="text-gray-600 ml-3">Contact Us</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                </li>
                <li>
                    <Link href="/about/careers" className='relative group'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="black" d="M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.91 2.91 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.91 2.91 0 0 0 18 11a3 3 0 0 0 0-6M8 10H5V7H3v3H0v2h3v3h2v-3h3Z"/></svg>
                            <span className="text-gray-600 ml-3">Careers</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                </li>
              </ul>
        </div>
    );
};

export default AboutMenu;
