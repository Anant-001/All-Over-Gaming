import React, { useState } from 'react';
import SpotlightCard from "../../Member/SpotlightCard/SpotlightCard.jsx";
import MembershipModal from "../constants/MembershipModal.jsx";

const BoostCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
    <div className="bg-black text-white p-6 rounded-xl max-w-xs shadow-lg">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                {/* Sparkle Icon */}
                <div className="mb-4 text-white text-2xl">
                    <span>✨</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-2">All Over Gaming MemberShip</h2>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4">
                    Get exclusive benefits, features & 24/7 support as a permanent All Over Gaming Member.
                </p>

                {/* Button */}
                <button onClick={() => setIsModalOpen(true)}
                        className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg">
                    Join now
                </button>
                <MembershipModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />

            </SpotlightCard>
        </div>
    );
};

export default BoostCard;
