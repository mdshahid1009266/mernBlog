const postschema = require("../database/postSchema");

const createPost = async (req, res) => {
    const post = req.body;
    // console.log(post);
    try {
        const newPost = postschema(post);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
const updatePost = async (req, res) => {
    const updatePostData = req.body;
    try {
        const post = await postschema.findById(req.params.id);
        if (post.auth == updatePostData.auth) {
            try {
                const updatedPost = await postschema.updateOne({ _id: req.params.id }, updatePostData);
                res.status(201).json(updatedPost);
            } catch (error) {
                res.status(401).json({ message: error.message });
            }
        } else res.status(401).json("You Can Update only your post");
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
const deletePost = async (req, res) => {
    const {user} = req.body;
    try {
        const post = await postschema.findById(req.params.id);
        if (post.auth === user.auth) {
            try {
                // await post.delete();
                await postschema.deleteOne({_id:req.params.id})
                res.status(201).json("post delete succesfully");
            } catch (error) {
                res.status(401).json({ message: error.message });
            }
        } else {
            res.status(401).json("You Can Delete only your post");
        }
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
const getSingelPost = async (req, res) => {
    try {
        const post = await postschema.findById(req.params.id);
        res.status(201).json(post);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
const getAllPost = async (req, res) => {
    const username = req.query.user;
    try {
        let posts;
        if(username){
            const searchName=username.replace("%20","");
            posts = await postschema.find({auth:searchName });
        }else{
            posts = await postschema.find({});
        }
        res.status(201).json(posts);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

// module.exports={createPost,updatePost,deletePost,getSingelPost,getAllPost}
module.exports = { createPost, getAllPost, getSingelPost, updatePost, deletePost }