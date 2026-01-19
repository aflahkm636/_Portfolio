"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

/**
 * ThreeHero - Client Component wrapper for the 3D scene
 * Implements strict mobile gating to save JS execution time.
 */
const ThreeScene = dynamic(
    () => import("./ThreeScene"),
    {
        ssr: false,
        loading: () => <div className="absolute inset-0 bg-[#000000]" aria-hidden="true" />
    }
);

export default function ThreeHero() {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // SSR or Mobile fallback: Do NOT load Three.js
    if (isMobile === null || isMobile) {
        return (
            <div className="absolute inset-0 bg-[var(--color-bg-primary)]" aria-hidden="true">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--color-accent-hover),transparent_70%)] opacity-[0.03]" />
            </div>
        );
    }

    return <ThreeScene />;
}
