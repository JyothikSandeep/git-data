// All exports
const express = require("express");
const app = express();
const cors=require('cors')

app.use(cors())
app.use(express.json())
app.get("/data",(req,res)=>{
  res.send("data send")
})
const {RegisterRoute} = require("./Routes/RegisterView");
app.use("/", RegisterRoute);

app.get("/",(req,res)=>{
  console.log("this is inside request ")
  res.send("hello")
})
app.listen(4000, () => {
  console.log("server is listening");
});
