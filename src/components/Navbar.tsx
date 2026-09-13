"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b bg-white/95 backdrop-blur-xl transition-all duration-500 ${
        scrolled
          ? "border-slate-200/80 shadow-[0_8px_30px_rgba(14,39,72,0.10)]"
          : "border-slate-100 shadow-sm"
      }`}
    >
      {/* Subtle company-color accent line */}
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-[#0E2748] via-[#114FA7] to-[#FBB800]" />

      <div className="mx-auto flex h-24 max-w-7xl items-center px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label="Shriman Buildcon Home"
        >
          <div className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Shriman Buildcon logo"
              width={72}
              height={72}
              className="h-[72px] w-[72px] object-contain"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="text-xl font-extrabold tracking-wide text-[#0E2748] transition-colors duration-300 group-hover:text-[#114FA7]">
              SHRIMAN
            </div>

            <div className="text-sm font-bold tracking-[0.25em] text-[#114FA7]">
              BUILDCON
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden flex-1 items-center justify-center gap-8 lg:flex xl:gap-10"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative whitespace-nowrap py-2 text-sm font-medium text-[#0E2748] transition-all duration-300 hover:text-[#114FA7] focus:outline-none focus:ring-2 focus:ring-[#114FA7] focus:ring-offset-4"
            >
              {link.name}

              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#114FA7] to-[#FBB800] transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Icons + CTA */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">

          {/* Email Icon */}
          <a
            href="mailto:shrimanbuildcon@gmail.com"
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#114FA7]/5 text-[#0E2748] transition-all duration-300 hover:scale-105 hover:bg-[#114FA7]/10 hover:text-[#114FA7] focus:outline-none focus:ring-2 focus:ring-[#114FA7] focus:ring-offset-2"
            aria-label="Email Shriman Buildcon"
            title="Email Shriman Buildcon"
          >
            <Mail
              size={19}
              className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
          </a>

          {/* Phone Icon */}
          <a
            href="tel:+918527890800"
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#114FA7]/5 text-[#0E2748] transition-all duration-300 hover:scale-105 hover:bg-[#114FA7]/10 hover:text-[#114FA7] focus:outline-none focus:ring-2 focus:ring-[#114FA7] focus:ring-offset-2"
            aria-label="Call Shriman Buildcon"
            title="Call Shriman Buildcon"
          >
            <Phone
              size={19}
              className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
          </a>

          {/* CTA */}
          <Link
            href="/contact"
            className="group relative ml-3 flex shrink-0 items-center gap-2 overflow-hidden bg-gradient-to-r from-[#114FA7] to-[#0E5FC7] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(17,79,167,0.30)] focus:outline-none focus:ring-2 focus:ring-[#114FA7] focus:ring-offset-2"
          >
            {/* Hover shine */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative">
              Get Free Estimate
            </span>

            <ArrowRight
              size={16}
              className="relative transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto flex h-10 w-10 items-center justify-center text-[#0E2748] transition-all duration-300 hover:scale-105 hover:text-[#114FA7] focus:outline-none focus:ring-2 focus:ring-[#114FA7] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-6 py-6 shadow-xl lg:hidden"
        >
          <nav
            className="flex flex-col gap-4"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between border-b border-slate-100 py-2 text-base font-medium text-[#0E2748] transition-all duration-300 hover:translate-x-1 hover:text-[#114FA7]"
              >
                <span>{link.name}</span>

                <ArrowRight
                  size={16}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </Link>
            ))}

            {/* Mobile Contact Icons */}
            <div className="mt-2 flex items-center justify-center gap-4">

              {/* Mobile Email */}
              <a
                href="mailto:shrimanbuildcon@gmail.com"
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#0E2748] transition-all duration-300 hover:border-[#114FA7] hover:bg-[#114FA7]/5 hover:text-[#114FA7]"
                aria-label="Email Shriman Buildcon"
                title="Email Shriman Buildcon"
              >
                <Mail size={19} />
              </a>

              {/* Mobile Phone */}
              <a
                href="tel:+918527890800"
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#0E2748] transition-all duration-300 hover:border-[#114FA7] hover:bg-[#114FA7]/5 hover:text-[#114FA7]"
                aria-label="Call Shriman Buildcon"
                title="Call Shriman Buildcon"
              >
                <Phone size={19} />
              </a>
            </div>

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="group relative mt-1 flex items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-[#114FA7] to-[#0E5FC7] px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">
                Get Free Estimate
              </span>

              <ArrowRight
                size={17}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}