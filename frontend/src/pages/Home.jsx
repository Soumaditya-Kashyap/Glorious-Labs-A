import React from "react";
import bgImage from "../assets/tepm.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full text-white">

   <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-16 py-6 bg-transparent z-50">
  <div className="flex gap-10 text-sm tracking-widest text-white">
    <a href="#home" className="hover:text-gray-300">HOME</a>
    <a href="#service" className="hover:text-gray-300">SERVICE</a>
    <a href="#about" className="hover:text-gray-300">ABOUT</a>
    <a href="#contact" className="hover:text-gray-300">CONTACT</a>
  </div>
</nav>

      {/* Home Section */}
      <section
        id="home"
        className="h-screen bg-cover bg-center flex items-center justify-end pr-24"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-md">

          {/* Job / Internship */}
          <div className="mb-6">
            <Link to="/job" className="text-xl font-semibold hover:text-gray-300 border border-white px-4 py-1 rounded-full ">
              JOB
            </Link>

            <Link
              to="/internship"
              className="text-xl font-semibold hover:text-gray-300 ml-6 border border-white px-4 py-1 rounded-full"
            >
              INTERNSHIP
            </Link>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Glorious Labs
          </h1>

          {/* Description */}
          <p className="text-sm text-gray-200 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Register Button */}
          <Link
            to="/register"
            className="border border-white px-10 py-3 rounded-full hover:bg-white hover:text-purple-600 transition"
          >
            REGISTER
          </Link>

        </div>
      </section>

      {/* Service Section */}
      <section
        id="service"
        className="h-screen flex items-center justify-center bg-gray-900"
      >
        <h2 className="text-4xl font-bold">Our Services</h2>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen flex items-center justify-center bg-gray-800"
      >
        <h2 className="text-4xl font-bold">About Us</h2>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-gray-700"
      >
        <h2 className="text-4xl font-bold">Contact Us</h2>
      </section>

    </div>
  );
};

export default Home;