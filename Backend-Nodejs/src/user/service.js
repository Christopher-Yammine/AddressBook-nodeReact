const User = require('../../model/User');

async function addUser(body, hashPassword) {
    const {
      name,
      email,
    } = body;
  
    const user = new User({
      name,
      email,
      password: hashPassword
    });
  
    return await user.save();
  }
  async function getUsers() {
    return await User.find();
  }
  
  module.exports={
    addUser,
    getUsers
  }