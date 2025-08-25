import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import

const Pagefirst = () => {
  const roles = [
    "Team Lead",
    "Frontend",
    "Backend",
    "Testing",
    "Documentation",
  ];

  const navigate = useNavigate(); // ✅ hook for navigation

  const handleCreate = () => {
    // yaha aap apna save logic bhi laga sakte ho (API call etc.)
    navigate("/p2"); // ✅ redirect user to P2 page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl p-6 md:p-10">
        {/* Project Title & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Project Title</label>
            <input
              type="text"
              className="p-2.5 outline-none border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
              placeholder="Enter project title"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Project Type</label>
            <input
              type="text"
              className="p-2.5 outline-none border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
              placeholder="Web / App / AI etc."
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              className="p-2.5 outline-none border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">End Date</label>
            <input
              type="date"
              className="p-2.5 outline-none border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <label className="font-medium text-gray-700">
            Project Description
          </label>
          <textarea
            className="mt-2 w-full h-32 outline-none border border-gray-300 rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter project description..."
          ></textarea>
        </div>

        {/* Roles */}
        <div className="mt-10 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Project Roles
          </h2>
          <div className="space-y-4">
            {roles.map((role) => (
              <div
                key={role}
                className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 gap-2"
              >
                <label className="sm:w-36 font-medium text-gray-600">
                  {role}
                </label>
                <input
                  type="text"
                  placeholder={`Enter ${role} Name..`}
                  className="flex-1 outline-none border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400"
                />
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="h-5 w-5 accent-blue-500" />
                  <span className="text-sm text-gray-500">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-10">
          <button
            onClick={handleCreate} // ✅ redirect on click
            className="px-6 py-2 rounded-full text-white bg-blue-500 hover:bg-blue-600 shadow-md transition"
          >
            Create
          </button>
          <button className="px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagefirst 
