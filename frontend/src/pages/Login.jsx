import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {

  const { login, loading, error } = useAuth()

  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    const data = await login(email,password)

    if(data){

     
        navigate("/student/dashboard")
      

    }

  }

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google"
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">

      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Student Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 outline-none"
          />

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold"
          >
            {loading ? "Loading..." : "Login"}
          </button>

        </form>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 bg-white text-black py-3 rounded font-semibold"
        >
          Continue with Google
        </button>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
};