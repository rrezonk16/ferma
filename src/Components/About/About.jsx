import React from 'react'
import Navbar from '../Navbar'

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-screen-lg mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About IoT</h1>
        <p className="text-lg text-gray-700 bg-white p-6 rounded-lg shadow-md mb-6">
          The Internet of Things (IoT) refers to the interconnected network of physical devices, vehicles, buildings, and other objects embedded with sensors, software, and network connectivity, enabling them to collect and exchange data. This technology allows for seamless communication and interaction between the physical and digital worlds, leading to greater automation, efficiency, and convenience in various aspects of daily life and industrial processes. IoT applications range from smart homes and wearable health monitors to intelligent transportation systems and industrial automation, transforming the way we live and work by providing enhanced control and insights through real-time data analysis.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tech Stack</h2>
        <p className="text-lg text-gray-700 bg-white p-6 rounded-lg shadow-md">
          Our IoT projects leverage a versatile tech stack that includes Arduino, C, Laravel, and React to create robust and efficient systems:
        </p>
        <br />
        <ul className="text-lg text-gray-700 bg-white p-6 rounded-lg shadow-md list-disc list-inside mb-6">
          <li className="mb-2"><strong>Arduino:</strong> A popular open-source electronics platform based on easy-to-use hardware and software. Arduino boards read inputs - light on a sensor, a finger on a button, or a Twitter message - and turn it into an output - activating a motor, turning on an LED, publishing something online.</li>
          <li className="mb-2"><strong>Laravel:</strong> A PHP framework that is elegant and easy to understand, Laravel simplifies tasks like routing, authentication, sessions, and caching, making it an excellent choice for building web applications and APIs that interact with IoT devices.</li>
          <li className="mb-2"><strong>React:</strong> A JavaScript library for building user interfaces, React is used to create responsive and dynamic front-end applications. Its component-based architecture allows for efficient updates and rendering of the user interface, providing a seamless user experience for interacting with IoT data.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sensors</h2>
        <p className="text-lg text-gray-700 bg-white p-6 rounded-lg shadow-md">
          Our IoT systems utilize a variety of sensors to monitor and collect data from the environment:
        </p>
        <br />
        <ul className="text-lg text-gray-700 bg-white p-6 rounded-lg shadow-md list-disc list-inside">
          <li className="mb-2">
            <strong>DHT11:</strong> This sensor measures two key environmental parameters:
            <ul className="list-inside list-disc ml-6">
              <li>Humidity</li>
              <li>Temperature</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>CCS811:</strong> A digital gas sensor for monitoring indoor air quality, measuring:
            <ul className="list-inside list-disc ml-6">
              <li>CO2 levels</li>
              <li>Total Volatile Organic Compounds (TVOC)</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Soil Moisture Sensor:</strong> This sensor is used to measure the moisture content of soil, helping in irrigation and agricultural applications.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
