import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full bg-[#0f0f13]/80 backdrop-blur-md border-t border-white/5 py-8 mt-auto z-40 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Copyright */}
                    <div className="text-gray-400 text-sm font-medium">
                        © {new Date().getFullYear()} <a href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold">MediaPicker</a>. All rights reserved.
                    </div>

                    {/* Links */}
                    <div className="flex space-x-6">
                        <Link to="/privacy-policy" className="text-gray-500 hover:text-white transition-colors duration-200">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-of-service" className="text-gray-500 hover:text-white transition-colors duration-200">
                            Terms of Service
                        </Link>
                        <Link to="/contact" className="text-gray-500 hover:text-white transition-colors duration-200">
                            Contact
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
