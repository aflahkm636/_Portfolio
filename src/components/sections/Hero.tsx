import ThreeHero from "@/components/three/ThreeHero";
import { heroContent } from "@/lib/portfolio-data";

/**
 * Hero Section - Server Component
 * Renders static content immediately. Three.js is hydrated via ThreeHero client component.
 */

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]"
        >
            {/* Background Layer - Client boundary for Three.js */}
            <ThreeHero />

            {/* Background Gradient for readability - Static to avoid CLS */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[var(--color-bg-primary)]/40 to-[var(--color-bg-primary)] pointer-events-none z-0" />

            {/* Content - Static RSC for instant First Contentful Paint */}
            <div className="container relative z-10 flex flex-col items-center">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-lime text-xs font-bold uppercase tracking-[0.3em] mb-4">
                        Full Stack Developer
                    </span>
                    <h1 className="text-impact mb-2">
                        Aflah
                    </h1>
                    <h2 className="text-sub-impact mb-12">
                        Kayalmadathil<span className="text-lime">.</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3 max-w-2xl px-4">
                        {["ASP.NET CORE", "SQL SERVER", "REACT.JS", "CLEAN ARCH"].map((skill) => (
                            <span key={skill} className="skill-pill-refined">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center gap-6 flex-wrap">
                    <a
                        href={heroContent.cta.primary.href}
                        className="btn btn-primary btn-lg min-w-[180px]"
                    >
                        {heroContent.cta.primary.text}
                    </a>
                    <a
                        href={heroContent.cta.secondary.href}
                        className="btn btn-secondary btn-lg min-w-[180px]"
                    >
                        {heroContent.cta.secondary.text}
                    </a>
                </div>
            </div>

            {/* Bottom Section Gradient */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-transparent pointer-events-none"
                aria-hidden="true"
            />
        </section>
    );
}

