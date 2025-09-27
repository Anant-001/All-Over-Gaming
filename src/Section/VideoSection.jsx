import React from "react";
import BlurText from "../../text/BlurText/BlurText.jsx";

const VideoSection = () => {
    return (
        <section className="h-150 overflow-hidden">
            <div className="relative w-full h-[100vh] md:h-screen overflow-hidden ">
                {/* Video */}
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src="/video/All%20over%20gamer.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center ">
                    <div className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold  bg-opacity-60 px-4 py-2 rounded-lg">
                        <h1 className="text-5xl font-bold text-white">
                            <span className="text-blue-500">Gaming</span> center
                            <BlurText
                                text="To explore the world of gaming in your Style , Explore our Gaming Center in your city with friends"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                onAnimationComplete={VideoSection}
                                className="text-2xl mb-8"
                            />
                        </h1>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default VideoSection;

