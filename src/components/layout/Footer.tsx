import { footerContent } from "@/lib/portfolio-data";
import SocialLinks from "../ui/SocialLinks";

/**
 * Footer - Server Component
 * Minimal footer with copyright and social links
 */
export default function Footer() {
    return (
        <footer className="border-t border-[var(--color-border)] py-8 mt-16">
            <div className="container flex flex-col items-center gap-6">
                <SocialLinks />
                <p className="text-sm text-[var(--color-text-muted)] text-center">
                    {footerContent.copyright}
                </p>
            </div>
        </footer>
    );
}
