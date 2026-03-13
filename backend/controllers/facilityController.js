const Facility = require("../models/Facility")

// add facility
exports.addFacility = async (req,res) => {
    try{
        const facility = new Facility(req.body)
        await facility.save()
        res.json(facility)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// get facilities
exports.getFacilities = async (req,res) => {
    try{
        const facilities = await Facility.find().sort({createdAt:-1})
        res.json(facilities)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// delete facility
exports.deleteFacility = async (req,res) => {
    try{
        await Facility.findByIdAndDelete(req.params.id)
        res.json({message:"Facility deleted"})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}