import React, { useState, useEffect } from "react";
import { posts, fetchAllPosts } from "../api/postfetch";
import { MessageButton } from "./Buttons";
import { Login } from "./Login"


// const dummyPosts = [
//   {
//     title: "Single glass of milk",
//     description: "3 years expired",
//     price: "$3532539545",
//     seller: "",
//     location: "",
//   },
// ]




export default function Posts() {

  const [postList, setPostList] = useState([]); //// creating post holder


  useEffect(() => {

    const getAllPosts = async () => {
      const result = await fetchAllPosts(); // grabbing each post & sending to setpost item in holder, creating a list/array of posts
      console.log(result)
      console.log(result);
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
        {post.seller} <br />
        {post.location} <br />
        <MessageButton />
      </h4>
    })}
  </div>
  );
}
