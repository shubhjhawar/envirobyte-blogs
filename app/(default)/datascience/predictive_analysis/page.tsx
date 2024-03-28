import Heading from '@/components/Heading';
import { pma } from "@/public/images";
import Image from "next/image"

export default function PredictiveAnalysis() {
  return (
    <div className='flex flex-col w-full justify-center items-center pt-32 pb-12 md:pt-40 md:pb-20'>
      <Heading name='Predictive Analytics' description='one line desc - Every feature in Open PRO makes things easy to build, pleasant to create, and simple to manage.' />
      <div className='max-w-6xl px-4 flex flex-col gap-5'>
        <h2 className='h3 max-md:text-[20px] text-indigo-900 mb-4 capitalize underline' data-aos="fade-up" data-aos-delay="200">Unsupervised machine learning on Canadian oil sands operations</h2>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">Canada’s in situ oil sands can help meet the global oil demand. Because of the energy-intensive extraction processes, in situ oil sands operations also play a critical role in meeting the global carbon budget. The steam oil ratio (SOR) is an indicator used to measure energy efficiency and assess greenhouse gas (GHG) emissions in the in situ oil sands industry. A low SOR indicates an extraction process that is more energy efficient and less carbon intensive.</p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">We can help in situ oil sands industry to measure energy efficiency and GHG emission. Our team understand the data-driven approaches are critical to the Canadian oil and gas data warehouse or to any oil and gas data warehouse. We use our machine learning knowledge to discover the steam consumption pattern with unsupervised machine learning algorithms for in situ oil sand operations to reduce GHG emission from the extraction process.</p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">For example, we applied machine learning methods for data-driven discovery to a public database, Petrinex, containing operating data from 2015 to 2019 extracted from over 35 million records for 20 in situ oil sands extraction operations. Two unsupervised machine learning methods, including clustering and association rules, showed that the cyclic steam stimulation (CSS) recovery method was less efficient than the steam assisted gravity drainage (SAGD) recovery method. Chi-square tests showed a statistically significant association between the CSS recovery method and high SOR (p <span>{'<'}</span> 0.005). Two association rules suggested that the occurrence of non-condensable gas (NCG) co-injection produced a low SOR. Chi-square tests on the two rules identified a statistically significant relationship between gas co-injection and low SOR (p <span>{'<'}</span> 0.005).</p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">We also discovered that on average, between 2015 and 2019, in situ oil sands extractions produced 21 m3 of solution gas/1 m3 of bitumen, with a median of 14 m3/m3. The Peace River region only had one scheme: CNULPR. The arithmetic mean of the solution gas oil ratio (SGOR) for CNULPR was 81 m3/m3. The arithmetic mean of the SGOR for the Cold Lake region was 36 m3/m3, and for the Athabasca region, it was 11 m3/m3.</p>
        <Image className='w-full' data-aos="fade-up" data-aos-delay="200" src={pma} alt="pma"/>
      </div>
    </div> 
  )
}