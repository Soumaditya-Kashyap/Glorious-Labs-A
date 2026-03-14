const express = require("express")
const router = express.Router()

const {
  createInternship,
  getInternships,
  purchaseInternship,
  verifyPayment
} = require("../controllers/internshipController")

const { authMiddleware, authorizeRole } = require("../middleware/authMiddleware")

router.post("/create", authMiddleware, authorizeRole("admin"), createInternship)

router.get("/all", getInternships)



module.exports = router