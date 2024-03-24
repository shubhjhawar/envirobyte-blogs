import Heading from '@/components/Heading';
import { iot } from "@/public/images";
import Image from "next/image"

export default function Iot() {
  return (
    <div className='flex flex-col w-full justify-center items-center pt-32 pb-12 md:pt-40 md:pb-20'>
      <Heading name='IoT Air Quality Monitoring' description='one line desc - Every feature in Open PRO makes things easy to build, pleasant to create, and simple to manage.' />
      <div className='max-w-6xl px-4 flex flex-col gap-5'>
        <h2 className='h3 max-md:text-[20px] text-indigo-900 mb-4 capitalize underline' data-aos="fade-up" data-aos-delay="200">Machine learning approach to calibration low-cost IoT sensors</h2>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">Particle sensing technology has shown great potential for monitoring particulate matter (PM) with very few temporal and spatial restrictions because of its low-cost, compact size, and easy operation. However, the performance of low-cost sensors for PM monitoring in ambient conditions has been questionable.</p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">We calibrated a low-cost sensor in ambient conditions using machine-learning methods. The sensor is Plantower PMS 5003, and it measured outdoor fine particle (PM2.5) concentrations (µg m-3), air temperature (°C), and RH (%) every six seconds. The sensor was internet enabled and transferred real-time data to a cloud storage. The sensor was installed at Calgary Varsity air monitoring and the reading was compared with a government approved PM monitoring equipment - named Synchronized Hybrid Ambient Real-time Particulate (SHARP)</p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">Field evaluation showed that the Pearson r between the low-cost sensor and the SHARP instrument was 0.78. Fligner and Killeen (F-K) test indicated a statistically significant difference between the variances of the PM2.5 values by the low-cost sensor and by the SHARP instrument. Large overestimations by the low-cost sensor before calibration were observed in the field and were believed to be caused by the variation of ambient relative humidity. The root mean square error (RMSE) was 9.93 when comparing the low-cost sensor with the SHARP instrument. The calibration by the neural network had the smallest RMSE of 3.91. After calibrations, the F-K test showed that the variances of the PM2.5 values by the neural network and the gradient boosting and by the reference method were not statistically significantly different.</p>
        <Image className='w-full' data-aos="fade-up" data-aos-delay="200" src={iot} alt="iot"/>
      </div>
    </div> 
  )
}