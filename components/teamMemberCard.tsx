import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const TeamMemberCard = ({person}: any) => {
    const firstName = person?.name.split(' ')[0].toLowerCase();

  return (
    <div className="py-6 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="200">
        <div className="flex flex-col items-center">
            <Link href={`/bio/${firstName}`}>
                <div className='w-[250px] h-[300px] overflow-hidden rounded-md mb-4'>
                    <Image className="mb-4 transition-transform transform duration-500 hover:scale-110" src={person?.image} alt={person?.name} />
                </div>
            </Link>
            <Link href={`/bio/${firstName}`}>
                <h4 className="text-xl font-bold mb-1">{person?.name}</h4>
            </Link>
            {/* <div className="text-blue-600 font-medium mb-2">{person?.position}</div> */}
            {/* <p className="text-gray-600 text-center text-md mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p> */}
            <div className="text-sm text-gray-600 font-medium">
                <Link className="text-gray-900 hover:underline" href={`/bio/${firstName}`}>Bio</Link> · <Link className="text-gray-900 hover:underline" href={`${person?.linkedin}`} target='_blank'>LinkedIn</Link> · <Link className="text-gray-900 hover:underline" href="/about/contact">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default TeamMemberCard