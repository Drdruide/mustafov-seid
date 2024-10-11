"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PaintRoller } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <PaintRoller className="h-8 w-auto text-indigo-600 mr-2" />
              <span className="font-bold text-lg text-gray-900">
                Mustafov Seid
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#services"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="/#portfolio"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Portfolio
            </Link>
            <Link
              href="/#about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              À propos
            </Link>
            <Link
              href="/#contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link>
            <Button asChild>
              <Link href="/#contact">Demander un devis</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-2 space-y-1">
            <Link
              href="/#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full mt-2">
              <Link href="/#contact" onClick={() => setIsOpen(false)}>
                Demander un devis
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
