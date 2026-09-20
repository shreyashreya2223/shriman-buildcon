import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function InstagramLogo({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookLogo({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.7.3-1 1-1Z" />
    </svg>
  );
}

function LinkedInLogo({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5ZM3.3 9.5h3.8V21H3.3V9.5Zm6.1 0h3.6v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8V21h-3.8v-5.4c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9.4V9.5Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#081B33] text-white">

      {/* GOLD TOP ACCENT */}
      <div className="h-1 w-full bg-[#F4B400]" />

      <div className="w-full">
        <div className="mx-auto w-full max-w-[1500px] px-5 py-7 sm:px-10 sm:py-12 lg:px-16 lg:py-12 xl:px-20">

          {/* =====================================================
              MAIN FOOTER
          ====================================================== */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">

            {/* =====================================================
                LEFT — COMPANY
            ====================================================== */}
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white sm:mb-7 sm:text-sm">
                Company
              </h3>

              <nav className="grid grid-cols-2 gap-x-3 gap-y-2 text-[11px] text-white/65 sm:flex sm:flex-col sm:gap-4 sm:text-sm">

                <Link
                  href="/about"
                  className="group flex w-fit items-center gap-1 transition-all duration-300 hover:translate-x-1 hover:text-[#F4B400]"
                >
                  About Us
                  <ArrowUpRight
                    size={11}
                    className="hidden opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 sm:block sm:h-[14px] sm:w-[14px]"
                  />
                </Link>

                <Link
                  href="/projects"
                  className="group flex w-fit items-center gap-1 transition-all duration-300 hover:translate-x-1 hover:text-[#F4B400]"
                >
                  Projects
                  <ArrowUpRight
                    size={11}
                    className="hidden opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 sm:block sm:h-[14px] sm:w-[14px]"
                  />
                </Link>

                <Link
                  href="/services"
                  className="group flex w-fit items-center gap-1 transition-all duration-300 hover:translate-x-1 hover:text-[#F4B400]"
                >
                  Services
                  <ArrowUpRight
                    size={11}
                    className="hidden opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 sm:block sm:h-[14px] sm:w-[14px]"
                  />
                </Link>

                <Link
                  href="/gallery"
                  className="group flex w-fit items-center gap-1 transition-all duration-300 hover:translate-x-1 hover:text-[#F4B400]"
                >
                  Gallery
                  <ArrowUpRight
                    size={11}
                    className="hidden opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 sm:block sm:h-[14px] sm:w-[14px]"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="group flex w-fit items-center gap-1 transition-all duration-300 hover:translate-x-1 hover:text-[#F4B400]"
                >
                  Contact
                  <ArrowUpRight
                    size={11}
                    className="hidden opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 sm:block sm:h-[14px] sm:w-[14px]"
                  />
                </Link>

              </nav>
            </div>


            {/* =====================================================
                MIDDLE — COMPANY INFORMATION
            ====================================================== */}
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white sm:mb-7 sm:text-sm">
                Company Information
              </h3>

              <div className="grid grid-cols-2 gap-x-3 gap-y-3 sm:gap-x-8 sm:gap-y-6">

                {/* Company Name */}
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-white/40 sm:text-[10px] sm:tracking-[0.14em]">
                    Company Name
                  </p>

                  <p className="mt-1 text-[10px] font-semibold leading-4 text-white/90 sm:mt-1.5 sm:text-[15px]">
                    Shriman Buildcon
                  </p>
                </div>


                {/* Proprietor */}
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-white/40 sm:text-[10px] sm:tracking-[0.14em]">
                    Proprietor
                  </p>

                  <p className="mt-1 text-[10px] font-semibold leading-4 text-white/90 sm:mt-1.5 sm:text-[15px]">
                    Mr. Bhushan Prasad
                  </p>
                </div>


                {/* Business Type */}
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-white/40 sm:text-[10px] sm:tracking-[0.14em]">
                    Business Type
                  </p>

                  <p className="mt-1 text-[10px] font-semibold leading-4 text-white/90 sm:mt-1.5 sm:text-[15px]">
                    Sole Proprietorship
                  </p>
                </div>


                {/* GSTIN */}
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-white/40 sm:text-[10px] sm:tracking-[0.14em]">
                    GSTIN
                  </p>

                  <p className="mt-1 break-all text-[10px] font-semibold leading-4 text-white/90 sm:mt-1.5 sm:text-[15px]">
                    07AMWPP8605L1Z5
                  </p>
                </div>


                {/* UDYAM */}
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-white/40 sm:text-[10px] sm:tracking-[0.14em]">
                    UDYAM Registration
                  </p>

                  <p className="mt-1 break-all text-[10px] font-semibold leading-4 text-white/90 sm:mt-1.5 sm:text-[15px]">
                    UDYAM-DL-05-0011335
                  </p>
                </div>


                {/* PAN */}
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-white/40 sm:text-[10px] sm:tracking-[0.14em]">
                    PAN
                  </p>

                  <p className="mt-1 text-[10px] font-semibold leading-4 text-white/90 sm:mt-1.5 sm:text-[15px]">
                    AMWPP8605L
                  </p>
                </div>

              </div>
            </div>


            {/* =====================================================
                RIGHT — CONTACT
            ====================================================== */}
            <div className="col-span-2 lg:col-span-1">

              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white sm:mb-7 sm:text-sm">
                Contact Us
              </h3>


              {/* Contact Details */}
              <div className="grid grid-cols-2 gap-3 sm:block sm:space-y-5">

                {/* PHONE */}
                <a
                  href="tel:+918527890800"
                  className="group flex items-center gap-2 sm:items-start sm:gap-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[#F4B400] transition-all duration-300 group-hover:bg-[#F4B400] group-hover:text-[#081B33] sm:h-11 sm:w-11">
                    <Phone size={15} className="sm:h-[18px] sm:w-[18px]" />
                  </span>

                  <div className="min-w-0">
                    <p className="mb-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-white/40 sm:mb-1 sm:text-[10px] sm:tracking-[0.16em]">
                      Phone
                    </p>

                    <p className="text-[10px] font-medium leading-4 text-white/90 transition-colors duration-300 group-hover:text-white sm:text-[15px]">
                      +91 8527890800
                    </p>
                  </div>
                </a>


                {/* EMAIL */}
                <a
                  href="mailto:shrimanbuildcon@gmail.com"
                  className="group flex items-center gap-2 sm:items-start sm:gap-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[#F4B400] transition-all duration-300 group-hover:bg-[#F4B400] group-hover:text-[#081B33] sm:h-11 sm:w-11">
                    <Mail size={15} className="sm:h-[18px] sm:w-[18px]" />
                  </span>

                  <div className="min-w-0">
                    <p className="mb-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-white/40 sm:mb-1 sm:text-[10px] sm:tracking-[0.16em]">
                      Email
                    </p>

                    <p className="break-all text-[10px] font-medium leading-4 text-white/90 transition-colors duration-300 group-hover:text-white sm:text-[15px]">
                      shrimanbuildcon@gmail.com
                    </p>
                  </div>
                </a>


                {/* OFFICE */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=B1-318%2C+B-Block%2C+4th+Floor%2C+Yamuna+Vihar%2C+Delhi+110053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group col-span-2 flex items-center gap-2 sm:items-start sm:gap-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[#F4B400] transition-all duration-300 group-hover:bg-[#F4B400] group-hover:text-[#081B33] sm:h-11 sm:w-11">
                    <MapPin size={15} className="sm:h-[18px] sm:w-[18px]" />
                  </span>

                  <div>
                    <p className="mb-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-white/40 sm:mb-1 sm:text-[10px] sm:tracking-[0.16em]">
                      Office
                    </p>

                    <p className="max-w-xs text-[10px] font-medium leading-4 text-white/90 transition-colors duration-300 group-hover:text-white sm:text-[15px] sm:leading-6">
                      B1-318, B-Block, 4th Floor,
                      <br />
                      Yamuna Vihar, Delhi - 110053
                    </p>
                  </div>
                </a>

              </div>


              {/* =================================================
                  SOCIAL MEDIA
              ================================================== */}
              <div className="mt-4 border-t border-white/10 pt-4 sm:mt-6 sm:pt-5">

                <div className="flex items-center justify-between sm:block">

                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/40 sm:mb-3 sm:text-[10px] sm:tracking-[0.18em]">
                    Follow Us
                  </p>

                  {/* SOCIAL ICONS */}
                  <div className="mt-0 flex items-center gap-2 sm:mt-3 sm:gap-3">

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/shrimanbuildcon/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] text-white/75 transition-all duration-300 hover:-translate-y-1 hover:border-[#F4B400] hover:bg-[#F4B400] hover:text-[#081B33] hover:shadow-[0_8px_20px_rgba(244,180,0,0.18)] sm:h-11 sm:w-11"
                    >
                      <InstagramLogo
                        size={15}
                      />
                    </a>


                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/profile.php?id=61594221844926"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] text-white/75 transition-all duration-300 hover:-translate-y-1 hover:border-[#F4B400] hover:bg-[#F4B400] hover:text-[#081B33] hover:shadow-[0_8px_20px_rgba(244,180,0,0.18)] sm:h-11 sm:w-11"
                    >
                      <FacebookLogo
                        size={15}
                      />
                    </a>


                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/shriman-buildcon/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] text-white/75 transition-all duration-300 hover:-translate-y-1 hover:border-[#F4B400] hover:bg-[#F4B400] hover:text-[#081B33] hover:shadow-[0_8px_20px_rgba(244,180,0,0.18)] sm:h-11 sm:w-11"
                    >
                      <LinkedInLogo
                        size={15}
                      />
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              START YOUR PROJECT CTA
          ====================================================== */}
          <div className="mt-6 border-t border-white/10 pt-5 sm:mt-11 sm:pt-8">

            <div className="flex items-center justify-between gap-4">

              {/* CTA Heading */}
              <div className="min-w-0">

                <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.22em] text-[#F4B400] sm:mb-2 sm:text-[10px] sm:tracking-[0.25em]">
                  Start Your Project
                </p>

                <h3 className="text-base font-extrabold leading-tight text-white sm:text-2xl lg:text-3xl">
                  Have a construction requirement?
                </h3>

                <p className="mt-1 hidden text-sm text-white/50 sm:block">
                  Let&apos;s discuss your project and bring your vision to life.
                </p>

              </div>


              {/* CTA Button */}
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-2 bg-white px-3 py-2.5 text-[10px] font-bold text-[#081B33] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4B400] hover:shadow-xl sm:gap-4 sm:px-7 sm:py-4 sm:text-sm"
              >

                <span>
                  Get an Estimate
                </span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#081B33]/[0.07] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#081B33]/10 sm:h-8 sm:w-8">
                  <ArrowUpRight size={13} className="sm:h-[17px] sm:w-[17px]" />
                </span>

              </Link>

            </div>

          </div>


          {/* =====================================================
              BOTTOM BAR
          ====================================================== */}
          <div className="mt-5 border-t border-white/10 pt-4 sm:mt-8 sm:pt-5">

            <div className="flex items-center justify-between gap-3 text-[9px] sm:flex-row sm:text-xs">

              {/* Copyright */}
              <p className="text-white/45">
                © {new Date().getFullYear()} Shriman Buildcon.
                <span className="hidden sm:inline"> All rights reserved.</span>
              </p>


              {/* Tagline */}
              <p className="shrink-0 font-medium tracking-wide text-white/45">
                Quality
                <span className="mx-1 text-[#F4B400]">·</span>
                Precision
                <span className="mx-1 text-[#F4B400]">·</span>
                Reliability
              </p>

            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}