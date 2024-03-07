'use client'

import Link from 'next/link'
import Image from 'next/image';
import logo from '../../public/images/about-logo.png';

const SustainabilityMenu = () => {
  return (
    <div className="w-[500px]">
        {/* white block */}
        <div className="flex justify-between gap-5 p-4">
            {/* column 1 */}
            <div className="w-1/2">
                <h2 className="font-bold mb-4 flex justify-start">Sustainability</h2>

                <ul className='flex flex-col justify-center'>
                    <Link href="/sustainability/emmission" className='relative group'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 32 32"><path fill="currentColor" fillRule="evenodd" d="M16 1C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15c8.284 0 15-6.716 15-15c0-8.284-6.716-15-15-15m-.136 2c-1.726.018-3.37.372-4.873 1h1.51c.28 0 .51.23.5.51c-.01.28.25.49.52.49h.17c.19 0 .36-.11.44-.28l.46-.91A1.468 1.468 0 0 1 15.863 3M5.752 8A12.944 12.944 0 0 0 3 16c0 7.18 5.82 13 13 13s13-5.82 13-13c0-3.088-1.076-5.924-2.874-8.154a2.64 2.64 0 0 1-.756-.426l-3.83-3.06c-.29-.23-.66-.36-1.03-.36h-1.44c-.4 0-.59.48-.3.76l.11.11c.08.08.19.13.31.13h.18c.34 0 .62.27.63.61c.01.24.09.48.27.65l.59.59c.09.1.22.15.35.15h1.29c.28 0 .5.22.5.5s-.22.5-.5.5h-1.22c-.17 0-.34.09-.42.24l-2.64 4.4c-.15.24-.22.51-.22.79c0 .32-.26.57-.58.57h-.23a.19.19 0 0 1-.19-.19c0-.45-.36-.81-.81-.81h-.93c-.7 0-1.26.56-1.26 1.26v.87c0 .48.39.87.87.89h.11L15 16h.48c.28 0 .52-.13.52-.41v-.09c0-.28.22-.5.5-.5s.5.22.5.5v.09c0 .23.19.41.41.41h.17c.23 0 .41.19.41.41c0 .32.26.59.59.59h2.62c.52 0 1.03.12 1.5.35l.49.24c.49.25.8.75.8 1.3v.52c0 .32.26.58.58.58h.24c.65 0 1.18.53 1.18 1.19v.39c0 .28-.1.55-.27.76l-4.52 5.43c-.13.15-.32.24-.52.24c-.38 0-.68-.3-.68-.68v-3.65c0-.37-.3-.67-.67-.67c-.73 0-1.33-.6-1.33-1.33v-2.05c0-.34.27-.61.61-.61c.21 0 .39-.17.39-.39v-.12c0-.28-.22-.5-.5-.5h-1.36c-.09 0-.18-.02-.26-.06l-2.788-.93a1.441 1.441 0 0 1-.342-.08l-1.87-.64c-.48-.16-.8-.61-.8-1.12v-.47c0-.32-.12-.63-.34-.86l-.94-.99c-.51-.54-.8-1.26-.8-2v-.97C9 8.84 8.16 8 7.12 8zM18.5 8c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5-.22-.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s-.22.5-.5.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5h1c.28 0 .5.22.5.5s.22.5.5.5s.5-.22.5-.5s.22-.5.5-.5" clipRule="evenodd"></path></svg>
                            <span className="text-gray-600 ml-3">Emmission</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                    <Link href="/sustainability/lca" className='relative group'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zM9 3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path></g></svg>
                            <span className="text-gray-600 ml-3">LCA</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                    <Link href="/sustainability/climate" className='relative group'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m.06 17v-2.01H12c-1.28 0-2.56-.49-3.54-1.46a5.006 5.006 0 0 1-.64-6.29l1.1 1.1c-.71 1.33-.53 3.01.59 4.13c.7.7 1.62 1.03 2.54 1.01v-2.14l2.83 2.83zm4.11-4.24l-1.1-1.1c.71-1.33.53-3.01-.59-4.13A3.482 3.482 0 0 0 12 8.5h-.06v2.15L9.11 7.83L11.94 5v2.02c1.3-.02 2.61.45 3.6 1.45c1.7 1.7 1.91 4.35.63 6.29"></path></svg>
                            <span className="text-gray-600 ml-3">Climate Change</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                </ul>

            </div>

            <div className='w-[2px] bg-gray-200' />

            {/* column 2 */}
            <div className="w-2/3">
                <h2 className="font-bold mb-4 flex justify-start">Data Science</h2>

                <ul>
                    <Link href="/datascience/advanced_data_analysis" className='relative group'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M.5.5v13h13"></path><path d="M3.5 6.5L6 9l4-6l3.5 2.5"></path></g></svg>
                            <span className="text-gray-600 ml-3">Advanced Data Analytics</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                    <Link href="/datascience/iot" className='relative group'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M5.698 10.308h1.615v-3.5q0-.34-.222-.574Q6.87 6 6.506 6q-.321 0-.565.234q-.243.233-.243.574zM6.496 19q-1.48 0-2.524-1.04q-1.043-1.04-1.043-2.537q0-1.014.483-1.817q.482-.802 1.286-1.268v-5.53q0-.76.533-1.284Q5.763 5 6.506 5q.78 0 1.294.524q.513.524.513 1.284v5.53q.785.466 1.277 1.281q.493.816.493 1.823q0 1.471-1.053 2.515Q7.977 19 6.496 19m6.608-4.192q-1.066-.69-1.816-1.827t-.75-2.712q0-2.195 1.537-3.732Q13.61 5 15.805 5Q18 5 19.538 6.537q1.539 1.537 1.539 3.732q0 1.575-.75 2.712q-.75 1.136-1.815 1.827zM15.808 19q-.523 0-.916-.392q-.392-.393-.392-.916h2.615q0 .523-.392.916q-.392.392-.915.392m-1.923-2.192q-.213 0-.357-.144t-.143-.357q0-.213.143-.356q.144-.143.357-.143h3.846q.212 0 .356.144t.144.356q0 .213-.144.356q-.144.144-.356.144z"></path></svg>
                            <span className="text-gray-600 ml-3">IoT Air Quality Monitoring</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                    <Link href="/datascience/openpms" className='relative group'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20"><path fill="currentColor" d="M16 3.992a2 2 0 0 1-2.647 1.893l-1.284 1.943c.571.544.928 1.311.931 2.162l1.17.202a2 2 0 1 1-.162.987l-1.17-.203a3.01 3.01 0 0 1-1.426 1.673l.444 1.357a2 2 0 1 1-.948.319l-.445-1.36a2.995 2.995 0 0 1-2.874-1.18l-1.635.788a2 2 0 1 1-.452-.892l1.633-.787a2.999 2.999 0 0 1 .637-2.902l-.935-1.174a2 2 0 1 1 .775-.632l.944 1.185C8.984 7.135 9.476 7 10 7c.442 0 .862.095 1.24.267l1.278-1.933A2 2 0 1 1 16 3.992"></path></svg>
                            <span className="text-gray-600 ml-3 flex">
                                OpenPMS
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.8 8.44H6.87V16H4.89V8.44H2V7h7.8zM13.5 7l2.46 6.5L18.41 7H21v9h-2v-2.5l.22-4.26L16.63 16h-1.35L12.7 9.25l.2 4.25V16h-1.97V7z"/></svg>
                            </span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                    <Link href="/datascience/predictive_analysis" className='relative group gap-2'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M6.446 18.824a.74.74 0 1 0-.742-.74a.74.74 0 0 0 .742.74m9.186 2.217a1.158 1.158 0 1 0-1.16-1.157a1.159 1.159 0 0 0 1.16 1.157m-4.395.392a.986.986 0 1 0-.988-.984a.987.987 0 0 0 .988.985m2.494 2.07a1.158 1.158 0 1 0-1.16-1.157a1.159 1.159 0 0 0 1.16 1.158m-4.545-.394a.986.986 0 1 0-.987-.985a.987.987 0 0 0 .987.985m-1.703-2.168a.863.863 0 1 0-.865-.86a.863.863 0 0 0 .865.86m2.049-1.674a.863.863 0 1 0-.863-.866a.864.864 0 0 0 .863.866m3.631-.296a.986.986 0 1 0-.988-.985a.987.987 0 0 0 .988.985m-1.729-2.143a.863.863 0 1 0-.863-.863a.864.864 0 0 0 .863.863m-2.939.32a.74.74 0 1 0-.741-.74a.74.74 0 0 0 .741.74m-2.519-.32a.616.616 0 1 0-.618-.616a.617.617 0 0 0 .618.616m-.025-1.7a.542.542 0 1 0-.543-.542a.543.543 0 0 0 .543.542m2.1.024a.616.616 0 1 0-.617-.616a.617.617 0 0 0 .617.616m2.37-.467a.74.74 0 1 0-.74-.74a.741.741 0 0 0 .74.74m-.469-1.97a.616.616 0 1 0-.617-.617a.617.617 0 0 0 .617.616m-1.95.738a.542.542 0 1 0-.545-.542a.543.543 0 0 0 .544.542m-1.779.222a.443.443 0 1 0-.444-.444a.445.445 0 0 0 .444.444M8.67 7.123a.863.863 0 1 0-.865-.862a.863.863 0 0 0 .865.862m2.246-.025a.74.74 0 1 0-.74-.739a.74.74 0 0 0 .74.739m-.42-2.61a.74.74 0 1 0-.74-.74a.741.741 0 0 0 .74.74M8.25 4.487a.863.863 0 1 0-.865-.862a.863.863 0 0 0 .865.862m-2.618.591a.986.986 0 1 0-.99-.985a.986.986 0 0 0 .99.985M6.05 7.69a.986.986 0 1 0-.988-.986a.987.987 0 0 0 .988.986M3.186 9.093a1.158 1.158 0 1 0-1.16-1.158a1.16 1.16 0 0 0 1.16 1.158M1.383 14.34A1.38 1.38 0 1 0 0 12.96a1.381 1.381 0 0 0 1.383 1.38m2.963-2.365a1.158 1.158 0 1 0-1.16-1.158a1.16 1.16 0 0 0 1.16 1.158m2.866-1.403a.986.986 0 1 0-.989-.986a.987.987 0 0 0 .989.986m2.617-.592a.863.863 0 1 0-.868-.86a.863.863 0 0 0 .868.86m2.247 0a.74.74 0 1 0-.74-.739a.74.74 0 0 0 .74.74m.692-2.488a.616.616 0 1 0-.618-.615a.617.617 0 0 0 .618.615m-.42-2.613a.616.616 0 1 0-.618-.616a.617.617 0 0 0 .619.616m7.162 11.48a.616.616 0 1 0-.618-.615a.616.616 0 0 0 .618.615M13.756 5.6a.543.543 0 1 0-.543-.542a.542.542 0 0 0 .543.542m1.038.834a.443.443 0 1 0-.445-.443a.444.444 0 0 0 .445.443M14.2 8.207a.543.543 0 1 0-.543-.542a.543.543 0 0 0 .543.542m-.271 2.167a.616.616 0 1 0-.618-.616a.617.617 0 0 0 .618.616m.024 4.631a.616.616 0 1 0-.617-.616a.617.617 0 0 0 .617.616m1.68 1.182a.542.542 0 1 0-.544-.542a.543.543 0 0 0 .543.542m1.16 1.281a.443.443 0 1 0-.445-.443a.444.444 0 0 0 .444.443m1.308-.347a.542.542 0 1 0-.543-.542a.542.542 0 0 0 .543.542m-1.058-1.697a.616.616 0 1 0-.618-.615a.616.616 0 0 0 .618.615m-1.708-1.65a.74.74 0 1 0-.74-.74a.74.74 0 0 0 .74.74m5.557 1.38a.74.74 0 1 0-.74-.74a.741.741 0 0 0 .74.74m-2.494-.937a.74.74 0 1 0-.74-.739a.74.74 0 0 0 .74.74m3.729-.838a.863.863 0 1 0-.864-.861a.863.863 0 0 0 .864.861M16.546 12a.863.863 0 1 0-.863-.862a.864.864 0 0 0 .863.862m3.087.419a.863.863 0 1 0-.864-.862a.863.863 0 0 0 .864.861m3.383-1.404a.986.986 0 1 0-.987-.986a.987.987 0 0 0 .987.986m-2.47-.961a.986.986 0 1 0-.988-.985a.987.987 0 0 0 .989.985m-3.086-.418a.986.986 0 1 0-.988-.986a.987.987 0 0 0 .988.986m3.482-2.489a1.158 1.158 0 1 0-1.16-1.158a1.16 1.16 0 0 0 1.16 1.158m-3.087-.443a1.158 1.158 0 1 0-1.161-1.158a1.159 1.159 0 0 0 1.16 1.158m1.16 16.035a1.38 1.38 0 1 0-1.383-1.377a1.382 1.382 0 0 0 1.383 1.377M17.46 3.255a1.38 1.38 0 1 0-1.384-1.38a1.382 1.382 0 0 0 1.384 1.38"></path></svg>
                            <span className="text-gray-600 ml-3">Predictive Analysis</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>

                </ul>
                
            </div>
        </div>

        {/* gray block */}
        <div className='bg-gray-200 flex flex-wrap justify-center gap-4 rounded-b-md p-4 text-sm'>
            <Link href="/" className="font-semibold text-gray-600 hover:text-gray-900 hover:scale-105 transition duration-150 ease-in-out">Premium Templates</Link>
            <Link href="/" className="font-semibold text-gray-600 hover:text-gray-900 hover:scale-105 transition duration-150 ease-in-out">Premium Templates</Link>
            <Link href="/" className="font-semibold text-gray-600 hover:text-gray-900 hover:scale-105 transition duration-150 ease-in-out">Premium Templates</Link>
            <Link href="/" className="font-semibold text-gray-600 hover:text-gray-900 hover:scale-105 transition duration-150 ease-in-out">Premium Templates</Link>
            <Link href="/" className="font-semibold text-gray-600 hover:text-gray-900 hover:scale-105 transition duration-150 ease-in-out">Premium Templates</Link>
            <Link href="/" className="font-semibold text-gray-600 hover:text-gray-900 hover:scale-105 transition duration-150 ease-in-out">Premium Templates</Link>
        </div>
    </div>
  )
}

export default SustainabilityMenu