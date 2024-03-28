import React from 'react'
import Heading from '@/components/Heading'

const Disclaimer = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center pt-32 pb-12 md:pt-40 md:pb-20'>
      <Heading name='Disclaimer' description='Last Updated: 2021-05-01' />
      <div className='max-w-6xl px-4 flex flex-col gap-5'>
        <h2 className='h3 max-md:text-[20px] text-indigo-900 capitalize underline' data-aos="fade-up" data-aos-delay="200">WEBSITE DISCLAIMER</h2>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">The information provided by KeeWee Solutions Inc. (“we,” “us” or “our”) on keewee.ca (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.</p>

        <h2 className='h3 max-md:text-[20px] text-indigo-900 capitalize underline' data-aos="fade-up" data-aos-delay="200">EXTERNAL LINKS DISCLAIMER</h2>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">The Site may contain (or you may be sent through the Site links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</p>

        <h2 className='h3 max-md:text-[20px] text-indigo-900 capitalize underline' data-aos="fade-up" data-aos-delay="200">PROFESSIONAL DISCLAIMER</h2>
        <p className="text-md md:text-lg text-gray-600 md:tracking-wide md:leading-loose" data-aos="fade-up" data-aos-delay="200">The Site cannot and does not contain engineering advice. The engineering information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THIS SITE IS SOLELY AT YOUR OWN RISK.</p>

      </div>
    </div>
  )
}

export default Disclaimer