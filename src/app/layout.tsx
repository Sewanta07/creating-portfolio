import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sewanta Luitel | Laravel & Full Stack Developer",
  description: "Portfolio of Sewanta Luitel, a Laravel & Full Stack Web Developer from Nepal. BSc (Hons) Computing Graduate building scalable web applications.",
  keywords: ["Sewanta Luitel", "Laravel Developer", "Full Stack Developer", "Software Engineer Nepal", "React", "Next.js"],
  authors: [{ name: "Sewanta Luitel" }],
  openGraph: {
    title: "Sewanta Luitel | Software Developer",
    description: "Premium portfolio of Sewanta Luitel. Discover my projects and skills.",
    url: "https://sewantaluitel.com.np",
    siteName: "Sewanta Luitel Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <LoadingScreen>
            <CustomCursor />
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </LoadingScreen>
        </ThemeProvider>
      </body>
    </html>
  );
}
