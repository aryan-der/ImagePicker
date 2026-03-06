import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, clearError } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import logo from "../assets/mediapicker.png";
import FaceLogin from "../components/FaceLogin";

const Login = () => {
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
    if (!email || !password) return toast.warning("Please fill all fields");
    dispatch(login({ email, password }));
  };

  return (
    <div className="min-h-screen flex w-full">
      {/* Left Side - Visuals */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#0f0f13] to-[#1a1a23] relative overflow-hidden items-center justify-center p-12">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-indigo-600/30 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative z-10 text-center glass p-10 rounded-3xl border border-white/5 backdrop-blur-md">
          <img
            src={logo}
            alt="Logo"
            className="w-56 h-28 mx-auto mb-4 object-contain"
          />
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-6">
            MediaPicker
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-md">
            Discover millions of breathtaking photos, videos, and GIFs. <br />{" "}
            Your creative journey starts here.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#0f0f13] relative">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Welcome back
            </h2>
            <p className="mt-2 text-gray-400">
              Please enter your details to sign in
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-gray-300 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1a1a23] border border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none"
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
                  className="w-full px-4 py-3 bg-[#1a1a23] border border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-700 rounded bg-[#1a1a23]"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-gray-400"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full py-3.5 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transform transition-all hover:scale-[1.02] active:scale-[0.98] outline-none ring-offset-2 focus:ring-2 ring-indigo-500"
            >
              Sign In
            </button>
          </form>
          <div className="mt-8 text-center border-t border-gray-700 pt-6">
            <p className="text-gray-400 mb-4">Or Login with Face ID</p>
            <FaceLogin />
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
