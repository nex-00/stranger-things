import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../api/postfetch";
import { MessageButton } from "./Buttons";
import { Login } from "./Login"
import { createMsg } from "../api/msgfetch";
import { Posts } from "./Posts";

export default function SinglePost() {

  const [postList, setPostList] = useState([]); //// creating post holder
  const [singlePost, setSinglePost] = useState([])

  useEffect(() => {

    const getAllPosts = async () => {
      const result = await fetchAllPosts();
      setPostList(result.data.post);
    };
     getAllPosts();
  }, []);

console.log(postList)
return ( 
  <div>
    {singlePost.map((post) => {
      return <h4 key={post._id} className="Post">
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
