// import React, { useState, useEffect } from "react";
// import { fetchAllPosts } from "../api/postfetch";
// import { MessageButton } from "./Buttons";
// import { Login } from "./Login"
// import { createMsg } from "../api/msgfetch";

// export default function Posts() {

//   const [postList, setPostList] = useState([]);
//   function deletePost(id) {
//     postList.filter(i => i.id !== post.id)
//     postList.setState({data})
    
//     return (
//         <button onClick={deletePost}>Delete Post</button>
//     )
//   } 

//   useEffect(() => {

//     const getMyPosts = async () => {
//       const result = await fetchAllPosts(user.id);
//       setPostList(result.data.posts);
//     };
//      getMyPosts();
     
//   }, []);


// return ( 
//   <div>
//     {postList.map((post) => {
//       return <h4 key={post._id} className="Posts">
//         {post.title} <br />
//         {post.description} <br />
//         {post.price} <br />
//         {post.author.username} <br />
//         {post.location} <br />
//         <MessageButton />
//       </h4>
//     })}
//   </div>
//   );
// }
