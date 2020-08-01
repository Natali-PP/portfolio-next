import React from "react";
import { Link } from "next/link";
const NavBar = () => {
    return (
        <header>
        <nav>
            <div class="navbar">
                <div class="links flex-container">
                    <Link href="/">HOME</Link>
                    <span class="pink-line"></span>
                    <Link href="/projects">PROJECTS</Link>
                    <span class="pink-line"></span>
                    <Link href="/contact">CONTACT</Link>
                    <span class="pink-line"></span>
                    <Link href="/about">ABOUT ME</Link>
                </div>
            </div>
        </nav>
    </header>
    
    )
};

export default NavBar;