'use client'
import Link from "next/link";
import useSWR from 'swr';
// import { usePosts } from "../store";
// import { shallow } from "zustand/shallow";
// import { useEffect } from "react";
import LoadingPosts from "@/app/blog/loading";
import { getAllPosts } from "../services/getPosts";

const Posts = () => {
    const { isLoading, data: posts } = useSWR('posts', getAllPosts);
    // const [posts, loading, getAllPosts] = usePosts(state => [
    //     state.posts, state.loading, state.getAllPosts
    // ], shallow);

    // useEffect(() => {
    //     getAllPosts();
    // }, [getAllPosts]);



    return isLoading
        ? <LoadingPosts />
        : (
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id} className="post">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        )
};

export default Posts;