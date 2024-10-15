"use client";
import React, { useState } from "react";
import Link from "next/link";
import LocationIcon from "@/icon/LocationIcon";
import PhoneIcon from "@/icon/PhoneIcon";
import ClockIcon from "@/icon/ClockIcon";
import FacebookIcon from "@/icon/FacebookIcon";
import LinkdinIcon from "@/icon/LinkdinIcon";
import InstragramIcon from "@/icon/InstragramIcon";
import Button from "./Button";
const tobar = [
    {
        icon: <ClockIcon />,
        title: 'Our Opening Hours Mon- Fri'
    },
    {
        icon: <PhoneIcon />,
        title: '+8801739402788'
    },
    {
        icon: <LocationIcon />,
        title: 'Paban Sadar, Bangladesh'
    },

]
const socialIcon = [<FacebookIcon />, <LinkdinIcon />, <InstragramIcon />]
const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Courses' },
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Blog' },
    { href: '#', label: 'Contact Us' },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="">
            {/* Top Bar */}
            <div className="bg-[#F3FCFF]">
                <div className="container md:flex flex-wrap  justify-between items-center py-4 space-y-2 sm:space-y-0">
                    {/* Left side - contact info */}
                    <div className="md:flex   md:space-x-4   semibold-16">
                        {tobar.map((item: any, index: any) => (
                            <div key={index} className="flex items-center gap-3 mt-[0.5em] md:mt-0 lg:mt-0 mdd:mt-0">
                                {item.icon}
                                <span className="lg:semibold-16 text-[12px] !text-textColor2 ">{item.title}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex space-x-4 items-center">
                        <select className="semibold-16">
                            <option value="en">English</option>
                            <option value="bn">বাংলা</option>
                        </select>

                        {/* Social icons */}
                        <div className="flex space-x-2">
                            {socialIcon.map((icon: any, index: any) => (
                                <span key={index}>{icon}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="mt-4">
                <div className="container flex justify-between items-center">
                    {/* Logo */}
                    <span className=" !text-Primary bold-32">
                        D.I.N.A
                    </span>

                    {/* Navigation Links (Hidden on Mobile) */}
                    <div className="hidden mdd:flex space-x-8 semibold-20">
                        {navLinks.map((link, index) => (
                            <Link
                                className="relative group  transition duration-300 Semibold-20 !text-TextColor "
                                key={index}
                                href={link.href}
                            >
                                {link.label}
                                <span className="absolute left-0 top-4 mt-3 w-0 h-[2px] bg-Primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>


                    {/* Mobile Hamburger Menu */}
                    <div className="mdd:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="text-gray-600 focus:outline-none"
                        >
                            {/* Hamburger Icon */}
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Admit Now Button (Hidden on Mobile) */}

                    <Button title="Admit Now"
                        mainclass="hidden mdd:inline-block"

                    />
                </div>

                {/* Sidebar Menu (Open on Mobile) */}
                <div className="bg-[#000000] w-full">
                    <div
                        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        <div className="flex justify-between items-center p-4 border-b">
                            <span className="text-xl font-semibold">Menu</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="Semibold-20 focus:outline-none"
                            >
                                {/* Close Icon */}
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col p-4 space-y-4  ">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="block Semibold-20 text-lg   "
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button
                                title="Admit Now"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Overlay to close the menu when clicked outside */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
