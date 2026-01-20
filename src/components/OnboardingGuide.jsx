import React, { useState, useEffect } from "react";

const OnboardingGuide = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const show = localStorage.getItem("showOnboarding");
        if (show === "true") {
            setIsVisible(true);
        }
    }, []);

    const handleDismiss = () => {
        localStorage.removeItem("showOnboarding");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300">
            <div className="relative bg-[#1a1a23] border border-white/10 p-8 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 text-center transform transition-all scale-100 animate-fade-in-up">
                {/* Glow Effects */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>

                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                    Welcome!
                </h3>
                <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                    Keep this image handy — save it to your collection or download it now.
                </p>

                <button
                    onClick={handleDismiss}
                    className="cursor-pointer px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-0.5 transition-all duration-200 outline-none ring-offset-2 focus:ring-2 ring-purple-500"
                >
                    OK, Got it!
                </button>
            </div>
        </div>
    );
};

export default OnboardingGuide;
