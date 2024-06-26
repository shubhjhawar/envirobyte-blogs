"use client"
import Logo from './logo'
import { useState } from 'react';
import { Subscribe } from "@/utils/dbConnect";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e:any) => {
    e.preventDefault();

    try {
      const {success, message} = await Subscribe(email); 
      if(success){
        toast.success(message);
      } else {
        toast.error(message);
      }

    } catch (error) {
      console.error('Subscription failed:', error); 
    } finally {
      setEmail(''); 
    }
  };

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <Link href="/disclaimer" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Disclaimer</Link> · <Link href="/equality_and_diversity" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Equality and Diversity</Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="https://demo.envirobyte.com/" target="_blank" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">EmissionX™</Link>
              </li>
              <li className="mb-2">
                <Link href="https://pems.envirobyte.com/" target="_blank" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">OpenPEMS™</Link>
              </li>
              <li className="mb-2">
                <Link href="https://decarb.envirobyte.com/" target="_blank" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Decarbonization™</Link>
              </li>
              <li className="mb-2">
                <Link href="https://ghg.envirobyte.com/" target="_blank" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">GHG Emission Factor</Link>
              </li>
              <li className="mb-2">
                <Link href="https://steamapp.envirobyte.com/" target="_blank" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Steam Enthalpy</Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/tech/openpems" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Predictive Modeling</Link>
              </li>
              <li className="mb-2">
                <Link href="/datascience/advanced_data_analysis" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Data Analytics</Link>
              </li>
              <li className="mb-2">
                <Link href="/datascience/iot" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Internet of Things (IoT)</Link>
              </li>
              <li className="mb-2">
                <Link href="/datascience/predictive_analysis" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Predictive Analytics</Link>
              </li>
              <li className="mb-2">
                <Link href="/tech/emmissionx" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">GHG Reporting</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/about/team" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About us</Link>
              </li>
              <li className="mb-2">
                <Link href="/about/contact" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Contact us</Link>
              </li>
              <li className="mb-2">
                <Link href="/tutorials" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Tutorial</Link>
              </li>
              <li className="mb-2">
                <Link href="/about/careers" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Careers</Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4">Get the latest blogs to your inbox every month.</p>
            <form onSubmit={handleSubscribe}>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; Envirobyte.com. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
