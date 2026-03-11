const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  )
}

// REGISTER USER
exports.registerUser = async (req, res) => {
  try {

    const { name, email, password, role } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(400).json({ message: "User already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "student"
    })

    const token = generateToken(user)

    res.status(201).json({
      message: "User registered successfully",
      token,
      role: user.role,
      user
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      message: "Server error"
    })

  }
}


// LOGIN USER
exports.loginUser = async (req, res) => {

  try {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    if (!user.password) {
      return res.status(400).json({ message: "Use Google login" })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" })
    }

    const token = generateToken(user)

    res.status(200).json({
      message: "Login successful",
      token,
      role: user.role,
      user
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      message: "Server error"
    })

  }

}


// GET CURRENT USER
exports.getUser = async (req, res) => {

  try {

    const user = await User
      .findById(req.user.id)
      .select("-password")

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      })
    }

    res.status(200).json(user)

  } catch (error) {

    console.error(error)

    res.status(500).json({
      message: "Server error"
    })

  }

}


// GOOGLE LOGIN SUCCESS
exports.googleLoginSuccess = (req, res) => {

  try {

    if (!req.user) {
      return res.status(401).json({
        message: "Authentication failed"
      })
    }

    const token = generateToken(req.user)

    res.status(200).json({
      message: "Google login successful",
      token,
      role: req.user.role,
      user: req.user
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      message: "Server error"
    })

  }

}