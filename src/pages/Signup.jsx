import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup, clearError } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import logo from "../assets/mediapicker.png";
import FaceSignup from "../components/FaceSignup";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [isAuthenticated, error, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password)
      return toast.warning("Please fill all fields");
    dispatch(signup({ name, email, password }));
  };

  return (
    <div className="min-h-screen flex w-full">
      {/* Right Side - Visuals (Swapped for Signup) */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-bl from-[#1a1a23] to-[#0f0f13] relative overflow-hidden items-center justify-center p-12 order-2">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-pink-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] bg-purple-600/30 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative z-10 text-center glass p-10 rounded-3xl border border-white/5 backdrop-blur-md">
          <img
            src={logo}
            alt="Logo"
            className="w-56 h-28 mx-auto mb-4 object-contain"
          />
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
            Join the Community
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-md">
            Create an account to save collections, download high-res assets, and
            more.
          </p>
        </div>
      </div>

      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#0f0f13] relative order-1">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Create an account
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1a1a23] border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1a1a23] border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 block mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1a1a23] border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none"
                  placeholder="Create a password"
                />
              </div>
            </div>

            <div className="flex items-center text-sm">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-700 rounded bg-[#1a1a23]"
              />
              <label htmlFor="terms" className="ml-2 block text-gray-400">
                I agree to the{" "}
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full py-3.5 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-lg transform transition-all hover:scale-[1.02] active:scale-[0.98] outline-none ring-offset-2 focus:ring-2 ring-purple-500"
            >
              Create Account
            </button>
          </form>
          <div className="mt-8 text-center border-t border-gray-700 pt-6">
            <p className="text-gray-400 mb-4">Or Signup with Face ID</p>
            <FaceSignup />
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
