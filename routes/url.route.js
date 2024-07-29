const express = require("express");
const router = express.Router();
const {handleUrlGenerator,handRedirectURL}= require("../controllers/url.controller")
router.post("/",handleUrlGenerator);
router.get("/:shortid",handRedirectURL);

module.exports = router;