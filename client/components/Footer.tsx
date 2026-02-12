import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-black text-lg">C</span>
              </div>
              <span className="font-bold text-lg">Campus Merch</span>
            </div>
            <p className="text-sm opacity-80">
              Official college merchandise for students who want to represent
              their campus with style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="opacity-80 hover:opacity-100 transition"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="opacity-80 hover:opacity-100 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="opacity-80 hover:opacity-100 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="mailto:hello@campusmerch.com" className="hover:opacity-100 transition">
                  hello@campusmerch.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:opacity-100 transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li>Main Campus, University Ave</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm opacity-80">
              © {currentYear} Campus Merch. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0 text-sm opacity-80">
              <a href="#" className="hover:opacity-100 transition">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:opacity-100 transition">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:opacity-100 transition">
                Shipping Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
