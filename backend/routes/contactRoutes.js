const express = require("express")
const router = express.Router()

const contactController = require("../controllers/contactController")

router.post("/send",contactController.saveMessage)

router.get("/",contactController.getMessages)

module.exports = router