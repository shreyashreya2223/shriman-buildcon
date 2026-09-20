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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b bg-white/95 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 shadow-[0_8px_30px_rgba(14,39,72,0.10)]"
          : "border-slate-100 shadow-sm"
      }`}
    >
      {/* Company accent line */}
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-[#0E2748] via-[#114FA7] to-[#FBB800]" />

      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:h-20 sm:px-6 lg:h-24 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 sm:gap-3"
          aria-label="Shriman Buildcon Home"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden sm:h-14 sm:w-14 lg:h-[72px] lg:w-[72px]">
            <Image
              src="/logo.png"
              alt="Shriman Buildcon logo"
              width={72}
              height={72}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="text-[15px] font-extrabold tracking-wide text-[#0E2748] transition-colors duration-300 group-hover:text-[#114FA7] sm:text-lg lg:text-xl">
              SHRIMAN
            </div>

            <div className="text-[9px] font-bold tracking-[0.22em] text-[#114FA7] sm:text-xs lg:text-sm lg:tracking-[0.25em]">
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

              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#114FA7] to-[#FBB800] transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Icons + CTA */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">

          {/* Email */}
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

          {/* Phone */}
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

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="group relative ml-3 flex shrink-0 items-center gap-2 overflow-hidden bg-gradient-to-r from-[#114FA7] to-[#0E5FC7] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(17,79,167,0.30)] focus:outline-none focus:ring-2 focus:ring-[#114FA7] focus:ring-offset-2"
          >
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

        {/* Mobile Actions */}
        <div className="ml-auto flex items-center gap-1.5 lg:hidden">

          {/* Phone */}
          <a
            href="tel:+918527890800"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#0E2748] transition-colors hover:bg-[#114FA7]/5 hover:text-[#114FA7]"
            aria-label="Call Shriman Buildcon"
          >
            <Phone size={19} />
          </a>

          {/* Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#114FA7]/5 text-[#0E2748] transition-all duration-300 hover:bg-[#114FA7]/10 hover:text-[#114FA7] focus:outline-none focus:ring-2 focus:ring-[#114FA7]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <>
          {/* Background overlay */}
          <button
            type="button"
            aria-label="Close mobile menu"
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 top-16 bg-[#071B33]/20 backdrop-blur-[2px] sm:top-20 lg:hidden"
          />

          {/* Compact floating menu */}
          <div
            id="mobile-navigation"
            className="absolute left-3 right-3 top-[calc(100%+8px)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(14,39,72,0.18)] sm:left-5 sm:right-5 lg:hidden"
          >
            <nav
              className="p-2"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium text-[#0E2748] transition-all duration-200 hover:bg-[#114FA7]/5 hover:text-[#114FA7]"
                >
                  <span>{link.name}</span>

                  <ArrowRight
                    size={16}
                    className="text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#114FA7]"
                  />
                </Link>
              ))}

              {/* Mobile bottom actions */}
              <div className="mt-1 grid grid-cols-[auto_auto_1fr] gap-2 border-t border-slate-100 p-2 pt-3">

                {/* Email */}
                <a
                  href="mailto:shrimanbuildcon@gmail.com"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#0E2748] transition-all hover:border-[#114FA7] hover:bg-[#114FA7]/5 hover:text-[#114FA7]"
                  aria-label="Email Shriman Buildcon"
                >
                  <Mail size={18} />
                </a>

                {/* Phone */}
                <a
                  href="tel:+918527890800"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#0E2748] transition-all hover:border-[#114FA7] hover:bg-[#114FA7]/5 hover:text-[#114FA7]"
                  aria-label="Call Shriman Buildcon"
                >
                  <Phone size={18} />
                </a>

                {/* Estimate */}
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#114FA7] to-[#0E5FC7] px-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
                >
                  <span>Free Estimate</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}