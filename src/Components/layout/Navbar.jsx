import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import { useRef, useState } from "react";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='bg-zinc-800 text-white'>
            <div className='max-w-7xl mx-auto px-4 pb-2'>
                <div className='flex h-16 items-center justify-between'>
                    {/* Logo */}
                    <Link to="/developers" className="text-2xl font-light tracking-wide">
                        devse<span className="hover:text-gray-300 transition">a</span>rch
                    </Link>

                    {/* desktop menu */}
                    <div className='hidden md:flex items-center space-x-10'>
                        <Link to="/developers" className='hover:text-gray-300 transition'>Developers</Link>

                        <Link
                            to="/projects"
                            className="hover:text-gray-300 transition"
                        >
                            Projects
                        </Link>

                        <Link
                            to="/inbox"
                            className="hover:text-gray-300 transition"
                        >
                            Inbox
                        </Link>

                        <div className=''>
                            <Link to="/login" className='border-1 border-gray-300 px-5 py-2 rounded-md hover:text-zinc-800 hover:bg-gray-300 transition pb-3'>Login / Sign Up</Link>
                        </div>
                    </div>

                    {/* Mobile Menu button */}
                    <div className='flex items-center gap-3 md:hidden'>
                        <svg onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className='h-6 w-6 cursor-pointer' fill='node' stroke='currentColor' strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </div>

                    {/* Mobile menu */}
                    <div className={`fixed top-0 left-0 h-full w-full bg-sky-100 text-base  md:hidden  transition-all duration-500 ${isMenuOpen ? "translate-x-0": "-translate-x-full"}`}>
                        <button className='absolute top-4 right-4' onClick={() => setIsMenuOpen(false)}>
                            <svg className='h-8 w-6 text-zinc-800 cursor-pointer' fill='node' stroke="currentColor" strokeWidth="2" viewBox='0 0 24 24'>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <div className=' pt-20 flex flex-col items-center justify-center gap-10 font-medium'>
                            <Link to="/developers" 
                            onClick={() => setIsMenuOpen(false)}className='text-zinc-800'>Developers</Link>

                            <Link
                                to="/projects"
                                className="text-zinc-800 d-inline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </Link>

                            <Link
                                to="/inbox"
                                className="text-zinc-800 d-inline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Inbox
                            </Link>

                            <div className=''>
                                <Link to="/login" className='border-1 px-5 py-2 rounded-md text-zinc-800 hover:bg-zinc-800 hover:text-white transition duration-300 pb-3'
                                onClick={() => setIsMenuOpen(false)}>Login / Sign Up</Link>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Navbar


