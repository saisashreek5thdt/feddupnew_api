const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  ipAddress:{
    type:String,
  },
  os:{
    type:String,
  },
  network:{
    type:String,
  },
  browser:{
    type:String,
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);