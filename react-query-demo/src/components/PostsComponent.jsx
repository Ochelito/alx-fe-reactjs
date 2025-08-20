import React from "react";
import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  // Fetch posts from API
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  };

  // React Query hook
  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,  // <-- tells us if background refetching is happening
    refetch,     // <-- function to manually refetch
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000, // cache stays "fresh" for 5 seconds
    cacheTime: 1000 * 60, // cache kept in memory for 1 min if unused
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
