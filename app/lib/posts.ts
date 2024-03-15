import { compileMDX } from 'next-mdx-remote/rsc';
import yaml from 'js-yaml';

import Video from '@/components/video';
import CustomImage from '@/components/customImage';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
    try {
        const res = await fetch(`https://raw.githubusercontent.com/shubhjhawar/blogposts/main/${fileName}`, {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });

        if (!res.ok) return undefined;

        const rawMDX = await res.text();

        const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
        const frontmatterMatch = rawMDX.match(frontmatterRegex);

        if (!frontmatterMatch) {
            console.error('Frontmatter not found');
            return undefined;
        }

        const frontmatterString = frontmatterMatch[1];
        let frontmatter: any;
        frontmatter = yaml.load(frontmatterString);

        const { content } = await compileMDX<{
            title: string;
            date: string;
            tags: string[];
            banner: string;
            description: string,
            blogType: string
        }>({
            source: rawMDX,
            components: {
                Video, 
                CustomImage,
            },
            options: {
                parseFrontmatter: true,
                mdxOptions: {
                    rehypePlugins:[
                        // @ts-ignore
                        rehypeHighlight,
                        rehypeSlug,
                        [rehypeAutolinkHeadings, {
                            behavior: 'wrap'
                        }],
                    ]
                }
            }
        });
        

        const id = fileName.replace(/\.mdx$/, '');

        const blogPostObj: BlogPost = {
            meta: {
                id,
                title: frontmatter.title || 'Untitled',
                date: frontmatter.date || '',
                tags: frontmatter.tags || [],
                banner: frontmatter.banner || '',
                description: frontmatter.description || '',
                blogType: frontmatter.blogType || ''
            },
            content
        };
        return blogPostObj;
    } catch (error) {
        console.error('Error fetching or processing MDX:', error);
        return undefined;
    }
}

export async function getPostsMeta(): Promise<Meta[]> {
    try {
        const res = await fetch('https://api.github.com/repos/shubhjhawar/blogposts/git/trees/main?recursive=1', {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });

        if (!res.ok) return [];

        const repoFileTree: FileTree = await res.json();

        const filesArray = repoFileTree.tree.map(obj => obj.path)
            .filter(path => path.endsWith('.mdx'));

        const posts: Meta[] = [];

        for (const file of filesArray) {
            const post = await getPostByName(file);
            if (post) {
                const { meta } = post;
                posts.push(meta);
            }
        }

        return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    } catch (error) {
        console.error('Error fetching or processing file tree:', error);
        return [];
    }
}

export async function getNormalPostsMeta(): Promise<Meta[]> {
    try {
        const posts = await getPostsMeta();
        return posts.filter(post => post.blogType === 'normal');
    } catch (error) {
        console.error('Error fetching or processing normal posts:', error);
        return [];
    }
}

export async function getFeaturePostsMeta(): Promise<Meta[]> {
    try {
        const posts = await getPostsMeta();
        return posts.filter(post => post.blogType === 'feature');
    } catch (error) {
        console.error('Error fetching or processing feature posts:', error);
        return [];
    }
}

export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateString))
}
