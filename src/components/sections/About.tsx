import { aboutContent } from "@/lib/portfolio-data";

/**
 * About Section - Server Component
 * Static rendering for performance.
 */
export default function About() {
    return (
        <section id="about" className="section relative overflow-hidden">
            {/* Background Decorative Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] uppercase tracking-tighter select-none pointer-events-none z-0">
                Engineer
            </div>

            <div className="container relative z-10">
                <div className="mb-16">
                    <h2 className="text-sub-impact mb-6">
                        The Core<span className="text-lime">.</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <p className="text-xl text-[var(--color-text-primary)] leading-relaxed">
                                Full-stack engineer specialized in <span className="text-lime font-bold">ASP.NET Core</span> and <span className="text-lime font-bold">SQL Server</span>.
                                I design and build production-grade systems where architecture, performance, and reliability are the primary focus.
                            </p>
                            <div className="pt-4 space-y-4">
                                {[
                                    "Clean Architecture implementation",
                                    "Database performance optimization",
                                    "Secure API design & JWT Ownership",
                                    "Scalable Backend Systems"
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-lime" />
                                        <span className="text-[var(--color-text-secondary)] font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Visual Element - Abstract Monolith */}
                    <div className="relative aspect-[4/3] bg-[#0a0a0a] border border-white/5 overflow-hidden flex items-center justify-center group hover:border-lime/20 transition-all duration-700">
                        {/* Grid Pattern */}
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(204, 255, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(204, 255, 0, 0.05) 1px, transparent 1px)",
                                backgroundSize: "30px 30px",
                            }}
                            aria-hidden="true"
                        />

                        {/* Center Code Symbol */}
                        <div className="relative text-center p-8">
                            <div className="text-[clamp(4rem,10vw,8rem)] font-black text-white/[0.03] tracking-tighter uppercase group-hover:text-lime/5 transition-colors">
                                Architecture
                            </div>
                        </div>

                        {/* Subtle Glow */}
                        <div className="absolute inset-0 bg-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
