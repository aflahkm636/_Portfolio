import { contactContent } from "@/lib/portfolio-data";
import SocialLinks from "@/components/ui/SocialLinks";

/**
 * Contact Section - Server Component
 * Zero JS form submission via Web3Forms.
 */
export default function Contact() {
    return (
        <section id="contact" className="section relative overflow-hidden">
            {/* Background Decorative Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.01] uppercase tracking-tighter select-none pointer-events-none z-0">
                Contact
            </div>

            {/* Ambient Background Glow - CSS only */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/[0.01] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

            <div className="container relative z-10">
                <div className="max-w-[650px] mx-auto">
                    <div className="mb-16">
                        <h2 className="text-sub-impact mb-6">
                            Let's Talk<span className="text-lime">.</span>
                        </h2>
                        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed border-l-2 border-lime/30 pl-6">
                            {contactContent.description}
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 transition-all duration-700">
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="space-y-8"
                        >
                            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                            <input type="hidden" name="subject" value="Portfolio Contact Message" />
                            <input type="hidden" name="from_name" value="Aflah Portfolio" />
                            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Full Name"
                                        className="w-full bg-white/[0.02] border border-white/5 px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-lime/30 focus:bg-white/[0.04] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="your@email.com"
                                        className="w-full bg-white/[0.02] border border-white/5 px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-lime/30 focus:bg-white/[0.04] transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="How can I help you?"
                                    className="w-full bg-white/[0.02] border border-white/5 px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-lime/30 focus:bg-white/[0.04] transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="group relative w-full md:w-auto h-14 px-12 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-lime transition-all overflow-hidden"
                            >
                                <div className="relative z-10 flex items-center justify-center gap-3">
                                    Send Connection
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                </div>
                            </button>
                        </form>
                    </div>

                    {/* Footer Socials */}
                    <div className="mt-12 pt-12 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[var(--color-text-muted)]">
                        <div className="flex items-center gap-2">
                            <span>Prefer email?</span>
                            <a href={`mailto:${contactContent.email}`} className="text-[var(--color-text-secondary)] hover:text-white transition-colors">
                                {contactContent.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <span>Find me on</span>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

