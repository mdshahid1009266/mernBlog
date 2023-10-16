const route=require("express").Router();
// const {createPost,updatePost,deletePost,getSingelPost,getAllPost}=require("./postControll")
const {createPost,getAllPost,getSingelPost,updatePost,deletePost}=require("./postControll")

route.post("/write",createPost)
route.get("/posts",getAllPost)
route.get("/posts/:id",getSingelPost)
route.put("/posts/:id",updatePost)
route.delete("/posts/:id",deletePost)
// route.post("/logIn",logIn)
// route.getSingelPost("/:id",getAllPost);
// route.getallpost("/posts",getAllPost);

module.exports = route;