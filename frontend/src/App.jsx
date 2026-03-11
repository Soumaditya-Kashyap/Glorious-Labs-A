import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./pages/Home"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Internship } from "./components/Internship"
import { Service } from "./components/Service"
import { Register } from "./pages/Register"
import { Job } from "./components/Job"
import { Login } from "./pages/Login"
import  StudentDashboard  from "./pages/student/StudentDashboard"
import { AdminLogin } from "./pages/admin/AdminLogin"
import { AdminDashboard } from "./pages/admin/AdminDashboard"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/service" element={<Service />} />
        <Route path="/job" element={<Job />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/student/dashboard" element={<StudentDashboard />} />


        {/* Admin Routes */}
        <Route path="/soumaditya/rakibul/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />


        {/* page not found route */}
        <Route path="*" element={<h1 className="text-4xl font-bold text-center mt-20">404 - Page Not Found</h1>} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default App