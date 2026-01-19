import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aflah KM | Full Stack Developer",
  description: "Full Stack Developer focused on backend engineering. Building real applications with clean architecture using .NET, React, and SQL Server.",
  keywords: ["Full Stack Developer", "Backend Developer", ".NET", "React", "C#", "SQL Server"],
  authors: [{ name: "Aflah KM" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#000000",
  openGraph: {
    title: "Aflah KM | Full Stack Developer",
    description: "Full Stack Developer focused on backend engineering. Building real applications with clean architecture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Grid Background Pattern */}
        <div className="grid-background" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
