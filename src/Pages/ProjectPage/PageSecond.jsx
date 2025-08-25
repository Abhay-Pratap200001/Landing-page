import React, { useState } from "react";
import { FaEdit, FaExclamationTriangle, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import projectsData from "../../data/projectDtata.json";

export default function P2() {
  const [currentPage, setCurrentPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#f5f9ff] min-h-screen flex flex-col mt-10">
      {/* NAVBAR */}
      <nav className="top-0 w-full flex flex-wrap md:flex-nowrap justify-between items-center  bg-white px-4 md:px-6 py-3 shadow gap-4 fixed z-40 ">
        
        {/* Left Side - Logo */}
        <div className="text-lg font-bold text-blue-600">AProjectO</div>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-2xl text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Middle + Right Section (hidden on mobile, show in dropdown) */}
        <div className={`flex-col md:flex md:flex-row md:items-center md:gap-6 absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto px-4 md:px-0 py-4 md:py-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out
          ${menuOpen ? "top-14 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"}`}>
          
          {/* Search bar */}
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-full md:w-72 mb-4 md:mb-0">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search for anything..."
              className="bg-transparent w-full outline-none text-sm"
            />
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/41.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full border"
            />
            <div className="text-sm">
              <p className="font-semibold leading-tight">Amira Agrawal</p>
              <p className="text-gray-500 text-xs">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </nav>
      {/* END NAVBAR */}

      {/* PAGE CONTENT */}
      <div className="flex-1 p-4 sm:p-6 lg:p-10 mt-6">
        {/* Header section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
          <h1 className="text-xl font-bold text-gray-800">Projects</h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-100">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-bold text-lg flex items-center gap-2">
                  {project.title} <FaEdit className="text-gray-500" />
                </h2>
                <span
                  className={`text-sm px-2 py-1 rounded ${
                    project.status === "Ontrack"
                      ? "bg-green-100 text-green-600"
                      : project.status === "Delayed"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center gap-2 text-red-500 font-semibold text-sm mb-4">
                <FaExclamationTriangle />
                {project.date}
              </div>

              <div className="flex justify-between items-center mt-auto">
                <div className="flex -space-x-2">
                  {project.members.map((member, i) => (
                    <img
                      key={i}
                      src={member.image}
                      alt={member.name}
                      title={member.name}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="text-gray-500 text-sm">
                  {project.issues} issues
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* END PAGE CONTENT */}
    </div>
  );
}
