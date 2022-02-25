// import { Posts } from "../../dummyData";
import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

export default function Feed() {
  
  /*
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("")
  useEffect(() => {
    console.log("feed rendered");
  }, [text]) 
  */

  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/61a5d5109b0c7c03e147c933");
      setPosts(res.data)
    }
    fetchPosts();
  }, []) 

  return (
    <div className="feed">
      {/* <input type="text" onChange={e=>setText(e.target.value)} /> */}
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key = {p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
