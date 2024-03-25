import React from 'react'
import { Minxing } from '@/public/images';
import Image from 'next/image'

const MinxingBio = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 flex max-lg:flex-col justify-center items-center gap-5 pt-32 pb-12 md:pt-40 md:pb-20'>
        {/* images */}
        <div className="w-full md:w-1/2 p-10" data-aos="fade-right" data-aos-delay="200">
            <Image src={Minxing} alt="Minxing" className='rounded-md' />
        </div>
        {/* text */}
        <div className='w-full md:w-1/2' data-aos="fade-left" data-aos-delay="200">
            <h2 className='h2 mb-4'>Minxing Si, P.Eng., Ph.D.</h2>
            <p className="text-md mb-2 text-gray-400">Minxing Si boasts over 15 years of extensive experience in GHG verification/assurance, sustainability reporting, climate change mitigation, risk assessment, and climate adaptation across Canada, the US, Asia, and Europe.</p>
            <p className="text-md mb-2 text-gray-400">Having successfully completed more than 500 GHG verification and/or ESG assurance projects. Minxing is a certified lead verifier under Environment Canada’s Clean Fuel Standard and California’s Low Carbon Fuel Standard. Minxing credited with developing the first approved Predictive Emissions Monitoring System (PEMS) for compliance reporting in Canada, specifically for Cenovus Energy in Alberta.</p>
            <p className="text-md mb-2 text-gray-400">Furthermore, Minxing brought PEMS to EnviroByte, transforming it into a free and open-source tool known as OpenPEMS™.</p>
            <p className="text-md mb-2 text-gray-400">OpenPEMS™ draws inspiration from OpenAI's ethos, aiming to promote accessibility and empowerment. Our vision is to democratize Artificial Intelligence (AI) and Machine Learning (ML) technologies, making them accessible to a wider industrial audience, thereby reducing costs associated with air emissions monitoring.</p>
        </div>
    </div>
  )
}

export default MinxingBio