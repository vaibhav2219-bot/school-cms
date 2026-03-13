const express = require("express")
const router = express.Router()

const managerController = require("../controllers/managerController")
const upload = require("../middleware/upload")

router.post("/save", upload.single("image"), managerController.saveManager)
router.get("/", managerController.getManager)

module.exports = router