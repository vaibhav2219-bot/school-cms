const Principal = require("../models/Principal")

// add or update principal
exports.savePrincipal = async (req,res) => {
    try{

        let principal = await Principal.findOne()

        if(principal){
            principal.name = req.body.name
            principal.message = req.body.message

            if(req.file){
                principal.image = req.file.filename
            }

            await principal.save()
            return res.json(principal)
        }

        principal = new Principal({
            name: req.body.name,
            message: req.body.message,
            image: req.file ? req.file.filename : ""
        })

        await principal.save()

        res.json(principal)

    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// get principal
exports.getPrincipal = async (req,res) => {
    try{
        const principal = await Principal.findOne()
        res.json(principal)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}