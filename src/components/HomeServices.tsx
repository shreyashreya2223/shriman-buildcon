"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  KeyRound,
  Droplets,
  Grid3X3,
  Paintbrush,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Civil Construction",
    description:
      "Reliable construction solutions for residential, commercial, and institutional projects, with a focus on structural precision and quality execution.",
    icon: Building2,
    href: "/services#civil-construction",
  },
  {
    number: "02",
    title: "Turnkey Projects",
    description:
      "End-to-end project execution covering planning, coordination, construction, finishing, and professional project management.",
    icon: KeyRound,
    href: "/services#turnkey-projects",
  },
  {
    number: "03",
    title: "Waterproofing Solutions",
    description:
      "Durable waterproofing solutions designed to protect structures from water infiltration and improve long-term performance.",
    icon: Droplets,
    href: "/services#waterproofing",
  },
  {
    number: "04",
    title: "Tile & Stone Fixing",
    description:
      "Precise installation of tiles, marble, granite, and natural stone with attention to durability, alignment, and finishing.",
    icon: Grid3X3,
    href: "/services#tile-stone",
  },
  {
    number: "05",
    title: "Renovation & Finishing",
    description:
      "Professional renovation, repair, and finishing solutions that improve the functionality, appearance, and value of existing spaces.",
    icon: Paintbrush,
    href: "/services#renovation",
  },
];

