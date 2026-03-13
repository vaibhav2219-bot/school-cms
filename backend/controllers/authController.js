const Admin = require("../models/Admin")

exports.login = async (req,res)=>{

const {username,password} = req.body

const admin = await Admin.findOne({username:username,password:password})

if(admin){

res.json({success:true})

}else{

res.json({success:false})

}

}