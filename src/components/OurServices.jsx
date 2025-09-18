import React from 'react'
import { FaCode, FaMobileAlt, FaChartLine, FaCloud } from 'react-icons/fa'

const servicesData = [
  {
    id: 1,
    icon: <FaCode className="text-5xl text-[#3692e5] mb-4" />,
    title: "Training Programs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    icon: <FaMobileAlt className="text-5xl text-[#3692e5] mb-4" />,
    title: "Mentoring Session",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    icon: <FaChartLine className="text-5xl text-[#3692e5] mb-4" />,
    title: "Coaching & Mentoring",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    icon: <FaCloud className="text-5xl text-[#3692e5] mb-4" />,
    title: "Technology",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
]

const OurServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Our Services
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12">
             <button className="px-6 py-2 bg-[#3692e5] font-medium text-white rounded-full border border-[#3692e5] hover:bg-transparent hover:text-[#3692e5] transition-all">
              view all
            </button>
        </div>
      </div>
    </section>
  )
}

export default OurServices
