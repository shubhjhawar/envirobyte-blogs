import { getPostsMeta } from "@/app/lib/posts"
import ListItem from "@/components/list-item"
import Pagination from "@/components/pagination";
import paginationDetails from "@/utils/pagination";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

export default async function Blog({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    // get session details
    const session = await getServerSession(authOptions);

    // getting all posts/blogs
    const blogs = await getPostsMeta()
    // total length of blogs
    const totalPosts : number = blogs.length
    // page is the searchParam
    let page: number = parseInt(searchParams.page as string, 10);
    page = !page || page <1 ? 1 : page;

    // details required for pagination
    const {totalPages, startIndex, endIndex, prevPage, nextPage} = paginationDetails(page, totalPosts)

    // Slice the blogs array to get posts for the current page
    const currentPageBlogs = blogs?.slice(startIndex, endIndex);

    // should only show three blogs if there is no session
    const noSessionBlogsForLargeScreens = blogs?.slice(0,6);
    const noSessionBlogsForSmallScreens = blogs?.slice(0,4);

    // need to do something about this.....
    const isPageOutOfRange = page > totalPages;

    if (!blogs || !currentPageBlogs) {
        return <p className="mt-10 text-center">Sorry, no posts available.</p>
    }

    return (
        <section className="mx-auto max-w-6xl pt-32 pb-12 md:pt-40 md:pb-20">
            <h2 className="text-4xl font-bold w-full flex justify-center mb-5">Blog Heading</h2>
            {session ? (
                <div>
                    <ul className="grid grid-cols-3 max-md:grid-cols-1 list-none p-2 max-md:px-12 lg:gap-10 md:gap-5">
                        {currentPageBlogs?.map(post => (
                            <ListItem key={post.id} post={post} />
                        ))}
                    </ul>
                    <Pagination page={page} prevPage={prevPage} nextPage={nextPage} totalPages={totalPages} />
                </div>
            ): (
                <div className="relative">
                    <div className="hidden md:block">
                        <ul className="grid grid-cols-3 max-md:grid-cols-1 list-none p-2 max-md:px-12 lg:gap-10 md:gap-5">
                            {noSessionBlogsForLargeScreens?.map(post => (
                                <ListItem key={post.id} post={post} />
                            ))}
                        </ul>
                    </div>
                    <div className="block md:hidden">
                        <ul className="grid grid-cols-3 max-md:grid-cols-1 list-none p-2 max-md:px-12 lg:gap-10 md:gap-5">
                            {noSessionBlogsForSmallScreens?.map(post => (
                                <ListItem key={post.id} post={post} />
                            ))}
                        </ul>
                    </div>
                    <div className="absolute bottom-0 h-[500px] w-full bg-gradient-to-b from-transparent to-white flex items-end justify-center">
                        <Link href="/signin" className="btn text-white bg-red-600 hover:bg-red-700 w-auto mb-4">Please Login to see more blogs</Link>
                    </div>
                </div>
            )}

        </section>
    )
}