const SiteSettings = require("../models/SiteSettings")

// save or update settings
exports.saveSettings = async (req,res) => {
    try{

        let settings = await SiteSettings.findOne()

        if(settings){
            settings.schoolName = req.body.schoolName
            settings.phone = req.body.phone
            settings.email = req.body.email
            settings.address = req.body.address
            settings.facebook = req.body.facebook
            settings.twitter = req.body.instagram
            settings.youtube = req.body.youtube

            if(req.file){
                settings.logo = req.file.filename
            }

            await settings.save()
            return res.json(settings)
        }

        settings = new SiteSettings({
            schoolName: req.body.schoolName,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
            facebook: req.body.facebook,
            twitter: req.body.instagram,
            youtube: req.body.youtube,
            logo: req.file ? req.file.filename : ""
        })

        await settings.save()

        res.json(settings)

    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// get settings
exports.getSettings = async (req,res) => {
    try{
        const settings = await SiteSettings.findOne()
        res.json(settings)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}