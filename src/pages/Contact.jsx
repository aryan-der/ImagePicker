import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const SERVICE_ID = "service_95x620j";
        const TEMPLATE_ID = "template_d2jmd6u";
        const PUBLIC_KEY = "neluKlug4CBdnlYx0";

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            toast("Message sent successfully! We'll get back to you soon.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error("Email Error:", error);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0f0f13] text-white font-sans selection:bg-purple-500/30">
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-purple-600/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-pink-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex flex-col justify-center">

                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Column - Text Info */}
                    <div className="lg:w-1/2 ">
                        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-white mb-8 transition-colors">
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Back Home
                        </Link>

                        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                            Let's start a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Conversation.</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                            Have questions, suggestions, or just want to say hello? We'd love to hear from you. Fill out the form and we'll be in touch.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="text-lg">support@mediapicker.com</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 border border-pink-500/20">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                                </div>
                                <span className="text-lg">Office No 8, Prerna Pride Bhakti Circle Road Nikol - Ahmedabad</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-[#1a1a23]/60 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <h3 className="text-2xl font-bold mb-6 relative z-10">Send a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#0f0f13] border border-gray-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder-gray-600"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#0f0f13] border border-gray-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder-gray-600"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full bg-[#0f0f13] border border-gray-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder-gray-600 resize-none"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-200 cursor-pointer ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
