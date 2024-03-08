'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

import TechMenu from '../navMenus/techMenu'
import AboutMenu from '../navMenus/aboutMenu'
import SustainabilityMenu from '../navMenus/sustainabilityMenu';
import UserLogin from '../userLogin'

const navbarIcons = {
  home: (<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 32 32"><path fill="currentColor" d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z"></path></svg>),
  about : (<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg>),
  sustainability: (<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 32 32"><path fill="currentColor" d="M21.57 27.75A12.885 12.885 0 0 1 16 29C8.832 29 3 23.168 3 16c0-3.075 1.057-5.979 3-8.308V10h2V4H2v2h2.842A14.861 14.861 0 0 0 1 16c0 8.271 6.729 15 15 15a14.87 14.87 0 0 0 6.43-1.444z"></path><path fill="currentColor" d="M21 9c-3.16 0-5.751 2.457-5.978 5.56A5.971 5.971 0 0 0 11 13H7v4c0 3.309 2.692 6 6 6h2v4h2v-8h2c3.308 0 6-2.691 6-6V9zm-8 12c-2.206 0-4-1.794-4-4v-2h2c2.206 0 4 1.794 4 4v.586l-2.293-2.293l-1.414 1.414L13.586 21zm10-8c0 2.206-1.794 4-4 4h-.586l2.293-2.293l-1.414-1.414L17 15.586V15c0-2.206 1.794-4 4-4h2z"></path><path fill="currentColor" d="M31 16c0-8.271-6.729-15-15-15a14.87 14.87 0 0 0-6.43 1.444l.86 1.806A12.885 12.885 0 0 1 16 3c7.168 0 13 5.832 13 13c0 3.075-1.057 5.979-3 8.308V22h-2v6h6v-2h-2.842A14.861 14.861 0 0 0 31 16"></path></svg>),
  tutorial: (<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M20 17a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.46c.35.61.54 1.3.54 2h10v11h-9v2m4-10v2H9v13H7v-6H5v6H3v-8H1.5V9a2 2 0 0 1 2-2zM8 4a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2"></path></svg>),
  technology: (<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 19a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M10 5l2-2m-4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m.5 6l8-8M5.5 21a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m13-13a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M12 21l2-2"></path></svg>)
}

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:grow mt-2">

            {/* Desktop menu links */}
            <ul className="flex grow justify-end items-center gap-6 lg:w-2/3">
              <li className='flex flex-col items-center'>
                <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 flex flex-col items-center transition duration-150 ease-in-out">
                  {navbarIcons.home}
                  <span>Home</span>
                </Link>
              </li>

              <Dropdown title="About" icon={navbarIcons.about}>
                <AboutMenu />
                
              </Dropdown>

              <Dropdown title="Sustainability" icon={navbarIcons.sustainability}>
                <SustainabilityMenu />
              </Dropdown>

              <li className='flex flex-col items-center'>
                <Link href="/tutorials" className="text-gray-600 hover:text-gray-900 px-3 py-2 flex flex-col items-center transition duration-150 ease-in-out">
                  {navbarIcons.tutorial}
                  <span>Tutorial</span>
                </Link>
              </li>

              <Dropdown title="Technology" icon={navbarIcons.technology}>
                <TechMenu />
              </Dropdown>

              
              
              {/* <li>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 flex items-center transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 flex items-center transition duration-150 ease-in-out">About us</Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-600 hover:text-gray-900 px-3 py-2 flex items-center transition duration-150 ease-in-out">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 px-3 py-2 flex items-center transition duration-150 ease-in-out">Blog</Link>
              </li> */}
              {/* 1st level: hover */}
                {/* 2nd level: hover */}
              {/* <Dropdown title="Resources">
                <li>
                  <Link href="/documentation" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Documentation</Link>
                </li>
                <li>
                  <Link href="/support" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Support center</Link>
                </li>
                <li>
                  <Link href="/404" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">404</Link>
                </li>
              </Dropdown> */}
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center lg:w-1/3">
              <li>
                <UserLogin />
              </li>
              <li className="flex flex-col justify-center items-center">
                <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Book a Demo</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li>
            </ul>

          </nav>
              
          <div>
            <MobileMenu />
          </div>

        </div>
      </div>
    </header>
  )
}
