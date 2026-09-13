import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#081B33] text-white">

      {/* =====================================================
          GOLD TOP ACCENT
      ====================================================== */}
      <div className="h-1 w-full bg-[#F4B400]" />

      <div className="w-full">

        <div className="mx-auto w-full max-w-[1500px] px-6 py-12 sm:px-10 lg:px-16 xl:px-20">

          {/* =====================================================
              MAIN FOOTER
          ====================================================== */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">


            {/* =====================================================
                LEFT — COMPANY
            ====================================================== */}
            <div>
              <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.2em] text-white">
                Company
              </h3>

              <nav className="flex flex-col gap-4 text-sm text-white/65">

                <Link
                  href="/about"
                  className="group flex w-fit items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-[#F4B400]"
                >
                  About Us

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>

                <Link
                  href="/projects"
                  className="group flex w-fit items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-[#F4B400]"
                >
                  Projects

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>

                <Link
                  href="/services"
                  className="group flex w-fit items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-[#F4B400]"
                >
                  Services

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>

                <Link
                  href="/gallery"
                  className="group flex w-fit items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-[#F4B400]"
                >
                  Gallery

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="group flex w-fit items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-[#F4B400]"
                >
                  Contact

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>

              </nav>
            </div>


            {/* =====================================================
                MIDDLE — COMPANY INFORMATION
            ====================================================== */}
            <div>
              <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.2em] text-white">
                Company Information
              </h3>

              {/* 2 Columns × 3 Rows */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">

                {/* Company Name */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                    Company Name
                  </p>

                  <p className="mt-1.5 text-[15px] font-semibold text-white/90">
                    Shriman Buildcon
                  </p>
                </div>


                {/* Proprietor */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                    Proprietor
                  </p>

                  <p className="mt-1.5 text-[15px] font-semibold text-white/90">
                    Mr. Bhushan Prasad
                  </p>
                </div>


                {/* Business Type */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                    Business Type
                  </p>

                  <p className="mt-1.5 text-[15px] font-semibold text-white/90">
                    Sole Proprietorship
                  </p>
                </div>


                {/* GSTIN */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                    GSTIN
                  </p>

                  <p className="mt-1.5 text-[15px] font-semibold text-white/90">
                    07AMWPP8605L1Z5
                  </p>
                </div>


                {/* UDYAM */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                    UDYAM Registration
                  </p>

                  <p className="mt-1.5 text-[15px] font-semibold text-white/90">
                    UDYAM-DL-05-0011335
                  </p>
                </div>


                {/* PAN */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                    PAN
                  </p>

                  <p className="mt-1.5 text-[15px] font-semibold text-white/90">
                    AMWPP8605L
                  </p>
                </div>

              </div>
            </div>


            {/* =====================================================
                RIGHT — CONTACT
            ====================================================== */}
            <div>

              <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.2em] text-white">
                Contact Us
              </h3>


              {/* Contact Details */}
              <div className="space-y-5">


                {/* PHONE */}
                <a
                  href="tel:+918527890800"
                  className="group flex items-start gap-4"
                >

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[#F4B400] transition-all duration-300 group-hover:bg-[#F4B400] group-hover:text-[#081B33]">
                    <Phone size={18} />
                  </span>


                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                      Phone
                    </p>

                    <p className="text-[15px] font-medium text-white/90 transition-colors duration-300 group-hover:text-white">
                      +91 8527890800
                    </p>
                  </div>

                </a>


                {/* EMAIL */}
                <a
                  href="mailto:shrimanbuildcon@gmail.com"
                  className="group flex items-start gap-4"
                >

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[#F4B400] transition-all duration-300 group-hover:bg-[#F4B400] group-hover:text-[#081B33]">
                    <Mail size={18} />
                  </span>


                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                      Email
                    </p>

                    <p className="break-all text-[15px] font-medium text-white/90 transition-colors duration-300 group-hover:text-white">
                      shrimanbuildcon@gmail.com
                    </p>
                  </div>

                </a>


                {/* OFFICE */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=B1-318%2C+B-Block%2C+4th+Floor%2C+Yamuna+Vihar%2C+Delhi+110053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[#F4B400] transition-all duration-300 group-hover:bg-[#F4B400] group-hover:text-[#081B33]">
                    <MapPin size={18} />
                  </span>


                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                      Office
                    </p>

                    <p className="max-w-xs text-[15px] font-medium leading-6 text-white/90 transition-colors duration-300 group-hover:text-white">
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
              <div className="mt-6 border-t border-white/10 pt-5">

                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                  Follow Us
                </p>


                <div className="flex items-center gap-3">

                  {/* Instagram */}
                  <a
  href="https://www.instagram.com/shrimanbuildcon/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-xs font-bold text-white/80 transition-all duration-300 hover:border-[#F4B400] hover:bg-[#F4B400] hover:text-[#081B33]"
                  >
                    IG
                  </a>


                  {/* Facebook */}
                  <a
  href="https://www.facebook.com/profile.php?id=61594221844926"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sm font-bold text-white/80 transition-all duration-300 hover:border-[#F4B400] hover:bg-[#F4B400] hover:text-[#081B33]"
                  >
                    f
                  </a>


                  {/* LinkedIn */}
                  <a
  href="https://www.linkedin.com/company/shriman-buildcon/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-xs font-bold text-white/80 transition-all duration-300 hover:border-[#F4B400] hover:bg-[#F4B400] hover:text-[#081B33]"
                  >
                    in
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              START YOUR PROJECT CTA
          ====================================================== */}
          <div className="mt-11 border-t border-white/10 pt-8">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              {/* CTA Heading */}
              <div>

                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#F4B400]">
                  Start Your Project
                </p>

                <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Have a construction requirement?
                </h3>

                <p className="mt-2 text-sm text-white/50">
                  Let&apos;s discuss your project and bring your vision to life.
                </p>

              </div>


              {/* CTA Button */}
              <Link
                href="/contact"
                className="group inline-flex w-fit shrink-0 items-center gap-4 bg-white px-7 py-4 text-sm font-bold text-[#081B33] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4B400] hover:shadow-xl"
              >

                <span>
                  Get an Estimate
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#081B33]/[0.07] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#081B33]/10">
                  <ArrowUpRight size={17} />
                </span>

              </Link>

            </div>

          </div>


          {/* =====================================================
              BOTTOM BAR
          ====================================================== */}
          <div className="mt-8 border-t border-white/10 pt-5">

            <div className="flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">

              {/* Copyright */}
              <p className="text-white/45">
                © {new Date().getFullYear()} Shriman Buildcon. All rights reserved.
              </p>


              {/* Tagline */}
              <p className="font-medium tracking-wide text-white/45">
                Quality <span className="mx-1 text-[#F4B400]">·</span>{" "}
                Precision <span className="mx-1 text-[#F4B400]">·</span>{" "}
                Reliability
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}