const express = require("express")
const router = express.Router()

const principalController = require("../controllers/principalController")
const upload = require("../middleware/upload")

router.post("/save", upload.single("image"), principalController.savePrincipal)
router.get("/", principalController.getPrincipal)

module.exports = router