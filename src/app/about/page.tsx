"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Droplets,
  Hammer,
  ClipboardCheck,
  Sparkles,
  ShieldCheck,
  Target,
  Users,
  CalendarCheck,
  HardHat,
  Ruler,
  KeyRound,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    number: "01",
    icon: Building2,
    title: "Civil Construction",
    description:
      "Construction solutions for residential, commercial, and industrial developments with a focus on quality, durability, and precision.",
  },
  {
    number: "02",
    icon: KeyRound,
    title: "Turnkey Projects",
    description:
      "End-to-end project execution with coordinated planning, construction, finishing, and professional project management.",
  },
  {
    number: "03",
    icon: Droplets,
    title: "Waterproofing",
    description:
      "Reliable waterproofing solutions designed to protect structures from water infiltration and improve long-term durability.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Tile & Stone Fixing",
    description:
      "Professional installation and finishing of tiles, marble, granite, and natural stone for durable results.",
  },
  {
    number: "05",
    icon: Sparkles,
    title: "Renovation & Finishing",
    description:
      "Renovation, repair, and finishing solutions that improve the functionality, appearance, and value of existing spaces.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
    description:
      "High standards of quality and craftsmanship across every stage of a project.",
  },
  {
    icon: Target,
    title: "Timely Execution",
    description:
      "A focused approach toward completing work efficiently and within committed timelines.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "Close coordination with clients to understand requirements and provide practical solutions.",
  },
  {
    icon: CheckCircle2,
    title: "Professional Execution",
    description:
      "Experienced teams delivering attention to detail, technical excellence, and professionalism.",
  },
];

const timeline = [
  {
    number: "01",
    icon: Users,
    title: "Understanding Requirements",
    description:
      "We begin by understanding the client's requirements, project objectives, scope, and expectations.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Planning & Preparation",
    description:
      "The project is carefully planned with attention to resources, execution requirements, timelines, and coordination.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Construction & Execution",
    description:
      "Our team carries out the work with a focus on quality workmanship, safety, precision, and professional execution.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Quality & Finishing",
    description:
      "Work is reviewed and finishing requirements are addressed with attention to detail and overall quality.",
  },
  {
    number: "05",
    icon: CalendarCheck,
    title: "Completion & Handover",
    description:
      "The completed project is prepared for handover with a focus on client satisfaction and reliable delivery.",
  },
];

