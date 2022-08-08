import React, { useState } from "react";
import { createPost } from "../api/postfetch";


export default function NewPost({token}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  return (
      <div className="newPost">
          <form
          onSubmit={async (e) =>  {
            e.preventDefault();
            await createPost(token, {title, description, price, location})
            setTitle("");
            setDescription("");
            setPrice("");
            setLocation("");
          }
        }
          
          > 
             <div> New Post: <br /> </div>
              <input
               value={title}
               placeholder="Title"
               onChange={(e) => setTitle(e.target.value)}
               /> 
               <br />
               <input
               value={description}
               placeholder="Description"
               onChange={(e) => setDescription(e.target.value)}
               /> 
               <br />
               <input
               value={price}
               placeholder="Price"
               onChange={(e) => setPrice(e.target.value)}
               /> 
               <br />
               <input
               value={location}
               placeholder="Location"
               onChange={(e) => setLocation(e.target.value)}
               /> 
               <br />
            <button type="submit" value="Submit">Submit</button>
          </form>
      </div>
  )
}

