import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: { default: "NextBites | Easy Recipes", template: "%s | NextBites" }, description: "Discover quick, delicious recipes with simple ingredients and step-by-step instructions on NextBites." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className="min-h-screen bg-orange-50/30 text-zinc-900 antialiased">{children}</body></html>; }
