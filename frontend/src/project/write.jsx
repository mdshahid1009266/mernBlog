import { useState } from "react";
import { setContext } from './context/context'
import { createPost } from "./api"
import "./write.css";

export default function Write() {
  const { state } = setContext();
  const damoPost = {
    title: "",
    disc: "",
    auth: state.user.name,
    cata: ["sports", "gamming"]
  }

  const [post, setPost] = useState(damoPost);
  const handelChenge = (e) => {
    setPost({
      ...post, [e.target.name]: e.target.value
    })
  }
  const handelPost = async (e) => {
    e.preventDefault();
    if (post.title && post.disc) {
      const yourPost = await createPost(post);
    }
    // console.log(yourPost);

  }
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">

          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            name="title"
            onChange={handelChenge}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            name="disc"
            onChange={handelChenge}
          />
        </div>
        <button className="writeSubmit" type="submit" onClick={handelPost}>
          Publish
        </button>
      </form>
    </div>
  );
}
