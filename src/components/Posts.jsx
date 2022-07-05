import React, { useState, useEffect } from "react";
import SinglePost from "./SinglePost";
import { fetchAllPosts } from "api/postfetch";



// const dummyPosts = [
//   {
//     title: "Cool Thing",
//     description: "this is a really cool thing",
//     price: "$3532539545",
//     seller: "yomamalolsofunnyhaha04",
//     location: "Mars",
//   },
// ];


export default function Posts() {
  const [postItem, setPostItem] = useState([]); //// creating post holder

  useEffect(() => {

    const getAllPosts = async () => {
      const result = await fetchAllPosts(); // grabbing each post & sending to setpost item in holder, creating an list/array of posts
      console.log(result)
      setPostItem(result.data.post);
    };
    getAllPosts();
  }, []);

  console.log("Rendered post item from line 5:", postItem);

  //return <div>posts</div>;

  // return ( 
  // <div>
  //   {postItem.map((post) => {
  //     return <SinglePost key={`Key: ${index}`} post={post} />
  //   })}
  // </div>
  // );
return ( 
  <div>
    {postItem.map((post) => {
      return <h4 key={post.id}>{post.title}</h4>
    })}
  </div>
  );
}