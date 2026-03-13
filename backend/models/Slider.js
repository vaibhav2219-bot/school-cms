const mongoose = require("mongoose")

const sliderSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Slider", sliderSchema)