"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="relative overflow-hidden bg-white py-8 sm:py-20 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 hidden h-96 w-96 rounded-full bg-[#114FA7]/[0.035] blur-3xl sm:block" />

      <div className="pointer-events-none absolute -left-32 bottom-20 hidden h-96 w-96 rounded-full bg-[#F4B400]/[0.035] blur-3xl sm:block" />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">

        {/* ====================================================== */}
        {/* SECTION HEADER */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-3 sm:gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">

            {/* Label */}
            <div className="mb-2 flex items-center gap-2 sm:mb-5 sm:gap-3">
              <div className="h-[2px] w-7 bg-[#F4B400] sm:w-12" />

              <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#114FA7] sm:text-xs sm:tracking-[0.3em]">
                Our Projects
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[25px] font-extrabold leading-[1.05] tracking-tight text-[#0E2748] sm:text-5xl lg:text-[54px]">
              Work That Speaks
              <span className="block text-[#114FA7]">
                For Itself
              </span>
            </h2>

            {/* Accent */}
            <div className="mt-2 h-[3px] w-10 bg-[#F4B400] sm:mt-5 sm:h-1 sm:w-16" />

            {/* Description */}
            <p className="mt-2 max-w-2xl text-[11px] leading-[1.45] text-slate-600 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
              Explore selected projects that demonstrate our commitment
              to quality, precision, and professional construction
              execution.
            </p>
          </div>

          {/* Desktop View All */}
          <Link
            href="/projects"
            className="group hidden shrink-0 items-center gap-3 border-b-2 border-[#114FA7]/20 pb-2 text-sm font-bold text-[#114FA7] transition-all duration-300 hover:border-[#F4B400] hover:text-[#0E2748] lg:inline-flex"
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

        {/* ====================================================== */}
        {/* PROJECT GRID */}
        {/* ====================================================== */}

        <div
          className="
            mt-5
            grid
            grid-cols-2
            gap-2

            sm:mt-12
            sm:grid-cols-2
            sm:gap-5

            lg:mt-14
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="col-span-1"
              >
                <Link
                  href={`/projects#${project.slug}`}
                  className="
                    group
                    relative
                    block
                    overflow-hidden
                    bg-[#0E2748]
                    shadow-[0_8px_25px_rgba(14,39,72,0.09)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_20px_50px_rgba(14,39,72,0.18)]
                  "
                >
                  {/* ================================================== */}
                  {/* IMAGE */}
                  {/* ================================================== */}

                  <div
                    className="
                      relative
                      aspect-[1.18/1]
                      overflow-hidden

                      sm:aspect-[4/3]

                      lg:aspect-[4/3]
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-1000
                        ease-out
                        group-hover:scale-105
                      "
                    />

                    {/* Dark gradient */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#0E2748]
                        via-[#0E2748]/35
                        to-transparent
                        transition-all
                        duration-500
                        group-hover:from-[#0E2748]/95
                        group-hover:via-[#0E2748]/40
                      "
                    />

                    {/* Blue hover */}
                    <div className="absolute inset-0 bg-[#114FA7]/0 transition-all duration-500 group-hover:bg-[#114FA7]/10" />

                    {/* ================================================== */}
                    {/* CATEGORY */}
                    {/* ================================================== */}

                    <div className="absolute left-2 top-2 sm:left-5 sm:top-5">
                      <span
                        className="
                          inline-flex
                          max-w-[105px]
                          border
                          border-white/20
                          bg-[#0E2748]/70
                          px-1.5
                          py-0.5
                          text-[6px]
                          font-bold
                          uppercase
                          tracking-[0.1em]
                          text-white
                          backdrop-blur-md

                          sm:max-w-none
                          sm:px-3
                          sm:py-2
                          sm:text-[10px]
                          sm:tracking-[0.15em]
                        "
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Project number */}
                    <span
                      className="
                        absolute
                        right-2
                        top-2
                        text-2xl
                        font-black
                        leading-none
                        text-white/[0.10]
                        transition-all
                        duration-500
                        group-hover:text-white/[0.18]

                        sm:right-5
                        sm:top-5
                        sm:text-5xl
                      "
                    >
                      0{index + 1}
                    </span>

                    {/* ================================================== */}
                    {/* CONTENT */}
                    {/* ================================================== */}

                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-6 lg:p-7">
                      <div className="flex items-end justify-between gap-1 sm:gap-5">

                        <div className="min-w-0">

                          {/* Title */}
                          <h3
                            className="
                              font-extrabold
                              leading-[1.08]
                              text-white
                              text-[11px]

                              sm:text-2xl

                              lg:text-[27px]
                            "
                          >
                            {project.title}
                          </h3>

                          {/* Location */}
                          <div className="mt-1 flex items-center gap-1 text-[7px] text-white/75 sm:mt-3 sm:gap-2 sm:text-sm">
                            <MapPin
                              size={9}
                              className="shrink-0 text-[#F4B400] sm:h-[15px] sm:w-[15px]"
                            />

                            <span>
                              {project.location}
                            </span>
                          </div>

                        </div>

                        {/* Arrow */}
                        <span
                          className="
                            flex
                            h-6
                            w-6
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-[#0E2748]
                            shadow-lg
                            transition-all
                            duration-500
                            group-hover:scale-110
                            group-hover:bg-[#F4B400]

                            sm:h-12
                            sm:w-12
                          "
                        >
                          <ArrowUpRight
                            size={12}
                            className="
                              transition-transform
                              duration-500
                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5

                              sm:h-5
                              sm:w-5
                            "
                          />
                        </span>
                      </div>

                      {/* Gold line */}
                      <div
                        className="
                          mt-1.5
                          h-[2px]
                          w-0
                          bg-[#F4B400]
                          transition-all
                          duration-700
                          group-hover:w-full

                          sm:mt-5
                        "
                      />
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#F4B400] transition-all duration-700 group-hover:w-full" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ====================================================== */}
        {/* MOBILE VIEW ALL */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-4 flex justify-center lg:hidden"
        >
          <Link
            href="/projects"
            className="
              group
              flex
              items-center
              gap-2
              bg-[#0E2748]
              px-4
              py-2.5
              text-[10px]
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:bg-[#114FA7]

              sm:gap-3
              sm:px-6
              sm:py-3.5
              sm:text-sm
            "
          >
            View All Projects

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-[17px] sm:w-[17px]"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}