"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    title: "Quality-focused execution",
    icon: ShieldCheck,
  },
  {
    title: "Experienced project management",
    icon: Award,
  },
  {
    title: "Reliable construction solutions",
    icon: CheckCircle2,
  },
  {
    title: "Client-focused approach",
    icon: Clock3,
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-32">
      {/* ===================================================== */}
      {/* BACKGROUND DECORATION */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#114FA7]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#F4B400]/[0.04] blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#114FA7]/[0.015] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ===================================================== */}
          {/* IMAGE SIDE */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Outer shadow layer */}
            <div className="absolute -inset-3 rounded-[2px] bg-[#114FA7]/[0.025] blur-2xl lg:-inset-4" />

            {/* Main image container */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-[16/10] overflow-hidden bg-[#0E2748] shadow-[0_18px_50px_rgba(14,39,72,0.16)] sm:aspect-[4/3] lg:aspect-[4/3] lg:shadow-[0_25px_70px_rgba(14,39,72,0.18)]"
            >
              {/* Image */}
              <img
                src="https://images.pexels.com/photos/8961073/pexels-photo-8961073.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Engineers reviewing construction plans"
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Professional dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2748]/85 via-[#0E2748]/10 to-transparent" />

              {/* Subtle blue tint */}
              <div className="absolute inset-0 bg-[#114FA7]/[0.05] transition-opacity duration-500 group-hover:bg-[#114FA7]/[0.02]" />

              {/* Image bottom content */}
              <div className="absolute bottom-4 left-5 sm:bottom-6 sm:left-6 lg:bottom-7 lg:left-7">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 42 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-2 h-[2px] bg-[#F4B400] sm:mb-3"
                />

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F4B400] sm:text-xs sm:tracking-[0.3em]">
                  Shriman Buildcon
                </p>

                <p className="mt-1 text-base font-bold text-white sm:mt-2 sm:text-xl lg:text-2xl">
                  Built With Precision
                </p>
              </div>

              {/* Premium corner mark */}
              <div className="absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-white/40 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-[#F4B400] sm:right-6 sm:top-6 sm:h-8 sm:w-8" />
            </motion.div>

            {/* ================================================= */}
            {/* GOLD CORNER */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pointer-events-none absolute -left-2 -top-2 h-14 w-14 border-l-2 border-t-2 border-[#F4B400] sm:-left-3 sm:-top-3 sm:h-20 sm:w-20 lg:-left-4 lg:-top-4 lg:h-24 lg:w-24 lg:border-l-[3px] lg:border-t-[3px]"
            />

            {/* ================================================= */}
            {/* BLUE CORNER */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="pointer-events-none absolute -bottom-2 -right-2 h-14 w-14 border-b-2 border-r-2 border-[#114FA7] sm:-bottom-3 sm:-right-3 sm:h-20 sm:w-20 lg:-bottom-4 lg:-right-4 lg:h-24 lg:w-24 lg:border-b-[3px] lg:border-r-[3px]"
            />

            {/* ================================================= */}
            {/* EXPERIENCE BADGE */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 50px rgba(17,79,167,0.35)",
              }}
              className="absolute -bottom-5 right-3 bg-gradient-to-br from-[#114FA7] to-[#0E5FC7] px-5 py-4 text-white shadow-[0_14px_35px_rgba(17,79,167,0.25)] sm:-bottom-7 sm:right-6 sm:px-7 sm:py-5 lg:-bottom-9 lg:right-5 lg:px-7 lg:py-6"
            >
              <div className="flex items-end gap-2">
                <p className="text-4xl font-extrabold leading-none tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl">
                  10+
                </p>

                <span className="mb-1 text-xs font-medium text-white/75 sm:text-sm">
                  Years
                </span>
              </div>

              <div className="mt-2 h-[2px] w-8 bg-[#F4B400] sm:mt-3 sm:w-10" />

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/80 sm:mt-2 sm:text-[11px] sm:tracking-[0.2em]">
                Of Experience
              </p>
            </motion.div>
          </motion.div>

          {/* ===================================================== */}
          {/* CONTENT SIDE */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pt-4 sm:pt-6 lg:pt-0"
          >
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center gap-3 sm:mb-5"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 42 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-[2px] bg-[#F4B400] sm:w-12"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#114FA7] sm:text-xs sm:tracking-[0.3em] lg:text-sm">
                About Shriman Buildcon
              </span>
            </motion.div>

            {/* Heading */}
            <h2 className="max-w-xl text-[32px] font-extrabold leading-[1.08] tracking-tight text-[#0E2748] sm:text-4xl lg:text-5xl xl:text-[52px]">
              Building With

              <span className="relative block text-[#114FA7]">
                Purpose & Precision

                {/* Gold underline accent */}
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 54 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute -bottom-3 left-0 h-[3px] bg-[#F4B400] sm:-bottom-4 sm:h-1 sm:w-16"
                />
              </span>
            </h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-2xl text-base leading-7 text-gray-600 sm:mt-9 sm:text-lg sm:leading-8"
            >
              Shriman Buildcon delivers dependable construction and
              infrastructure solutions with a focus on quality, precision,
              and professional execution.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:mt-4 sm:text-base sm:leading-7"
            >
              From civil construction and turnkey projects to waterproofing,
              tile and stone work, renovation, finishing, and vendor
              management, we provide solutions across different stages of a
              project.
            </motion.p>

            {/* ================================================= */}
            {/* HIGHLIGHTS */}
            {/* ================================================= */}

            <div className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-9 sm:grid-cols-2 sm:gap-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.08,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="group flex min-h-[68px] items-center gap-2.5 border border-slate-100 bg-white px-3 py-3 shadow-[0_5px_20px_rgba(14,39,72,0.035)] transition-all duration-300 hover:border-[#114FA7]/20 hover:shadow-[0_12px_30px_rgba(14,39,72,0.10)] sm:min-h-[76px] sm:gap-3 sm:px-4 sm:py-4"
                  >
                    {/* Icon */}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#114FA7]/[0.07] transition-all duration-300 group-hover:bg-[#114FA7] group-hover:shadow-[0_6px_15px_rgba(17,79,167,0.20)] sm:h-10 sm:w-10">
                      <Icon
                        size={16}
                        className="text-[#114FA7] transition-all duration-300 group-hover:scale-110 group-hover:text-white sm:h-[18px] sm:w-[18px]"
                      />
                    </span>

                    {/* Text */}
                    <span className="text-[11px] font-semibold leading-4 text-[#0E2748] sm:text-sm sm:leading-normal">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* ================================================= */}
            {/* CTA */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/about"
                className="group relative mt-7 inline-flex items-center gap-3 overflow-hidden bg-[#0E2748] px-5 py-3 font-semibold text-white shadow-[0_10px_25px_rgba(14,39,72,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#114FA7] hover:shadow-[0_15px_35px_rgba(17,79,167,0.25)] sm:mt-9 sm:px-6 sm:py-3.5"
              >
                {/* Hover shine */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative text-sm sm:text-base">
                  Learn More About Us
                </span>

                <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20 sm:h-7 sm:w-7">
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
                  />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}