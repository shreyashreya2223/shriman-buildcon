"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Droplets,
  KeyRound,
  PanelsTopLeft,
  Paintbrush,
  Ruler,
  Sparkles,
  Target,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Civil Construction",
    shortTitle: "Civil Construction",
    description:
      "Reliable civil construction solutions delivered with structural precision, quality workmanship, and attention to every detail.",
    fullDescription:
      "Our civil construction services focus on professionally executed construction work with an emphasis on structural precision, durability, quality workmanship, and dependable site execution. We support projects across different stages of construction while maintaining attention to detail throughout the process.",
    icon: Building2,
    image:
      "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1400",
    points: [
      "Residential construction",
      "Commercial developments",
      "Institutional projects",
      "Structural and civil execution",
      "Quality-focused workmanship",
    ],
  },
  {
    number: "02",
    title: "Turnkey Projects",
    shortTitle: "Turnkey Projects",
    description:
      "End-to-end project execution with coordinated planning, construction, finishing, and professional project management.",
    fullDescription:
      "Our turnkey approach brings different stages of a project together under coordinated execution. From planning and construction through finishing and completion, we focus on organized project delivery, communication, coordination, and professional execution.",
    icon: KeyRound,
    image:
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1400",
    points: [
      "Project planning",
      "Coordinated execution",
      "Construction management",
      "Finishing and detailing",
      "End-to-end project delivery",
    ],
  },
  {
    number: "03",
    title: "Waterproofing Solutions",
    shortTitle: "Waterproofing",
    description:
      "Durable waterproofing solutions designed to protect structures and provide long-lasting performance.",
    fullDescription:
      "Waterproofing is an important part of protecting a structure from water-related damage. Our solutions are focused on reducing water infiltration, improving protection, and supporting the long-term durability and performance of the structure.",
    icon: Droplets,
    image:
      "https://images.pexels.com/photos/6474458/pexels-photo-6474458.jpeg?auto=compress&cs=tinysrgb&w=1400",
    points: [
      "Water protection",
      "Leak prevention",
      "Surface treatment",
      "Structural protection",
      "Long-term durability",
    ],
  },
  {
    number: "04",
    title: "Tile & Stone Fixing",
    shortTitle: "Tile & Stone",
    description:
      "Precise tile and stone installation with a focus on durability, quality finishing, and visual appeal.",
    fullDescription:
      "Our tile and stone fixing services combine precise installation with attention to alignment, finishing, durability, and visual appeal. We work with tiles, marble, granite, and natural stone to create clean and refined finishes.",
    icon: PanelsTopLeft,
    image:
      "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1400",
    points: [
      "Tile installation",
      "Marble and granite",
      "Natural stone fixing",
      "Precision alignment",
      "Quality finishing",
    ],
  },
  {
    number: "05",
    title: "Renovation & Finishing",
    shortTitle: "Renovation & Finishing",
    description:
      "Professional renovation and finishing solutions that transform existing spaces with quality craftsmanship.",
    fullDescription:
      "Our renovation and finishing services are designed to improve the functionality, appearance, and overall finish of existing spaces. We focus on practical execution, quality craftsmanship, repair work, and detailed finishing.",
    icon: Paintbrush,
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1400",
    points: [
      "Renovation work",
      "Repair and improvement",
      "Interior finishing",
      "Surface detailing",
      "Space transformation",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your requirements, project goals, site conditions, and expectations.",
    icon: Target,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We organize the execution approach and coordinate the requirements needed for the project.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Our team focuses on professional execution, coordination, workmanship, and attention to detail.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Finish",
    description:
      "Finishing and detailing are completed with a focus on quality, appearance, and durability.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "We complete the work with a focus on dependable execution and client satisfaction.",
    icon: CheckCircle2,
  },
];

