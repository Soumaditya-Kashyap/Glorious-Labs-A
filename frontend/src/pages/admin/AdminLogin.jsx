import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";

export const AdminLogin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const res = await loginUser({ email, password })

      // allow only admin
      if (res.data.role !== "admin") {
        setError("Access denied. Only admin can login.")
        return
      }

      localStorage.setItem("token", res.data.token)

      navigate("/admin/dashboard")

    } catch (err) {

      setError(err.response?.data?.message || "Login failed")

    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-10 rounded-xl w-full max-w-md shadow-lg"
      >

        <h2 className="text-3xl font-bold text-center mb-8">
          Admin Login
        </h2>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 text-sm">Gmail</label>
          <input
            type="email"
            placeholder="Enter admin gmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 outline-none"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 text-sm">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 outline-none"
            required
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm mb-4">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-300 transition"
        >
          Login
        </button>

      </form>

    </div>
  )
}