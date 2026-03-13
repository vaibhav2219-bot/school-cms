const mongoose = require("mongoose")

const managerSchema = new mongoose.Schema({

name:String,
message:String,
image:String

})

module.exports = mongoose.model("Manager", managerSchema)