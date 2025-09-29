import React from 'react'
import Hero from "./Section/Hero.jsx";
import NavBar from "./Section/NavBar.jsx";
import VideoSection from "./Section/VideoSection.jsx";
import BookingSection from "./Section/BookingSection.jsx";
import Experience from "./Section/Experience.jsx";



const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <VideoSection />
            <Experience />
            <BookingSection />
        </>

    )
}
export default App
