const mongoose = require("mongoose")

const internshipSchema = new mongoose.Schema({

  domain_name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  duration: {
    type: String,
    required: true
  },
  seats:{
    type:Number,
    required:true
  },
  level: {
    type: String,
    required: true
  },
  mentorshipCost:{
    type:Number,
    required:true
  },
documentationCost: {

    type:Number,

    required:true
  },
  hrSupport: {
    type:Number,
    required:true
  },
  studyMaterial: {
    type:Number,

    required:true
  },
  jobPreference_cost: {
    type:Number,
    required:true
  },
  totalCost: {
    type:Number,
    required:true
  },
  skills: [
    {
      type: String
    }
  ],
  perks: [
    {
      type: String
    }
  ],
  start_date:{
    type:String
  },
  end_date:{
        type:Date
       
  },


  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  students: [
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },

      paymentId: {
        type: String
      },

      orderId: {
        type: String
      },

      amount: {
        type: Number
      },

      paymentStatus: {
        type: String,
        enum: ["pending", "paid"],
        default: "pending"
      },

      purchasedAt: {
        type: Date,
        default: Date.now
      }
    }
  ],

  isActive: {
    type: Boolean,
    default: true
  }

}, { timestamps: true })

module.exports = mongoose.model("Internship", internshipSchema)