export default function Services() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="overflow-hidden bg-white">
      {/* ========================================================= */}
      {/* SERVICES HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#F8FAFC]">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#114FA7]/[0.045] blur-3xl" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#F4B400]/[0.035] blur-3xl" />

        <div
          className="
            mx-auto grid
            min-h-0
            max-w-7xl
            items-center
            gap-8
            px-5
            py-12
            sm:gap-10
            sm:px-6
            sm:py-16
            lg:min-h-[620px]
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-14
            lg:px-8
            lg:py-28
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3 sm:mb-6">
              <div className="h-[2px] w-10 bg-[#F4B400] sm:w-12" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#114FA7] sm:text-sm sm:tracking-[0.3em]">
                What We Build
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-xl
                text-[38px]
                font-extrabold
                leading-[1.02]
                tracking-tight
                text-[#0E2748]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Expertise That
              <span className="block text-[#114FA7]">
                Moves Projects Forward.
              </span>
            </h1>

            {/* Gold accent */}
            <div className="mt-5 h-1 w-14 bg-[#F4B400] sm:mt-7 sm:w-16" />

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8">
              From structural construction and turnkey execution to
              waterproofing, stone fixing, renovation, and finishing, our
              services cover the essential stages of your project.
            </p>

            {/* Service highlights */}
            <div className="mt-6 grid max-w-xl grid-cols-2 gap-x-5 gap-y-3 sm:mt-8 sm:gap-x-8 sm:gap-y-4">
              {[
                "Civil Construction",
                "Turnkey Projects",
                "Waterproofing",
                "Tile & Stone Fixing",
                "Renovation",
                "Finishing",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.25 + index * 0.07,
                  }}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#114FA7] text-white sm:h-5 sm:w-5">
                    <CheckCircle2 size={11} className="sm:h-[13px] sm:w-[13px]" />
                  </span>

                  <span className="text-[11px] font-semibold text-[#0E2748] sm:text-sm">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  bg-[#114FA7]
                  px-4
                  py-3
                  text-xs
                  font-bold
                  text-white
                  shadow-[0_12px_30px_rgba(17,79,167,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0E2748]
                  hover:shadow-[0_18px_40px_rgba(17,79,167,0.25)]
                  sm:gap-3
                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                Discuss Your Requirement

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 sm:h-7 sm:w-7">
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
                  />
                </span>
              </Link>

              <a
                href="#services-list"
                className="
                  inline-flex
                  items-center
                  gap-2
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-3
                  text-xs
                  font-semibold
                  text-[#0E2748]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#114FA7]/30
                  hover:shadow-md
                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                View Services
                <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="group relative overflow-hidden bg-[#0E2748] shadow-[0_25px_70px_rgba(14,39,72,0.16)]">
              <div
                className="
                  relative
                  aspect-[16/9]
                  overflow-hidden
                  sm:aspect-[4/3]
                  lg:aspect-[4/3]
                "
              >
                <img
                  src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Shriman Buildcon construction services"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2748]/80 via-[#0E2748]/10 to-transparent" />

                <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[120%]" />
              </div>

              <span className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-[#F4B400] sm:h-16 sm:w-16" />

              <span className="absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2 border-[#F4B400] sm:h-16 sm:w-16" />
            </div>

            {/* Floating service badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="
                absolute
                -bottom-4
                left-4
                z-20
                bg-[#114FA7]
                px-4
                py-3
                shadow-[0_18px_45px_rgba(17,79,167,0.25)]
                sm:-bottom-7
                sm:left-8
                sm:px-7
                sm:py-5
              "
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="h-2 w-2 rounded-full bg-[#F4B400] sm:h-2.5 sm:w-2.5" />

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#F4B400] sm:text-[10px] sm:tracking-[0.28em]">
                  Our Services
                </p>
              </div>

              <p className="mt-1 text-sm font-extrabold tracking-tight text-white sm:mt-2 sm:text-2xl">
                Built For Every Stage
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO */}
      {/* ========================================================= */}

      <section className="relative bg-[#F8FAFC] py-12 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#114FA7]/[0.035] blur-3xl" />

        <div
          className="
            relative
            mx-auto
            grid
            max-w-7xl
            gap-6
            px-5
            sm:gap-10
            sm:px-6
            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-center
            lg:gap-14
            lg:px-8
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-3 flex items-center gap-3 sm:mb-5">
              <div className="h-[2px] w-8 bg-[#F4B400] sm:w-10" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#114FA7] sm:text-xs sm:tracking-[0.3em]">
                What We Do
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0E2748] sm:text-5xl">
              Built Around
              <span className="block text-[#114FA7]">Your Project.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm leading-6 text-slate-600 sm:text-lg sm:leading-8">
              Shriman Buildcon delivers dependable construction and
              infrastructure solutions with a focus on quality, precision,
              and professional execution.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-500 sm:mt-5 sm:leading-7">
              Our services cover key stages of construction, finishing,
              protection, and renovation. We approach every requirement with
              attention to detail, coordinated execution, and a focus on
              delivering practical and reliable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICES */}
      {/* ========================================================= */}

      <section
        id="services-list"
        className="relative bg-white py-12 sm:py-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-8 max-w-3xl text-center sm:mb-16"
          >
            <div className="mb-3 flex items-center justify-center gap-3 sm:mb-5">
              <div className="h-[2px] w-8 bg-[#F4B400] sm:w-10" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#114FA7] sm:text-xs sm:tracking-[0.3em]">
                Our Expertise
              </span>

              <div className="h-[2px] w-8 bg-[#F4B400] sm:w-10" />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0E2748] sm:text-5xl">
              Five Core Services.
              <span className="block text-[#114FA7]">
                One Reliable Partner.
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-6 sm:text-lg sm:leading-7">
              Explore our core construction capabilities and understand how
              each service can support your project.
            </p>
          </motion.div>

          {/* MOBILE: 2 COLUMN GRID */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:hidden">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.05,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    border
                    border-slate-200
                    bg-white
                    shadow-[0_8px_25px_rgba(14,39,72,0.06)]
                  "
                >
                  {/* Mobile image */}
                  <div className="relative h-[105px] overflow-hidden sm:h-[150px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E2748]/70 via-transparent to-transparent" />

                    <div className="absolute left-2.5 top-2.5 flex h-8 w-8 items-center justify-center border border-white/20 bg-[#0E2748]/80 text-[#F4B400] backdrop-blur-md sm:left-4 sm:top-4 sm:h-10 sm:w-10">
                      <Icon size={16} strokeWidth={1.7} className="sm:h-5 sm:w-5" />
                    </div>

                    <span className="absolute bottom-2 right-2 text-3xl font-black text-white/25 sm:bottom-3 sm:right-3 sm:text-5xl">
                      {service.number}
                    </span>
                  </div>

                  {/* Mobile content */}
                  <div className="relative p-3 sm:p-5">
                    <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#114FA7] sm:text-[9px] sm:tracking-[0.25em]">
                      Service {service.number}
                    </p>

                    <h3 className="mt-1.5 min-h-[34px] text-[13px] font-extrabold leading-tight tracking-tight text-[#0E2748] sm:mt-2 sm:min-h-[42px] sm:text-lg">
                      {service.title}
                    </h3>

                    <div className="mt-2 h-[2px] w-7 bg-[#F4B400] sm:mt-3 sm:w-9" />

                    <p className="mt-2 text-[9px] leading-4 text-slate-500 sm:mt-3 sm:text-xs sm:leading-5">
                      {service.description}
                    </p>

                    <div className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                      {service.points.slice(0, 3).map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-1.5"
                        >
                          <CheckCircle2
                            size={10}
                            className="mt-0.5 shrink-0 text-[#114FA7] sm:h-3.5 sm:w-3.5"
                          />

                          <span className="text-[8px] leading-3 text-[#0E2748] sm:text-[10px] sm:leading-4">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="mt-3 inline-flex items-center gap-1 text-[9px] font-bold text-[#114FA7] sm:mt-5 sm:text-xs"
                    >
                      Discuss
                      <ArrowRight size={11} className="sm:h-3.5 sm:w-3.5" />
                    </Link>
                  </div>

                  <div className="absolute left-0 top-0 h-[2px] w-full bg-[#F4B400]" />
                </motion.article>
              );
            })}
          </div>

          {/* DESKTOP: ORIGINAL LARGE CARDS */}
          <div className="hidden space-y-10 lg:block">
            {services.map((service, index) => {
              const Icon = service.icon;
              const imageLeft = index % 2 === 0;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.05,
                  }}
                  className={`group relative grid overflow-hidden border border-slate-200 bg-white shadow-[0_12px_40px_rgba(14,39,72,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(14,39,72,0.12)] lg:grid-cols-2 ${
                    imageLeft ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Image */}
                  <div className="relative min-h-[480px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E2748]/75 via-[#0E2748]/10 to-transparent" />

                    <div className="absolute left-7 top-7 flex h-14 w-14 items-center justify-center border border-white/20 bg-[#0E2748]/80 text-[#F4B400] shadow-xl backdrop-blur-md">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>

                    <div className="absolute bottom-7 left-7">
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F4B400]">
                        Service {service.number}
                      </p>

                      <p className="mt-2 text-2xl font-bold text-white">
                        {service.shortTitle}
                      </p>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[120%]" />
                  </div>

                  {/* Content */}
                  <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                    <span className="pointer-events-none absolute right-5 top-2 select-none text-[100px] font-black leading-none text-[#0E2748]/[0.035]">
                      {service.number}
                    </span>

                    <div className="relative">
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#114FA7]">
                        Service {service.number}
                      </p>

                      <h3 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#0E2748] sm:text-4xl">
                        {service.title}
                      </h3>

                      <div className="mt-5 h-1 w-14 bg-[#F4B400]" />

                      <p className="mt-6 text-base leading-8 text-slate-600">
                        {service.fullDescription}
                      </p>

                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {service.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-2.5"
                          >
                            <CheckCircle2
                              size={17}
                              className="mt-0.5 shrink-0 text-[#114FA7]"
                            />

                            <span className="text-sm font-medium text-[#0E2748]">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="group/link mt-8 inline-flex items-center gap-3 font-bold text-[#114FA7]"
                      >
                        Discuss This Service

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#114FA7]/[0.07] transition-all duration-300 group-hover/link:bg-[#114FA7] group-hover/link:text-white">
                          <ArrowRight
                            size={17}
                            className="transition-transform duration-300 group-hover/link:translate-x-1"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#F4B400] transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOW WE WORK */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#F8FAFC] py-12 sm:py-20 lg:py-32">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#114FA7]/[0.035] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-3 flex items-center justify-center gap-3 sm:mb-5">
              <div className="h-[2px] w-8 bg-[#F4B400] sm:w-10" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#114FA7] sm:text-xs sm:tracking-[0.3em]">
                Our Process
              </span>

              <div className="h-[2px] w-8 bg-[#F4B400] sm:w-10" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#0E2748] sm:text-5xl">
              How We Work
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500 sm:mt-5 sm:text-lg sm:leading-7">
              A structured approach designed to keep every stage of your
              project organized and focused.
            </p>
          </motion.div>

          {/* MOBILE PROCESS GRID */}
          <div
            ref={timelineRef}
            className="mt-7 grid grid-cols-2 gap-3 sm:mt-12 lg:mt-20 lg:grid-cols-5 lg:gap-5"
          >
            {/* Desktop timeline background */}
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-slate-200 lg:block" />

            {/* Animated desktop timeline */}
            <motion.div
              style={{ width: lineHeight }}
              className="absolute left-[10%] top-7 hidden h-[2px] bg-[#F4B400] lg:block"
            />

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    relative
                    rounded-none
                    border
                    border-slate-200
                    bg-white
                    p-4
                    text-left
                    shadow-[0_6px_20px_rgba(14,39,72,0.04)]
                    sm:p-5
                    lg:border-0
                    lg:bg-transparent
                    lg:p-0
                    lg:text-center
                    lg:shadow-none
                  "
                >
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border-4
                      border-[#F8FAFC]
                      bg-[#114FA7]
                      text-white
                      shadow-[0_10px_30px_rgba(17,79,167,0.20)]
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-[#0E2748]
                      sm:h-12
                      sm:w-12
                      lg:mx-auto
                      lg:h-14
                      lg:w-14
                    "
                  >
                    <Icon size={16} strokeWidth={1.8} className="sm:h-5 sm:w-5" />
                  </div>

                  <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#F4B400] sm:mt-5 sm:text-xs sm:tracking-[0.25em]">
                    {step.number}
                  </p>

                  <h3 className="mt-1 text-sm font-extrabold text-[#0E2748] sm:text-lg lg:mt-2 lg:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[9px] leading-4 text-slate-500 sm:mt-3 sm:text-xs sm:leading-5 lg:mx-auto lg:max-w-[210px] lg:text-sm lg:leading-6">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICE OVERVIEW */}
      {/* ========================================================= */}

      <section className="bg-white py-12 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-7 text-center sm:mb-12"
          >
            <div className="mb-3 flex items-center justify-center gap-3 sm:mb-5">
              <div className="h-[2px] w-8 bg-[#F4B400] sm:w-10" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#114FA7] sm:text-xs sm:tracking-[0.3em]">
                At a Glance
              </span>

              <div className="h-[2px] w-8 bg-[#F4B400] sm:w-10" />
            </div>

            <h2 className="text-2xl font-extrabold text-[#0E2748] sm:text-4xl">
              Our Core Capabilities
            </h2>
          </motion.div>

          <div className="overflow-hidden border border-slate-200 shadow-[0_15px_50px_rgba(14,39,72,0.06)]">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[#0E2748] px-3 py-3 text-[8px] font-bold uppercase tracking-[0.12em] text-white sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.18em]">
              <span>Service</span>
              <span>Focus</span>
              <span>Approach</span>
            </div>

            {[
              ["Civil Construction", "Structure & execution", "Precision"],
              ["Turnkey Projects", "End-to-end delivery", "Coordination"],
              ["Waterproofing", "Structural protection", "Durability"],
              ["Tile & Stone Fixing", "Interior & exterior finish", "Craftsmanship"],
              ["Renovation & Finishing", "Space improvement", "Detail"],
            ].map((row, index) => (
              <motion.div
                key={row[0]}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="
                  grid
                  grid-cols-3
                  items-center
                  border-t
                  border-slate-200
                  px-3
                  py-3
                  transition-colors
                  duration-300
                  hover:bg-[#F8FAFC]
                  sm:px-8
                  sm:py-6
                "
              >
                <span className="pr-2 text-[9px] font-bold leading-3 text-[#0E2748] sm:text-base">
                  {row[0]}
                </span>

                <span className="pr-2 text-[8px] leading-3 text-slate-500 sm:text-sm">
                  {row[1]}
                </span>

                <span className="text-[8px] font-semibold leading-3 text-[#114FA7] sm:text-sm">
                  {row[2]}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#F8FAFC] px-4 pb-12 sm:px-6 sm:pb-20 lg:px-8 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl overflow-hidden bg-[#114FA7] shadow-[0_25px_70px_rgba(17,79,167,0.20)]"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

          <div className="relative flex flex-col items-start justify-between gap-5 px-5 py-7 sm:gap-8 sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:px-16 lg:py-14">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#F4B400] sm:text-xs sm:tracking-[0.3em]">
                Start Your Project
              </p>

              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:mt-3 sm:text-4xl">
                Have a project in mind?
              </h2>

              <p className="mt-2 max-w-xl text-xs leading-5 text-white/65 sm:mt-3 sm:text-base sm:leading-6">
                Tell us about your requirements and let&apos;s discuss how we
                can bring your project to life.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-2
                bg-white
                px-5
                py-3
                text-xs
                font-bold
                text-[#0E2748]
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#F4B400]
                sm:gap-3
                sm:px-6
                sm:py-3.5
                sm:text-sm
              "
            >
              Start Your Project

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0E2748]/[0.07] sm:h-7 sm:w-7">
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
                />
              </span>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}