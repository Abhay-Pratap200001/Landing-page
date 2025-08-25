import React, { useState } from "react";

import { FaEdit, FaExclamationTriangle, FaSearch } from "react-icons/fa";

// Importing project data from JSON file
import projectsData from "../../data/projectDtata.json";

// Main functional component
export default function P2() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    // Main wrapper div with background color and full height
    <div className="bg-[#f5f9ff] min-h-screen flex flex-col">
      
      {/*NAVBAR */}
      <nav className="flex flex-wrap md:flex-nowrap justify-between items-center bg-white px-4 md:px-6 py-3 shadow gap-4">
        
        {/* Left Side - Logo */}
        <div className="text-lg font-bold text-blue-600">AProjectO</div>

        {/* Middle - Search bar */}
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-full md:w-1/3">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for anything..."
            className="bg-transparent w-full outline-none text-sm"
          />
        </div>

        {/* Right Side - Profile section */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
          <img
            src="https://randomuser.me/api/portraits/men/41.jpg"
            alt="profile"
            className="w-10 h-10 rounded-full border"
          />
          <div className="text-sm text-center md:text-left">
            <p className="font-semibold leading-tight">Amira Agrawal</p>
            <p className="text-gray-500 text-xs">UI/UX Designer</p>
          </div>
        </div>
      </nav>
      {/* END NAVBAR  */}


      {/* PAGE CONTENT  */}
      <div className="flex-1 p-4 sm:p-6 lg:p-10 mt-6">
        
        {/* Header section (Projects title + Create button) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
          <h1 className="text-xl font-bold text-gray-800">Projects</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow w-full sm:w-auto">
            Create
          </button>
        </div>

        {/* ---------------- PROJECTS GRID ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Loop through projectsData and display each project */}
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition flex flex-col h-full">
              {/* Project Title + Status */}
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-bold text-lg flex items-center gap-2">
                  {project.title} <FaEdit className="text-gray-500" />
                </h2>
                
                {/* Status Badge - Different color depending on status */}
                <span
                  className={`text-sm px-2 py-1 rounded ${
                    project.status === "Ontrack"
                      ? "bg-green-100 text-green-600"
                      : project.status === "Delayed"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}>
                  {project.status}
                </span>
              </div>

              {/* Project Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Deadline / Date with warning icon */}
              <div className="flex items-center gap-2 text-red-500 font-semibold text-sm mb-4">
                <FaExclamationTriangle />
                {project.date}
              </div>

              {/* Footer (Members + Issues count) */}
              <div className="flex justify-between items-center mt-auto">
                
                {/* Project Members (team members profile pics) */}
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

                {/* Issues count */}
                <div className="text-gray-500 text-sm">
                  {project.issues} issues
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ---------------- END PROJECTS GRID ---------------- */}
      </div>
      {/* ---------------- END PAGE CONTENT ---------------- */}
    </div>
  );
}
