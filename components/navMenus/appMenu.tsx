'use client'

import Link from 'next/link'
import Image from 'next/image';
import logo from '../../public/images/about-logo.png';

const AppMenu = () => {
  return (
    <div className="w-[500px]">
        {/* white block */}
        <div className="flex justify-between gap-5 p-4">
            {/* column 1 */}
            <div className="w-1/3">
                <h2 className="font-bold mb-4 flex justify-start">Heading 1</h2>

                <ul className='flex flex-col justify-center'>
                    <Link href="/emmissionx" className='relative group'>
                        <li className="flex items-center hover:bg-gray-100 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <Image src={logo} alt="logo" className="w-5 h-5" />
                            <span className="text-gray-600 ml-3">EmmissionX</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                    <Link href="/openpems" className='relative group'>
                        <li className="flex items-center hover:bg-gray-100 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <Image src={logo} alt="logo" className="w-5 h-5" />
                            <span className="text-gray-600 ml-3">OpenPEMS</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                    <Link href="/decarb" className='relative group'>
                        <li className="flex items-center hover:bg-gray-100 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <Image src={logo} alt="logo" className="w-5 h-5" />
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
                    <Link href="/emission_factor_hub" className='relative group'>
                        <li className="flex items-center hover:bg-gray-100 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <Image src={logo} alt="logo" className="w-5 h-5" />
                            <span className="text-gray-600 ml-3">Emission Factor Hub</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                    <Link href="/air_emission_factor_hub" className='relative group'>
                        <li className="flex items-center hover:bg-gray-100 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <Image src={logo} alt="logo" className="w-5 h-5" />
                            <span className="text-gray-600 ml-3">Air Emission Factor Hub</span>
                            <span className="absolute inset-x-0 w-0 bottom-0 h-0.5 bg-black transition-width duration-500 ease-in-out group-hover:w-full"></span>
                        </li>
                    </Link>
                    <Link href="/stream_enthalpy" className='relative group gap-2'>
                        <li className="flex items-center hover:bg-gray-100 px-1 lg:pr-5 py-2 transition duration-150 ease-in-out">
                            <Image src={logo} alt="logo" className="w-5 h-5" />
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

export default AppMenu