import React from "react";
import { MessageButton } from "./Buttons";

export default function SinglePost({ post }) {
    console.log("Current Post", post)

    return (
        <div>
            <ul>
                <li>{post.title}</li>
                <li>{post.description}</li>
                <li>Price: {post.price}</li>
                <li>Seller: {post.seller}</li>
                <li>Location: {post.location}</li>
            </ul>
            <MessageButton/>
        </div>
    )
}