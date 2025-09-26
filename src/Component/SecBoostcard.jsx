import React from 'react'
import SpotlightCard from "../../Member/SpotlightCard/SpotlightCard.jsx";

const SecBoostcard = () => {
    return (
        <div className="bg-black text-white p-6 rounded-xl max-w-xs shadow-lg">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                {/* Sparkle Icon */}
                <div className="mb-4 text-white text-2xl">
                    <span>🔐</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-2">All Over Gaming Enhanced Security</h2>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4">
                    Our All Over Gaming Membership offers peace of mind through strict security measures.
                </p>

                {/* Button */}
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg">
                    Learn More
                </button>
            </SpotlightCard>
        </div>
    )
}
export default SecBoostcard
