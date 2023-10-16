const mongoose=require("mongoose");

const connection=async()=>{
    try {
        await mongoose.connect("mongodb+srv://mdshahid100926:mdshahid7384@cluster0.leschaa.mongodb.net/?retryWrites=true&w=majority")
        // await mongoose.connect("mongodb+srv://mdshahid100926:mdshahid7384@cluster0.leschaa.mongodb.net/?retryWrites=true&w=majority")
        console.log("database is connected");
    } catch (error) {
        console.log(error);
    }
}
module.exports=connection;