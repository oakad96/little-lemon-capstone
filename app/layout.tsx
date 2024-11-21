import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { NavBar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Little Lemon | Mediterranean Restaurant Chicago",
  description: "Family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <NavBar />
        {children}
        <footer className="bg-primary text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-secondary">Little Lemon</h3>
                <p className="text-white/80">
                  A family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-secondary">Contact</h3>
                <p className="text-white/80">123 W Madison St</p>
                <p className="text-white/80">Chicago, IL 60607</p>
                <p className="text-white/80">Tel: (312) 555-0123</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-secondary">Hours</h3>
                <p className="text-white/80">Mon-Thu: 11am - 9pm</p>
                <p className="text-white/80">Fri-Sat: 11am - 10pm</p>
                <p className="text-white/80">Sun: 12pm - 9pm</p>
              </div>
            </div>
            <div className="mt-8 text-center text-white/60">
              © {new Date().getFullYear()} Little Lemon. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}