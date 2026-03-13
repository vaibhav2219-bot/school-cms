const mongoose = require("mongoose")

const facilitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Facility", facilitySchema)