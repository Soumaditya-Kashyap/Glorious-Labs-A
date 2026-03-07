const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI ||"mongodb+srv://rakibul:password@cluster0.mongodb.net/glorious_lab")

    console.log("MongoDB Connected")
  } catch (error) {
    console.error("Database connection error:", error)
    process.exit(1)
  }
}

module.exports = connectDB