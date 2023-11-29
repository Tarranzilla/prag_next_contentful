import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Suspense } from "react";
import Analytics from "@/components/analytics/Analytics";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Pragworks Next Contentful Starter",
    description: "O framework mais maneiro da internet",
    manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} anotherClass yetAnotherClass`}>
                <Suspense>
                    <Analytics />
                </Suspense>
                <div className="Navbar">
                    <div className="Navbar_Logo">
                        <img src="./favicon-32x32.png" alt="Pragworks" />
                    </div>
                    <div className="Navbar_BrandName">
                        <h2>PragWorks</h2>
                    </div>
                    <div className="Navbar_Links">
                        <Link href="/">Início</Link>
                        <Link href="/produtos">Produtos</Link>
                        <Link href="/solucoes">Soluções</Link>
                        <Link href="/contato">Contato</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/menu">Menu</Link>
                    </div>
                </div>
                {children}
            </body>
        </html>
    );
}
