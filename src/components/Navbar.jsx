"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { IoMdMenu, IoMdClose } from "react-icons/io";

const navLinks = [
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Resume',
        path: '/resume'
    },
    {
        name: 'Projects',
        path: '/projects'
    }
]

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.screenY > 15);
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll); // prevent memory leak
}, [])

    const pathname = usePathname();
  return (
    <nav className={cn('fixed inset-x-0 top-0 z-10',
        scrolled ? 'bg-primary/90 backdrop-blur-md shadow-xs py-5' : 'py-8'
    )}>
        
        <div className='container mx-auto flex justify-between items-center'>

            {/* desktop */}

            <Link href='/' className='text-4xl'>Mithun Param</Link>
            <ul className='hidden md:flex space-x-8'>
                {
                    navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} className={`${link.path === pathname && 'text-accent'} hover:text-accent transition-colors duration-300`}>
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            {/* mobile */}

            <button 
                className='z-20 text-white md:hidden'
                onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
                {mobileMenuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
            </button>

            <div className={cn('fixed inset-0 bg-primary/90 backdrop-blur-md z-10 flex flex-col justify-center items-center',
                'transition-all duration-300 md:hidden',
                mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            )}>
                {/* <Link href='/' className='text-4xl'>Mithun Param</Link> */}
                <ul className='flex flex-col space-y-8 text-2xl'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <Link 
                                    href={link.path} 
                                    className={`${link.path === pathname && 'text-accent'} hover:text-accent transition-colors duration-300`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar