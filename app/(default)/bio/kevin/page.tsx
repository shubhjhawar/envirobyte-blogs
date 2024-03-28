import React from 'react';
import { Kevin } from '@/public/images';
import Image from 'next/image'

const KevinBio = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 flex flex-col justify-center items-center gap-5 pt-32 pb-12 md:pt-40 md:pb-20'>
        <div className="w-full flex max-md:flex-col-reverse items-center justify-center">
          {/* text */}
          <div className='w-full md:w-2/3' data-aos="fade-right" data-aos-delay="200">
              <h2 className='h2 mb-4'>Kevin Poirier, P.Eng.</h2>
              <p className="text-lg mb-3 text-gray-400">Kevin Poirier is a Certified Sustainability Professional (CSR-P) and Professional Engineer licensed in the Province of Ontario. Kevin’s expertise focuses on air quality engineering, GHG emissions quantification/verification, sustainability strategy, and climate change adaptation and mitigation planning.</p>
              <p className="text-lg mb-3 text-gray-400">He has supported and led teams in large and complex greenhouse gas emissions assessments, air quality assessments and Environmental Approvals (Federal and Provincial) for clients in the mining, steel, pharmaceutical, chemical, oil/gas, electricity generation, and food/beverage sectors. His atmospheric services work has been for clients across North America, Central America, and in the Middle East.</p>
              <p className="text-lg mb-3 text-gray-400">He has developed and led training sessions and workshops on topics such as climate change, sustainability planning, and environmental compliance.</p>
          </div>
          {/* images */}
          <div className="w-full md:w-1/3 p-10 flex justify-center" data-aos="fade-left" data-aos-delay="200">
              <Image src={Kevin} alt="Kevin" className='rounded-md h-[275px] w-[225px]' />
          </div>
        </div>

        <p data-aos="fade-right" data-aos-delay="200" className="text-lg mb-2 text-gray-400">Kevin has also been retained to deliver climate change adaptation and mitigation training to planning and engineering departments in wastewater and drinking water for clients in Belize, Waterloo, Oshawa, and at the Mohawks of the Bay of Quinte.</p>
    </div>
  )
}

export default KevinBio