import Heading from '@/components/Heading';

export default function Climate() {
  return (
    <div className='flex flex-col w-full justify-center items-center pt-32 pb-12 md:pt-40 md:pb-20'>
      <Heading name='Climate Change' description='one line desc - Every feature in Open PRO makes things easy to build, pleasant to create, and simple to manage.' />
      <div className='max-w-6xl px-4 flex flex-col gap-5'>
        <h2 className='h3 max-md:text-[20px] text-indigo-900 mb-4 capitalize underline' data-aos="fade-up" data-aos-delay="200">Climate Change Adaptation</h2>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">Adaptation involves changing human and natural systems to respond to the future impacts of climate change. In other words, adaptation is an attempt to address the effects of a problem.</p>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">We begin by raising awareness of the need for climate adaptation. Preliminary climate change vulnerability or risk assessments are the first step for your organization. We will then discuss your organization and its context, which will lead to setting achievable goals that work for both your business and the environment together and can be maintained. In addition to developing climate change adaptation plans for your organizations, emergency preparedness and response plans can be enhanced to address anticipated climate change impacts. Also, we offer effective and detailed training on these actions for a smooth transition to a more climate-conscious business.</p>
        <div className='max-w-6xl px-4 flex flex-col gap-5'>
          <h2 className='h3 max-md:text-[20px] text-indigo-900 mb-4 capitalize underline' data-aos="fade-up" data-aos-delay="200">Climate Change Mitigation</h2>
          <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">Mitigation strategy is one that aim to reduce greenhouse gas emissions that contribute to climate change. In other words, mitigation helps to address the cause of the problem.</p>
          <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">Our climate change mitigation services help clients by working on emissions reduction opportunities. We assist clients in converting well-thought-out solutions into practical implementation. We are providing GHG quantification and reporting on behalf of clients, according to state-of-the-art, jurisdictional, and other requirements, such as ISO standards, government programmes such as the GHG Mitigation Assessment process that adheres to the Climate Lens Assessment Guidelines that Infrastructure Canada developed in 2019 and 2020, or even voluntary programs.</p>
          <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">Our GHG offset project development and benefits analysis help to monetize efforts to mitigate GHG emissions. With third-party validation, verification, and agreed-upon services for reporting and offset projects, as well as training on a broad range of climate mitigation actions, we can ensure a smooth transition from thinking about sustainability to really making a difference.</p>
        </div>
        <div className='max-w-6xl px-4 flex flex-col gap-5'>
          <h2 className='h3 max-md:text-[20px] text-indigo-900 mb-4 capitalize underline' data-aos="fade-up" data-aos-delay="200">Climate change risk assessment</h2>
          <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">Climate risk assessments identify the likelihood of future climate hazards and their potential impacts on cities and their communities. This is fundamental for informing the prioritization of climate action and investment in adaptation.</p>
          <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">We can assist clients in conducting climate change risk assessments that adhere to international standards such as ISO 14090:2019 Adaptation to Climate Change: Principles, Requirements, and Guidelines or ISO 14091:2021 Adaptation to Climate Change: Guidelines on Vulnerability, Impacts, and Risk Assessment. Additionally, we can help organizations with climate change resilience assessments that follow the guidelines for Climate Lens Assessments that Infrastructure Canada developed in 2019 and 2020. These risk and resilience assessments are the foundation for planning and implementing climate change adaptation.</p>
        </div>
        <div className='max-w-6xl px-4 flex flex-col gap-5'>
          <h2 className='h3 max-md:text-[20px] text-indigo-900 mb-4 capitalize underline' data-aos="fade-up" data-aos-delay="200">Task-Force on Climate-Related Financial Disclosures</h2>
          <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">Disclosure is the keyword of the 2020s. The Financial Stability Board established the Task-Force on Climate-Related Financial Disclosures. With guidance from over 30 business leaders, TCFD provides a framework on how to disclose climate change information under the headings of Governance, Strategy, Risk Management, and Metrics and Targets. We specialize in the physical and transitional risk assessment and management processes for your business and throughout your value chain.</p>
          <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">TCFD has led Securities Commissions around the world to plan for and implement mandatory disclosure programs. The US government, the world’s largest procurer of goods and services, will soon require all suppliers selling more than $7.5 million annually to disclose their GHG emissions.</p>
        </div>
      </div>
    </div>
  )
}