const Contact = require("../models/Contact")

exports.saveMessage = async(req,res)=>{

const contact = new Contact({

name:req.body.name,
email:req.body.email,
message:req.body.message

})

await contact.save()

res.json({success:true})

}

exports.getMessages = async(req,res)=>{

const messages = await Contact.find().sort({date:-1})

res.json(messages)

}