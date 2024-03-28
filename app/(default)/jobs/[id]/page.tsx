"use client";
import React from 'react';
import { openPositions } from '@/jobs';
import Link from 'next/link';

type Props = {
    params:{
        id:number
    }
}

const Jobs = ({params: {id}}: Props) => {
  const position = openPositions[id-1];

  const handleLinkClick = (index: string) => {
    console.log(index);
    const heading = document.getElementById(index);
    console.log(heading)
        if (heading) {
            window.scrollTo(0, heading.offsetTop - 100)
        }
    };  

  return (
    <div className="pt-32 pb-12 md:pt-40 md:pb-20 max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up" data-aos-delay="200">
        <div className='flex flex-wrap mb-20'>
            {/* index */}
            <div className='hidden md:block w-1/3 flex flex-col gap-3 h-full sticky top-24'>
                <button onClick={() => handleLinkClick('title')} className="font-semibold hover:underline mb-2">{position.title}</button>
                <div>
                    <button onClick={() => handleLinkClick('summary')} className="hover:underline mb-1">Position Summary</button>
                </div>
                <div>
                    <button onClick={() => handleLinkClick('responsibilites')} className="hover:underline mb-1">Key Responsibilities</button>
                </div>
                <div>
                    <button onClick={() => handleLinkClick('qualifications')} className="hover:underline mb-1">Qualifications</button>
                </div>
                <div>
                    <button onClick={() => handleLinkClick('skills')} className="hover:underline mb-1">Skills</button>
                </div>
                <div>
                    <button onClick={() => handleLinkClick('contact')} className="hover:underline mb-1">Contact Us</button>
                </div>
            </div>
            {/* content */}
            <div className='w-full md:w-2/3 flex flex-col justify-end'>
                <h2 id="title" className="h2 mb-4">{position.title}</h2>
                <p className="text-md md:text-lg tracking-wide text-gray-600 mb-4 pl-1">We are a dynamic startup committed to revolutionizing environmental and sustainability reporting. Our mission is to digitize diverse reporting and assessments, ranging from Greenhouse Gas (GHG) emissions to Environmental, Social, and Governance (ESG) standards. Join us in driving positive change towards a more sustainable future.</p>
                
                <h3 id="summary" className="h3 mb-4">Position Summary</h3>
                <p className="text-md md:text-lg tracking-wide text-gray-600 mb-4 pl-1">{position.summary}</p>

                <h3 id="responsibilites" className="h3 mb-4">Key Responsibilities</h3>
                <ul className='list-disc pl-5'>
                    {position.responsibilities.map((resp, index) => (
                        <li key={index} className="text-md md:text-lg tracking-wide text-gray-600 mb-4">{resp}</li>
                    ))}
                </ul>

                <h3 id="qualifications" className="h3 mb-4">Qualifications</h3>
                <ul className='list-disc pl-5'>
                    {position.qualifications.map((qualification, index) => (
                        <li key={index} className="text-md md:text-lg tracking-wide text-gray-600 mb-4">{qualification}</li>
                    ))}
                </ul>

                <h3 id="skills" className="h3 mb-4">Skills</h3>
                <ul className='list-disc pl-5'>
                    {position.skills.map((skill, index) => (
                        <li key={index} className="text-md md:text-lg tracking-wide text-gray-600 mb-4">{skill}</li>
                    ))}
                </ul>
                
                <h3 className="h3 mb-4">Join Us</h3>
                <p className="text-md md:text-lg tracking-wide text-gray-600 mb-4 pl-1">Embark on a transformative journey with us to redefine sustainability reporting and assessment. Be a part of an enthusiastic team dedicated to making a positive impact. If you're passionate about the environment, possess the skills and knowledge outlined above, and are eager to contribute to meaningful change, we encourage you to apply.</p>
            </div>
        </div>

        <div id="contact" className='w-full bg-gradient-to-r from-black to-gray-700 text-white flex max-md:flex-col gap-10 justify-between items-center p-12 rounded-md'>
            <p className='text-xl md:text-2xl'>Sounds like we are building something cool?</p>
            <Link href="/about/contact" className='p-4 bg-blue-600 hover:bg-blue-800 rounded-sm cursor-pointer'>Contact Us Today</Link>
        </div>
    </div>
  )
}

export default Jobs