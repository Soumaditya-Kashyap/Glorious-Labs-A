import React from "react";
import { Link } from "react-router-dom";



export const Login = () => {

    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">

      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Student Login
        </h2>

        {/* Login Form */}
        <form className="space-y-4">

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-700 outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-700 outline-none"
          />

          {/* Login Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold"
          >
            Login
          </button>

        </form>

        {/* Google Login */}
        <button
          className="w-full mt-4 bg-white text-black py-3 rounded font-semibold"
        >
          Continue with Google
        </button>

        {/* Register Link */}
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