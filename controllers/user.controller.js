const User = require("../models/registration.model");
const bcrypt = require("bcrypt");
const handleUserRegistration = async (req,res)=>{
const {username,email,password} = req.body;
const saltRound = 10;
const hashPassword = await bcrypt.hash(password,saltRound);
         await User.create({
            username: username,
            email: email,
            password: hashPassword
         })
res.redirect("/user/login");
}
const handleUserLogin = async(req,res)=>{
   try {
      const { username, password } = req.body;
  
      // Find the user by username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).send('Invalid credentials');
      }
  
      // Compare the provided password with the hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send('Invalid credentials');
      }
  
      res.redirect("/");
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).send('Internal server error');
    }
   


}
module.exports = {handleUserRegistration,handleUserLogin};