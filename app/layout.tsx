import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { BlurNav } from "@/components/navbar/BlurNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siddhartha Singh | Inators Portfolio",
  description:
    "I am Siddhartha Singh A full-stack web developer, with a strong inclination towards challenging projects, designing and developing web applications. My Primary tech stack includes Next.js, ReactJs, Tailwind, Node.js, Express.js & MongoDB.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <meta
        name="google-site-verification"
        content="wuKkVFD1dhs31EjQNk81yBbw-temshhMPPc8JGAUC94"
      />
      <body className={inter.className}>
        <Providers>
          <BlurNav />
          <div className="min-h-[78vh]">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
