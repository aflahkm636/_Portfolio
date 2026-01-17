import { navLinks, personalInfo, socialLinks } from "@/lib/portfolio-data";
import MobileNavToggle from "./MobileNavToggle";

/**
 * Navbar - Server Component
 * Static navigation with minimal client interactivity for mobile toggle
 */
export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--color-border)]">
            <nav className="container flex items-center justify-between h-[72px]">
                {/* Logo */}
                <a
                    href="#"
                    className="text-2xl font-black text-[var(--color-text-primary)] tracking-tighter"
                >
                    AFLAH<span className="text-lime">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-[var(--color-text-secondary)] font-medium hover:text-[var(--color-text-primary)] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop CTAs */}
                <div className="hidden md:flex items-center gap-3">
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                        GitHub
                    </a>
                    <a href={socialLinks.email} className="btn btn-primary">
                        Get in Touch
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <MobileNavToggle />
            </nav>
        </header>
    );
}
