const mongoose = require("mongoose")

const principalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model("Principal", principalSchema)