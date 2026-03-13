const mongoose = require("mongoose")

const downloadSchema = new mongoose.Schema({

title:String,
file:String,
date:{type:Date,default:Date.now}

})

module.exports = mongoose.model("Download",downloadSchema)