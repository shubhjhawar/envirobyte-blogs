import getFormattedDate from "@/app/lib/posts"
import Image from "next/image"
import Link from "next/link"
import CustomImage from "./customImage"

type Props = {
    post: Meta
}
const tagColors = ["bg-red-400", "bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-purple-400"];

export default function ListItem({ post }: Props) {
    const { id, title, date, tags, banner, description} = post
    const formattedDate = getFormattedDate(date)

    return (
        // className="bg-gray-100 p-2 rounded-md"
        <li className="max-md:mb-5">
            <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                    {banner &&
                    <Link href={`/blog/${id}`} className="block mb-6">
                        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-md">
                            <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={banner} width={300} height={150} alt={title} />
                        </figure>
                    </Link>
                    }
                    {tags &&
                    <div className="mb-3 flex">
                        {tags.map((tag, tagIndex) => (
                            <li key={tagIndex} className="m-1">
                            <Link href={`/tags/${tag}`} className={`inline-flex text-center text-white py-1 px-3 rounded-full transition duration-150 ease-in-out ${tagColors[Math.floor(Math.random() * tagColors.length)]} hover:scale-105`}>
                                {tag}
                            </Link>
                            </li>
                        ))}
                    </div>
                    }
                    <h3 className="text-[20px] lg:text-[30px] font-bold mb-2">
                    <Link href={`/blog/${id}`}>{title}</Link>
                    </h3>
                </header>
                <p className="md:text-md lg:text-lg text-gray-400 grow">{description}</p>
                <footer className="flex items-center mt-4">
                    
                    <div className="font-medium">
                    <span className="text-gray-500">{formattedDate}</span>
                    </div>
                </footer>
            </article> 
        </li>
    )
}