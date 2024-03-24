import Heading from '@/components/Heading';

export default function Lca() {
  return (
    <div className='flex flex-col w-full justify-center items-center pt-32 pb-12 md:pt-40 md:pb-20'>
      <Heading name='Life Cycle Assessment' description='one line desc - Every feature in Open PRO makes things easy to build, pleasant to create, and simple to manage.' />
      <div className='max-w-6xl px-4 flex flex-col gap-5'>
        <h2 className='h3 max-md:text-[20px] text-indigo-900 mb-4 capitalize underline' data-aos="fade-up" data-aos-delay="200">Environmental Product Declaration (EPD)</h2>
        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">An Environmental Product Declaration (EPD) is a thorough, single written report of a product's lifecycle story that offers details on a product's environmental impact, such as greenhouse gas (GHG) emissions. EPDs can be created based on applicable product category rules (PCRs) following the completion of a product life cycle assessment (LCA). The following three factors affect the dependability, transparency, and quality of Environmental Product Declarations:</p>
          <ul className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose list-decimal pl-6">
            <li>Product Category Rules (PCRs): According to the international standard for EPDs (ISO 14025), certified EPDs must be created using PCRs that satisfy particular requirements. The life cycle assessment (LCA) scope, the product category, and categories of potential impacts that need to be assessed and reported are all described in the PCRs.</li>
            <li>Life Cycle Assessment (LCA): The LCA is often carried out in compliance with international LCA standards ISO 14040 series. Each impact on the environment mentioned in the PCR must be at least partially addressed by the assessment.</li>
            <li>EPD Report: The results of this assessment serve as the foundation for the quality of the resultant EPD. It must include a description of the study's scope, the product, results, and any additional environmental details regarding the product that are required by ISO 14025 and specified in the PCR.</li>
          </ul>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">A skilled life cycle assessment (LCA) team at EnviroByte oversees each step of the EPD process and works with you to ensure a quick, effective LCA and precise EPD. The following services are provided by EnviroByte as a program operator:</p>
          <ul className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose list-disc pl-6">
            <li>Create an appropriate Product Category Rules (PCR) according to ISO 14025</li>
            <li>US EPA GHGRP</li>
            <li>Conduct GHG Life cycle assessments (LCA) according to ISO 14040 and 14044</li>
            <li>LCA Review</li>
            <li>Prepare Environmental Product Declarations (EPDs) report based on PCR and have the EPD verified by an independent 3rd party</li>
          </ul>
        </div>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">Please contact with us if you have any inquiries or want to know more about Environmental Product Declaration (EPD).</p>
      </div>
    </div> 
  )
}