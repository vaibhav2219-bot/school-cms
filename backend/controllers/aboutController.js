const About = require("../models/About")

exports.saveAbout = async(req,res)=>{

let about = await About.findOne()

if(!about) about = new About()

about.title = req.body.title
about.description = req.body.description

if(req.file){
about.image = req.file.filename
}

await about.save()

res.json({success:true})

}

exports.getAbout = async(req,res)=>{

const about = await About.findOne()

res.json(about)

}