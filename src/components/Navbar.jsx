import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mediapicker.png";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="px-6 md:px-10 flex justify-between items-center py-0 glass sticky top-0 z-30 mb-0">
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="MediaPicker Logo" className="h-22 w-46 object-contain" />
      </Link>

      <button
        onClick={toggleSidebar}
        className="p-2 hover:bg-white/10 rounded-full transition-colors group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-8 w-8 text-white group-hover:text-accent-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
