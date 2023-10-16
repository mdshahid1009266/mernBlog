import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./post.css";
import { useEffect, useState } from "react";
import { getAllPost } from "./api";

const SingelPost = ({ value }) => {

    return (
        <div className="post">
            <img src="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            {/* <div className="tags"><b>Hacks</b>  <b>Social</b> <b>Life</b></div> */}
            <Link to={`/posts/${value._id}`} className="titl">{value.title}</Link>
            <div className="singlePostInfo">
                <span>
                    Author:
                    <b className="singlePostAuthor">
                        <Link className="link authorLink" to={`/posts?user=${value.auth}`}>
                            {value.auth}
                        </Link>
                    </b>
                </span>
                <span>{new Date(value.createdAt).toDateString()}</span>
            </div>
            <p className="rt">5 minute to read</p>
            <p className="ht">{value.disc}</p>
        </div>
    )
}
// const posts = [];
// for (let i = 0; i < 15; i++) posts.push(<Post />);


const handelClick = (e) => {
    console.log(e.target.innerText);
}

const Catagories = () => {
    return (
        <>
            <h2>Catagories</h2>
            <div onClick={handelClick} className="about">
                <div className="catagory">music</div>
                <div className="catagory">Pop</div>
                <div className="catagory">Culter</div>
                <div className="catagory">Sports</div>
                <div className="catagory">Games</div>
                <div className="catagory">Movie</div>
                <div className="catagory">Politices</div>
                <div className="catagory">Defence</div>
                <div className="catagory">Social</div>
                <div className="catagory">Study</div>
            </div>

        </>
    )
}

console.log("render");
export default () => {
    const [posts, setPosts] = useState([]);
    const{search}=useLocation();
    // const searchName=search.replace("%20","");
    useEffect(() => {
        const getPost = async () => {
            const allposts = await getAllPost(search);
            setPosts(allposts.data);
        }
        getPost();
    }, [search]);


    return (
        <div className="post_main">
            <div id="posts">
                {
                    posts.length == 0 && <h2>Loading...</h2>
                }
                {
                    posts.map(e => <SingelPost value={e} />)
                }
            </div>
            <div id="post_catagories">
                {
                    posts.length != 0 &&
                    <Catagories />
                }
            </div>
        </div>
    )
}

