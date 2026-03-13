const express = require("express")
const router = express.Router()

const settingsController = require("../controllers/siteSettingsController")
const upload = require("../middleware/upload")

router.post("/save", upload.single("logo"), settingsController.saveSettings)
router.get("/", settingsController.getSettings)

module.exports = router