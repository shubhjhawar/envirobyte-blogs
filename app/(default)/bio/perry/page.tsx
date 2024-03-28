import React from 'react'
import { Perry } from '@/public/images';
import Image from 'next/image'

const PerryBio = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 flex flex-col justify-center items-center gap-5 pt-32 pb-12 md:pt-40 md:pb-20'>
        <div className="w-full flex max-md:flex-col-reverse items-center justify-center">
          {/* text */}
          <div className='w-full md:w-2/3' data-aos="fade-right" data-aos-delay="200">
              <h2 className='h2 mb-4'>Perry E. Toms</h2>
              <p className="text-lg mb-3 text-gray-400">Mr. Perry Toms brings his decades of experience in commercializing cleantech and renewable project development to a wide number of potential investors, financiers, clients and partners.</p>
              <p className="text-lg mb-3 text-gray-400">Perry has held key managerial and executive positions within the conventional, renewable energy, and advanced biofuels industries, as well as direct experience in waste and water infrastructure industries including: the AIM listed Novera Energy Ltd. (Executive Director, Business Development); former ASX listed ABG Biodiesel (EVP); and HTL biofuel technology developer Licella (President).</p>
          </div>
          {/* images */}
          <div className="w-full md:w-1/3 p-10 flex justify-center" data-aos="fade-left" data-aos-delay="200">
              <Image src={Perry} alt="Perry" className='rounded-md h-[275px] w-[225px]' />
          </div>
        </div>

        <p data-aos="fade-right" data-aos-delay="200" className="text-lg mb-3 text-gray-400">In 2005 he led the North American operations for an Australian based bio-diesel technology and project development company that eventually lead him to the 2011 creation of Steeper Energy ApS (DK) to exploit Hydrothermal Liquefaction (HTL) for the conversion of lignocellulosic biomass and low ranked coals to advanced low-carbon transport fuels and fine chemicals.</p>
        <p data-aos="fade-right" data-aos-delay="200" className="text-lg mb-2 text-gray-400">Under his leadership, Steeper Energy formed a joint venture with Silva Green Fuel to construct a EUR 50.6 M (DKK 377M) industrial scale demonstration plant in 2017 and received $5 millions funding from Emissions Reduction Alberta in 2021.</p>
    </div>
    // <div className='max-w-6xl mx-auto px-4 flex max-lg:flex-col justify-center items-center gap-5 pt-32 pb-12 md:pt-40 md:pb-20'>
    //     {/* images */}
    //     <div className="w-full md:w-1/2 p-10" data-aos="fade-right" data-aos-delay="200">
    //         <Image src={Perry} alt="Perry" className='rounded-md' />
    //     </div>
    //     {/* text */}
    //     <div className='w-full md:w-1/2' data-aos="fade-left" data-aos-delay="200">
    //         <h2 className='h2 mb-4'>Perry E. Toms</h2>
    //         <p className="text-md mb-2 text-gray-400">Mr. Perry Toms brings his decades of experience in commercializing cleantech and renewable project development to a wide number of potential investors, financiers, clients and partners.</p>
    //         <p className="text-md mb-2 text-gray-400">Perry has held key managerial and executive positions within the conventional, renewable energy, and advanced biofuels industries, as well as direct experience in waste and water infrastructure industries including: the AIM listed Novera Energy Ltd. (Executive Director, Business Development); former ASX listed ABG Biodiesel (EVP); and HTL biofuel technology developer Licella (President).</p>
    //         <p className="text-md mb-2 text-gray-400">In 2005 he led the North American operations for an Australian based bio-diesel technology and project development company that eventually lead him to the 2011 creation of Steeper Energy ApS (DK) to exploit Hydrothermal Liquefaction (HTL) for the conversion of lignocellulosic biomass and low ranked coals to advanced low-carbon transport fuels and fine chemicals.</p>
    //         <p className="text-md mb-2 text-gray-400">Under his leadership, Steeper Energy formed a joint venture with Silva Green Fuel to construct a EUR 50.6 M (DKK 377M) industrial scale demonstration plant in 2017 and received $5 millions funding from Emissions Reduction Alberta in 2021.</p>
    //     </div>
    // </div>
  )
}

export default PerryBio