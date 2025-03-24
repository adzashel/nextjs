"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className='nav-wrapper'>
            <nav>
                <ul>
                    <Link href="/" className={
                        pathname === '/' ? 'active' : ""
                    }> Home </Link>
                    <Link href="/About" className={pathname === '/About' ? "active" : ""}> About </Link>
                    <Link href="/Projects" className={pathname === '/Projects' ? "active" : ""}> Project </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
