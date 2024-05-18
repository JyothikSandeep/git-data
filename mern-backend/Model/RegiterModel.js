const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Jyothik:Jyothik@cluster0.ebdwcri.mongodb.net/data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("some error occured in database connection");
  });


// schema creation
const registerSchema=new mongoose.Schema({
    name:{
        type:String,
        requied:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const testModel=mongoose.model("register",registerSchema)
module.exports={testModel}