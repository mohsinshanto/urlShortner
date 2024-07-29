const URL = require("../models/url.model");
const shortid = require("shortid");
const handleUrlGenerator = async(req,res)=>{
    const body = req.body;
    if(!body.url)return res.status(400).json({message:"Url is required"});
    const shortID = shortid();
    const entry=await URL.create({
        redirectUrl: body.url,
        shortId: shortID,
        visitHistory: []
    })
    res.render("home",entry);
    
}
const handRedirectURL = async(req,res)=>{
    const shortId = req.params.shortid;
    const entry = await URL.findOneAndUpdate({shortId},{
       $push:{
        visitHistory:{
            timestamp:Date.now(),
        }
       } 
    })
    res.redirect(entry.redirectUrl);
}

module.exports = {
    handleUrlGenerator,handRedirectURL
}