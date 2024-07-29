const express = require("express");
const URL = require("../models/url.model")
const router = express.Router();
router.get("/",(req,res)=>{
    res.render("home",{})
})
router.get("/analytics",async(req,res)=>{
   const allUrls = await URL.find({});
   res.render("home",{allUrls});
})
module.exports = router;