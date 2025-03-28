"use client"

import {
    SignInButton,
    UserButton,
    SignedOut,
    SignedIn
} from '@clerk/nextjs';
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
                    <SignedOut>
                        <SignInButton  />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
