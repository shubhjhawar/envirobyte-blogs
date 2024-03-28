import Heading from '@/components/Heading';
import { pem } from "@/public/images";
import Image from "next/image"

export default function OpenPems() {
  return (
    <div className='flex flex-col w-full justify-center items-center pt-32 pb-12 md:pt-40 md:pb-20'>
      <Heading name='Predictive Emissions Monitoring' description='one line desc - Every feature in Open PRO makes things easy to build, pleasant to create, and simple to manage.' />
      <div className='max-w-6xl px-4 flex flex-col gap-5'>
        <h2 className='h3 max-md:text-[20px] text-indigo-900 mb-4 capitalize underline' data-aos="fade-up" data-aos-delay="200">OpenPEMS™</h2>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">The nitrogen oxides (NOx) has significant adverse environmental and health effects, contributing to acid rain and smog and forming fine particles (PM) and ozone in the ambient air (tropospheric ozone or ground-level ozone). Industrial facilities with large stationary combustion sources are typically required to be equipped with one or more continuous emissions monitoring systems (CEMSs) to monitor NOx emissions for compliance with regulatory emission limits. Due to the high CEMSs operating costs and frequent maintenance, there is an alternative for monitoring NOx, a predictive emissions monitoring system (PEMS).</p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">OpenPEMS™ is a free and open source predictive emissions monitoring system that trains models to predictive air emissions, such as NOx and SO2, which are typically monitored by CEMSs. OpenPEMS™ is inspired by OpenAI's ethos of accessibility and empowerment. Our vision is to make the Artificial Intelligent (AI) and Machine Learning (ML) technologies accessible to a wider industrial audience, reducing costs associated with air emissions monitoring.</p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">OpenPEMS™ was licensed by KeeWee Solutions Inc (KeeWee). Dr. Minxing Si of KeeWee was the first to introduce open-source machine learning libraries for PEMS development and conducted extensive research on machine learning for environmental monitoring. The PEMS developed by Dr. Si was the first PEMS that was approved by Alberta Environment and Alberta Energy Regulator.</p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">PEMS is used for environmental monitoring worldwide, the major regulatory frameworks for PEMS were developed by the United States Environmental Protection Agency (US EPA) and the European Union. Many countries outside of the US and Europe have adopted these standards, especially the US EPA’s PEMS certification standards. The main US federal regulation that accepts PEMS as an emission monitoring and reporting tool is Title 40 of the Code of Federal Regulations (CFR 40), Part 60, 61, 63, and 75.</p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">In Canada, PEMS is an accepted alternative monitoring method to CEMS at federal and provincial levels. For example, Alberta 2021 CEMS code outlines the requirements of PEMS.</p>
        <Image className='w-full' data-aos="fade-up" data-aos-delay="200" src={pem} alt="pem"/>
      </div>
    </div> 
  )
}