import { openPositions } from "../jobs";
import Link from 'next/link';

export default function Career() {  
  return (
    <section className="pt-32 pb-12 md:pt-40 md:pb-20" data-aos="fade-up" data-aos-delay="200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 className="h2 mb-4">Envirobyte is growing. Grow with us.</h2>
          <p className="text-xl text-gray-600">
            Join us, be the change.
          </p>
        </div>

        {/* Job list */}
        <div className="max-w-3xl mx-auto">

          <h3 className="h4 mb-8">Current open positions</h3>

          <div className="-my-3">
            {openPositions.length===0 && (
              <div className="flex justify-start">
                <p className="text-lg text-gray-600">Unfortunately, there are no jobs available right now.</p>
              </div>
            )}

            {openPositions.map((position, index) => (
              <Link href={`/jobs/${position.id}`} className="flex justify-between items-center p-4 rounded border border-gray-200 transition duration-300 ease-in-out bg-gray-100 shadow-md hover:bg-white hover:shadow-lg mb-3">
                <div className="font-medium">{position.title}</div>
                <svg className="w-4 h-4 fill-current text-blue-600 shrink-0 ml-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.707 1h-8v2h5.586L1 13.293l1.414 1.414L12.707 4.414V10h2V2a1 1 0 00-1-1z" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}