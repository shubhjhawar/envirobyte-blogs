import getFormattedDate, { getPostsMeta, getPostByName } from "@/app/lib/posts";
import Link from "next/link";
import { notFound } from 'next/navigation'
import 'highlight.js/styles/github-dark.css'
import Image from "next/image";
import { Socials } from "@/components/socials";
import TableOfContent from "@/components/tableOfContent";

export const revalidate = 10
const tagColors = ["bg-red-400", "bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-purple-400"];

type Props = {
    params:{
        postId:string
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta();

    if(!posts) return []

    return posts.map((post) => ({
        postId:post.id
    }))
}

export async function generateMetadata({params: {postId}}: Props) {

    const post = await getPostByName(`${postId}.mdx`)

    if(!post){
        return {
            title:"Post Not Found"
        }
    }

    return {
        title: post.meta.title
    }
}

export default async function Post({params: {postId}}: Props) {
    const post = await getPostByName(`${postId}.mdx`)

    if(!post) notFound()

    const {meta, content} = post

    const pubDate = getFormattedDate(meta.date)
  
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <TableOfContent content={content}/>
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    <div className="max-w-3xl mx-auto">
                        <article id="article-content">

                            <header className="mb-8">
                            {/* Title and excerpt */}
                            <div className="text-center md:text-left">
                                <h1 className="h1 mb-4" data-aos="fade-up">{meta.title}</h1>
                                <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">{meta.description}</p>
                            </div>
                            {/* Blog meta */}
                            <div className="md:flex md:items-center md:justify-between mt-3">
                                {/* Date meta */}
                                <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay="400">
                                <span className="text-gray-500">{pubDate}</span>
                                </div>
                                {/* Blog tags */}
                                {meta.tags &&
                                <div className="flex justify-center mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="600">
                                    {meta.tags.map((tag, tagIndex) => (
                                        <div key={tagIndex} className="m-1">
                                            <Link href={`/tags/${tag}`} className={`inline-flex text-center text-white py-1 px-3 rounded-full transition duration-150 ease-in-out ${tagColors[Math.floor(Math.random() * tagColors.length)]} hover:scale-105`}>
                                                {tag}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                }
                            </div>
                            </header>

                            {/* Blog image */}
                            {meta.banner &&
                            <figure className="mb-8" data-aos="fade-up" data-aos-delay="600">
                                <Image className="w-full" src={meta.banner} width={1024} height={576} alt={meta.title} priority />
                            </figure>
                            }

                            {/* Blog content */}
                            <div id="content" className="prose text-black max-w-none prose-lg prose-invert prose-p:leading-normal prose-headings:font-bold prose-a:font-semibold prose-a:underline hover:prose-a:no-underline prose-a:text-black prose-strong:font-medium prose-strong:text-black prose-blockquote:italic prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-black prose-blockquote:font-normal prose-blockquote:font-bold">
                                {content}
                            </div>


                            {/* Blog footer */}
                            <footer>
                                <Socials blogName={meta.title as string} />
                            </footer>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}