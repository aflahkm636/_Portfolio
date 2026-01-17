import { memo } from "react";

/**
 * Project Card - Server Component
 * Memoized for performance
 */

interface Project {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    liveUrl: string | null;
    githubUrl: string | null;
    stack: string[];
    highlights: string[];
}

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
    </svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

function ProjectCardComponent({ project }: { project: Project }) {
    const { name, subtitle, description, liveUrl, githubUrl, stack, highlights } = project;

    return (
        <article className="group relative bg-[#0a0a0a] border border-white/5 p-8 hover:border-lime/30 transition-all duration-500 flex flex-col h-full overflow-hidden">
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl -z-10" />

            {/* Header */}
            <div className="relative mb-6">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-lime font-bold mb-2 block">
                            Featured Project
                        </span>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-lime transition-colors">
                            {name}
                        </h3>
                        <p className="text-sm text-white/50 font-medium">
                            {subtitle}
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-none border border-white/10 text-white/40 hover:text-lime hover:border-lime transition-all"
                                aria-label={`View ${name} live`}
                            >
                                <ArrowIcon />
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-none border border-white/10 text-white/40 hover:text-lime hover:border-lime transition-all"
                                aria-label={`View ${name} on GitHub`}
                            >
                                <GitHubIcon />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="space-y-4 mb-8 flex-1">
                <p className="text-sm text-white/60 leading-relaxed max-w-[90%]">
                    {description}
                </p>

                {/* Highlights */}
                {highlights && highlights.length > 0 && (
                    <div className="grid grid-cols-1 gap-2 pt-2">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-1 h-1 rounded-full bg-lime/40" />
                                <span className="text-[11px] text-white/40 uppercase tracking-wider font-semibold">
                                    {highlight}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Tech Stack - Refined Pills */}
            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                {stack.map((tech) => (
                    <span key={tech} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 text-white/40 group-hover:bg-lime/10 group-hover:text-lime transition-all">
                        {tech}
                    </span>
                ))}
            </div>
        </article>
    );
}

const ProjectCard = memo(ProjectCardComponent);
export default ProjectCard;
