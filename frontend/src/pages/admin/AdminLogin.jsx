import React, { useState } from "react";

export const AdminLogin = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
console.log("Email:", email);
console.log("Password:", password);
};

return ( <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">


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

    {/* Button */}
    <button
      type="submit"
      className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-300 transition"
    >
      Login
    </button>
  </form>

</div>

);
};
