const express = require("express");
const {handleUserRegistration,handleUserLogin} = require("../controllers/user.controller");
const router = express.Router();
router.get("/registration",async(req,res)=>{
    res.render("registration",{});
})
router.get("/login",async(req,res)=>{
    res.render("login",{});
})
router.post("/registration",handleUserRegistration);
router.post("/login",handleUserLogin);


module.exports = router;