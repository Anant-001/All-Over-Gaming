import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons
import GooeyNav from "../../NavigationBar/GooeyNav/GooeyNav.jsx";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const items = [
        { label: "Showcase", href: "#experience" },
        { label: "Booking", href: "#booking" },
        { label: "MemberShip", href: "#membership" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all ${
                scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}
        >
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                {/* Logo */}
                <a href="#hero" className="logo flex items-center gap-2 text-white">
                    <img
                        src="/image/a-modern-logo-design-featuring-all-over-_rk8hOfWmQeeG3m3rVKA2zw_Spc-61K1TaOzLm696nLJXw.jpeg"
                        alt="logo"
                        className="h-10 w-10 object-cover rounded-full"
                    />
                    <span className="font-bold text-lg">All Over Gamer</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <GooeyNav
                        items={items}
                        particleCount={15}
                        particleDistances={[90, 10]}
                        particleR={100}
                        initialActiveIndex={0}
                        animationTime={600}
                        timeVariance={300}
                        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                    />
                </nav>

                {/* Contact Button (desktop) */}
                <a
                    href="#contect"
                    className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow hover:scale-105 transition"
                >
                    Contact Me
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-black/90 text-white backdrop-blur-md">
                    <ul className="flex flex-col items-center gap-6 py-6">
                        {items.map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href={item.href}
                                    className="text-lg font-medium hover:text-pink-400 transition"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contect"
                                className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow hover:scale-105 transition"
                                onClick={() => setMobileOpen(false)}
                            >
                                Contact Me
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default NavBar;
