import React from 'react'
import BoostCard from "../Component/Boost card.jsx";
import SecBoostcard from "../Component/SecBoostcard.jsx";

const MemberShip = () => {
    return (
        <section id="membership">
            <div className="flex flex-col md:flex-row items-center justify-between min-h-100 px-4 md:px-8 py-8 md:py-12">
                <div className="hero-layer w-full md:w-1/2 mb-8 md:mb-0">
                    <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                        <h1 className="text-4xl md:text-4xl mb-4">
                            Now to Support Us By Take A Membership
                        </h1>
                        <h2 className="text-lg md:text-xl">
                            Boost Your Gaming Experience With All Over Gaming
                        </h2>
                    </header>
                </div>
                <div className="w-full md:w-1/2 px-4 md:pl-12">
                    <BoostCard />
                </div>
                <div className="w-full md:w-1/2 px-4 md:pl-12">
                    <SecBoostcard />
                </div>
            </div>
        </section>
    )
}
export default MemberShip
