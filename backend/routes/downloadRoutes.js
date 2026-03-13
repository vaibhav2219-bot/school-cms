const express = require("express")
const router = express.Router()

const downloadController = require("../controllers/downloadController")
const upload = require("../middleware/upload")

router.post("/upload",upload.single("file"),downloadController.uploadFile)
router.get("/",downloadController.getFiles)
router.delete("/:id",downloadController.deleteFile)

module.exports = router