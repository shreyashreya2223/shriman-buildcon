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
      className="relative overflow-hidden bg-white py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-12 bg-[#F4B400]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#114FA7]">
              What We Do
            </span>

            <span className="h-[2px] w-12 bg-[#F4B400]" />
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#0E2748] sm:text-5xl lg:text-6xl">
            Five Core Services.
            <span className="block text-[#114FA7]">
              One Reliable Partner.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            From construction and project execution to protection,
            installation, renovation, and finishing, we support every
            essential stage of your project.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group"
              >
                <Link
                  href={service.href}
                  className="relative flex h-full min-h-[390px] flex-col overflow-hidden border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(14,39,72,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#114FA7]/30 hover:shadow-[0_25px_60px_rgba(14,39,72,0.15)]"
                >

                  {/* Gold top animation */}
                  <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#F4B400] transition-all duration-500 group-hover:w-full" />

                  {/* Large number */}
                  <span className="pointer-events-none absolute right-5 top-3 select-none text-[90px] font-black leading-none text-[#0E2748]/[0.035] transition-all duration-500 group-hover:text-[#114FA7]/[0.07]">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center border border-[#114FA7]/20 bg-[#F5F8FC] text-[#114FA7] transition-all duration-500 group-hover:border-[#114FA7] group-hover:bg-[#114FA7] group-hover:text-white group-hover:shadow-lg">
                    <Icon
                      size={25}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Service number */}
                  <p className="relative z-10 mt-8 text-xs font-bold uppercase tracking-[0.28em] text-[#114FA7]">
                    Service {service.number}
                  </p>

                  {/* Title */}
                  <h3 className="relative z-10 mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#0E2748] transition-colors duration-300 group-hover:text-[#114FA7]">
                    {service.title}
                  </h3>

                  {/* Gold divider */}
                  <div className="mt-5 h-[3px] w-10 bg-[#F4B400] transition-all duration-500 group-hover:w-20" />

                  {/* Description */}
                  <p className="mt-5 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                  {/* Bottom CTA */}
                  <div className="mt-auto flex items-center justify-between pt-8">

                    <span className="text-sm font-bold text-[#114FA7]">
                      Explore Service
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#114FA7]/20 bg-[#F5F8FC] text-[#114FA7] transition-all duration-300 group-hover:bg-[#114FA7] group-hover:text-white group-hover:shadow-md">
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>

                  </div>

                </Link>
              </motion.div>
            );
          })}

        </div>

        {/* View all services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 bg-[#114FA7] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0E2748] hover:shadow-xl"
          >
            View All Services

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}