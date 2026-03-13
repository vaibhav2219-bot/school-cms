const Manager = require("../models/Manager.js")

exports.saveManager = async (req,res)=>{

let manager = await Manager.findOne()

if(!manager){
manager = new Manager()
}

manager.name = req.body.name
manager.message = req.body.message

if(req.file){
manager.image = req.file.filename
}

await manager.save()

res.json({success:true})

}


exports.getManager = async (req,res)=>{

const manager = await Manager.findOne()

res.json(manager)

}