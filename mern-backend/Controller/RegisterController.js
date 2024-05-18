const {testModel}=require('../Model/RegiterModel')
const registerController=async(req,res)=>{
    // testModel.insertOne({name:"sandy",phone:"9182499199",password:"sandy"})
    // console.log(req.body)
    testModel.create(req.body);
    const d= await testModel.find()
    console.log(d)
    res.send("hello man")
}

module.exports={registerController};    