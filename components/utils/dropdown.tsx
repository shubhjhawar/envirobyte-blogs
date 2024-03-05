'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'

type DropdownProps = {
  children: React.ReactNode
  title: string,
  icon: React.ReactNode,
}

export default function Dropdown({
  children,
  title,
  icon
}: DropdownProps) {

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)

  return (
    <li
      className="relative flex flex-col items-center text-gray-600 hover:text-gray-900"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      onFocus={() => setDropdownOpen(true)}
      onBlur={() => setDropdownOpen(false)}
    >
      {icon}
      <a
        className="px-3 flex items-center transition duration-150 ease-in-out"
        href="#0"
        aria-expanded={dropdownOpen}
        onClick={(e) => e.preventDefault()}
      >
        {title}
        <svg className="w-3 h-3 fill-current text-gray-500 cursor-pointer ml-1 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
        </svg>
      </a>
      <Transition
        show={dropdownOpen}
        as="ul"
        className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 bg-white pt-2 ml-4 mt-2 rounded-md shadow-lg border-[1px] border-gray-300"
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {children}
        <div className="absolute top-0 -translate-y-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-b-[20px] border-b-gray-200 border-r-[15px] border-r-transparent"></div>
        
      </Transition>
    </li>
  )
}
