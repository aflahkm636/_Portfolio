"use client";

import { useState, useEffect } from "react";
import { navLinks, personalInfo, socialLinks } from "@/lib/portfolio-data";
import MobileNavToggle from "./MobileNavToggle";
import ThemeSwitch from "../ui/ThemeSwitch";

/**
 * Navbar - Client Component
 * Implements high-performance iOS-style glassmorphism with scroll detection.
 */
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navIcons = {
        About: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        ),
        Work: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
        ),
        Skills: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
        ),
        Contact: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
        )
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isScrolled ? "pt-4 px-4 md:px-0" : ""
                }`}
        >
            <div className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden glass-nav ${isScrolled
                    ? "max-w-[fit-content] rounded-full shadow-2xl px-4 py-2"
                    : "max-w-[1280px] w-[95%] md:w-full h-[64px] rounded-none px-4 md:px-0"
                }`}>
                <nav className={`flex items-center justify-between h-full ${isScrolled ? "gap-4" : ""}`}>
                    {/* Logo - Hidden on Island mode except desktop */}
                    <a
                        href="#"
                        className={`text-xl font-black text-[var(--color-text-primary)] tracking-tighter transition-all duration-500 ${isScrolled ? "w-0 opacity-0 md:w-auto md:opacity-100 overflow-hidden" : "w-auto opacity-100"
                            }`}
                    >
                        AFLAH<span className="text-lime">.</span>
                    </a>

                    {/* Navigation Links - Text on Desktop, Icons on Island (Mobile) */}
                    <div className={`flex items-center transition-all duration-500 ${isScrolled ? "gap-2 md:gap-6" : "hidden md:flex gap-8"
                        }`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`transition-all duration-300 flex items-center justify-center relative group`}
                                title={link.label}
                            >
                                {/* Icons - Only shown on mobile when scrolled */}
                                <span className={`transition-all duration-300 ${isScrolled
                                        ? "p-2 rounded-full hover:bg-[var(--color-text-primary)]/10 text-[var(--color-text-primary)] md:hidden"
                                        : "md:hidden"
                                    }`}>
                                    {navIcons[link.label as keyof typeof navIcons]}
                                </span>
                                {/* Text - Shown on desktop always, hidden on mobile when scrolled */}
                                <span className={`transition-all duration-300 ${isScrolled
                                        ? "hidden md:block text-[var(--color-text-primary)] hover:text-lime font-bold uppercase tracking-wider text-[12px]"
                                        : "hidden md:block text-[var(--color-text-secondary)] hover:text-lime font-bold uppercase tracking-wider text-[13px]"
                                    }`}>
                                    {link.label}
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Desktop/Island CTAs */}
                    <div className={`flex items-center transition-all duration-500 ${isScrolled ? "gap-3 ml-2" : "gap-3 h-full"
                        }`}>
                        <div className={`transition-transform duration-500 ${isScrolled ? "scale-90" : "scale-100 h-full"}`}>
                            <ThemeSwitch />
                        </div>

                        <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn transition-all duration-500 ${isScrolled
                                    ? "p-2 min-w-0 bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)]/10"
                                    : "btn-ghost text-xs px-4 text-[var(--color-text-secondary)]"
                                }`}
                            title="GitHub"
                        >
                            <span className="flex items-center justify-center font-bold">
                                {isScrolled ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                ) : "GitHub"}
                            </span>
                        </a>

                        <a
                            href={socialLinks.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn transition-all duration-500 overflow-hidden ${isScrolled
                                    ? "p-2 min-w-0 h-10 rounded-full flex items-center justify-center bg-transparent border-none text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)]/10 md:bg-[var(--color-text-primary)] md:text-[var(--color-bg-primary)] md:w-10"
                                    : "btn-primary h-10 px-6 text-[11px] font-black uppercase tracking-widest"
                                }`}
                            title="Say Hello"
                        >
                            <span className="flex items-center justify-center">
                                {isScrolled ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                                ) : "Say Hello"}
                            </span>
                        </a>
                    </div>

                    {/* Standard Mobile Nav Toggle - Hidden on Island mode */}
                    <div className={`transition-all duration-500 ${isScrolled ? "w-0 opacity-0 overflow-hidden" : "md:hidden w-auto opacity-100"}`}>
                        <MobileNavToggle />
                    </div>
                </nav>
            </div>
        </header>
    );
}
