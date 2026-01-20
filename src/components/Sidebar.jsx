import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/mediapicker.png";
import { useDispatch } from 'react-redux';
import { logout } from '../redux/features/authSlice';
import { toast } from 'react-toastify';
import ConfirmationModal from './ConfirmationModal';

const Sidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    dispatch(logout());
    setIsLogoutModalOpen(false);
    onClose();
    toast.info("Logged out successfully");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar Content */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#0f0f13]/90 glass z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="MediaPicker Logo" className="h-22 w-46 object-contain" />
              </Link>
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 space-y-4">
            <NavLink
              to="/"
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                  ? 'bg-gradient-to-r from-indigo-600/50 to-purple-600/50 border border-white/10 shadow-lg'
                  : 'hover:bg-white/5'
                }`
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="font-medium">Search</span>
            </NavLink>

            <NavLink
              to="/collection"
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                  ? 'bg-gradient-to-r from-indigo-600/50 to-purple-600/50 border border-white/10 shadow-lg'
                  : 'hover:bg-white/5'
                }`
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <span className="font-medium">Collection</span>
            </NavLink>
          </nav>

          {/* Logout Button */}
          <div className="pt-6 border-t border-white/10">
            <button
              onClick={handleLogout}
              className="cursor-pointer w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </div>


      <ConfirmationModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={confirmLogout}
        title="Sign Out"
        message="Are you sure you want to sign out?"
        confirmText="Sign Out"
        variant="primary"
      />
    </>
  );
};

export default Sidebar;
