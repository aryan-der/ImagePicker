import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-[#0f0f13] text-gray-300 font-sans selection:bg-purple-500/30">
            {/* Header / Hero Section */}
            <div className="relative pt-20 pb-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Your privacy is our priority. We are committed to protecting your personal data and ensuring transparency.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 pb-20 max-w-4xl">
                <div className="space-y-12">
                    {/* Section 1 */}
                    <section className="mt-10 bg-[#1a1a23]/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-purple-500/30 transition-colors duration-300">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                            <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mr-3 text-sm">01</span>
                            Information We Collect
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            We collect information you provide directly to us when you create an account, update your profile, or communicate with us. This may include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
                            <li>Account information (Name, Email, Password)</li>
                            <li>Usage data and preferences</li>
                            <li>Device information and IP address</li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section className="bg-[#1a1a23]/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-pink-500/30 transition-colors duration-300">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                            <span className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 mr-3 text-sm">02</span>
                            How We Use Your Information
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            We use the information we collect to provide, maintain, and improve our services, including:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <li className="flex items-start p-4 bg-white/5 rounded-xl border border-white/5">
                                <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>Personalizing your experience</span>
                            </li>
                            <li className="flex items-start p-4 bg-white/5 rounded-xl border border-white/5">
                                <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>Processing transactions</span>
                            </li>
                            <li className="flex items-start p-4 bg-white/5 rounded-xl border border-white/5">
                                <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>Sending technical notices</span>
                            </li>
                            <li className="flex items-start p-4 bg-white/5 rounded-xl border border-white/5">
                                <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>Monitoring trends and usage</span>
                            </li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="bg-[#1a1a23]/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-purple-500/30 transition-colors duration-300">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                            <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mr-3 text-sm">03</span>
                            Data Security
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no internet transmission is ever completely secure.
                        </p>
                    </section>

                    <div className="text-center mt-16">
                        <p className="text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                        <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors group">
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

export default PrivacyPolicy;
