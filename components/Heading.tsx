import React from 'react'

interface Props {
    name: string,
    description: string
}

const Heading = ({name, description}:Props) => {
  return (
    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h1 className="h1 mb-4 capitalize" data-aos="fade-up">{name}</h1>
        <p className="text-xl text-gray-400 px-4" data-aos="fade-up" data-aos-delay="200">{description}</p>
    </div>
  )
}

export default Heading