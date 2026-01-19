/**
 * Portfolio Data
 * All content for the portfolio in one place for easy updates
 */

export const personalInfo = {
    name: "Aflah Kayalmadathil",
    shortName: "AK",
    title: "Full Stack Developer (Backend-first)",
    tagline: "Building production-grade systems with ASP.NET Core and React",
    email: "aflahkm007@gmail.com",
    location: "India",
    availability: "Open to opportunities",
};

export const socialLinks = {
    github: "https://github.com/aflahkm636",
    linkedin: "https://www.linkedin.com/in/aflah-kayalmadathil-6444b9331/",
    email: "mailto:aflahkm007@gmail.com",
    whatsapp: "https://wa.me/919645884622?text=Hello",
};

export const heroContent = {
    badge: "Full Stack Developer",
    headline: "Aflah\nKayalmadathil",
    subheadline: "Specializing in ASP.NET Core, SQL Server, and React. Focused on backend ownership and building production-grade applications that scale.",
    cta: {
        primary: { text: "View Projects", href: "#projects" },
        secondary: { text: "Contact Me", href: "#contact" },
    },
};


export const aboutContent = {
    title: "Technical Focus",
    paragraphs: [
        "I specialize in building robust backend systems and modern full-stack applications. My core expertise lies in ASP.NET Core and SQL Server, where I focus on performance, scalability, and maintainable architecture.",
        "I approach development with a system-first mindset—prioritizing database design, security, and clean API structures. On the frontend, I use React to build interfaces that are fast and technically sound.",
        "My professional experience includes owning backend implementations from initial schema design to production deployment, ensuring every component meets high standards of reliability.",
    ],
};
export const projects = [
    {
        id: "treazr",
        name: "Treazr",
        subtitle: "Collectibles E-commerce Platform",
        description: "A full-stack e-commerce platform for collectibles featuring role-based authentication, product management, cart system, and admin dashboard. Deployed to production.",
        liveUrl: "https://treazr-collectibles.runasp.net/",
        githubUrl: null,
        stack: ["ASP.NET Core", "SQL Server", "JWT", "React", "Tailwind CSS"],
        highlights: [
            "Backend API ownership",
            "JWT authentication & authorization",
            "Database schema design",
            "Production deployment",
        ],
        featured: true,
    },
    {
        id: "airloom",
        name: "AirLoom Management System",
        subtitle: "Backend API",
        description: "A modular backend system for subscription-based service management. Built with performance-focused data access patterns using Dapper.",
        liveUrl: null,
        githubUrl: "https://github.com/aflahkm636/AirLoom_Backend",
        stack: ["ASP.NET Core", "SQL Server", "Dapper", "REST API"],
        highlights: [
            "Subscription workflow management",
            "Modular backend architecture",
            "Clean separation of concerns",
            "Performance-focused data access",
        ],
        featured: true,
    },
];

export const skills = {
    core: {
        title: "Core Technologies",
        items: ["ASP.NET Core", "SQL Server", "React"],
    },
    ecosystem: {
        title: "Backend Ecosystem",
        items: ["C#", "Dapper", "Entity Framework", "RESTful APIs", "JWT Auth"],
    },
    tools: {
        title: "Frontend & Tools",
        items: ["TypeScript", "Tailwind CSS", "Next.js", "Git", "Postman", "SSMS"],
    },
};


export const contactContent = {
    title: "Get in Touch",
    description: "I'm currently open to new opportunities. Whether you have a question or just want to connect, feel free to reach out.",
    email: "aflahkm007@gmail.com",
};

export const footerContent = {
    copyright: `© ${new Date().getFullYear()} Aflah KM. All rights reserved.`,
};

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];
