import React from 'react'
import { Minxing } from '@/public/images';
import Image from 'next/image'

const MinxingBio = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 flex flex-col justify-center items-center gap-5 pt-32 pb-12 md:pt-40 md:pb-20'>
        <div className="w-full flex max-md:flex-col-reverse items-center justify-center">
          {/* text */}
          <div className='w-full md:w-2/3' data-aos="fade-right" data-aos-delay="200">
              <h2 className='h2 mb-4'>Minxing Si, P.Eng., Ph.D.</h2>
              <p className="text-lg mb-3 text-gray-400">Minxing Si boasts over 15 years of extensive experience in GHG verification/assurance, sustainability reporting, climate change mitigation, risk assessment, and climate adaptation across Canada, the US, Asia, and Europe.</p>
              <p className="text-lg mb-3 text-gray-400">Having successfully completed more than 500 GHG verification and/or ESG assurance projects. Minxing is a certified lead verifier under Environment Canada’s Clean Fuel Standard and California’s Low Carbon Fuel Standard. Minxing credited with developing the first approved Predictive Emissions Monitoring System (PEMS) for compliance reporting in Canada, specifically for Cenovus Energy in Alberta.</p>
              <p className="text-lg mb-3 text-gray-400">Furthermore, Minxing brought PEMS to EnviroByte, transforming it into a free and open-source tool known as OpenPEMS™.</p>
          </div>
          {/* images */}
          <div className="w-full md:w-1/3 p-10 flex justify-center" data-aos="fade-left" data-aos-delay="200">
              <Image src={Minxing} alt="Minxing" className='rounded-md h-[275px] w-[225px]' />
          </div>
        </div>

        <p data-aos="fade-right" data-aos-delay="200" className="text-lg mb-2 text-gray-400">OpenPEMS™ draws inspiration from OpenAI's ethos, aiming to promote accessibility and empowerment. Our vision is to democratize Artificial Intelligence (AI) and Machine Learning (ML) technologies, making them accessible to a wider industrial audience, thereby reducing costs associated with air emissions monitoring.</p>
    </div>
  )
}

export default MinxingBio