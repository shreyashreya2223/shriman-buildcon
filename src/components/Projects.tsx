"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Great Value Sharnam",
    category: "Civil Construction",
    location: "Noida",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=90",
    slug: "great-value-sharnam",
  },
  {
    title: "Birla Tower",
    category: "Commercial Construction",
    location: "New Delhi",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90",
    slug: "birla-tower",
  },
  {
    title: "O.P. Jindal Global University",
    category: "Institutional Project",
    location: "Sonipat",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=90",
    slug: "op-jindal-global-university",
  },
  {
    title: "Osho Ashram",
    category: "Construction & Finishing",
    location: "Sonipat",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=90",
    slug: "osho-ashram",
  },
  {
    title: "Chattarpur Farmhouse",
    category: "Renovation & Finishing",
    location: "New Delhi",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90",
    slug: "chattarpur-farmhouse",
  },
];

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#114FA7]/[0.035] blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-[#F4B400]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ============================= */}
        {/* SECTION HEADER */}
        {/* ============================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">

            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#F4B400]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#114FA7] sm:text-sm">
                Our Projects
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0E2748] sm:text-5xl lg:text-[54px]">
              Work That Speaks
              <span className="block text-[#114FA7]">
                For Itself
              </span>
            </h2>

            {/* Accent */}
            <div className="mt-5 h-1 w-16 bg-[#F4B400]" />

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Explore selected projects that demonstrate our commitment
              to quality, precision, and professional construction
              execution.
            </p>
          </div>

          {/* View All Projects */}
          <Link
            href="/projects"
            className="group inline-flex shrink-0 items-center gap-3 border-b-2 border-[#114FA7]/20 pb-2 text-sm font-bold text-[#114FA7] transition-all duration-300 hover:border-[#F4B400] hover:text-[#0E2748]"
          >
            View All Projects

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#114FA7]/[0.06] transition-all duration-300 group-hover:bg-[#114FA7] group-hover:text-white">
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </motion.div>

        {/* ============================= */}
        {/* PROJECT GRID */}
        {/* ============================= */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className={`${
                index === 0
                  ? "md:col-span-2 lg:col-span-2"
                  : ""
              }`}
            >

              {/* CLICKABLE PROJECT CARD */}
              <Link
                href={`/projects#${project.slug}`}
                className="group relative block overflow-hidden bg-[#0E2748] shadow-[0_15px_45px_rgba(14,39,72,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(14,39,72,0.22)]"
              >

                {/* Image */}
                <div
  className={`relative overflow-hidden ${
    index === 0
      ? "aspect-[16/8] lg:h-[500px] lg:aspect-auto"
      : index === 1
      ? "aspect-[4/3] lg:h-[500px] lg:aspect-auto"
      : "aspect-[4/3]"
  }`}
>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />

                  {/* Main dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2748] via-[#0E2748]/30 to-transparent transition-all duration-500 group-hover:from-[#0E2748]/95 group-hover:via-[#0E2748]/35" />

                  {/* Blue hover overlay */}
                  <div className="absolute inset-0 bg-[#114FA7]/0 transition-all duration-500 group-hover:bg-[#114FA7]/15" />

                  {/* Subtle shine */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  {/* Category */}
                  <div className="absolute left-5 top-5">
                    <span className="inline-flex items-center border border-white/20 bg-[#0E2748]/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#F4B400] group-hover:bg-[#F4B400] group-hover:text-[#0E2748]">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Number */}
                  <span className="absolute right-5 top-5 text-5xl font-black leading-none text-white/[0.10] transition-all duration-500 group-hover:text-white/[0.20]">
                    0{index + 1}
                  </span>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">

                    <div className="flex items-end justify-between gap-5">

                      <div className="min-w-0">

                        {/* Title */}
                        <h3
                          className={`font-extrabold leading-tight text-white ${
                            index === 0
                              ? "text-2xl sm:text-3xl"
                              : "text-xl sm:text-2xl"
                          }`}
                        >
                          {project.title}
                        </h3>

                        {/* Location */}
                        <div className="mt-3 flex items-center gap-2 text-sm text-white/75">
                          <MapPin
                            size={15}
                            className="shrink-0 text-[#F4B400]"
                          />

                          <span>{project.location}</span>
                        </div>

                      </div>

                      {/* Animated Arrow */}
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#0E2748] shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-[#F4B400] group-hover:shadow-[0_10px_30px_rgba(244,180,0,0.35)]">
                        <ArrowUpRight
                          size={20}
                          className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </span>

                    </div>

                    {/* Gold hover line */}
                    <div className="mt-5 h-[2px] w-0 bg-[#F4B400] transition-all duration-700 group-hover:w-full" />

                  </div>
                </div>

                {/* Bottom border */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#F4B400] transition-all duration-700 group-hover:w-full" />

              </Link>
            </motion.div>
          ))}

        </div>

        {/* ============================= */}
        {/* MOBILE VIEW ALL */}
        {/* ============================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center lg:hidden"
        >
          <Link
            href="/projects"
            className="group flex items-center gap-3 bg-[#0E2748] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#114FA7] hover:shadow-xl"
          >
            View All Projects

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}