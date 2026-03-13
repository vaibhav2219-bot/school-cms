const mongoose = require("mongoose")

const siteSettingsSchema = new mongoose.Schema({
    schoolName: String,
    phone: String,
    email: String,
    address: String,
    logo: String,
    facebook: String,
    twitter: String,
    youtube: String
})

module.exports = mongoose.model("SiteSettings", siteSettingsSchema)