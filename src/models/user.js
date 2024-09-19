const mongoose = require("mongoose");

//schema for database, what a user can have.
const userSchema = new mongoose.Schema({
  firstName:{
    type:String
  },
  lastName:{
    type:String
  },
  emailID:{
    type:String
  },
  password:{
    type:String
  },
  age:{
    type:Number
  },
  gender:{
    type:String
  }
})

//create model,"User" always start with captical letter.
module.exports = mongoose.model("User", userSchema);