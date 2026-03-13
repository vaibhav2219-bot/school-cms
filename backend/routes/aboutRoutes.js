const express = require("express")
const router = express.Router()

const aboutController = require("../controllers/aboutController")
const upload = require("../middleware/upload")

router.post("/save", upload.single("image"), aboutController.saveAbout)

router.get("/", aboutController.getAbout)

module.exports = router