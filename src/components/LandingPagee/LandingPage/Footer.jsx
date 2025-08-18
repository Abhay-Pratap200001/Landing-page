// components/Footer.jsx

// Import social media icons from lucide-react (an icon library)
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" border-t border-gray-200">
      <div className="max-w-6xl mx-auto px- py-7">

        {/*  Top Section 
         Contains: Logo/Brand, Navigation links, Social icons*/}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <h3 className="text-xl font-semibold text-gray-800">🚀 CopyUI</h3>

          {/* Navigation Links Privacy Terms Contact */}
          <nav className="flex gap-6 text-gray-600 text-sm">
            <a href="#" className="hover:text-purple-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-purple-600 transition">Terms of Service</a>
            <a href="#" className="hover:text-purple-600 transition">Contact</a>
          </nav>


          {/* Social Media  Icons */}
          <div className="flex gap-4 text-gray-500">
            <a href="https://github.com/Abhay-Pratap200001" className="hover:text-gray-800 transition"><Github size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition"><Twitter size={20} /></a>
            <a href="http://www.linkedin.com/in/" className="hover:text-blue-700 transition"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} CopyUI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
