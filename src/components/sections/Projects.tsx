import { projects } from "@/lib/portfolio-data";
import ProjectCard from "@/components/ui/ProjectCard";

/**
 * Projects Section - Server Component
 * Static rendering of projects grid.
 */
export default function Projects() {
    const featuredProjects = projects.filter(p => p.featured);

    return (
        <section id="projects" className="section relative overflow-hidden">
            {/* Background Decorative Text - CSS optimized */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.01] uppercase tracking-tighter select-none pointer-events-none z-0">
                Systems
            </div>

            <div className="container relative z-10">
                <div className="mb-16">
                    <h2 className="text-sub-impact mb-6">
                        Featured Work<span className="text-lime">.</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-[600px] border-l-2 border-lime/30 pl-6">
                        Real applications built with production-grade architecture and deployed to live environments.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
