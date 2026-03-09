import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Glorious Lab</h2>
                    <p className="text-gray-400">
                        Building innovative web solutions and providing internship opportunities for students.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul>
                        <li><a href="#home" className="text-gray-400 hover:text-gray-200">Home</a></li>
                        <li><a href="#service" className="text-gray-400 hover:text-gray-200">Services</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-gray-200">About Us</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-gray-200">Contact</a></li>
                    </ul> 
                   
                </div>

                {/* Contact */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact</h2>
                    <p className="text-gray-400">Email: gloriouslab1@gmail.com</p>
                    <p className="text-gray-400">Phone: +91 XXXXX XXXXX</p>
                    <p className="text-gray-400">Location: Guwahati, Assam</p>
                </div>

            </div>

            {/* Bottom */}
            <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
                © 2026 Glorious Lab. All rights reserved.
            </div>
        </footer>

    );
};

export default Footer;
