import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BookingSlot = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full max-w-xl mx-auto mt-10 p-6 bg-gray-900 rounded-2xl shadow-xl text-white"
        >
            <h2 className="text-3xl font-bold mb-4 text-center">🎮 Book Your Gaming Slot</h2>
            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 rounded-lg bg-gray-800 border border-gray-700"
                />
                <select className="p-3 rounded-lg bg-gray-800 border border-gray-700">
                    <option>Select Game</option>
                    <option>GTA V</option>
                    <option>Valorant</option>
                    <option>FIFA 24</option>
                    <option>Call of Duty</option>
                </select>
                <input
                    type="datetime-local"
                    className="p-3 rounded-lg bg-gray-800 border border-gray-700"
                />
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300"
                >
                    Book Now
                </button>
            </form>
        </section>
    );
};

export default BookingSlot;
