const express = require("express")
const router = express.Router()
const passport = require("passport")

const {
  registerUser,
  loginUser,
  getUser,
  googleLoginSuccess
} = require("../controllers/authController")

const authMiddleware = require("../middleware/authMiddleware")

router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/me", authMiddleware, getUser)

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
)

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleLoginSuccess
)

module.exports = router