export default function HomeServices() {
  return (
    <section
      id="home-services"
      className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* HEADING */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-7 flex flex-col items-center text-center sm:mb-12 lg:mb-14"
        >
          <div className="mb-3 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
            <span className="h-[2px] w-7 bg-[#F4B400] sm:w-12" />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#114FA7] sm:text-xs sm:tracking-[0.3em]">
              What We Do
            </span>

            <span className="h-[2px] w-7 bg-[#F4B400] sm:w-12" />
          </div>

          <h2 className="max-w-3xl text-[27px] font-extrabold leading-[1.08] tracking-tight text-[#0E2748] sm:text-4xl lg:text-6xl">
            Five Core Services.
            <span className="block text-[#114FA7]">
              One Reliable Partner.
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-[12px] leading-5 text-slate-500 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
            From construction and project execution to protection,
            installation, renovation, and finishing, we support every
            essential stage of your project.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* SERVICE CARDS */}
        {/* ========================================================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-2.5
            sm:grid-cols-1
            sm:gap-5
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            const isMiddleCard = service.number === "03";

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className={`group ${
                  isMiddleCard
                    ? "col-span-2 sm:col-span-1 md:col-span-1"
                    : ""
                }`}
              >
                <Link
                  href={service.href}
                  className={`
                    relative
                    flex
                    h-full
                    overflow-hidden
                    border
                    border-slate-200
                    bg-white
                    shadow-[0_6px_20px_rgba(14,39,72,0.05)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#114FA7]/30
                    hover:shadow-[0_20px_45px_rgba(14,39,72,0.12)]

                    ${
                      isMiddleCard
                        ? `
                          flex-row
                          items-center
                          gap-4
                          p-4
                          min-h-[145px]
                          sm:min-h-0
                          sm:flex-col
                          sm:items-stretch
                          sm:gap-0
                          sm:p-6
                          lg:min-h-[390px]
                          lg:flex-col
                          lg:p-7
                        `
                        : `
                          min-h-[225px]
                          flex-col
                          p-3.5
                          sm:min-h-[330px]
                          sm:p-6
                          lg:min-h-[390px]
                          lg:p-7
                        `
                    }
                  `}
                >

                  {/* Gold top animation */}
                  <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#F4B400] transition-all duration-500 group-hover:w-full" />

                  {/* Background number */}
                  <span
                    className={`
                      pointer-events-none
                      absolute
                      select-none
                      font-black
                      leading-none
                      text-[#0E2748]/[0.035]
                      transition-all
                      duration-500
                      group-hover:text-[#114FA7]/[0.07]

                      ${
                        isMiddleCard
                          ? `
                            right-3
                            top-2
                            text-[58px]
                            sm:right-5
                            sm:top-3
                            sm:text-[80px]
                            lg:text-[90px]
                          `
                          : `
                            right-2
                            top-1
                            text-[52px]
                            sm:right-5
                            sm:top-3
                            sm:text-[80px]
                            lg:text-[90px]
                          `
                      }
                    `}
                  >
                    {service.number}
                  </span>

                  {/* ================================================= */}
                  {/* MOBILE MIDDLE CARD */}
                  {/* ================================================= */}

                  {isMiddleCard ? (
                    <>
                      {/* Icon */}
                      <div
                        className="
                          relative
                          z-10
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          border
                          border-[#114FA7]/20
                          bg-[#F5F8FC]
                          text-[#114FA7]
                          transition-all
                          duration-500
                          group-hover:border-[#114FA7]
                          group-hover:bg-[#114FA7]
                          group-hover:text-white
                          group-hover:shadow-lg

                          sm:h-14
                          sm:w-14
                        "
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.8}
                          className="sm:h-[25px] sm:w-[25px]"
                        />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 min-w-0 flex-1">

                        {/* Mobile number */}
                        <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-[#114FA7] sm:hidden">
                          Service {service.number}
                        </span>

                        {/* Desktop number */}
                        <p className="mt-7 hidden text-xs font-bold uppercase tracking-[0.28em] text-[#114FA7] sm:block">
                          Service {service.number}
                        </p>

                        {/* Title */}
                        <h3
                          className="
                            mt-1
                            max-w-full
                            text-[15px]
                            font-extrabold
                            leading-tight
                            tracking-tight
                            text-[#0E2748]
                            transition-colors
                            duration-300
                            group-hover:text-[#114FA7]

                            sm:mt-3
                            sm:text-2xl
                          "
                        >
                          {service.title}
                        </h3>

                        {/* Divider */}
                        <div className="mt-2 h-[3px] w-8 bg-[#F4B400] transition-all duration-500 group-hover:w-14 sm:mt-5 sm:w-10 sm:group-hover:w-20" />

                        {/* Description */}
                        <p
                          className="
                            mt-2
                            line-clamp-2
                            text-[10.5px]
                            leading-[1.45]
                            text-slate-500

                            sm:mt-5
                            sm:line-clamp-none
                            sm:text-sm
                            sm:leading-7
                          "
                        >
                          {service.description}
                        </p>

                        {/* CTA */}
                        <div
                          className="
                            mt-2
                            flex
                            items-center
                            justify-between

                            sm:mt-auto
                            sm:border-0
                            sm:pt-8
                          "
                        >
                          <span className="text-[10px] font-bold text-[#114FA7] sm:text-sm">
                            Explore Service
                          </span>

                          <span
                            className="
                              flex
                              h-7
                              w-7
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-[#114FA7]/20
                              bg-[#F5F8FC]
                              text-[#114FA7]
                              transition-all
                              duration-300
                              group-hover:bg-[#114FA7]
                              group-hover:text-white
                              group-hover:shadow-md

                              sm:h-10
                              sm:w-10
                            "
                          >
                            <ArrowRight
                              size={14}
                              className="transition-transform duration-300 group-hover:translate-x-1 sm:h-[18px] sm:w-[18px]"
                            />
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* ================================================= */}
                      {/* NORMAL CARDS */}
                      {/* ================================================= */}

                      {/* Top row */}
                      <div className="relative z-10 flex items-center justify-between">

                        {/* Icon */}
                        <div
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            border
                            border-[#114FA7]/20
                            bg-[#F5F8FC]
                            text-[#114FA7]
                            transition-all
                            duration-500
                            group-hover:border-[#114FA7]
                            group-hover:bg-[#114FA7]
                            group-hover:text-white
                            group-hover:shadow-lg

                            sm:h-14
                            sm:w-14
                          "
                        >
                          <Icon
                            size={18}
                            strokeWidth={1.8}
                            className="sm:h-[25px] sm:w-[25px]"
                          />
                        </div>

                        {/* Mobile service number */}
                        <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#114FA7] sm:hidden">
                          Service {service.number}
                        </span>
                      </div>

                      {/* Desktop service number */}
                      <p className="relative z-10 mt-7 hidden text-xs font-bold uppercase tracking-[0.28em] text-[#114FA7] sm:block">
                        Service {service.number}
                      </p>

                      {/* Title */}
                      <h3
                        className="
                          relative
                          z-10
                          mt-3
                          max-w-[96%]
                          text-[14px]
                          font-extrabold
                          leading-[1.15]
                          tracking-tight
                          text-[#0E2748]
                          transition-colors
                          duration-300
                          group-hover:text-[#114FA7]

                          sm:mt-3
                          sm:text-2xl
                        "
                      >
                        {service.title}
                      </h3>

                      {/* Gold divider */}
                      <div className="mt-2 h-[3px] w-8 bg-[#F4B400] transition-all duration-500 group-hover:w-14 sm:mt-5 sm:w-10 sm:group-hover:w-20" />

                      {/* Description */}
                      <p
                        className="
                          mt-2
                          line-clamp-3
                          text-[10.5px]
                          leading-[1.45]
                          text-slate-500

                          sm:mt-5
                          sm:line-clamp-none
                          sm:text-sm
                          sm:leading-7
                        "
                      >
                        {service.description}
                      </p>

                      {/* CTA */}
                      <div
                        className="
                          mt-auto
                          flex
                          items-center
                          justify-between
                          border-t
                          border-slate-100
                          pt-2.5

                          sm:border-0
                          sm:pt-8
                        "
                      >
                        <span className="text-[10px] font-bold text-[#114FA7] sm:text-sm">
                          Explore Service
                        </span>

                        <span
                          className="
                            flex
                            h-7
                            w-7
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#114FA7]/20
                            bg-[#F5F8FC]
                            text-[#114FA7]
                            transition-all
                            duration-300
                            group-hover:bg-[#114FA7]
                            group-hover:text-white
                            group-hover:shadow-md

                            sm:h-10
                            sm:w-10
                          "
                        >
                          <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-1 sm:h-[18px] sm:w-[18px]"
                          />
                        </span>
                      </div>
                    </>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* VIEW ALL SERVICES */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 flex justify-center sm:mt-10 lg:mt-12"
        >
          <Link
            href="/services"
            className="
              group
              inline-flex
              items-center
              gap-2
              bg-[#114FA7]
              px-5
              py-3
              text-xs
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#0E2748]
              hover:shadow-xl

              sm:gap-3
              sm:px-7
              sm:py-4
              sm:text-sm
            "
          >
            View All Services

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 sm:h-[18px] sm:w-[18px]"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}