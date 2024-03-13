import { getPostsMeta } from "@/app/lib/posts"
import ListItem from "@/components/list-item"
import Link  from "next/link";

export default async function Blog() {
    const posts = await getPostsMeta()
    // console.log("hrere,",posts)

    if (!posts) {
        return <p className="mt-10 text-center">Sorry, no posts available.</p>
    }

    return (
        <section className="mx-auto max-w-6xl pt-32 pb-12 md:pt-40 md:pb-20">
            <h2 className="text-4xl font-bold w-full flex justify-center mb-5">Blog Heading</h2>
            <ul className="grid grid-cols-3 max-md:grid-cols-1 list-none p-2 max-md:px-12 lg:gap-10 md:gap-5">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
            {/*  Pagination */}
            <nav className="flex justify-center pt-16" role="navigation" aria-label="Pagination Navigation">
              <ul className="inline-flex flex-wrap font-medium text-sm -m-1">
                <li className="m-1">
                  <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-500">Prev</span>
                </li>
                <li className="m-1">
                  <Link href="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">1</Link>
                </li>
                <li className="m-1">
                  <Link href="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">2</Link>
                </li>
                <li className="m-1">
                  <Link href="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">3</Link>
                </li>
                <li className="m-1">
                  <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-500">...</span>
                </li>
                <li className="m-1">
                  <Link href="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">12</Link>
                </li>
                <li className="m-1">
                  <Link href="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">Next</Link>
                </li>
              </ul>
            </nav>
        </section>
    )
}