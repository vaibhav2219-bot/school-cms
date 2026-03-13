const express = require("express")
const router = express.Router()

const sliderController = require("../controllers/sliderController")
const upload = require("../middleware/upload")

router.post("/add", upload.single("image"), sliderController.addSlider)
router.get("/", sliderController.getSliders)
router.delete("/:id", sliderController.deleteSlider)

module.exports = router