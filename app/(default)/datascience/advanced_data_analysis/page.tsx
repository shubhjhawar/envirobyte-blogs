import Heading from '@/components/Heading';
import { ada } from "@/public/images";
import Image from "next/image"

export default function DataAnalysis() {
  return (
    <div className='flex flex-col w-full justify-center items-center pt-32 pb-12 md:pt-40 md:pb-20'>
      <Heading name='Advanced Data Analytics' description='one line desc - Every feature in Open PRO makes things easy to build, pleasant to create, and simple to manage.' />
      <div className='max-w-6xl px-4 flex flex-col gap-5'>
        <h2 className='h3 max-md:text-[20px] text-indigo-900 mb-4 capitalize underline' data-aos="fade-up" data-aos-delay="200">Fuel Consumption Analysis for Canadian In Situ Oil Sands Extraction</h2>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">Greenhouse gas (GHG) emissions from the oil and gas (O&G) sector account for approximately 10% of global anthropogenic GHG emissions, and emission mitigation has an important role in combating climate change. Alberta, is the world’s fourth largest O&G production region located in Canada. In the medium to long term, Canada’s oil sands has a critical role in meeting global oil demands. Canada faces great challenges in balancing the economic benefits with reductions in GHG emissions from oil sands extraction.</p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">A better understanding of fuel use and greenhouse gas (GHG) emissions resulting from Canadian oil sands (bitumen) extraction can help to meet the global carbon budget and design effective climate policies. Previously, no researchers have published actual fuel use data, analyzed drivers for the decline of emission intensities (EIs) from in situ oil sands extraction, and evaluated the effectiveness of the cap and trade system in Alberta that aims to control GHG emissions.</p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">In this project, we extracted actual operating data from a public database- Petrinex (Canada’s Petroleum Information Network), which contains more than 35 million records for 18 in situ oil sands extraction schemes. The operating data covered the period from 2015 to 2019. The data obtained related to fuel gas use, steam injection, solvent co-injection, oil production, flare, and vent volumes. We found that the weighted average of fuel use was 0.23 103m3/m3 undiluted bitumen between 2015 to 2019.The weighted averages of fuel use for the schemes using Steam Assisted Gravity Drainage (SAGD) and Cyclic Steam Stimulation (CSS) were 0.20 103m3 fuel/m3 of undiluted bitumen and 0.34 103m3 fuel /m3 of undiluted bitumen, respectively. The average EIs for SAGD ranged from 0.25 metric ton (t) CO2e/m3 to 0.98 t CO2e/m3, and the average EIs for CSS ranged from 0.61 t CO2e/m3 to 1.18 t CO2e/m3 . In addition, the project pointed out that production ramping up and maturity of reservoirs contributed to the decline in EIs.</p>
        <Image className='w-full' data-aos="fade-up" data-aos-delay="200" src={ada} alt="ada"/>
      </div>
    </div> 
  )
}