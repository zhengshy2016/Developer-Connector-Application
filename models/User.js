const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    requried: true
  },
  email: {
    type: String,
    requried: true
  },
  password: {
    type: String,
    requried: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("users", UserSchema);
