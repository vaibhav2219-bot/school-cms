const mongoose = require("mongoose")

const gallerySchema = new mongoose.Schema({
title:String,
image:String
},{timestamps:true})

module.exports = mongoose.model("Gallery",gallerySchema)