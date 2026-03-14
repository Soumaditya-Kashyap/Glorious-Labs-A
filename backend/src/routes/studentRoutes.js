const express = require("express")
const router = express.Router()

const { setupStudentProfile } = require("../controllers/studentController")
const { authMiddleware } = require("../middleware/authMiddleware")
router.put("/setup-profile", authMiddleware, setupStudentProfile)

module.exports = router