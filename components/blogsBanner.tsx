import { getFeaturePostsMeta } from "@/app/lib/posts"
import Image from "next/image"
import Link from "next/link"

const tagColors = ["bg-red-400", "bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-purple-400"];

export default async function BlogsComponent() {
    const blogs = await getFeaturePostsMeta()

    return (
        <section>
            <div className="pb-12 md:pb-20">
              <h1 className="text-4xl font-bold w-full flex justify-center mb-10" data-aos="fade-up">Feature Blog Heading</h1>
              <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                <Link href={`/blog/${blogs[0].title}`} className="relative block group" data-aos="fade-right" data-aos-delay="200">
                  <div className="absolute inset-0 bg-gray-200 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                  {blogs[0].banner &&
                    <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                      <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={blogs[0].banner} width="540" height="303" alt={blogs[0].title} />
                    </figure>
                  }
                </Link>
                <div data-aos="fade-left" data-aos-delay="200">
                  <header>
                    <div className="mb-3">
                      {blogs[0].tags &&
                        <div className="mb-3 flex gap-3">
                            {blogs[0].tags.map((tag, tagIndex) => (
                                <Link href={`/tags/${tag}`} className={`inline-flex text-center text-white py-1 px-3 rounded-full transition duration-150 ease-in-out ${tagColors[Math.floor(Math.random() * tagColors.length)]} hover:scale-105`}>
                                    {tag}
                                </Link>
                            ))}
                        </div>
                      }
                    </div>
                    <h3 className="h3 text-2xl lg:text-3xl mb-2">
                      <Link href={`/blog/${blogs[0].title}`} className="transition duration-150 ease-in-out">{blogs[0].title}</Link>
                    </h3>
                  </header>
                  <p className="text-lg text-gray-400 grow">{blogs[0].description}</p>
                  <footer className="flex items-center mt-4">
                    
                    <div>
                      <span className="text-gray-500">{blogs[0].date}</span>
                    </div>
                  </footer>
                </div>
              </article>
            </div>
        </section>
    )
}