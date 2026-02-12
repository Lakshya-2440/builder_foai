import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-2xl text-primary"
        >
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-black">C</span>
          </div>
          <span className="hidden sm:inline">Campus Merch</span>
          <span className="sm:hidden">CM</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-foreground hover:text-primary transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-foreground hover:text-primary transition font-medium"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-foreground hover:text-primary transition font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-foreground hover:text-primary transition font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Cart */}
        <div className="hidden md:flex items-center gap-4">
          <button className="relative p-2 hover:bg-secondary rounded-lg transition">
            <ShoppingCart className="w-6 h-6 text-primary" />
            <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button className="relative p-2 hover:bg-secondary rounded-lg transition">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-secondary rounded-lg transition md:hidden"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-foreground hover:text-primary transition font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
