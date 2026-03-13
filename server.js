const express = require("express")
const cors = require("cors")

const app = express()
const connectDB = require("./backend/config/db")

const noticeRoutes = require("./backend/routes/noticeRoutes")
const galleryRoutes = require("./backend/routes/galleryRoutes")
const sliderRoutes = require("./backend/routes/sliderRoutes")
const facilityRoutes = require("./backend/routes/facilityRoutes")
const principalRoutes = require("./backend/routes/principalRoutes")
const siteSettingsRoutes = require("./backend/routes/siteSettingsRoutes")
const authRoutes = require("./backend/routes/authRoutes")
const downloadRoutes = require("./backend/routes/downloadRoutes")
const aboutRoutes = require("./backend/routes/aboutRoutes")
const contactRoutes = require("./backend/routes/contactRoutes")

app.use(cors())
app.use(express.json())

app.use("/uploads", express.static("uploads"))

connectDB()

app.use("/api/notices", noticeRoutes)
app.use("/api/gallery", galleryRoutes)
app.use("/api/slider", sliderRoutes)
app.use("/api/facilities", facilityRoutes)
app.use("/api/principal", principalRoutes)
app.use("/api/settings", siteSettingsRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/downloads",downloadRoutes)
app.use("/api/about", aboutRoutes)
app.use("/api/contact",contactRoutes)

app.get("/", (req,res)=>{
res.send("School CMS Server Running")
})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})