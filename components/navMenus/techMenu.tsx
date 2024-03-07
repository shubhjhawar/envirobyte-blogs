'use client'

import Link from 'next/link'
import Image from 'next/image';
import logo from '../../public/images/about-logo.png';

const TechMenu = () => {
  return (
    <div className="w-[500px]">
        {/* white block */}
        <div className="flex justify-between gap-5 p-4">
            {/* column 1 */}
            <div className="w-1/3">
                <h2 className="font-bold mb-4 flex justify-start">Heading 1</h2>

                <ul className='flex flex-col justify-center'>
                    <Link href="/tech/emmissionx" className='relative group'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 32 32"><path fill="currentColor" fillRule="evenodd" d="M16 1C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15c8.284 0 15-6.716 15-15c0-8.284-6.716-15-15-15m-.136 2c-1.726.018-3.37.372-4.873 1h1.51c.28 0 .51.23.5.51c-.01.28.25.49.52.49h.17c.19 0 .36-.11.44-.28l.46-.91A1.468 1.468 0 0 1 15.863 3M5.752 8A12.944 12.944 0 0 0 3 16c0 7.18 5.82 13 13 13s13-5.82 13-13c0-3.088-1.076-5.924-2.874-8.154a2.64 2.64 0 0 1-.756-.426l-3.83-3.06c-.29-.23-.66-.36-1.03-.36h-1.44c-.4 0-.59.48-.3.76l.11.11c.08.08.19.13.31.13h.18c.34 0 .62.27.63.61c.01.24.09.48.27.65l.59.59c.09.1.22.15.35.15h1.29c.28 0 .5.22.5.5s-.22.5-.5.5h-1.22c-.17 0-.34.09-.42.24l-2.64 4.4c-.15.24-.22.51-.22.79c0 .32-.26.57-.58.57h-.23a.19.19 0 0 1-.19-.19c0-.45-.36-.81-.81-.81h-.93c-.7 0-1.26.56-1.26 1.26v.87c0 .48.39.87.87.89h.11L15 16h.48c.28 0 .52-.13.52-.41v-.09c0-.28.22-.5.5-.5s.5.22.5.5v.09c0 .23.19.41.41.41h.17c.23 0 .41.19.41.41c0 .32.26.59.59.59h2.62c.52 0 1.03.12 1.5.35l.49.24c.49.25.8.75.8 1.3v.52c0 .32.26.58.58.58h.24c.65 0 1.18.53 1.18 1.19v.39c0 .28-.1.55-.27.76l-4.52 5.43c-.13.15-.32.24-.52.24c-.38 0-.68-.3-.68-.68v-3.65c0-.37-.3-.67-.67-.67c-.73 0-1.33-.6-1.33-1.33v-2.05c0-.34.27-.61.61-.61c.21 0 .39-.17.39-.39v-.12c0-.28-.22-.5-.5-.5h-1.36c-.09 0-.18-.02-.26-.06l-2.788-.93a1.441 1.441 0 0 1-.342-.08l-1.87-.64c-.48-.16-.8-.61-.8-1.12v-.47c0-.32-.12-.63-.34-.86l-.94-.99c-.51-.54-.8-1.26-.8-2v-.97C9 8.84 8.16 8 7.12 8zM18.5 8c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5-.22-.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s-.22.5-.5.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5h1c.28 0 .5.22.5.5s.22.5.5.5s.5-.22.5-.5s.22-.5.5-.5" clipRule="evenodd"></path></svg>
                            <span className="text-gray-600 ml-3">EmmissionX</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                    <Link href="/tech/openpems" className='relative group'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 32 32"><path fill="currentColor" d="m22.509 12.689l-6-3.55a.997.997 0 0 0-1.018.001l-6 3.55a.998.998 0 0 0-.491.86v6.9c0 .354.187.681.491.86l6 3.55a.989.989 0 0 0 1.018 0l6-3.55a.998.998 0 0 0 .491-.86v-6.9a1 1 0 0 0-.491-.861M21 19.88l-5 2.958l-5-2.958v-5.76l5-2.958l5 2.958z"></path><path fill="currentColor" d="M6 20.184V11.07l6.2-3.664l-1.017-1.722l-6.692 3.955A1 1 0 0 0 4 10.5v9.684A2.996 2.996 0 0 0 2 23c0 1.654 1.346 3 3 3s3-1.346 3-3a2.996 2.996 0 0 0-2-2.816M5 24a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2m22-4c-1.654 0-3 1.346-3 3c0 .353.072.687.185 1.002L16 28.838l-6.404-3.784l-1.017 1.722l6.912 4.084a.997.997 0 0 0 1.018.001l8.96-5.295c.45.269.97.434 1.531.434c1.654 0 3-1.346 3-3s-1.346-3-3-3m0 4a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2M16 7c.731 0 1.392-.273 1.913-.708L26 11.071V18h2v-7.5a1 1 0 0 0-.491-.861l-8.567-5.062C18.978 4.39 19 4.198 19 4c0-1.654-1.346-3-3-3s-3 1.346-3 3s1.346 3 3 3m0-4a1.001 1.001 0 1 1-1 1c0-.552.449-1 1-1"></path></svg>
                            <span className="text-gray-600 ml-3">OpenPEMS</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                    <Link href="/tech/decarb" className='relative group'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={2}><path d="m12 4l-1.148 1.913C9.95 7.417 9.5 8.169 9.5 9c0 .83.45 1.583 1.353 3.087l.72 1.198c.19.32.287.48.428.48c.142 0 .237-.16.429-.48l.719-1.198C14.05 10.583 14.5 9.831 14.5 9c0-.83-.45-1.583-1.353-3.087zm0 0V2m8.16 10.598l-2.23-.037c-1.754-.03-2.63-.045-3.35.37c-.72.416-1.146 1.183-1.997 2.717l-.678 1.221c-.181.326-.271.489-.2.611c.07.123.256.126.628.132l1.398.024c1.753.03 2.63.044 3.35-.372c.72-.415 1.145-1.182 1.997-2.715zm0 0l1.732-1"></path><path d="m3.84 12.598l2.23-.037c1.754-.03 2.63-.045 3.35.37c.72.416 1.146 1.183 1.997 2.717l.678 1.221c.181.326.271.489.2.611c-.07.123-.256.126-.628.132l-1.398.024c-1.753.03-2.63.044-3.35-.372c-.72-.415-1.145-1.182-1.996-2.715zm0 0l-1.732-1M12 15v7.5"></path></g></svg>
                            <span className="text-gray-600 ml-3">Decarb</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                </ul>

            </div>

            <div className='w-[2px] bg-gray-200' />

            {/* column 2 */}
            <div className="w-2/3">
                <h2 className="font-bold mb-4 flex justify-start">Heading 2</h2>

                <ul>
                    <Link href="/tech/emission_factor_hub" className='relative group'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M7.76 11.24c.104 0 .208.003.31.01a3.99 3.99 0 0 0 1.28 3.747c-.072.403-.11.819-.11 1.243a6.97 6.97 0 0 0 1.53 4.368a5.69 5.69 0 0 1-7.72-6.047a5.002 5.002 0 0 1 4.71-3.321m12.848 1.99a5.69 5.69 0 0 1-6.047 7.72a5.002 5.002 0 0 1-3.312-5.02a3.99 3.99 0 0 0 3.747-1.28c.404.072.82.11 1.244.11a6.97 6.97 0 0 0 4.368-1.53M12 10a2 2 0 1 1 0 4a2 2 0 0 1 0-4m3.31-7a5.69 5.69 0 0 1 5.641 6.44a5.002 5.002 0 0 1-5.021 3.31a3.99 3.99 0 0 0-1.28-3.747c.072-.403.11-.819.11-1.243a6.97 6.97 0 0 0-1.53-4.368A5.675 5.675 0 0 1 15.31 3M8.69 3c.254 0 .504.017.75.049a5.002 5.002 0 0 1 3.31 5.021a3.99 3.99 0 0 0-3.747 1.28a7.036 7.036 0 0 0-1.243-.11a6.97 6.97 0 0 0-4.368 1.53A5.69 5.69 0 0 1 8.69 3"></path></g></svg>
                            <span className="text-gray-600 ml-3">Emission Factor Hub</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                    <Link href="/tech/air_emission_factor_hub" className='relative group'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg"  className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M3.615 18q-.69 0-1.152-.462Q2 17.075 2 16.385v-8.77q0-.69.463-1.152Q2.925 6 3.615 6h16.77q.69 0 1.152.463q.463.462.463 1.152v8.77q0 .69-.462 1.152q-.463.463-1.153.463zM5.5 17h13V7h-13zm7.75-4.365q-.275 0-.455-.18t-.18-.455t.18-.455q.18-.18.455-.18t.455.18q.18.18.18.455t-.18.455q-.18.18-.455.18m-5 0q-.275 0-.455-.18T7.615 12t.18-.455q.18-.18.455-.18t.455.18q.18.18.18.455t-.18.455q-.18.18-.455.18m7.5 0q-.275 0-.455-.18t-.18-.455t.18-.455q.18-.18.455-.18t.455.18q.18.18.18.455t-.18.455q-.18.18-.455.18m-5 0q-.275 0-.455-.18t-.18-.455t.18-.455q.18-.18.455-.18t.455.18q.18.18.18.455t-.18.455q-.18.18-.455.18"></path></svg>
                            <span className="text-gray-600 ml-3">Air Emission Factor Hub</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                    <Link href="/tech/stream_enthalpy" className='relative group gap-2'>
                        <li className="flex items-center hover:bg-gray-200 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20"><path fill="currentColor" d="M2.643 6.357c1.747-1.5 3.127-2.686 6.872-.57c1.799 1.016 3.25 1.4 4.457 1.398c2.115 0 3.486-1.176 4.671-2.193a1.037 1.037 0 0 0 .122-1.439a.987.987 0 0 0-1.41-.125c-1.746 1.502-3.127 2.688-6.872.57c-4.948-2.793-7.266-.803-9.128.797a1.037 1.037 0 0 0-.121 1.439a.986.986 0 0 0 1.409.123m14.712 2.178c-1.746 1.5-3.127 2.688-6.872.57c-4.948-2.795-7.266-.804-9.128.795a1.037 1.037 0 0 0-.121 1.439a.986.986 0 0 0 1.409.125c1.747-1.501 3.127-2.687 6.872-.572c1.799 1.018 3.25 1.4 4.457 1.4c2.115 0 3.486-1.176 4.671-2.195a1.035 1.035 0 0 0 .122-1.438a.986.986 0 0 0-1.41-.124m0 5.106c-1.746 1.502-3.127 2.688-6.872.572c-4.948-2.795-7.266-.805-9.128.795a1.037 1.037 0 0 0-.121 1.439a.985.985 0 0 0 1.409.123c1.747-1.5 3.127-2.685 6.872-.57c1.799 1.016 3.25 1.4 4.457 1.4c2.115 0 3.486-1.178 4.671-2.195a1.037 1.037 0 0 0 .122-1.439a.988.988 0 0 0-1.41-.125"></path></svg>
                            <span className="text-gray-600 ml-3">Stream Enthalpy</span>
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

export default TechMenu