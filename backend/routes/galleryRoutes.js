const express = require("express")
const router = express.Router()

const galleryController = require("../controllers/galleryController")
const upload = require("../middleware/upload")

router.get("/", galleryController.getImages)

router.post("/upload", upload.single("image"), galleryController.uploadGallery)

router.delete("/:id", galleryController.deleteImage)

module.exports = router