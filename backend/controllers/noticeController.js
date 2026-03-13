const Notice = require("../models/Notice")

// add notice
exports.addNotice = async (req,res) => {
    try{
        const notice = new Notice(req.body)
        await notice.save()
        res.json(notice)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// get all notices
exports.getNotices = async (req,res) => {
    try{
        const notices = await Notice.find().sort({date:-1})
        res.json(notices)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// delete notice
exports.deleteNotice = async (req,res) => {
    try{
        await Notice.findByIdAndDelete(req.params.id)
        res.json({message:"Notice deleted"})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}