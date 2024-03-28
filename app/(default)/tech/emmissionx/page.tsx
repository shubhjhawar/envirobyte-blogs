import Heading from '@/components/Heading';
import { emissionx } from "@/public/images";
import Image from "next/image"
import Link from 'next/link';

export default function EmmissionX() {
  return (
    <div className='flex flex-col w-full justify-center items-center pt-32 pb-12 md:pt-40 md:pb-20'>
      <Heading name='EmissionX™' description='one line desc - Every feature in Open PRO makes things easy to build, pleasant to create, and simple to manage.' />
      <div className='max-w-6xl px-4 flex flex-col gap-5'>
        <h2 className='h3 max-md:text-[20px] text-indigo-900 mb-2 capitalize underline' data-aos="fade-up" data-aos-delay="200">Why We Do This</h2>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">On May 30, 2007, Steve Jobs and Bill Gates joined together for an interview at the D5 conference. Gates explained why and how Apple and Microsoft developed their products, he said:</p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">“Steve gave a speech once, which was one of my favorites where he talked about, in a certain sense, we build the products that we want to use ourselves.” <span><Link href="https://www.youtube.com/watch?v=wvhW8cp15tk" target="_blank" className='text-blue-500 hover:text-blue-800'>See the video</Link></span></p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">Our team has been performing GHG reporting and verifications for over 10 years, and in that time have become frustrated and left wondering about the software that was being used for regulatory reporting with the Alberta Specified Gas Emitter Regulation (SGER)/ Carbon Competitiveness Incentive Regulation (CCIR)/ Technology Innovation and Emissions Reduction (TIER), and other GHG reporting programs.</p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">The black box nature of some software presents challenges for reporters, verifiers, and auditors to do their jobs. This results in the reporting company investing greater amounts of manpower and resources to respond to clarifying questions. The “one quantification fits all” approach that is used by existing GHG reporting software does not consider the differences between jurisdictions, facilities, and industries.</p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">We designed EmissionX™ with easy verification and assurance in mind by integrating data science tools (e.g., Jupyter Lab) with CI/CD processes, offering the most flexibility, transparency, and customization. This not only leads to smoother verifications and audits, but also provides reporting companies with the freedom to do their own, in-house, analysis and dashboard reporting.</p>
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className='h4 mb-4'>EmissionX™ is programed for many different regulatory and voluntary reporting frameworks, including but not limited to:</h3>
          <ul className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose list-disc pl-6">
            <li>Alberta TIER, BC GHG Reporting Regulation, ECCC OBPS, SK OBPS, ON EPS</li>
            <li>ECCC GHGRP</li>
            <li>US EPA GHGRP</li>
            <li>ECCC NPRI</li>
            <li>ECCC MSAPR (Multi-Sector Air Pollutants Regulation)</li>
            <li>GHG Protocol</li>
            <p>more...</p>
          </ul>
        </div>
        <Image className='w-full' data-aos="fade-up" data-aos-delay="200" src={emissionx} alt="emissionx"/>
      </div>
    </div>
  )
}