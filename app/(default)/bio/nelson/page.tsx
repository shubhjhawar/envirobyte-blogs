import React from 'react'
import { Nelson } from '@/public/images';
import Image from 'next/image'

const NelsonBio = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 flex max-lg:flex-col justify-center items-center gap-5 pt-32 pb-12 md:pt-40 md:pb-20'>
      {/* images */}
      <div className="w-full md:w-1/2 p-10" data-aos="fade-right" data-aos-delay="200">
          <Image src={Nelson} alt="Nelson" className='rounded-md' />
      </div>
      {/* text */}
      <div className='w-full md:w-1/2' data-aos="fade-left" data-aos-delay="200">
          <h2 className='h3 max-md:text-2xl mb-4'>Nelson Lee, P.Eng.</h2>
          <p className="text-md mb-2 text-gray-400">Nelson Lee has been working in climate change and sustainability for 16 years primarily as a third-party GHG verifier. He has conducted risk assessments for 30 years and worked with Tetra Tech for 12 years and specializes in organizational management related to planning and enhancing adaptive capacity to adapt to climate change.</p>
          <p className="text-md mb-2 text-gray-400">He serves as a subject matter expert and committee member for developing multiple ISO standards, including:</p>
          <ul className="text-md mb-2 text-gray-400 list-disc pl-6">
            <li>Working Group Expert for ISO 14064 part 1 (GHG Quantification and reporting); Mirror Committee member for ISO 14064 parts 2 and 3 – 2012 to 2018</li>
            <li>Mirror Committee member for ISO 14065 / ISO 17029 – 2018-2020</li>
            <li>Working Group Expert for ISO 14091 (Climate change adaptation – Risk assessments) – 2017-2020</li>
            <li>Mirror Committee member for ISO 14090, ISO 14080, ISO 14092 – 2019-2020</li>
            <li>Working Group Expert for ISO 14097 (Climate disclosure and risk assessment for financiers) – 2017-2020</li>
            <li>Working Group Expert for ISO 14068 (Carbon Neutrality) 2020</li>
          </ul>
          
      </div>
    </div>
  )
}

export default NelsonBio