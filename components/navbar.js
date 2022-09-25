import React from "react";
import Link from "next/link";
const NavBar = () => {
    return (
        <header>
        <nav>
            <div className="navbar">
                <div className="links flex-container">
                    <Link href="/">HOME</Link>
                    <span className="pink-line"></span>
                    <Link href="/projects">PROJECTS</Link>
                    <span className="pink-line"></span>
                    <Link href="/contact">CONTACT</Link>
                    <span className="pink-line"></span>
                    <Link href="/about">ABOUT ME</Link>
                </div>
            </div>
        </nav>
    </header>
    
    )
};

export default NavBar;
