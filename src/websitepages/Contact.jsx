import React from 'react'

export default function contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-5xl w-full grid md:grid-cols-2 overflow-hidden">
        
        {/* Left Side */}
        <div className="bg-blue-600 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 text-blue-100">
            Have any questions or want to work together? Feel free to contact us.
          </p>

          <div className="space-y-4">
            <p>📍 Delhi, India</p>
            <p>📧 contact@example.com</p>
            <p>📞 +91 XXXXXXXXXXX</p>
          </div>
        </div>

        {/* Right Side (Form UI Only) */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send Message
          </h2>

          <form className="space-y-5">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            {/* Button */}
            <button
              type="button"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
