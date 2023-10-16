const express = require("express");
const app=express();

const connection =require("./database/connection");
connection();

const cors =require("cors");
app.use(cors(
    {
        origin: ["https://shahid-mern-blog.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

const bodyparser=require("body-parser");
app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));

const userRouter = require("./routers/userRoute");
app.use(userRouter);
const postRouter = require("./routers/postRoute");
app.use(postRouter);

app.listen(2000,()=>console.log(`your server is running on http://localhost:2000`));
