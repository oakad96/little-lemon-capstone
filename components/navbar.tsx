"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";
export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-primary fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="Little Lemon Logo"
                width={100}
                height={27.3}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-black hover:text-secondary">
              Home
            </Link>
            <Link href="#" className="text-black hover:text-secondary">
              Menu
            </Link>
            <Link href="#" className="text-black hover:text-secondary">
              About
            </Link>
            <Link href="#" className="text-black hover:text-secondary">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex">
            <Link href="/reserve">
              <Button className="bg-secondary text-primary hover:bg-secondary/90">
                Reserve a Table
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-secondary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-primary">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 text-white hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 text-white hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 text-white hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Link href="/reserve" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-secondary text-primary hover:bg-secondary/90">
                    Reserve a Table
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
