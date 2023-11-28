import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Suspense } from "react";
import Analytics from "@/components/analytics/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Pragworks Next Contentful Starter",
    description: "O framework mais maneiro da internet",
    manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Suspense>
                    <Analytics />
                </Suspense>
                {children}
            </body>
        </html>
    );
}
