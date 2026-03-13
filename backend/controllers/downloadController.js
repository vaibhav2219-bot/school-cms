const Download = require("../models/Download")

exports.uploadFile = async(req,res)=>{

const download = new Download({

title:req.body.title,
file:req.file.filename

})

await download.save()

res.json({success:true})

}

exports.getFiles = async(req,res)=>{

const files = await Download.find().sort({date:-1})

res.json(files)

}

exports.deleteFile = async(req,res)=>{

await Download.findByIdAndDelete(req.params.id)

res.json({success:true})

}