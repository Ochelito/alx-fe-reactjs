import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  };
  
  function PostsComponent() {
    const {
      data,
      error,
      isLoading,
      isError,
      refetch,
      isFetching,
    } = useQuery({
      queryKey: ["posts"],
      queryFn: fetchPosts,
      staleTime: 5000, // cache stays fresh for 5s
      refetchOnWindowFocus: false, // prevent auto refetch on tab switch
      keepPreviousData: true, // keep old data while fetching new data
    });
  
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
  
    return (
      <div>
        <h2>Posts</h2>
        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? "Refreshing..." : "Refetch Posts"}
        </button>
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PostsComponent;
  