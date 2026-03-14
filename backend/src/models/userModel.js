const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    default: null
  },

  googleId: {
    type: String,
    default: null
  },

  role: {
    type: String,
    enum: ["student", "admin"],
    default: "student"
  },
  // students setupProfile 
  phoneNumber: {
    type: String
  },
  currentCity: {
    type: String
  },
  institudeName: {
    type: String
  },
  degree: {
    type: String
  },
  fieldOfStudy: {
    type: String
  },
  graduationYear: { 
    type: String
  },

   

}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)