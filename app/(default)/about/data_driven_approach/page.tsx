import Heading from '@/components/Heading'

export default function Data() {
  return (
    <div className='flex flex-col w-full justify-center items-center pt-32 pb-12 md:pt-40 md:pb-20'>
      <Heading name='data driver approach' description='one line desc - Every feature in Open PRO makes things easy to build, pleasant to create, and simple to manage.' />
      <div className='max-w-6xl px-4 flex flex-col gap-5'>
        <h2 className='h2 max-md:text-[20px] text-indigo-900 mb-4 capitalize underline' data-aos="fade-up" data-aos-delay="200">Data-Driven Sustainability Framework</h2>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">Data-driven sustainability is the process of making decisions that are centered on sustainability and are informed by the collecting, processing, and analysis of data. The data is then visualized to produce a greater, significant impact and more ethical business practices. Insights from sustainability data can create huge improvement while boosting revenue, whether it's reducing greenhouse gas emissions, improving supply chains, or reducing waste.</p>
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className='h4 mb-4'>The three major stages to follow when using a data-driven sustainability strategy are:</h3>
          <ul className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose list-disc pl-6">
            <li>Establish industry-specific sustainability objectives: It is essential to have an industry-led strategy.</li>
            <li>Create a framework using artificial intelligence and machine learning so that businesses may use data modelling and forecasting methods to examine how current processes relate to sustainability objectives.</li>
            <li>Combine human and machine intelligence: machine learning takes over many data processing duties, revealing insights quickly so that teams can make sure data-driven decisions.</li>
          </ul>
        </div>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">A growing amount of pressure is being placed on organizations to manage their sustainability performance as a result of reliable data gathering, reporting, and analytics. In order to empower industries to make strategic, real-time decisions to meet sustainability goals (i.e Emission monitoring, GHG reporting and reduction etc), we apply data-driven sustainability frameworks to emission monitoring, reporting, and reduction through automatic data gathering, processing, and analytics.</p>
      </div>
    </div> 
  )
}