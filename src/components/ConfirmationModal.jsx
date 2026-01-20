const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message, confirmText = "Confirm", variant = "danger" }) => {
    if (!isOpen) return null;

    const styles = {
        danger: {
            iconBg: "bg-red-500/10",
            iconColor: "text-red-500",
            button: "bg-gradient-to-r from-red-600 to-pink-600 shadow-red-500/20 hover:shadow-red-500/30",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            )
        },
        primary: {
            iconBg: "bg-indigo-500/10",
            iconColor: "text-indigo-500",
            button: "bg-gradient-to-r from-indigo-600 to-purple-600 shadow-indigo-500/20 hover:shadow-indigo-500/30",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
            )
        }
    };

    const currentStyle = styles[variant] || styles.danger;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative bg-[#0f0f13] border border-white/10 rounded-2xl w-full max-w-sm p-6 shadow-2xl transform transition-all animate-fade-in text-center">

                {/* Icon */}
                <div className={`w-16 h-16 ${currentStyle.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {currentStyle.icon}
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    {message}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 justify-center">
                    <button
                        onClick={onClose}
                        className="cursor-pointer px-5 py-2.5 rounded-xl text-gray-300 font-medium hover:bg-white/5 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className={`cursor-pointer px-5 py-2.5 rounded-xl text-white font-medium shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all ${currentStyle.button}`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
