"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { smoothScrollTo } from '@/lib/smoothScroll'

const navLinks = [
    { name: 'About', path: '#about' },
    { name: 'Resume', path: '#resume' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' }
]

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 15)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileMenuOpen])

    return (
        <>
            <nav
                className={cn(
                    'fixed inset-x-0 top-0 z-50 border-b border-border',
                    scrolled && 'bg-primary/70 backdrop-blur-md shadow-xs'
                )}
            >
                <div className='container mx-auto flex justify-between items-center py-3'>
                    <a href='#top'  onClick={(e) => {e.preventDefault(); smoothScrollTo("#top");}} className='text-xl md:text-2xl font-semibold tracking-tight'>
                        Mithun Param
                    </a>

        
                    {/* Desktop nav */}
                    <div className='hidden md:flex items-center gap-4'>
                        <ul className='flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-2'>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.path}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            smoothScrollTo(link.path);
                                        }}
                                        className={cn(
                                            'rounded-full px-4 py-2 text-sm transition-colors duration-300',
                                            link.path === pathname ? 'bg-secondary/20 text-accent' : 'text-foreground hover:bg-secondary/15 hover:text-accent'
                                        )}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Social icons */}
                        <div className='flex items-center gap-3 ml-2 flex-shrink-0'>
                            <a
                                href="https://github.com/MithunPara"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full hover:bg-secondary/15 hover:text-accent transition-colors"
                            >
                                <FaGithub className="h-5 w-5" />
                            </a>

                            <a
                                href="https://linkedin.com/in/mithunparam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full hover:bg-secondary/15 hover:text-accent transition-colors"
                            >
                                <FaLinkedin className="h-5 w-5" />
                            </a>
                            
                            <ThemeToggle />
                        </div>
                    </div>

                    <button
                        className='text-foreground md:hidden z-50'
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                        aria-label='Toggle menu'
                    >
                        {mobileMenuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile nav */}

            <motion.div
                className={cn(
                    'fixed inset-0 z-40 md:hidden bg-primary/80 backdrop-blur-md',
                    'transition-all duration-300',
                    mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                )}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, scale: mobileMenuOpen ? 1 : 0.9 }}
                transition={{ duration: 0.25 }}
            >
                <ul className='flex h-full flex-col items-center justify-center space-y-8 text-2xl'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.path}
                                className={cn(
                                    'hover:text-accent transition-colors duration-300',
                                    link.path === pathname && 'text-accent'
                                )}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setMobileMenuOpen(false);

                                    setTimeout(() => {
                                        smoothScrollTo(link.path);
                                    }, 150);
                                }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-6">
                    <a
                        href="https://github.com/MithunPara"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 hover:bg-secondary/15 hover:text-accent transition"
                    >
                        <FaGithub className="h-6 w-6" />
                    </a>

                    <a
                        href="https://linkedin.com/in/mithunparam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 hover:bg-secondary/15 hover:text-accent transition"
                    >
                        <FaLinkedin className="h-6 w-6" />
                    </a>

                    <ThemeToggle className='p-3 bg-white/5 border border-border' />
                </div>
            </motion.div>
        </>
    )
}

export default Navbar