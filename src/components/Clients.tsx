"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";

const clients = [
  {
    logo: "/clients/lg1.png",
    name: "Great Value Realty",
  },
  {
    logo: "/clients/lg2.png",
    name: "P.R Apparels",
  },
  {
    logo: "/clients/lg3.png",
    name: "Gimmco",
  },
  {
    logo: "/clients/lg4.png",
    name: "NBC",
  },
  {
    logo: "/clients/lg5.png",
    name: "Birla Nu",
  },
  {
    logo: "/clients/lg6.png",
    name: "CKA Birla Group",
  },
  {
    logo: "/clients/lg7.png",
    name: "O.P. Jindal Global University",
  },
];

export default function Clients() {
  /*
   * Duplicate the logos so the horizontal marquee
   * can loop continuously without a visible gap.
   */
  const marqueeClients = [...clients, ...clients];

  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  /*
   * Slow, continuous marquee movement.
   * The animation pauses whenever the user hovers
   * over the logo area.
   */
  useAnimationFrame((_time, delta) => {
    if (isPaused || !trackRef.current) return;

    const halfWidth = trackRef.current.scrollWidth / 2;

    if (halfWidth <= 0) return;

    const currentX = x.get();
    const speed = 55; // slower premium movement

    let nextX = currentX - (speed * delta) / 1000;

    if (nextX <= -halfWidth) {
      nextX += halfWidth;
    }

    x.set(nextX);
  });

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 lg:py-28">

      {/* ===================================================== */}
      {/* BACKGROUND DECORATION */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#114FA7]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F4B400]/[0.045] blur-3xl" />

      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl px-6 text-center lg:px-8"
      >

        {/* Section label */}

        <div className="mb-5 flex items-center justify-center gap-3">

          <div className="h-[2px] w-10 bg-[#F4B400]" />

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#114FA7] sm:text-sm">
            Trusted By
          </span>

          <div className="h-[2px] w-10 bg-[#F4B400]" />

        </div>

        {/* Heading */}

        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#0E2748] sm:text-5xl">
          Trusted Partnerships.
          <span className="block text-[#114FA7]">
            Built on Reliability.
          </span>
        </h2>

        {/* Gold accent */}

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 56 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 h-1 bg-[#F4B400]"
        />

        {/* Description */}

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
          Trusted by organizations and businesses for dependable
          construction, finishing, and project execution.
        </p>

        {/* ================================================= */}
        {/* TRUST BADGE */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full border border-[#114FA7]/10 bg-white px-4 py-2 shadow-[0_5px_20px_rgba(14,39,72,0.05)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#F4B400]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E2748]/60 sm:text-xs">
            Trusted by leading organizations
          </span>
        </motion.div>

      </motion.div>


      {/* ===================================================== */}
      {/* LOGO MARQUEE */}
      {/* ===================================================== */}

      <div
        className="relative mt-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* Left fade */}

        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent sm:w-40" />

        {/* Right fade */}

        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent sm:w-40" />

        {/* Moving track */}

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max items-center"
        >

          {marqueeClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group relative mx-3 flex h-40 w-[230px] shrink-0 items-center justify-center sm:mx-4 sm:h-44 sm:w-[260px] lg:h-48 lg:w-[280px]"
            >

              {/* ================================================= */}
              {/* LOGO CARD */}
              {/* ================================================= */}

              <div
                className="
                  relative
                  flex
                  h-full
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200/70
                  bg-white
                  px-8
                  shadow-[0_10px_35px_rgba(14,39,72,0.06)]
                  transition-all
                  duration-500
                  ease-out
                  group-hover:-translate-y-3
                  group-hover:scale-[1.10]
                  group-hover:border-[#114FA7]/20
                  group-hover:shadow-[0_30px_70px_rgba(14,39,72,0.18)]
                "
              >

                {/* Soft blue glow */}

                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#114FA7]/[0.05] blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[#114FA7]/[0.10]" />

                {/* Soft gold glow */}

                <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#F4B400]/[0.04] blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[#F4B400]/[0.10]" />

                {/* Top gold accent */}

                <span className="absolute left-1/2 top-0 h-[3px] w-0 -translate-x-1/2 bg-[#F4B400] transition-all duration-500 group-hover:w-16" />

                {/* Logo */}

                <img
                  src={client.logo}
                  alt={client.name}
                  className="
                    relative
                    z-10
                    max-h-24
                    max-w-[190px]
                    object-contain
                    opacity-100
                    mix-blend-multiply
                    transition-all
                    duration-500
                    ease-out
                    group-hover:scale-125
                  "
                />

                {/* Bottom blue accent */}

                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#114FA7] transition-all duration-500 group-hover:w-12" />

              </div>

            </div>
          ))}

        </motion.div>

      </div>


      {/* ===================================================== */}
      {/* TRUST STATEMENT */}
      {/* ===================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative mt-14 flex items-center justify-center gap-4"
      >

        <div className="h-px w-10 bg-slate-200 sm:w-16" />

        <div className="flex items-center gap-2">

          <span className="h-1.5 w-1.5 rounded-full bg-[#F4B400]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-xs">
            Quality
          </span>

          <span className="text-slate-300">•</span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-xs">
            Precision
          </span>

          <span className="text-slate-300">•</span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-xs">
            Reliability
          </span>

        </div>

        <div className="h-px w-10 bg-slate-200 sm:w-16" />

      </motion.div>

    </section>
  );
}