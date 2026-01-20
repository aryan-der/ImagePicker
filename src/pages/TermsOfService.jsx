import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-[#0f0f13] text-gray-300 font-sans selection:bg-pink-500/30">
            {/* Header */}
            <div className="relative pt-20 pb-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 animate-gradient-x mb-6">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Please read these terms carefully before using our services. By using MediaPicker, you agree to these terms.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pb-20 max-w-4xl">
                <div className="space-y-8">

                    <div className="mt-8 bg-[#1a1a23]/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-pink-500/30 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h3>
                        <p className="text-gray-400 leading-relaxed">
                            By accessing or using MediaPicker, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </div>

                    <div className="bg-[#1a1a23]/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-purple-500/30 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-white mb-3">2. User License</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Permission is granted to temporarily download one copy of the materials (information or software) on MediaPicker's website for personal, non-commercial transitory viewing only.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                            <li>Modify or copy the materials;</li>
                            <li>Use the materials for any commercial purpose;</li>
                            <li>Attempt to decompile or reverse engineer any software;</li>
                            <li>Remove any copyright or other proprietary notations;</li>
                        </ul>
                    </div>

                    <div className="bg-[#1a1a23]/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-pink-500/30 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-white mb-3">3. Disclaimer</h3>
                        <p className="text-gray-400 leading-relaxed">
                            The materials on MediaPicker's website are provided on an 'as is' basis. MediaPicker makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </div>

                    <div className="bg-[#1a1a23]/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-purple-500/30 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-white mb-3">4. Limitations</h3>
                        <p className="text-gray-400 leading-relaxed">
                            In no event shall MediaPicker or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MediaPicker's website.
                        </p>
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/" className="inline-flex items-center text-pink-400 hover:text-pink-300 font-medium transition-colors group">
                            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
