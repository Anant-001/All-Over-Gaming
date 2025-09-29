import React from 'react'
import Hero from "./Section/Hero.jsx";
import NavBar from "./Section/NavBar.jsx";
import VideoSection from "./Section/VideoSection.jsx";
import BookingSection from "./Section/BookingSection.jsx";
import Experience from "./Section/Experience.jsx";
import FooterSection from "./Section/FooterSection.jsx";
import MemberShip from "./Section/MemberShip.jsx";


const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <VideoSection />
            <Experience />
            <BookingSection />
            <MemberShip />
            <FooterSection />
        </>

    )
}
export default App
