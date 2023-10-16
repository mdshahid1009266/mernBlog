const userschema = require("../database/userSchema")
const signUp = async (req, res) => {
    const user = req.body;
    const newuser = userschema(user);
    try {
        await newuser.save();
        res.status(201).json(newuser);

    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
const logIn = async (req, res) => {
    const user = req.body;
    try {
        const User = await userschema.findOne({ email: user.email });
        if(User){
            if (User.password != user.password) {
                res.status(401).json("your email and password doesnot match");
            } else {
                const { password, ...others } = User._doc;
                res.status(201).json(others);
            } 
        }else{
            res.status(401).json("There is no user");
        }       
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
module.exports = { signUp, logIn };