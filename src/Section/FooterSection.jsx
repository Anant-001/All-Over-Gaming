import React from 'react';

const Footer = () => {
    return (
        <section id="contect">
            <footer className="bg-gray-900 text-gray-300">
                <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-purple-500">All Over Gamer</h3>
                        <p className="text-sm">
                            Your ultimate destination for premium gaming experiences.
                        </p>
                        <div className="flex space-x-2">
                            <a href="#" className="hover:text-purple-500 transition-colors">
                                <i className="fab fa-facebook-f">A.O.Gamer.FB</i>
                            </a>
                            <a href="#" className="hover:text-purple-500 transition-colors">
                                <i className="fab fa-twitter">@AllOverGamer</i>
                            </a>
                            <a href="#" className="hover:text-purple-500 transition-colors">
                                <i className="fab fa-instagram">AOG.Center</i>
                            </a>
                            <a href="#" className="hover:text-purple-500 transition-colors">
                                <i className="fab fa-discord">AOG</i>
                            </a>
                        </div>
                    </div>


                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-2">
                            <li>123 Gaming Street</li>
                            <li>Game City, GC 12345</li>
                            <li>Phone: (555) 123-4567</li>
                            <li>Email: info@allovergamer.com</li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Opening Hours</h4>
                        <ul className="space-y-2">
                            <li>Monday - Friday: 10:00 AM - 11:00 PM</li>
                            <li>Saturday: 9:00 AM - 12:00 AM</li>
                            <li>Sunday: 11:00 AM - 10:00 PM</li>
                        </ul>
                    </div>
                </div>


            </footer>
        </section>
    );
};

export default Footer;
