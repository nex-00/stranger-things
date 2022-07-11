import React, { useState } from "react";
import { loginUser } from "../api/auth";


export default function NewPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  return (
      <div className="newPost">
          <form method="POST"
          onSubmit={async (e) =>  {
            e.preventDefault();
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

