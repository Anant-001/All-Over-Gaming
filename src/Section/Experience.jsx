import React from "react";
import Stack from "../../Stackimg/Stack/Stack.jsx";
import { words } from "../constants/index.js";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Experience = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".hero-text h1",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: "power2.inOut",
            }
        );
    });

    const images = [
        { id: 1, img: "/image/Arcade Fun with Friends.png" },
        { id: 2, img: "/image/Gaming Night.png" },
        { id: 3, img: "/image/Gamer in Neon-Lit.png" },
        { id: 4, img: "/image/Gamer's Haven.png" },
        { id: 5, img: "/image/ChatGPT Image.png" },
    ];

    return (
        <section id="experience">
            <div className="flex flex-col md:flex-row items-center justify-between min-h-100 px-4 md:px-8 py-8 md:py-12">
                {/* Left side - Stack images */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <Stack
                        randomRotation={true}
                        sensitivity={300}
                        sendToBackOnClick={false}
                        cardDimensions={{ width: 500, height: 500 }}
                        cardsData={images}
                    />
                </div>

                {/* Right side - Text */}
                <div className="w-1/2 pl-12">
                    <div className="hero-text">
                        <h1>
                            Play And Fun Your Favorite Games With Your
                            <span className="slide">
                <span className="wrapper">
                  {words.map((word) => (
                      <span
                          key={word.id}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                      <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
                        </h1>

                        <h1 className="text-4xl font-bold text-white mb-6">
                            Explore Our Gaming Center,
                        </h1>
                        <h1 className="text-4xl font-bold text-white mb-6">
                            Book Your Slot Now Below 👇👇👇
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
