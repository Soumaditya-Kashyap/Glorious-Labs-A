const Internship = require("../models/internshipModel")
const Razorpay = require("razorpay")
const crypto = require("crypto")

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET
// })


exports.createInternship = async (req, res) => {
  try {

    const {
      domain_name,
      description,
      price,
      duration,
      seats,
      level,
      mentorshipCost,
      documentationCost,
      hrSupport,
      studyMaterial,
      jobPreference_cost,
      skills,
      perks,
     
    } = req.body

    const totalCost =
      Number(price) +
      Number(mentorshipCost) +
      Number(documentationCost) +
      Number(jobPreference_cost)

    const internship = new Internship({
      domain_name,
      description,
      price,
      duration,
      seats,
      level,
      mentorshipCost,
      documentationCost,
      hrSupport,
      studyMaterial,
      jobPreference_cost,
      totalCost,
      skills,
      perks,
      createdBy: req.user.id
    })

    await internship.save()

    res.status(201).json({
      success: true,
      message: "Internship created successfully",
      internship
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }
}




// GET ALL INTERNSHIPS
exports.getInternships = async (req, res) => {
  try {

    const internships = await Internship
      .find({ isActive: true })
      .populate("createdBy", "name email")

    res.status(200).json({
      success: true,
      internships
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }
}

/*
--------------------------------
Student Create Razorpay Order
--------------------------------
*/
// exports.purchaseInternship = async (req, res) => {

//   try {

//     const { internshipId } = req.body

//     const internship = await Internship.findById(internshipId)

//     if (!internship) {
//       return res.status(404).json({ message: "Internship not found" })
//     }

//     const options = {
//       amount: internship.price * 100,
//       currency: "INR",
//       receipt: "receipt_" + Date.now()
//     }

//     const order = await razorpay.orders.create(options)

//     res.json({
//       success: true,
//       order
//     })

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message
//     })

//   }

// }

// /*
// --------------------------------
// Verify Payment & Save Student
// --------------------------------
// */
// exports.verifyPayment = async (req, res) => {

//   try {

//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       internshipId
//     } = req.body

//     const body = razorpay_order_id + "|" + razorpay_payment_id

//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(body.toString())
//       .digest("hex")

//     if (expectedSignature === razorpay_signature) {

//       await Internship.findByIdAndUpdate(
//         internshipId,
//         {
//           $push: {
//             students: {
//               student: req.user._id,
//               paymentId: razorpay_payment_id,
//               orderId: razorpay_order_id,
//               amount: req.body.amount,
//               paymentStatus: "paid"
//             }
//           }
//         }
//       )

//       res.json({
//         success: true,
//         message: "Payment successful and internship purchased"
//       })

//     } else {

//       res.status(400).json({
//         success: false,
//         message: "Payment verification failed"
//       })

//     }

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message
//     })

//   }

// }