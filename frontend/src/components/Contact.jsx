import React from "react";

export const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

            <p className="text-gray-300 mb-6">
              If you have any questions, project ideas, or want to collaborate
              with us, feel free to contact our team.
            </p>

            <p className="text-gray-300 mb-3">
              📧 Email: gloriouslab1@gmail.com
            </p>

            <p className="text-gray-300 mb-3">
              📞 Phone: +91 XXXXX XXXXX
            </p>

            <p className="text-gray-300">
              📍 Location: Guwahati, Assam, India
            </p>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-800 p-8 rounded-xl space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-700 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-700 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded bg-gray-700 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-300 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};