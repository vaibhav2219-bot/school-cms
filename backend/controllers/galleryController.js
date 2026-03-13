const Gallery = require("../models/Gallery")

exports.uploadGallery = async (req,res)=>{

const gallery = new Gallery({
title:req.body.title,
image:req.file.filename
})

await gallery.save()

res.json({success:true})

}

// get images
exports.getImages = async (req,res) => {
    try{
        const images = await Gallery.find().sort({uploadedAt:-1})
        res.json(images)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// delete image
exports.deleteImage = async (req,res) => {
    try{
        await Gallery.findByIdAndDelete(req.params.id)
        res.json({message:"Image deleted"})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}