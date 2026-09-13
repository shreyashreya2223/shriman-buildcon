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
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">

      {/* ===================================================== */}
      {/* BACKGROUND DECORATION */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#114FA7]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#F4B400]/[0.04] blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#114FA7]/[0.015] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

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
            <div className="absolute -inset-4 rounded-[2px] bg-[#114FA7]/[0.025] blur-2xl" />

            {/* Main image container */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-[4/3] overflow-hidden bg-[#0E2748] shadow-[0_25px_70px_rgba(14,39,72,0.18)]"
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
              <div className="absolute bottom-7 left-7">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 42 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-3 h-[2px] bg-[#F4B400]"
                />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F4B400]">
                  Shriman Buildcon
                </p>

                <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Built With Precision
                </p>
              </div>

              {/* Small premium corner mark */}
              <div className="absolute right-6 top-6 h-8 w-8 border-r-2 border-t-2 border-white/40 transition-all duration-500 group-hover:h-12 group-hover:w-12 group-hover:border-[#F4B400]" />
            </motion.div>

            {/* ================================================= */}
            {/* GOLD CORNER */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pointer-events-none absolute -left-4 -top-4 h-24 w-24 border-l-[3px] border-t-[3px] border-[#F4B400]"
            />

            {/* ================================================= */}
            {/* BLUE CORNER */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 border-b-[3px] border-r-[3px] border-[#114FA7]"
            />

            {/* ================================================= */}
            {/* EXPERIENCE BADGE */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.92 }}
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
              className="absolute -bottom-9 right-5 bg-gradient-to-br from-[#114FA7] to-[#0E5FC7] px-7 py-6 text-white shadow-[0_18px_45px_rgba(17,79,167,0.30)] sm:right-8 sm:px-9 sm:py-7"
            >

              <div className="flex items-end gap-2">

                <p className="text-5xl font-extrabold leading-none tracking-tight sm:text-6xl">
                  10+
                </p>

                <span className="mb-1 text-sm font-medium text-white/75">
                  Years
                </span>

              </div>

              <div className="mt-3 h-[2px] w-10 bg-[#F4B400]" />

              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
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
          >

            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-[2px] bg-[#F4B400]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#114FA7] sm:text-sm">
                About Shriman Buildcon
              </span>

            </motion.div>


            {/* Heading */}
            <h2 className="max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0E2748] sm:text-5xl lg:text-[52px]">

              Building With

              <span className="relative block text-[#114FA7]">
                Purpose & Precision

                {/* Gold underline accent */}
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute -bottom-4 left-0 h-1 bg-[#F4B400]"
                />

              </span>

            </h2>


            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-9 max-w-2xl text-lg leading-8 text-gray-600"
            >
              Shriman Buildcon delivers dependable construction and
              infrastructure solutions with a focus on quality,
              precision, and professional execution.
            </motion.p>


            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 max-w-2xl leading-7 text-gray-500"
            >
              From civil construction and turnkey projects to
              waterproofing, tile and stone work, renovation,
              finishing, and vendor management, we provide solutions
              across different stages of a project.
            </motion.p>


            {/* ================================================= */}
            {/* HIGHLIGHTS */}
            {/* ================================================= */}

            <div className="mt-9 grid gap-3 sm:grid-cols-2">

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
                      y: -5,
                    }}
                    className="group flex items-center gap-3 border border-slate-100 bg-white px-4 py-4 shadow-[0_5px_20px_rgba(14,39,72,0.035)] transition-all duration-300 hover:border-[#114FA7]/20 hover:shadow-[0_15px_35px_rgba(14,39,72,0.10)]"
                  >

                    {/* Icon */}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#114FA7]/[0.07] transition-all duration-300 group-hover:bg-[#114FA7] group-hover:shadow-[0_6px_15px_rgba(17,79,167,0.20)]">

                      <Icon
                        size={18}
                        className="text-[#114FA7] transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                      />

                    </span>

                    {/* Text */}
                    <span className="text-sm font-semibold text-[#0E2748]">
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
                className="group relative mt-9 inline-flex items-center gap-3 overflow-hidden bg-[#0E2748] px-6 py-3.5 font-semibold text-white shadow-[0_10px_25px_rgba(14,39,72,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#114FA7] hover:shadow-[0_15px_35px_rgba(17,79,167,0.25)]"
              >

                {/* Hover shine */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">
                  Learn More About Us
                </span>

                <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20">

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
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