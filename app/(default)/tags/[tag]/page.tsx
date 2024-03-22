import { getPostsMeta } from "@/app/lib/posts";
import ListItem from "@/components/list-item";
import Pagination from "@/components/pagination";
import paginationDetails from "@/utils/pagination";
import Link from "next/link";

export const revalidate = 10

type Props = {
    params: {
        tag: string
    }
    searchParams: {
        page: string | undefined
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta()

    if(!posts) return [];

    const tags = new Set(posts.map(post => post.tags).flat())

    return Array.from(tags).map((tag) => ({ tag }))
}

export function generateMetadata({params: {tag}}: Props){
    return {
        title : `Posts about ${tag}`
    }
}


export default async function TagPostList({params: {tag}, searchParams}: Props){
    const blogs = await getPostsMeta();
    // total length of blogs
    const totalPosts : number = blogs.length
    // page is the searchParam
    let page: number = parseInt(searchParams?.page as string, 10);
    page = !page || page <1 ? 1 : page;

    // details required for pagination
    const {totalPages, startIndex, endIndex, prevPage, nextPage} = paginationDetails(page, totalPosts)

    // Slice the blogs array to get posts for the current page
    const currentPageBlogs = blogs?.slice(startIndex, endIndex);

    // need to do something about this.....
    const isPageOutOfRange = page > totalPages;

    if(!blogs) return <p>Sorry no posts available.</p>

    const tagPosts = blogs.filter(post => post.tags.includes(tag))

    if(!tagPosts.length){
        return (
            <div className="mx-auto max-w-6xl pt-32 pb-12 md:pt-40 md:pb-20 flex flex-col items-center justify-center">
                <h2 className="h1 mb-4">Sorry no posts found for that keyword</h2>
                <Link href="/" className="btn text-white bg-blue-600 hover:bg-blue-700">Back to Home</Link>
            </div>
        )
    }

    return (
        <section className="mx-auto max-w-6xl pt-32 pb-12 md:pt-40 md:pb-20">
            <h2 className="text-4xl font-bold w-full flex justify-center mb-5" data-aos="fade-up">Results for: {tag}</h2>

            <section className="mt-6 mx-auto max-w-6xl">
                <ul className="grid grid-cols-3 max-md:grid-cols-1 list-none p-2 max-md:px-12 lg:gap-10 md:gap-5">
                    {currentPageBlogs.map(post => (
                        <ListItem key={post.id} post={post} />
                    ))}
                </ul>
            </section>

            <Pagination page={page} prevPage={prevPage} nextPage={nextPage} totalPages={totalPages} />
        </section>
    )
}