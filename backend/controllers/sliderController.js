const Slider = require("../models/Slider")

// upload slider image
exports.addSlider = async (req,res) => {
    try{

        const slider = new Slider({
            image: req.file.filename,
            title: req.body.title,
            subtitle: req.body.subtitle
        })

        await slider.save()

        res.json(slider)

    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// get all sliders
exports.getSliders = async (req,res) => {
    try{
        const sliders = await Slider.find().sort({createdAt:-1})
        res.json(sliders)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// delete slider
exports.deleteSlider = async (req,res) => {
    try{
        await Slider.findByIdAndDelete(req.params.id)
        res.json({message:"Slider deleted"})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}