import React from 'react'
import { Brian } from '@/public/images';
import Image from 'next/image'

const BrianBio = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 flex flex-col justify-center items-center gap-5 pt-32 pb-12 md:pt-40 md:pb-20'>
        <div className="w-full flex max-md:flex-col-reverse items-center justify-center">
          {/* text */}
          <div className='w-full md:w-2/3' data-aos="fade-right" data-aos-delay="200">
              <h2 className='h2 mb-4'>Brain Sloof, P.Eng.</h2>
              <p className="text-lg mb-3 text-gray-400">Brian Sloof has over 40 years of experience in the oil and gas and energy sectors. Since 2004 he has been involved with the quantification, reporting, and/or verification of GHG’s and serialization of carbon credits.</p>
              <p className="text-lg mb-3 text-gray-400">Previous experience included reporting for Corporate Social Responsibility (CSR), Dow Jones Sustainability Indices (DJSI), Carbon Disclosure Project (CDP) and Governance Reporting.</p>
              <p className="text-lg mb-3 text-gray-400">Brian supported TC Energy’s corporate SAP implementation - Air Emissions Module integration and regulatory compliance for air emissions reporting in both GHG’s and pollutants at the federal, provincial, and state levels.</p>
          </div>
          {/* images */}
          <div className="w-full md:w-1/3 p-10 flex justify-center" data-aos="fade-left" data-aos-delay="200">
              <Image src={Brian} alt="Brian" className='rounded-md h-[275px] w-[225px]' />
          </div>
        </div>

        <p data-aos="fade-right" data-aos-delay="200" className="text-lg mb-2 text-gray-400">Brian is a Professional Engineer registered with the Association of Professional Engineers and Geoscientists of Alberta. To date, Brian has participated in hundreds of verifications as a verifier, lead verifier, as a per reviewer or as an auditor, in BC, Alberta and Saskatchewan, for such industries as oil and gas production, oil sands, mining, pulp and paper, cement, and power generation, to name a few.</p>
    </div>
  )
}

export default BrianBio