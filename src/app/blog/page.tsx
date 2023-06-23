import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Blog | Neaxt App'
}

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/postsksjdfkjsd', {
        next: {
            revalidate: 60
        }
    });

    if (!response.ok) throw new Error('Unable to fetch data!')
    return response.json();
}

export default async function Blog() {
    const posts = await getData();
    return (<>
        <h1>Blog page</h1>
        <ul>
            {posts.map((post: any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </>
    );
};