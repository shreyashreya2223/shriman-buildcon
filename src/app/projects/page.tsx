import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { MapPin } from "lucide-react";

const focusPoints: Record<string, string[]> = {
  "01": [
    "Residential construction",
    "Structural quality",
    "Precise execution",
    "Dependable construction standards",
  ],

  "02": [
    "Commercial construction",
    "Structural integrity",
    "Finishing quality",
    "Professional execution",
  ],

  "03": [
    "Institutional construction",
    "Durability",
    "Precision and functionality",
    "High-quality finishing",
  ],

  "04": [
    "Construction work",
    "Finishing work",
    "Interior detailing",
    "Architectural detailing",
  ],

  "05": [
    "Renovation work",
    "Finishing work",
    "Transformation of existing spaces",
    "Attention to detail",
  ],
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F8FA] text-[#071B33]">
      <Navbar />

      <main>
        {/* ============================================================
            HERO
        ============================================================ */}
        <section className="relative overflow-hidden bg-[#071B33]">
          {/* Architectural grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-white/[0.05]" />

          <div className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-[#F4B400]/10" />

          <div className="relative mx-auto max-w-[1450px] px-5 pb-9 pt-9 sm:px-10 sm:pb-20 sm:pt-20 lg:px-16 lg:pb-24 lg:pt-24">
            <div className="grid items-end gap-7 sm:gap-12 lg:grid-cols-[1.1fr_.9fr]">
              {/* LEFT */}
              <div>
                <div className="mb-4 flex items-center gap-3 sm:mb-7 sm:gap-4">
                  <span className="h-[3px] w-9 bg-[#F4B400] sm:w-12" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#F4B400] sm:text-xs sm:tracking-[0.32em]">
                    Our Portfolio
                  </span>
                </div>

                <h1 className="max-w-4xl text-[2.65rem] font-bold leading-[0.96] tracking-[-0.045em] text-white sm:text-7xl lg:text-8xl">
                  Work that
                  <br />
                  <span className="text-[#F4B400]">
                    speaks for itself.
                  </span>
                </h1>
              </div>

              {/* RIGHT */}
              <div className="lg:pb-2">
                <div className="max-w-xl border-l border-white/15 pl-4 sm:pl-6">
                  <p className="text-xs leading-5.5 text-white/55 sm:text-base sm:leading-7">
                    A collection of construction and finishing work
                    representing our approach to quality, precision,
                    dependable execution, and practical project delivery.
                  </p>

                  <div className="mt-4 flex items-center gap-5 sm:mt-8 sm:gap-8">
                    <div>
                      <p className="text-3xl font-bold text-white sm:text-4xl">
                        {String(projects.length).padStart(2, "0")}
                      </p>

                      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                        Projects
                      </p>
                    </div>

                    <div className="h-8 w-px bg-white/10 sm:h-10" />

                    <div>
                      <p className="text-xs font-semibold text-white sm:text-sm">
                        Delhi NCR
                      </p>

                      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                        Project Region
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            INTRO
        ============================================================ */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1450px] px-5 py-8 sm:px-10 sm:py-14 lg:px-16">
            <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[3px] w-8 bg-[#F4B400] sm:w-10" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1558B0] sm:text-[11px] sm:tracking-[0.28em]">
                    Selected Work
                  </span>
                </div>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#071B33] sm:mt-4 sm:text-4xl">
                  Built with purpose.
                </h2>
              </div>

              <p className="max-w-3xl text-xs leading-6 text-slate-500 sm:text-base sm:leading-7">
                Our portfolio brings together residential, commercial,
                institutional, construction, renovation, and finishing
                work. Each project reflects an emphasis on structural
                quality, precise execution, dependable standards, and
                attention to the finished environment.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            PROJECT OVERVIEW GRID
        ============================================================ */}
        <section className="bg-[#F7F8FA] px-4 py-8 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-[1380px]">
            <div className="mb-6 sm:mb-10">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#1558B0] sm:text-[10px] sm:tracking-[0.28em]">
                Portfolio Overview
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#071B33] sm:mt-3 sm:text-4xl">
                Our work at a glance
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="group overflow-hidden border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#1558B0]/20 hover:shadow-[0_18px_45px_rgba(7,27,51,0.08)]"
                >
                  {/* Image */}
                  <div className="relative h-[125px] overflow-hidden sm:h-[210px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071B33]/60 via-transparent to-transparent" />

                    <div className="absolute left-2 top-2 bg-[#F4B400] px-2 py-1 sm:left-5 sm:top-5 sm:px-3 sm:py-2">
                      <span className="text-[7px] font-bold uppercase tracking-[0.12em] text-[#071B33] sm:text-[9px] sm:tracking-[0.16em]">
                        {project.category}
                      </span>
                    </div>

                    <span className="absolute bottom-2 right-2 text-3xl font-bold leading-none text-white/25 sm:bottom-4 sm:right-5 sm:text-5xl">
                      {project.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-6">
                    <div className="flex items-start gap-1 text-[9px] text-slate-500 sm:gap-2 sm:text-xs">
                      <MapPin
                        size={11}
                        className="mt-[1px] shrink-0 text-[#F4B400] sm:h-[14px] sm:w-[14px]"
                      />

                      <span className="line-clamp-1">
                        {project.location}
                      </span>
                    </div>

                    <h3 className="mt-2 text-sm font-bold leading-tight text-[#071B33] sm:mt-4 sm:text-xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-[9px] leading-4 text-slate-500 sm:mt-3 sm:text-sm sm:leading-6">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            FULL PROJECT DETAILS
        ============================================================ */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1380px]">
            <div className="px-4 py-10 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <div className="mb-8 max-w-2xl sm:mb-14">
                <div className="flex items-center gap-3">
                  <span className="h-[3px] w-8 bg-[#F4B400] sm:w-10" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1558B0] sm:text-[11px] sm:tracking-[0.28em]">
                    Project Details
                  </span>
                </div>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#071B33] sm:mt-5 sm:text-4xl">
                  A closer look at our projects
                </h2>

                <p className="mt-3 text-xs leading-6 text-slate-500 sm:mt-4 sm:text-sm sm:leading-7">
                  Explore the project information, construction focus,
                  and key characteristics represented across our current
                  portfolio.
                </p>
              </div>

              {projects.map((project, index) => {
                const points =
                  focusPoints[project.id] || [
                    "Residential construction",
                    "Reliable execution",
                    "Structural quality",
                    "Long-term performance",
                  ];

                return (
                  <article
                    key={project.id}
                    className={`border-t border-slate-200 py-7 sm:py-20 ${
                      index === 0 ? "border-t-0 pt-0" : ""
                    }`}
                  >
                    <div className="grid grid-cols-[42%_1fr] gap-3 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
                      {/* IMAGE */}
                      <div className="relative min-h-[260px] overflow-hidden bg-[#071B33] sm:min-h-[360px] lg:min-h-[500px]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#071B33]/30 via-transparent to-transparent" />

                        {/* Number */}
                        <div className="absolute bottom-2 left-2 sm:bottom-5 sm:left-5">
                          <span className="text-3xl font-bold leading-none text-white/30 sm:text-7xl">
                            {project.id}
                          </span>
                        </div>
                      </div>

                      {/* INFORMATION */}
                      <div className="flex flex-col justify-center">
                        {/* Project number / category */}
                        <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
                          <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#F4B400] sm:text-[10px] sm:tracking-[0.28em]">
                            Project {project.id}
                          </span>

                          <span className="text-[7px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.18em]">
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="mt-2 text-base font-bold leading-tight tracking-tight text-[#071B33] sm:mt-5 sm:text-4xl">
                          {project.title}
                        </h3>

                        {/* Location */}
                        <div className="mt-2 flex items-center gap-1 text-[8px] font-medium text-slate-500 sm:mt-5 sm:gap-2 sm:text-sm">
                          <MapPin
                            size={11}
                            className="shrink-0 text-[#F4B400] sm:h-4 sm:w-4"
                          />

                          <span className="line-clamp-1">
                            {project.location}
                          </span>
                        </div>

                        {/* Divider */}
                        <div className="my-3 h-px bg-slate-200 sm:my-7" />

                        {/* Overview */}
                        <div>
                          <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#1558B0] sm:text-[10px] sm:tracking-[0.25em]">
                            Project Overview
                          </p>

                          <p className="mt-2 line-clamp-4 text-[9px] leading-4 text-slate-600 sm:mt-4 sm:line-clamp-none sm:text-base sm:leading-7">
                            {project.description}
                          </p>
                        </div>

                        {/* Key focus */}
                        <div className="mt-3 sm:mt-8">
                          <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#1558B0] sm:text-[10px] sm:tracking-[0.25em]">
                            Key Focus Areas
                          </p>

                          <div className="mt-2 grid gap-1.5 sm:mt-5 sm:grid-cols-2 sm:gap-3">
                            {points.map((point) => (
                              <div
                                key={point}
                                className="flex items-start gap-1.5 sm:gap-3"
                              >
                                <span className="mt-[5px] h-1 w-1 shrink-0 bg-[#F4B400] sm:mt-[7px] sm:h-1.5 sm:w-1.5" />

                                <span className="text-[8px] leading-3.5 text-slate-600 sm:text-sm sm:leading-6">
                                  {point}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Project information strip */}
                        <div className="mt-3 grid grid-cols-2 border border-slate-200 bg-[#F7F8FA] sm:mt-9">
                          <div className="border-r border-slate-200 px-2 py-2 sm:px-5 sm:py-4">
                            <p className="text-[6px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-[9px] sm:tracking-[0.18em]">
                              Project Type
                            </p>

                            <p className="mt-1 line-clamp-1 text-[8px] font-semibold text-[#071B33] sm:mt-2 sm:text-sm">
                              {project.category}
                            </p>
                          </div>

                          <div className="px-2 py-2 sm:px-5 sm:py-4">
                            <p className="text-[6px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-[9px] sm:tracking-[0.18em]">
                              Location
                            </p>

                            <p className="mt-1 line-clamp-1 text-[8px] font-semibold text-[#071B33] sm:mt-2 sm:text-sm">
                              {project.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            WHAT DEFINES OUR WORK
        ============================================================ */}
        <section className="bg-[#F7F8FA] px-4 py-10 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1380px]">
            <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              {/* LEFT */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[3px] w-8 bg-[#F4B400] sm:w-10" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1558B0] sm:text-[11px] sm:tracking-[0.28em]">
                    Our Approach
                  </span>
                </div>

                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#071B33] sm:mt-5 sm:text-5xl">
                  What defines
                  <br />
                  our work.
                </h2>

                <p className="mt-3 max-w-md text-xs leading-6 text-slate-500 sm:mt-5 sm:text-sm sm:leading-7">
                  Our projects are approached with a focus on practical
                  execution, construction quality, precision, and
                  dependable results.
                </p>
              </div>

              {/* RIGHT */}
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                {/* 01 */}
                <div className="border-t-2 border-[#F4B400] bg-white p-4 sm:p-7">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#1558B0] sm:text-xs">
                    01
                  </span>

                  <h3 className="mt-2 text-sm font-bold text-[#071B33] sm:mt-4 sm:text-xl">
                    Precision
                  </h3>

                  <p className="mt-2 text-[9px] leading-4 text-slate-500 sm:mt-3 sm:text-sm sm:leading-6">
                    Careful planning and accurate execution across the
                    construction process.
                  </p>
                </div>

                {/* 02 */}
                <div className="border-t-2 border-[#F4B400] bg-white p-4 sm:p-7">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#1558B0] sm:text-xs">
                    02
                  </span>

                  <h3 className="mt-2 text-sm font-bold text-[#071B33] sm:mt-4 sm:text-xl">
                    Quality
                  </h3>

                  <p className="mt-2 text-[9px] leading-4 text-slate-500 sm:mt-3 sm:text-sm sm:leading-6">
                    A consistent focus on structural quality, finishing,
                    and the overall result.
                  </p>
                </div>

                {/* 03 */}
                <div className="border-t-2 border-[#F4B400] bg-white p-4 sm:p-7">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#1558B0] sm:text-xs">
                    03
                  </span>

                  <h3 className="mt-2 text-sm font-bold text-[#071B33] sm:mt-4 sm:text-xl">
                    Reliability
                  </h3>

                  <p className="mt-2 text-[9px] leading-4 text-slate-500 sm:mt-3 sm:text-sm sm:leading-6">
                    Dependable project execution with an emphasis on
                    professional construction standards.
                  </p>
                </div>

                {/* 04 */}
                <div className="border-t-2 border-[#F4B400] bg-white p-4 sm:p-7">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#1558B0] sm:text-xs">
                    04
                  </span>

                  <h3 className="mt-2 text-sm font-bold text-[#071B33] sm:mt-4 sm:text-xl">
                    Long-Term Value
                  </h3>

                  <p className="mt-2 text-[9px] leading-4 text-slate-500 sm:mt-3 sm:text-sm sm:leading-6">
                    Construction and finishing work designed around
                    durability, performance, and lasting quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            CTA
        ============================================================ */}
        <section className="bg-[#071B33] px-5 py-10 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-[1380px]">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-center lg:gap-10">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[3px] w-8 bg-[#F4B400] sm:w-10" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#F4B400] sm:text-[10px] sm:tracking-[0.3em]">
                    Start Your Project
                  </span>
                </div>

                <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:mt-5 sm:text-4xl lg:text-5xl">
                  Have a construction
                  <br className="hidden sm:block" />
                  requirement?
                </h2>

                <p className="mt-3 max-w-xl text-xs leading-5 text-white/50 sm:mt-4 sm:text-sm sm:leading-6">
                  Tell us about your requirement and let&apos;s discuss
                  how we can approach your project with quality,
                  precision, and dependable execution.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-4 bg-white px-6 py-3.5 text-xs font-bold text-[#071B33] transition-all duration-300 hover:bg-[#F4B400] hover:shadow-[0_12px_35px_rgba(244,180,0,0.18)] sm:w-fit sm:px-7 sm:py-4 sm:text-sm"
              >
                Get an Estimate

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}