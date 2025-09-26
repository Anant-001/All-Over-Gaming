import React from 'react'
import Aurora from "../../back/Aurora/Aurora.jsx";
import BlurText from "../../text/BlurText/BlurText.jsx";
import HeroExperience from "../Component/Hero Modal/HeroExperience.jsx";
import Button from "../Component/Button.jsx";

const Hero = () => {
    console.log('Animation completed!');

    return (
        <section id="hero" className="relative overflow-hidden">
            <div>
                <Aurora
                    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </div>
            <div className="hero-layer m-25 md:m-10 p-10">
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1 className="text-5xl font-bold text-white">
                                <span className="text-blue-500">Gaming</span> center
                            </h1>

                            {/* ✅ Removed parent <p> to avoid nested <p> */}
                            <BlurText
                                text="A place to play games and have fun , meet new people"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                onAnimationComplete={Hero}
                                className="text-2xl mb-8 text-white"
                            />

                            <Button
                                className="md:w-80 md:h-16 w-60 h-12"
                                text="Go to Experience"
                                id="experience"
                            />
                        </div>
                    </div>
                </header>

                {/* 3D modal */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    )
}

export default Hero
