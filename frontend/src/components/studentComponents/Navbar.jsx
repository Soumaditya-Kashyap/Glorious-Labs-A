import React, { useState } from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-slate-900 border-b border-slate-700 px-6 py-4">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/student/dashboard" className="text-xl font-bold text-white">
          Glorious<span className="text-blue-400">Lab</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slate-300 font-medium">

          <li>
            <Link to="/student/dashboard" className="hover:text-white">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/student/internships" className="hover:text-white">
              My Internships
            </Link>
          </li>

          <li>
            <Link to="/student/reports" className="hover:text-white">
              Reports
            </Link>
          </li>

          <li>
            <Link to="/student/progress" className="hover:text-white">
              Progress
            </Link>
          </li>
          <li>
            <Link to="/student/quick-support" className="hover:text-white">
              Quick Support
            </Link>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Profile */}
          <Link to="/student/profile">
            <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold cursor-pointer">
              R
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-slate-300 font-medium">

          <li>
            <Link to="/student/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/student/internships">My Internships</Link>
          </li>

          <li>
            <Link to="/student/reports">Reports</Link>
          </li>

          <li>
            <Link to="/student/progress">Progress</Link>
          </li>

        </ul>
      )}

    </nav>
  )
}