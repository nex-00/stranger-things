import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "api/postfetch";

export default function Posts() {
  const [postItem, setPostItem] = useState([]); //// creating post holder

  useEffect(() => {
    const getAllPosts = async () => {
      const result = await fetchAllPosts(); // grabbing each post & sending to setpost item in holder, creating an list/array of posts
      setPostItem(result);
    };
    getAllPosts();
  }, []);

  console.log("Rendered post item from line 5:", postItem);

  return <div>posts</div>;
}