const stats = [
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "50+",
    label: "Projects",
  },
  {
    value: "5",
    label: "Core Services",
  },
  {
    value: "100%",
    label: "Client Focus",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white pt-20">

        {/* ========================================================= */}
        {/* HERO */}
        {/* ========================================================= */}

        <section className="relative overflow-hidden bg-[#F8FAFC]">

          {/* Background decoration */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.04, 0.07, 0.04],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#114FA7] blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#F4B400] blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-28">

            <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-20">

              {/* LEFT CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mb-5 flex items-center gap-3"
                >
                  <span className="h-[2px] w-10 bg-[#F4B400] sm:w-12" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#114FA7] sm:text-sm sm:tracking-[0.3em]">
                    About Shriman Buildcon
                  </span>
                </motion.div>

                <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight text-[#0E2748] sm:text-6xl lg:text-[70px]">
                  From Foundation
                  <span className="block text-[#114FA7]">
                    to Finish.
                  </span>
                </h1>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="mt-6 h-1 bg-[#F4B400]"
                />

                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                  Shriman Buildcon is a trusted construction and turnkey
                  project firm committed to delivering high-quality
                  construction solutions with professionalism, precision,
                  and integrity.
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-5 sm:text-base sm:leading-7">
                  We specialize in residential, commercial, and industrial
                  projects while maintaining strong standards of quality,
                  safety, and timely delivery.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4"
                >

                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 overflow-hidden bg-[#114FA7] px-5 py-3.5 text-xs font-bold text-white shadow-[0_12px_30px_rgba(17,79,167,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0E438F] hover:shadow-[0_18px_40px_rgba(17,79,167,0.28)] sm:gap-3 sm:px-7 sm:py-4 sm:text-sm"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    <span className="relative">
                      Get In Touch
                    </span>

                    <ArrowRight
                      size={16}
                      className="relative transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-2 border border-slate-200 bg-white px-5 py-3.5 text-xs font-bold text-[#0E2748] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#114FA7]/20 hover:shadow-lg sm:gap-3 sm:px-7 sm:py-4 sm:text-sm"
                  >
                    Explore Our Projects

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                </motion.div>

              </motion.div>


              {/* RIGHT IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                className="relative"
              >

                {/* Gold corner */}
                <div className="absolute -left-2 -top-2 z-20 h-16 w-16 border-l-[3px] border-t-[3px] border-[#F4B400] sm:-left-6 sm:-top-6 sm:h-24 sm:w-24" />

                {/* Image */}
                <div className="group relative overflow-hidden bg-[#0E2748] shadow-[0_25px_70px_rgba(14,39,72,0.18)]">

                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85"
                    alt="Shriman Buildcon construction project"
                    className="h-[280px] w-full object-cover transition-transform duration-1000 group-hover:scale-105 sm:h-[500px]"
                  />

                  {/* Improved overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2748]/70 via-[#0E2748]/10 to-transparent" />

                  {/* Image shine */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  {/* Image information */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-9">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F4B400] sm:text-xs sm:tracking-[0.28em]">
                      Shriman Buildcon
                    </p>
                  </div>

                </div>


                {/* CLEAN PROFESSIONAL BADGE */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9,
                  }}
                  className="absolute -bottom-4 left-4 z-30 overflow-hidden bg-[#114FA7] px-4 py-3 text-white shadow-[0_18px_45px_rgba(17,79,167,0.30)] sm:-bottom-6 sm:left-8 sm:px-7 sm:py-5"
                >

                  {/* Gold shine */}
                  <motion.div
                    animate={{
                      x: ["-120%", "220%"],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-y-0 w-16 skew-x-[-20deg] bg-white/10"
                  />

                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F4B400] shadow-[0_0_12px_rgba(244,180,0,0.7)] sm:h-2 sm:w-2" />

                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#F4B400] sm:text-[11px] sm:tracking-[0.22em]">
                      Our Approach
                    </p>
                  </div>

                  <p className="relative mt-1 text-sm font-bold sm:text-lg">
                    Built Around You
                  </p>

                </motion.div>


                {/* Blue corner */}
                <div className="absolute -bottom-3 -right-3 z-10 h-16 w-16 border-b-[3px] border-r-[3px] border-[#114FA7] sm:-bottom-5 sm:-right-5 sm:h-24 sm:w-24" />

              </motion.div>

            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* WHO WE ARE */}
        {/* ========================================================= */}

        <section className="bg-white py-12 sm:py-20 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >

                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-9 bg-[#F4B400] sm:w-10" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#114FA7] sm:text-xs sm:tracking-[0.3em]">
                    Who We Are
                  </span>
                </div>

                <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#0E2748] sm:text-5xl">
                  Building Trust
                  <span className="block text-[#114FA7]">
                    Through Every Project.
                  </span>
                </h2>

                <div className="mt-5 h-1 w-14 bg-[#F4B400]" />

                <div className="mt-7 hidden border-l-2 border-[#F4B400] pl-5 lg:block">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0E2748]">
                    Our Commitment
                  </p>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                    Professional execution, dependable solutions, and
                    attention to detail at every stage.
                  </p>
                </div>

              </motion.div>


              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-4 text-sm leading-6 text-slate-600 sm:space-y-6 sm:text-lg sm:leading-8"
              >

                <p>
                  Shriman Buildcon is a trusted construction and turnkey
                  project firm committed to delivering high-quality
                  construction solutions with professionalism, precision,
                  and integrity.
                </p>

                <p>
                  We specialize in executing residential, commercial, and
                  industrial projects while maintaining high standards of
                  quality, safety, and timely delivery.
                </p>

                <p>
                  We work closely with our clients to provide reliable and
                  cost-effective solutions tailored to their specific
                  requirements. Our experienced team ensures every project
                  is completed with attention to detail, technical
                  excellence, and a strong commitment to customer
                  satisfaction.
                </p>


                {/* STATS */}
                <div className="grid grid-cols-2 gap-2 pt-1 sm:grid-cols-4 sm:gap-4 sm:pt-3">

                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{
                        opacity: 0,
                        y: 25,
                        scale: 0.96,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.08,
                      }}
                      className="group relative overflow-hidden border border-slate-200 bg-[#F8FAFC] px-3 py-4 shadow-[0_8px_25px_rgba(14,39,72,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#114FA7]/20 hover:bg-white hover:shadow-[0_18px_40px_rgba(14,39,72,0.10)] sm:px-4 sm:py-5"
                    >

                      <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#F4B400] transition-all duration-500 group-hover:w-full" />

                      <p className="text-xl font-extrabold tracking-tight text-[#114FA7] sm:text-3xl">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-[8px] font-bold uppercase leading-4 tracking-[0.1em] text-slate-400 sm:text-[10px] sm:tracking-[0.12em]">
                        {stat.label}
                      </p>

                    </motion.div>
                  ))}

                </div>


                {/* Statement */}
                <div className="border-l-4 border-[#F4B400] bg-[#F8FAFC] px-4 py-4 shadow-sm sm:px-6 sm:py-5">

                  <p className="text-sm font-bold text-[#0E2748] sm:text-base">
                    From Foundation to Finish
                  </p>

                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Dependable construction solutions with professional
                    execution at every stage.
                  </p>

                </div>

              </motion.div>

            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* SERVICES */}
        {/* ========================================================= */}

        <section className="relative overflow-hidden bg-[#F8FAFC] py-12 sm:py-20 lg:py-32">

          <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#114FA7]/[0.04] blur-3xl" />

          <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#F4B400]/[0.035] blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >

              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#F4B400] sm:w-10" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#114FA7] sm:text-xs sm:tracking-[0.3em]">
                  Our Expertise
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tight text-[#0E2748] sm:mt-5 sm:text-5xl">
                Complete Construction
                <span className="block text-[#114FA7]">
                  Solutions.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-5 sm:text-lg sm:leading-8">
                From core construction to finishing and renovation,
                our services cover the key stages of a project.
              </p>

            </motion.div>


            {/* 2 COLUMN MOBILE / 5 COLUMN DESKTOP */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-5">

              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.number}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.09,
                      ease: "easeOut",
                    }}
                    className="group relative"
                  >

                    <div className="relative flex min-h-[255px] h-full flex-col overflow-hidden border border-slate-200 bg-white p-4 shadow-[0_10px_35px_rgba(14,39,72,0.045)] transition-all duration-500 hover:-translate-y-3 hover:border-[#114FA7]/20 hover:shadow-[0_25px_60px_rgba(14,39,72,0.14)] sm:min-h-[350px] sm:p-6 lg:min-h-[410px] lg:p-7">

                      {/* Gold top line */}
                      <div className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 bg-[#F4B400] transition-transform duration-500 group-hover:scale-x-100" />

                      {/* Number */}
                      <span className="pointer-events-none absolute right-3 top-2 text-4xl font-extrabold text-[#0E2748]/[0.035] transition-all duration-500 group-hover:scale-110 group-hover:text-[#114FA7]/[0.07] sm:right-4 sm:text-6xl">
                        {service.number}
                      </span>


                      {/* Icon */}
                      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center bg-[#114FA7]/[0.07] text-[#114FA7] transition-all duration-500 group-hover:bg-[#114FA7] group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(17,79,167,0.24)] sm:h-12 sm:w-12 lg:h-14 lg:w-14">

                        <Icon
                          size={19}
                          strokeWidth={1.7}
                          className="transition-transform duration-500 group-hover:scale-110 sm:size-[22px] lg:size-[25px]"
                        />

                        <span className="absolute bottom-0 left-0 h-1 w-1 bg-[#F4B400] sm:h-1.5 sm:w-1.5" />

                      </div>


                      <p className="mt-4 text-[8px] font-bold uppercase tracking-[0.18em] text-[#114FA7] sm:mt-6 sm:text-[10px] sm:tracking-[0.25em]">
                        Service {service.number}
                      </p>


                      {/* Title */}
                      <h3 className="mt-2 text-[15px] font-bold leading-tight tracking-tight text-[#0E2748] transition-colors duration-300 group-hover:text-[#114FA7] sm:mt-3 sm:text-[19px] lg:text-[22px]">
                        {service.title}
                      </h3>


                      {/* Description */}
                      <p className="mt-3 text-[10px] leading-5 text-slate-500 sm:mt-4 sm:text-sm sm:leading-6 lg:leading-7">
                        {service.description}
                      </p>


                      {/* Bottom */}
                      <div className="mt-auto pt-4 sm:pt-6 lg:pt-7">
                        <div className="h-[2px] w-7 bg-[#F4B400] transition-all duration-500 group-hover:w-12 sm:w-8 sm:group-hover:w-14" />
                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* PROJECT TIMELINE */}
        {/* ========================================================= */}

        <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-32">

          <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#114FA7]/[0.025] blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-3xl text-center"
            >

              <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5">
                <span className="h-[2px] w-8 bg-[#F4B400] sm:w-10" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#114FA7] sm:text-xs sm:tracking-[0.3em]">
                  Project Journey
                </span>

                <span className="h-[2px] w-8 bg-[#F4B400] sm:w-10" />
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#0E2748] sm:text-5xl">
                From Planning
                <span className="text-[#114FA7]">
                  {" "}to Completion.
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-5 sm:text-lg sm:leading-7">
                A structured approach helps us maintain quality,
                coordination, and professionalism throughout every
                stage of the project.
              </p>

            </motion.div>


            {/* Timeline */}
            <div className="relative mt-10 sm:mt-14">

              {/* Base line */}
              <div className="absolute bottom-0 left-5 top-0 w-[2px] bg-slate-200 sm:left-6 md:left-1/2 md:-translate-x-1/2" />

              {/* Animated line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                }}
                style={{
                  transformOrigin: "top",
                }}
                className="absolute bottom-0 left-5 top-0 w-[3px] bg-gradient-to-b from-[#F4B400] via-[#114FA7] to-[#114FA7] sm:left-6 md:left-1/2 md:-translate-x-1/2"
              />


              <div className="space-y-7 sm:space-y-12 md:space-y-16">

                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  const isRight = index % 2 !== 0;

                  return (
                    <motion.div
                      key={item.number}
                      initial={{
                        opacity: 0,
                        x: isRight ? 50 : -50,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.08,
                      }}
                      className="relative md:grid md:grid-cols-2 md:gap-16"
                    >

                      {/* Timeline dot */}
                      <motion.div
                        whileInView={{
                          scale: [0.7, 1.15, 1],
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2,
                        }}
                        className="absolute left-5 top-5 z-20 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-[#F4B400] shadow-[0_0_0_5px_rgba(244,180,0,0.10),0_5px_15px_rgba(244,180,0,0.25)] sm:left-6 sm:h-6 sm:w-6 md:left-1/2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0E2748]" />
                      </motion.div>


                      {/* Card */}
                      <div
                        className={`ml-10 md:ml-0 ${
                          isRight
                            ? "md:col-start-2"
                            : "md:col-start-1"
                        }`}
                      >

                        <div className="group relative overflow-hidden border border-slate-200 bg-white p-4 shadow-[0_10px_35px_rgba(14,39,72,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#114FA7]/20 hover:shadow-[0_25px_55px_rgba(14,39,72,0.13)] sm:p-6 md:p-7">

                          {/* Hover line */}
                          <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-[#F4B400] transition-transform duration-500 group-hover:scale-y-100" />

                          <div className="flex items-start justify-between gap-3 sm:gap-5">

                            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#114FA7]/[0.07] text-[#114FA7] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#114FA7] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(17,79,167,0.20)] sm:h-12 sm:w-12">

                              <Icon
                                size={19}
                                className="sm:size-[22px]"
                              />

                            </div>

                            <span className="text-4xl font-extrabold leading-none text-[#0E2748]/[0.045] transition-colors duration-500 group-hover:text-[#114FA7]/[0.08] sm:text-5xl">
                              {item.number}
                            </span>

                          </div>


                          <h3 className="mt-4 text-base font-bold leading-tight text-[#0E2748] transition-colors duration-300 group-hover:text-[#114FA7] sm:mt-6 sm:text-xl">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-xs leading-5 text-slate-500 sm:mt-3 sm:text-sm sm:leading-7">
                            {item.description}
                          </p>

                        </div>

                      </div>

                    </motion.div>
                  );
                })}

              </div>

            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* WHY CHOOSE US */}
        {/* ========================================================= */}

        <section className="relative overflow-hidden bg-[#0E2748] py-12 sm:py-20 lg:py-32">

          {/* Background glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.04, 0.07, 0.04],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#114FA7] blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.025, 0.05, 0.025],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#F4B400] blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >

                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-9 bg-[#F4B400] sm:w-10" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F4B400] sm:text-xs sm:tracking-[0.3em]">
                    Why Choose Us
                  </span>
                </div>

                <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                  Quality,
                  <span className="block text-[#F4B400]">
                    Reliability & Excellence.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-6 text-white/60 sm:mt-6 sm:text-lg sm:leading-8">
                  Our focus on client satisfaction, quality
                  workmanship, and timely execution has helped us
                  build lasting professional relationships.
                </p>

              </motion.div>


              <div className="grid grid-cols-2 gap-2 sm:gap-4">

                {values.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.15,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.08,
                      }}
                      className="group relative overflow-hidden border border-white/10 bg-white/[0.045] p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#F4B400]/30 hover:bg-white/[0.08] hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)] sm:p-6 lg:p-7"
                    >

                      {/* Gold top shine */}
                      <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#F4B400] transition-all duration-500 group-hover:w-full" />

                      {/* Glow */}
                      <div className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full bg-[#114FA7]/20 blur-2xl transition-transform duration-700 group-hover:scale-150" />


                      <div className="relative flex h-9 w-9 items-center justify-center bg-white/[0.08] text-[#F4B400] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#F4B400] group-hover:text-[#0E2748] sm:h-12 sm:w-12">

                        <Icon
                          size={18}
                          className="sm:size-[23px]"
                        />

                      </div>

                      <h3 className="relative mt-4 text-sm font-bold leading-tight text-white sm:mt-6 sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="relative mt-2 text-[10px] leading-5 text-white/50 sm:mt-3 sm:text-sm sm:leading-6">
                        {item.description}
                      </p>

                    </motion.div>
                  );
                })}

              </div>

            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* FINAL CTA */}
        {/* ========================================================= */}

        <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-28">

          <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#114FA7]/[0.035] blur-3xl" />

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
          >

            <div className="flex items-center justify-center gap-2 sm:gap-3">

              <span className="h-[2px] w-8 bg-[#F4B400] sm:w-10" />

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#114FA7] sm:text-xs sm:tracking-[0.3em]">
                Let&apos;s Build Together
              </span>

              <span className="h-[2px] w-8 bg-[#F4B400] sm:w-10" />

            </div>


            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0E2748] sm:mt-6 sm:text-5xl lg:text-6xl">
              Let&apos;s Build Something
              <span className="block text-[#114FA7]">
                Exceptional Together.
              </span>
            </h2>


            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
              Whether you&apos;re planning a residential, commercial,
              industrial, or turnkey project, Shriman Buildcon is
              committed to delivering quality construction solutions
              with professionalism and reliability.
            </p>


            {/* CTA */}
            <div className="mt-7 flex justify-center sm:mt-9">

              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden bg-[#114FA7] px-6 py-3.5 text-sm font-bold text-white shadow-[0_15px_35px_rgba(17,79,167,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0E438F] hover:shadow-[0_20px_45px_rgba(17,79,167,0.28)] sm:gap-3 sm:px-8 sm:py-4"
              >

                {/* Shine */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">
                  Start Your Project
                </span>

                <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20 sm:h-7 sm:w-7">

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </span>

              </Link>

            </div>

          </motion.div>

        </section>

      </main>

      <Footer />
    </>
  );
}