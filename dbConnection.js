const mongoose = require("mongoose");
async function connectionToMongo(url){
   return await mongoose.connect(url);
}
module.exports = {connectionToMongo};
