import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSingelPost,updatePost,deletePost } from "./api"
import { setContext } from './context/context'

const Singelpost = () => {
    const { state, dispatch } = setContext();

    const [value, setvalue] = useState([]);
    const [manage, setManage] = useState(false)
    let { id } = useParams();

    const [post, setPost] = useState({});
    const handelChenge = (e) => {
        setPost({
            ...post, [e.target.name]: e.target.value
        })
    }
    const handelClick = async() => {
        // console.log(post);
        await updatePost(post);
        setManage(false);
        featchingSingelPost();
    }
    const Delete = async() => {
        // console.log(post);
        await deletePost(value);
        window.location.replace("/posts");
        // setManage(false)
    }
    const featchingSingelPost = async () => {
        const res = await getSingelPost(id);
        setvalue(res.data);
        setPost(res.data)
        // console.log(res.data);
    }
    useEffect(() => {
        featchingSingelPost();
    }, [])
    // const damoPost = {
    //     title: value.title,
    //     disc: value.disc,
    //     auth: state.user.name,
    //     cata: ["sports", "gamming"]
    // }
    return (
        <div>
            {
                value.length == 0 ? <h1>Loading...</h1> :
                    <div className="Singelpost">
                        <img src="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        {/* <div className="tags"><b>Hacks</b>  <b>Social</b> <b>Life</b></div> */} <br />

                        {
                            manage ? <input onChange={handelChenge} autoFocus="true" name='title' className='titleInput' type="text" value={post.title} /> : <h1 className="titl">{value.title}</h1>
                        }


                        <div className="singlePostInfo">
                            <span>
                                Author:
                                <b className="singlePostAuthor">
                                    <Link className="link authorLink" to={`/posts?user=${value.auth}`}>
                                        {value.auth}
                                    </Link>
                                </b>
                            </span>
                            {
                                state.user &&
                                state.user.name == value.auth && <div className="postED">
                                    <i onClick={() => setManage(!manage)} className="ri-edit-line"></i>
                                    <i onClick={()=> Delete()} className="ri-delete-bin-line"></i>
                                </div>
                            }
                        </div>
                        <span className="prt">5 minute to read</span>
                        <span>{new Date(value.createdAt).toDateString()}</span>
                        {
                            manage ? <textarea name='disc' onChange={handelChenge} className='discInput' type="text" value={post.disc} /> : <p className="post_disc">{value.disc}</p>
                        }
                        {
                            manage && <button onClick={handelClick}>Update</button>
                        }
                    </div>
            }
        </div>
    )
}
export default Singelpost