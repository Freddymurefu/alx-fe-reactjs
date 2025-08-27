import React from 'react';
import { useQuery } from 'react-query';

function fetchPosts(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json());
}


export default function PostsComponent(){
    const {data, error, isError, isLoading, refetch, isFetching} = useQuery("posts", 
    fetchPosts, {
    cacheTime: 1000 * 60 * 5,          // 5 minutes
    staleTime: 1000 * 60,              // 1 minute
    refetchOnWindowFocus: false,       // don’t refetch when window gains focus
    keepPreviousData: true             // keep old data while fetching new
  }
);
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching posts</div>;
    return(
        <div>
            <h1>
                Posts
            </h1>
            <button onClick={()=>refetch()} disabled={isFetching}> {isFetching ? "Refreshing..." : "Refetch Posts"}</button>
            <ul>
                {data.map(post=>(
                    <li key={post.id}><strong>{post.title}</strong>: {post.body}</li>
                ))}
            </ul>
        </div>
    )
};


