const express = require("express")
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")

const app = express()

app.use(cors())
app.use(express.json())

// connectDB()// still not working

app.get("/", (req, res) => {
  res.send("Backend Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})