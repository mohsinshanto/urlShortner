const express = require("express");
const {connectionToMongo} = require("./dbConnection");
const urlRoute = require("./routes/url.route");
const staticRoute = require("./routes/staticRoute");
const userRoute = require("./routes/user.route");
const app = express();
const port = 8001;
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectionToMongo("mongodb://localhost:27017/short-url").then(()=>console.log("db Connected"));
app.use("/url",urlRoute);
app.use("/user",userRoute);
app.use("/",staticRoute);
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})
