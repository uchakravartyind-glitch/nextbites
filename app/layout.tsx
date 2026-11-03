import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextBites | Find your next favorite recipe",
  description: "Fresh, approachable recipes for everyday cooking.",
};

function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label="Primary navigation">
        <a className="brand" href="/">
          <span className="brand__mark" aria-hidden="true">N</span>
          <span>NextBites</span>
        </a>

        <div className="nav-bar__links">
          <a href="/">Home</a>
          <a href="#recipes">Recipes</a>
          <a className="nav-bar__button" href="#recipes">Start cooking</a>
        </div>
      </nav>
    </header>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        <NavBar />
        {children}
        <footer className="site-footer">
          <p>NextBites</p>
          <span>Good food starts with a good idea.</span>
        </footer>
      </body>
    </html>
  );
}
