import React from 'react'
import Navbar from '../Navbar'

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-screen-lg mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-4">
            We would love to hear from you! Whether you have a question about our projects, technologies, or anything else, our team is ready to answer all your questions.
          </p>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
            <ul className="text-lg text-gray-700 list-disc list-inside mt-2">
              <li><strong>Phone:</strong> <a href="tel:+38349155083" className="text-blue-600 hover:underline">+383 49 155 083</a></li>
              <li><strong>Email:</strong> <a href="mailto:rk67720@ubt-uni.net" className="text-blue-600 hover:underline">rk67720@ubt-uni.net</a></li>
              <li><strong>Website:</strong> <a href="https://rrezonkrasniqi.netlify.app/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Click Here</a></li>
              <li><strong>Github:</strong> <a href="https://github.com/rrezonk16/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">rrezonk16</a></li>

              <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rrezon-krasniqi/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Rrezon Krasniqi</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
