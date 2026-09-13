"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowRight, Play, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=90",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=90",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=90",
  ];

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, heroImages.length]);

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    {
      value: "50+",
      label: "Projects",
    },
    {
      value: "10+",
      label: "Years Experience",
    },
    {
      value: "100%",
      label: "Commitment",
    },
    {
      value: "24/7",
      label: "Support",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0E2748] pt-20">

      {/* ========================================================= */}
      {/* BACKGROUND IMAGE SLIDESHOW */}
      {/* ========================================================= */}

      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${image}')`,
            }}
            initial={false}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale:
                currentSlide === index
                  ? 1
                  : shouldReduceMotion
                    ? 1
                    : 1.04,
            }}
            transition={{
              opacity: {
                duration: shouldReduceMotion ? 0 : 1.2,
                ease: "easeInOut",
              },
              scale: {
                duration: shouldReduceMotion ? 0 : 6,
                ease: "easeOut",
              },
            }}
          />
        ))}
      </div>

      {/* ========================================================= */}
      {/* CINEMATIC OVERLAY */}
      {/* ========================================================= */}

      <div className="absolute inset-0 bg-[#0E2748]/45" />

      {/* Stronger left side for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B35]/98 via-[#0E2748]/82 to-[#0E2748]/20" />

      {/* Subtle blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#114FA7]/15 via-transparent to-[#0E2748]/45" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0E2748] via-[#0E2748]/60 to-transparent" />

      {/* ========================================================= */}
      {/* DECORATIVE VERTICAL LINE */}
      {/* ========================================================= */}

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute left-[8%] top-32 hidden h-48 w-px origin-top bg-gradient-to-b from-[#F4B400] to-transparent lg:block"
      />

      {/* Decorative corner line */}
      <div className="pointer-events-none absolute right-0 top-32 hidden h-px w-40 bg-gradient-to-l from-[#F4B400]/40 to-transparent lg:block" />

      {/* ========================================================= */}
      {/* MAIN CONTENT */}
      {/* ========================================================= */}

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 pb-44 pt-24 sm:px-8 lg:px-10 lg:pb-48">
        <div className="max-w-4xl">

          {/* Small Brand Label */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[2px] w-12 bg-[#F4B400] sm:w-14" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F4B400] sm:text-sm sm:tracking-[0.35em]">
              Shriman Buildcon
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="max-w-5xl text-[46px] font-extrabold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[82px]"
          >
            Building Excellence

            <span className="mt-3 block text-[#F4B400]">
              From Foundation to Finish
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.35 }}
            className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:text-xl"
          >
            Delivering reliable civil construction, turnkey projects,
            waterproofing, renovation, and finishing solutions with
            quality and precision.
          </motion.p>

          {/* ===================================================== */}
          {/* CTA BUTTONS */}
          {/* ===================================================== */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.5 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >

            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-[#114FA7] px-7 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(17,79,167,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F4B400] hover:text-[#0E2748] hover:shadow-[0_15px_35px_rgba(244,180,0,0.25)]"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">
                Get Free Estimate
              </span>

              <ArrowRight
                size={18}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-3 border border-white/35 bg-white/[0.07] px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#0E2748]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 transition-colors duration-300 group-hover:border-[#0E2748]/30">
                <Play
                  size={13}
                  fill="currentColor"
                  className="ml-[1px]"
                />
              </span>

              View Our Projects
            </Link>
          </motion.div>

          {/* Small trust-style line */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.65 }}
            className="mt-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-white/55"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#F4B400]" />
            Quality • Precision • Reliability
          </motion.div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* VISIBLE SLIDESHOW CONTROL */}
      {/* ========================================================= */}

      <div className="absolute bottom-28 right-8 z-30 hidden lg:flex">
        <div className="flex items-center gap-4 rounded-full border border-white/20 bg-[#0E2748]/65 px-5 py-3 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.25)]">

          {/* Slide counter */}
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-sm font-bold text-[#F4B400]">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>

            <span className="text-xs text-white/40">
              /
            </span>

            <span className="text-xs font-medium text-white/60">
              {String(heroImages.length).padStart(2, "0")}
            </span>
          </div>

          {/* Divider */}
          <span className="h-5 w-px bg-white/20" />

          {/* Slide buttons */}
          <div className="flex items-center gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`View construction image ${index + 1}`}
                className="group relative flex h-5 items-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-500 ${
                    currentSlide === index
                      ? "w-10 bg-[#F4B400]"
                      : "w-5 bg-white/40 group-hover:bg-white/75"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Next slide */}
          <button
            type="button"
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % heroImages.length)
            }
            aria-label="Next construction image"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-[#F4B400] hover:bg-[#F4B400] hover:text-[#0E2748]"
          >
            <ChevronRight size={15} />
          </button>

        </div>
      </div>

      {/* ========================================================= */}
      {/* STATS BAR */}
      {/* ========================================================= */}

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 30,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          delay: shouldReduceMotion ? 0 : 0.7,
        }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0E2748]/80 backdrop-blur-xl"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative px-4 py-5 text-center transition-all duration-300 hover:bg-white/[0.04] sm:px-6 sm:py-6 ${
                index !== 0 ? "border-l border-white/10" : ""
              } ${
                index === 2
                  ? "border-t border-white/10 md:border-t-0"
                  : ""
              } ${
                index === 3
                  ? "border-t border-white/10 md:border-t-0"
                  : ""
              }`}
            >
              {/* Yellow hover indicator */}
              <span className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-[#F4B400] transition-all duration-300 group-hover:w-12" />

              <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/55 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}