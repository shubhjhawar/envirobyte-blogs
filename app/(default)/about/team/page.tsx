import Heading from '@/components/Heading';
import TeamMemberCard from '@/components/teamMemberCard';
import { Brian, John, Kevin, Minxing, Nelson, Perry  } from '@/public/images';

const experts = [
  {
    name:"Brian Sloof",
    image: Brian,
    linkedin: "https://www.linkedin.com/in/briansloof/"
  },
  {
    name:"Nelson Lee",
    image: Nelson,
    linkedin: "https://www.linkedin.com/in/ghgoffsetter/"
  },
  {
    name:"Kevin Poirier",
    image: Kevin,
    linkedin: "https://www.linkedin.com/in/pubkevinpoirier791/"
  },
  {
    name:"Minxing Si",
    image: Minxing,
    linkedin: "https://www.linkedin.com/in/minxingsi/"
  },
]

const advisors = [
  {
    name:"Perry Toms",
    image: Perry,
    linkedin: "https://www.linkedin.com/in/minxingsi/"
  },
  {
    name:"John Parr",
    image: John,
    linkedin: "https://www.linkedin.com/in/minxingsi/"
  },
]

export default function Team() {
  return (
    <div className='flex flex-col w-full justify-center items-center pt-32 pb-12 md:pt-40 md:pb-20'>
      <Heading name='Team' description='one line desc - Every feature in Open PRO makes things easy to build, pleasant to create, and simple to manage.' />
      
      <p className='h4 mb-2' data-aos="fade-up" data-aos-delay="200">Our Experts</p>
      <h2 className='h3 max-md:text-[20px] text-indigo-900 mb-2 capitalize underline mb-6' data-aos="fade-up" data-aos-delay="200">People who started EnviroByte</h2>
      
      <div className='flex flex-wrap justify-center gap-5 mb-10'>
        {experts.map((expert:any, index) => (
          <TeamMemberCard person={expert} key={index}/>
        ))}
      </div>

      <p className='h4 mb-2' data-aos="fade-up" data-aos-delay="200">Our Advisors</p>
      <h2 className='h3 max-md:text-[20px] text-indigo-900 mb-2 capitalize underline mb-6' data-aos="fade-up" data-aos-delay="200">People who advise EnviroByte</h2>
      
      <div className='flex flex-wrap justify-center gap-5'>
        {advisors.map((advisor:any, index) => (
          <TeamMemberCard person={advisor} key={index}/>
        ))}
      </div>
    </div>
  )
}