import { getPostsMeta } from "@/app/lib/posts";
import ListItem from "@/components/list-item";
import Link from "next/link";

export const revalidate = 10

type Props = {
    params: {
        tag: string
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


export default async function TagPostList({params: {tag}}: Props){
    const posts = await getPostsMeta();

    if(!posts) return <p>Sorry no posts available.</p>

    const tagPosts = posts.filter(post => post.tags.includes(tag))

    if(!tagPosts.length){
        return (
            <div>
                <p>Sorry no posts found for that keyword</p>
                <Link href="/">Back to Home</Link>
            </div>
        )
    }

    return (
        <section className="mx-auto max-w-6xl pt-32 pb-12 md:pt-40 md:pb-20">
            <h2 className="text-4xl font-bold w-full flex justify-center mb-5">Results for: {tag}</h2>

            <section className="mt-6 mx-auto max-w-6xl">
                <ul className="grid grid-cols-3 max-md:grid-cols-1 list-none p-2 max-md:px-12 lg:gap-10 md:gap-5">
                    {tagPosts.map(post => (
                        <ListItem key={post.id} post={post} />
                    ))}
                </ul>
            </section>
        </section>
    )
}