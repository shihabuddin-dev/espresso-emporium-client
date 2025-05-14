import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaMailBulk, FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../ui/Button';
import footerLogo from '../../assets/footer-logo.png';
const Footer = () => {
    return (
        <footer>
            <section className="bg-footer py-14 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
                        {/* Left Column */}
                        <div className="space-y-2">
                            <img
                                src={footerLogo}
                                alt="Espresso Emporium Logo"
                                className="h-14 w-auto"
                            />
                            <h1 className="text-3xl md:text-4xl text-[#331A15] rancho-font text-shadow-primary" >
                                Espresso Emporium
                            </h1>

                            <p className="text-gray-700 text-sm leading-relaxed">
                                Always ready to be your friend! Come & Contact with us to share your memorable moments, to share with your best companion.
                            </p>
                            <div className="flex space-x-3 pt-3">
                                <a href="#" aria-label="Facebook" className="text-[#331A15] hover:opacity-75 text-2xl transition-opacity">
                                    <FaFacebookF />
                                </a>
                                <a href="#" aria-label="Twitter" className="text-[#331A15] hover:opacity-75 text-2xl transition-opacity">
                                    <FaTwitter />
                                </a>
                                <a href="#" aria-label="Instagram" className="text-[#331A15] hover:opacity-75 text-2xl transition-opacity">
                                    <FaInstagram />
                                </a>
                                <a href="#" aria-label="LinkedIn" className="text-[#331A15] hover:opacity-75 text-2xl transition-opacity">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                            <div className="pt-6">
                                <h2 className="text-3xl md:text-4xl text-[#331A15] mb-5 rancho-font text-shadow-primary">
                                    Get in Touch
                                </h2>
                                <div className="space-y-3 text-gray-700 text-sm">
                                    <div className="flex items-center space-x-3">
                                        <FaPhoneAlt className="text-[#331A15] text-lg" />
                                        <span>+88 01533 333 333</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <FaMailBulk className="text-[#331A15] text-lg" />
                                        <span>info@gmail.com</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <FaMapMarkerAlt className="text-[#331A15] text-lg" />
                                        <span>72, Wall street, King Road, Dhaka</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-5">
                            <h2 className="text-3xl md:text-4xl text-[#331A15] mb-5 rancho-font text-shadow-primary" >
                                Connect with Us
                            </h2>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}> {/* Added preventDefault for example */}
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="w-full py-2.5 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none text-sm rounded-[4px] focus:ring-1 focus:ring-[#331A15]"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="w-full py-2.5 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none text-sm rounded-[4px] focus:ring-1 focus:ring-[#331A15]"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        rows="5"
                                        className="w-full py-2.5 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none text-sm rounded-[4px] focus:ring-1 focus:ring-[#331A15]"
                                    ></textarea>
                                </div>
                                <div>
                                    <Button
                                        variant='outline'
                                        type="submit"
                                        className="rancho-font"
                                    >
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className='bg-footer-bottom text-center py-2'>
                <h2 className="rancho-font text-xl text-center text-white text-shadow-secondary">Copyright Espresso Emporium ! All Rights Reserved</h2>
            </div>
        </footer>
    );
};

export default Footer;