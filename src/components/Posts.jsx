import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../api/postfetch";
import { MessageButton } from "./Buttons";
import { Login } from "./Login"
import { createMsg } from "../api/msgfetch";

export default function Posts() {

  const [postList, setPostList] = useState([]); //// creating post holder
  function deletePost(id) {
    console.log(id)
  } 

  useEffect(() => {

    const getAllPosts = async () => {
      const result = await fetchAllPosts(); // grabbing each post & sending to setpost item in holder, creating a list/array of posts
      setPostList(result.data.posts);
    };
     getAllPosts();
     
  }, []);


return ( 
  <div>
    {postList.map((post) => {
      return <h4 key={post._id} className="Posts">
        {post.title} <br />
        {post.description} <br />
        {post.price} <br />
        {post.author.username} <br />
        {post.location} <br />
        <MessageButton />
      </h4>
    })}
  </div>
  );
}
