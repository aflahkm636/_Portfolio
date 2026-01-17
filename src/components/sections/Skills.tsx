import { skills } from "@/lib/portfolio-data";

/**
 * Skills Section - Server Component
 * High-performance static rendering. No client JS for this section.
 */
export default function Skills() {
    const skillCategories = Object.values(skills);

    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="mb-16">
                    <h2 className="text-sub-impact mb-6">
                        Expertise<span className="text-lime">.</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-[600px] border-l-2 border-lime/30 pl-6">
                        Specialized technical stack focused on high-performance distributed systems.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="bg-[#0a0a0a] border border-white/5 p-8 transition-all duration-500"
                        >
                            <h3 className="text-xs uppercase tracking-[0.3em] text-lime font-bold mb-8">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill) => (
                                    <span key={skill} className="skill-pill-refined text-[10px]">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
