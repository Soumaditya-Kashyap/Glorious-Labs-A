import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./pages/Home"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Service } from "./components/Service"
import { Register } from "./pages/Register"
import { Job } from "./components/Job"
import { Login } from "./pages/Login"
import  StudentDashboard  from "./pages/student/StudentDashboard"
import { AdminLogin } from "./pages/admin/AdminLogin"
import { AdminDashboard } from "./pages/admin/AdminDashboard"
import { Profile } from "./components/studentComponents/Profile"
import { Progress } from "./components/studentComponents/Progress"
import { Report } from "./components/studentComponents/Report"
import {MyInternship} from "./components/studentComponents/MyInternship"
import { CreateInternShip } from "./components/adminComponents/CreateInternShip"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/job" element={<Job />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/internships" element={<MyInternship />} />
        <Route path="/student/reports" element={<Report />} />
        <Route path="/student/progress" element={<Progress />} />


        {/* Admin Routes */}
        <Route path="/soumaditya/rakibul/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/create-internship" element={<CreateInternShip />} />


        {/* page not found route */}
        <Route path="*" element={<h1 className="text-4xl font-bold text-center mt-20">404 - Page Not Found</h1>} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default App