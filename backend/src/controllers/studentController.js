
const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.setupStudentProfile = async (req, res) => {
  try {

    const {
      phoneNumber,
      currentCity,
      institudeName,
      degree,
      fieldOfStudy,
      graduationYear
    } = req.body

    const student = await User.findByIdAndUpdate(
      req.user.id,
      {
        phoneNumber,
        currentCity,
        institudeName,
        degree,
        fieldOfStudy,
        graduationYear
      },
      {
        new: true,
        runValidators: true
      }
    )

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      student
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }
}