const route=require("express").Router();
const {signUp,logIn}=require("./userControll")

route.get("/",(req,res)=>{
    res.send("its home")
})
route.post("/signup",signUp)
route.post("/logIn",logIn)

module.exports=route;