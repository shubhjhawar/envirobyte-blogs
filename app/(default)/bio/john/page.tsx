import React from 'react'
import { John } from '@/public/images';
import Image from 'next/image'

const JohnBio = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 flex flex-col justify-center items-center gap-5 pt-32 pb-12 md:pt-40 md:pb-20'>
        <div className="w-full flex max-md:flex-col-reverse items-center justify-center">
          {/* text */}
          <div className='w-full md:w-2/3' data-aos="fade-right" data-aos-delay="200">
              <h2 className='h2 mb-4'>John Parr, P. Eng. ( Retired )</h2>
              <p className="text-lg mb-3 text-gray-400">Mr. John Parr is CFO and Co-Founder of GolfADay Ltd, which is a platform to service a niche market in the North American golf industry. Prior to his own startup, he held various executive roles over his 20 year career at Canadian Natural Resources Limited, including VP, Conventional Facilities & Pipelines, VP, Thermal Projects & Facilities, and VP, Thermal Production.</p>
              <p className="text-lg mb-3 text-gray-400">John has had experience with all resource types from conventional oil and gas to unconventional plays to in situ oil sands and oil sands mining. He was involved in all phases of development from initial resource delineation, economic evaluation of plays, engineering, procurement, drilling, completions, facilities construction, start up and long-term daily operations and maintenance. The latter part of his career focused on successful project execution involving large interdisciplinary teams developing multi-billion-dollar oil sands projects.</p>
              <p className="text-lg mb-3 text-gray-400"></p>
          </div>
          {/* images */}
          <div className="w-full md:w-1/3 p-10 flex justify-center" data-aos="fade-left" data-aos-delay="200">
              <Image src={John} alt="John" className='rounded-md h-[275px] w-[225px]' />
          </div>
        </div>

        <p data-aos="fade-right" data-aos-delay="200" className="text-lg mb-2 text-gray-400">Throughout his career he focused on operational excellence and led the development of enterprise scale applications to manage many facets of the complex data management problems faced by large oil and gas companies.</p>
    </div>
  )
}

export default JohnBio