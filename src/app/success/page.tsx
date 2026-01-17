import Link from "next/link";

export const metadata = {
    title: "Message Sent | Aflah Portfolio",
    description: "Thank you for reaching out!",
};

export default function SuccessPage() {
    return (
        <main className="min-h-screen flex items-center justify-center p-6 bg-[var(--color-bg-primary)]">
            <div className="max-w-[500px] w-full text-center space-y-6 animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                    >
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-white">
                    Message Sent Successfully!
                </h1>

                <p className="text-lg text-[var(--color-text-secondary)]">
                    Thank you for reaching out. I&apos;ve received your message and will get back to you as soon as possible.
                </p>

                <div className="pt-4">
                    <Link
                        href="/"
                        className="btn btn-primary btn-lg"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
