"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 85278 90800",
    href: "tel:+918527890800",
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: "shrimanbuildcon@gmail.com",
    href: "mailto:shrimanbuildcon@gmail.com",
    external: false,
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: (
      <>
        B1-318, B-Block, 4th Floor,
        <br />
        Yamuna Vihar, Delhi - 110053
      </>
    ),
    href: "https://www.google.com/maps/search/?api=1&query=B1-318%2C%20B-Block%2C%204th%20Floor%2C%20Yamuna%20Vihar%2C%20Delhi%20-110053",
    external: true,
  },
];

const benefits = [
  "Professional project execution",
  "Quality-focused workmanship",
  "Reliable construction solutions",
];

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-14 sm:py-16 lg:py-20">

      {/* ===================================================== */}
      {/* BACKGROUND DECORATION */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#114FA7]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#F4B400]/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ===================================================== */}
        {/* MAIN CONTACT CARD */}
        {/* ===================================================== */}

        <div className="grid overflow-hidden border border-slate-200 bg-white shadow-[0_20px_60px_rgba(14,39,72,0.10)] lg:grid-cols-2">

          {/* ================================================= */}
          {/* LEFT BLUE PANEL */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="relative overflow-hidden bg-[#114FA7] px-7 py-9 sm:px-10 sm:py-10 lg:px-12 lg:py-11"
          >

            {/* Gold top border */}

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="absolute left-0 top-0 h-[3px] bg-[#F4B400]"
            />

            {/* Subtle architectural circles */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/[0.07]" />

            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/[0.05]" />

            <div className="relative z-10">

              {/* Label */}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="h-[2px] w-10 bg-[#F4B400]" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F4B400]">
                  Start Your Project
                </span>
              </motion.div>

              {/* Heading */}

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="mt-6 max-w-lg text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[50px]"
              >
                Let&apos;s Build
                <span className="block text-[#F4B400]">
                  Something Great
                </span>
              </motion.h2>

              {/* Gold underline */}

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 58 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                }}
                className="mt-5 h-1 bg-[#F4B400]"
              />

              {/* Description */}

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
                className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base"
              >
                Have a construction, renovation, waterproofing, or
                finishing requirement? Get in touch with our team and
                discuss your project.
              </motion.p>

              {/* Benefits */}

              <div className="mt-6 space-y-2.5">
                {benefits.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.35 + index * 0.08,
                    }}
                    className="flex items-center gap-2.5"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.08]">
                      <CheckCircle2
                        size={14}
                        className="text-[#F4B400]"
                      />
                    </span>

                    <span className="text-sm font-medium text-white/90">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.55,
                }}
                className="mt-7"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-4 overflow-hidden bg-white px-6 py-3.5 font-bold text-[#0E2748] shadow-[0_10px_30px_rgba(0,0,0,0.13)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F4B400] hover:shadow-[0_16px_35px_rgba(0,0,0,0.20)]"
                >

                  {/* Shine */}

                  <span className="pointer-events-none absolute inset-y-0 -left-24 w-16 skew-x-[-20deg] bg-white/50 blur-sm transition-all duration-700 group-hover:left-[120%]" />

                  <span className="relative">
                    Request an Estimate
                  </span>

                  <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#0E2748]/[0.06] transition-all duration-300 group-hover:bg-[#0E2748] group-hover:text-white">
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>

              </motion.div>
            </div>
          </motion.div>


          {/* ================================================= */}
          {/* RIGHT WHITE PANEL */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="relative px-7 py-9 sm:px-10 sm:py-10 lg:px-12 lg:py-11"
          >

            {/* Header */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
              }}
            >

              <div className="flex items-center gap-3">
                <div className="h-[2px] w-10 bg-[#F4B400]" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#114FA7]">
                  Get In Touch
                </span>
              </div>

              <h3 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0E2748] sm:text-5xl">
                Have a project
                <span className="block text-[#114FA7]">
                  in mind?
                </span>
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Tell us about your requirements and our team will
                get back to you.
              </p>

            </motion.div>


            {/* ================================================= */}
            {/* CLICKABLE CONTACT DETAILS */}
            {/* ================================================= */}

            <div className="mt-7 space-y-3">

              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.15 + index * 0.1,
                    }}
                  >

                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={
                        item.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group relative flex items-center gap-4 overflow-hidden border border-slate-200 bg-white p-4 shadow-[0_5px_18px_rgba(14,39,72,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#114FA7]/20 hover:shadow-[0_14px_32px_rgba(14,39,72,0.11)]"
                    >

                      {/* Gold hover indicator */}

                      <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-[#F4B400] transition-transform duration-300 group-hover:scale-y-100" />


                      {/* Icon */}

                      <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#114FA7]/[0.06] text-[#114FA7] transition-all duration-300 group-hover:bg-[#114FA7] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(17,79,167,0.20)]">

                        <Icon
                          size={21}
                          strokeWidth={1.8}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />

                      </span>


                      {/* Text */}

                      <span className="min-w-0">

                        <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          {item.label}
                        </span>

                        <span className="mt-1 block break-words text-sm font-bold leading-5 text-[#0E2748] transition-colors duration-300 group-hover:text-[#114FA7] sm:text-base">
                          {item.value}
                        </span>

                      </span>

                    </a>

                  </motion.div>
                );
              })}

            </div>


            {/* ================================================= */}
            {/* TRUST FOOTER */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5"
            >

              <span className="h-2 w-2 shrink-0 rounded-full bg-[#F4B400]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
                Quality • Precision • Reliability
              </span>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}