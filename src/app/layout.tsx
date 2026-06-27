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
  title: "Sewanta Luitel | FullStack Developer",
  description: "Sewanta Luitel FullStack Developer",
  keywords: ["Sewanta Luitel", "FullStack Developer", "Software Engineer Nepal", "React", "Next.js"],
  authors: [{ name: "Sewanta Luitel" }],
  openGraph: {
    title: "Sewanta Luitel | FullStack Developer",
    description: "Sewanta Luitel FullStack Developer",
    url: "https://sewantaluitel.com.np",
    siteName: "Sewanta Luitel",
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
          {/* Subtle Film Grain/Noise Overlay */}
          <div className="fixed inset-0 bg-noise pointer-events-none z-[9999]" />

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
