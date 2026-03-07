import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">

      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Student Registration
        </h2>

        <form className="space-y-4">

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded bg-gray-700 outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-700 outline-none"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded bg-gray-700 outline-none"
          />

          {/* College */}
          <input
            type="text"
            placeholder="College / University"
            className="w-full p-3 rounded bg-gray-700 outline-none"
          />

          {/* Course */}
          <input
            type="text"
            placeholder="Course (B.Tech / BCA / etc)"
            className="w-full p-3 rounded bg-gray-700 outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-700 outline-none"
          />

          {/* Register Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold"
          >
            Register
          </button>

        </form>

        {/* Google Login */}
        <button
          className="w-full mt-4 bg-white text-black py-3 rounded font-semibold"
        >
          Continue with Google
        </button>

        {/* Already Registered */}
        <p className="text-center mt-4 text-sm">
          Already registered?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};