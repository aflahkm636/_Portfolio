"use client";

import { useState, useEffect } from "react";

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
        const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
        const initialTheme = storedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setIsAnimating(true);

        // Start theme change midway through the rotation
        setTimeout(() => {
            setTheme(newTheme);
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        }, 150);

        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <div
            className="relative flex items-center justify-center cursor-pointer group px-4 h-full select-none"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
            <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
                {/* Sun Icon */}
                <div className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center ${theme === 'light'
                    ? 'opacity-100 rotate-0 scale-100'
                    : 'opacity-0 -rotate-90 scale-50'
                    } ${isAnimating ? 'brightness-125' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lime">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="m4.93 4.93 1.41 1.41" />
                        <path d="m17.66 17.66 1.41 1.41" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="m6.34 17.66-1.41 1.41" />
                        <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                </div>

                {/* Moon Icon */}
                <div className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center ${theme === 'dark'
                    ? 'opacity-100 rotate-0 scale-100'
                    : 'opacity-0 rotate-90 scale-50'
                    } ${isAnimating ? 'brightness-125' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                </div>
            </div>

            {/* Subtle radial glow background behind the icon */}
            <div className={`absolute inset-0 bg-lime/5 blur-xl rounded-full transition-opacity duration-500 pointer-events-none ${theme === 'light' ? 'opacity-100' : 'opacity-0'
                }`} />

            <span className="sr-only">Toggle Theme</span>
        </div>
    );
}
