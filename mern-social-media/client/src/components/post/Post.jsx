import { ContactsOutlined, MoreVert } from "@material-ui/icons";
import "./post.css";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({post}) {
//   console.log(post);
// const user = Users.filter(u=>u.id===1)
// console.log(user[0].username) 

// Like Functionality with useState Hook

const [like, setLike] = useState(post.like);
const [isLiked, setIsLiked] = useState(false);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked);
}

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img
                        className="postProfileImg"
                        src={Users.filter((u)=>u.id === post.userId)[0].profilePicture}
                        alt=""
                    />
                    <span className="postUserName">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={PF + post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
                    <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
