import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Campuzano - Frontend Developer",
  description: "Portfolio of Daniel Campuzano, a Frontend Developer specializing in Next.js and Tailwind CSS. Modern web development with clean code and exceptional user experiences.",
  keywords: ["Daniel Campuzano", "Frontend Developer", "Next.js", "Tailwind CSS", "React", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Daniel Campuzano" }],
  openGraph: {
    title: "Daniel Campuzano - Frontend Developer",
    description: "Frontend Developer specializing in Next.js and Tailwind CSS",
    url: "https://danielcampuzano.dev",
    siteName: "Daniel Campuzano Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Campuzano - Frontend Developer",
    description: "Frontend Developer specializing in Next.js and Tailwind CSS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
