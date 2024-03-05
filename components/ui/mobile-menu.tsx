'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { FaChevronDown } from "react-icons/fa";
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const [appDropDown, setAppDropDown] = useState<boolean>(false)
  const [aboutDropDown, setAboutDropDown] = useState<boolean>(false)
  const [sustainabilityDropDown, setSustainabilityDropDown] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  useEffect(() => {
    setAppDropDown(false);
    setSustainabilityDropDown(false);
    setAboutDropDown(false);
  }, [mobileNavOpen])
  

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" onClick={() => setMobileNavOpen(false)}>Home</Link>
            </li>

            <li>
              <span className="flex items-center group text-gray-600 hover:text-gray-900" onClick={() => setAboutDropDown(prev => !prev)}>
                <span className="px-3 lg:px-5 py-2 cursor-pointer">About</span>
                <FaChevronDown />
              </span>
              <Transition
                show={aboutDropDown}
                as="nav"
                id="mobile-nav"
                className="bg-gray-100 rounded-md"
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                  <ul className="pl-4">
                    <li>
                      <Link href="/about/team" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Team</Link>
                    </li>
                    <li>
                      <Link href="/about/data_driven_approach" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Data Driven Approach</Link>
                    </li>
                    <li>
                      <Link href="/about/contact" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Contact</Link>
                    </li>
                  </ul>
                </Transition>
            </li>

            <li>
              <span className="flex items-center group text-gray-600 hover:text-gray-900" onClick={() => setSustainabilityDropDown(prev => !prev)}>
                <span className="px-3 lg:px-5 py-2 cursor-pointer">Sustainability</span>
                <FaChevronDown />
              </span>
              <Transition
                show={sustainabilityDropDown}
                as="nav"
                id="mobile-nav"
                className="bg-gray-100 rounded-md"
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                  <ul className="pl-4">
                    <li>
                      <Link href="/sustainability/emmission" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Emission</Link>
                    </li>
                    <li>
                      <Link href="/sustainability/lca" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>LCA</Link>
                    </li>
                    <li>
                      <Link href="/sustainability/climate" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Climate Change</Link>
                    </li>
                    <li>
                      <Link href="/datascience/advanced_data_analysis" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Advanced Data Analytics</Link>
                    </li>
                    <li>
                      <Link href="/datascience/iot" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>IOT</Link>
                    </li>
                    <li>
                      <Link href="/datascience/openpms" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>
                        <span>OpenPMS</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.8 8.44H6.87V16H4.89V8.44H2V7h7.8zM13.5 7l2.46 6.5L18.41 7H21v9h-2v-2.5l.22-4.26L16.63 16h-1.35L12.7 9.25l.2 4.25V16h-1.97V7z"/></svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="/datascience/predictive_analysis" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Predictive Analysis</Link>
                    </li>
                  </ul>
                </Transition>
            </li>

            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" onClick={() => setMobileNavOpen(false)}>Tutorial</Link>
            </li>

            <li>
              <span className="flex items-center group text-gray-600 hover:text-gray-900" onClick={() => setAppDropDown(prev => !prev)}>
                <span className="px-3 lg:px-5 py-2 cursor-pointer">Technology</span>
                <FaChevronDown />
              </span>
              <Transition
                show={appDropDown}
                as="nav"
                id="mobile-nav"
                className="bg-gray-100 rounded-md"
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                  <ul className="pl-4">
                    <li>
                      <Link href="/tech/emmissionx" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>EmissionX</Link>
                    </li>
                    <li>
                      <Link href="/tech/openpems" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>OpenPEMS</Link>
                    </li>
                    <li>
                      <Link href="/tech/decarb" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Decarb</Link>
                    </li>
                    <li>
                      <Link href="/tech/emission_factor_hub" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Emission Factor Hub</Link>
                    </li>
                    <li>
                      <Link href="/tech/air_emission_factor_hub" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Air Emission Factor Hub</Link>
                    </li>
                    <li>
                      <Link href="/tech/stream_enthalpy" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Steam Enthalpy</Link>
                    </li>
                  </ul>
                </Transition>
            </li>
            <li>


              <Link href="/signin" className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>Login / Register</Link>
            </li>
            <li>
              <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2" onClick={() => setMobileNavOpen(false)}>
                <span>Book a Demo</span>
                <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill="#999" fillRule="nonzero" />
                </svg>
              </Link>
            </li>
          </ul>          
        </Transition>
      </div>
    </div>
  )
}
