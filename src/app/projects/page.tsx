import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { MapPin, Check } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#071B33]">
      <Navbar />

      <main>
        {/* ============================================================
            HERO
        ============================================================ */}
        <section className="relative overflow-hidden bg-[#071B33]">
          {/* Gold top line */}
          <div className="absolute left-0 top-0 h-1 w-full bg-[#F4B400]" />

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
          <div className="pointer-events-none absolute -right-56 -top-56 h-[650px] w-[650px] rounded-full border border-white/[0.04]" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-[430px] w-[430px] rounded-full border border-[#F4B400]/10" />

          <div className="relative mx-auto max-w-[1450px] px-6 pb-11 pt-12 sm:px-10 sm:pb-12 sm:pt-14 lg:px-16 lg:pb-14 lg:pt-16">
            <div className="grid items-end gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

              {/* LEFT */}
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <span className="h-[3px] w-11 bg-[#F4B400]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#F4B400]">
                    Our Portfolio
                  </span>
                </div>

                <h1 className="max-w-4xl text-5xl font-bold leading-[0.88] tracking-[-0.055em] text-white sm:text-7xl lg:text-[86px]">
                  Built
                  <br />
                  <span className="text-[#F4B400]">to last.</span>
                </h1>

                <div className="mt-6 h-[2px] w-14 bg-[#F4B400]" />
              </div>

              {/* RIGHT */}
              <div className="lg:pb-1">
                <div className="border-l border-white/10 pl-6 sm:pl-7">
                  <p className="max-w-xl text-sm leading-6 text-white/55 sm:text-[15px] sm:leading-7">
                    A collection of construction and finishing work
                    representing our approach to quality, precision,
                    dependable execution, and practical project delivery.
                  </p>

                  {/* Compact stats */}
                  <div className="mt-6 grid max-w-xl grid-cols-2 border-t border-white/10 pt-5">

                    {/* Projects */}
                    <div className="border-r border-white/10 pr-6">
                      <div className="flex items-end gap-3">
                        <p className="text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl">
                          {String(projects.length).padStart(2, "0")}
                        </p>

                        <p className="pb-1 text-xs font-medium text-white/35">
                          Projects
                        </p>
                      </div>

                      <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white/30">
                        Selected Work
                      </p>
                    </div>

                    {/* Region */}
                    <div className="pl-6">
                      <p className="text-xl font-semibold leading-none text-white sm:text-2xl">
                        Delhi NCR
                      </p>

                      <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.22em] text-white/30">
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
            PROJECTS
        ============================================================ */}
        <section className="bg-[#F5F7FA]">
          <div className="mx-auto max-w-[1380px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">

            <div className="space-y-6">

              {projects.map((project) => {
                const focusPoints =
                  project.id === "01"
                    ? [
                        "Residential construction",
                        "Structural quality",
                        "Precise execution",
                        "Dependable construction standards",
                      ]
                    : project.id === "02"
                    ? [
                        "Commercial construction",
                        "Structural integrity",
                        "Finishing quality",
                        "Professional execution",
                      ]
                    : project.id === "03"
                    ? [
                        "Institutional construction",
                        "Durability",
                        "Precision and functionality",
                        "High-quality finishing",
                      ]
                    : project.id === "04"
                    ? [
                        "Construction work",
                        "Finishing work",
                        "Interior detailing",
                        "Architectural detailing",
                      ]
                    : project.id === "05"
                    ? [
                        "Renovation work",
                        "Finishing work",
                        "Transformation of existing spaces",
                        "Attention to detail",
                      ]
                    : [
                        "Residential construction",
                        "Reliable execution",
                        "Structural quality",
                        "Long-term performance",
                      ];

                return (
                  <article
                    key={project.id}
                    className="group overflow-hidden border border-slate-200 bg-white shadow-[0_6px_24px_rgba(7,27,51,0.035)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(7,27,51,0.07)]"
                  >
                    {/* ==================================================
                        PROJECT CARD

                        IMPORTANT:
                        items-center vertically centers the image
                        against the information panel.
                    ================================================== */}
                    <div className="grid items-center lg:grid-cols-[0.38fr_0.62fr]">

                      {/* ==================================================
                          IMAGE
                      ================================================== */}
                      <div className="relative h-[220px] overflow-hidden bg-[#071B33] sm:h-[250px] lg:h-[350px]">

                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                        />

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071B33]/80 via-[#071B33]/5 to-transparent" />

                        {/* Category */}
                        <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                          <span className="inline-flex bg-[#F4B400] px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#071B33] sm:px-5">
                            {project.category}
                          </span>
                        </div>

                        {/* Project number */}
                        <div className="absolute bottom-3 right-5 sm:bottom-4 sm:right-6">
                          <span className="text-6xl font-bold leading-none tracking-[-0.06em] text-white/20 sm:text-7xl">
                            {project.id}
                          </span>
                        </div>

                        {/* Brand */}
                        <div className="absolute bottom-4 left-5 sm:bottom-5 sm:left-6">
                          <p className="text-[8px] font-bold uppercase tracking-[0.24em] text-white/50">
                            Shriman Buildcon
                          </p>
                        </div>
                      </div>

                      {/* ==================================================
                          PROJECT INFORMATION
                      ================================================== */}
                      <div className="flex flex-col p-5 sm:p-6 lg:p-7 xl:p-8">

                        {/* Top row */}
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">

                          <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#F4B400]">
                            Project {project.id}
                          </span>

                          <span className="text-[8px] font-bold uppercase tracking-[0.17em] text-slate-400">
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-[1.08] tracking-[-0.035em] text-[#071B33] sm:text-3xl lg:text-[34px]">
                          {project.title}
                        </h2>

                        {/* Location */}
                        <div className="mt-3 flex items-center gap-2">
                          <MapPin
                            size={15}
                            strokeWidth={2}
                            className="text-[#F4B400]"
                          />

                          <span className="text-[13px] font-semibold text-slate-500">
                            {project.location}
                          </span>
                        </div>

                        {/* Overview */}
                        <div className="mt-5 border-t border-slate-200 pt-4">

                          <p className="text-[8px] font-bold uppercase tracking-[0.26em] text-[#1558B0]">
                            Project Overview
                          </p>

                          <p className="mt-2 max-w-3xl text-[13px] leading-6 text-slate-600 sm:text-sm sm:leading-6">
                            {project.description}
                          </p>
                        </div>

                        {/* Key focus areas */}
                        <div className="mt-5">

                          <p className="text-[8px] font-bold uppercase tracking-[0.26em] text-[#1558B0]">
                            Key Focus Areas
                          </p>

                          <div className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">

                            {focusPoints.map((point) => (
                              <div
                                key={point}
                                className="flex items-center gap-2.5"
                              >
                                <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#F4B400]/15">
                                  <Check
                                    size={10}
                                    strokeWidth={3}
                                    className="text-[#C58D00]"
                                  />
                                </span>

                                <span className="text-[13px] leading-5 text-slate-600">
                                  {point}
                                </span>
                              </div>
                            ))}

                          </div>
                        </div>

                        {/* Information strip */}
                        <div className="mt-5 grid border border-slate-200 sm:grid-cols-2">

                          <div className="border-b border-slate-200 bg-[#F8F9FB] px-4 py-3 sm:border-b-0 sm:border-r">
                            <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-slate-400">
                              Project Type
                            </p>

                            <p className="mt-1 text-[12px] font-bold text-[#071B33]">
                              {project.category}
                            </p>
                          </div>

                          <div className="bg-[#F8F9FB] px-4 py-3">
                            <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-slate-400">
                              Location
                            </p>

                            <p className="mt-1 text-[12px] font-bold text-[#071B33]">
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
            OUR APPROACH
        ============================================================ */}
        <section className="relative overflow-hidden bg-white">

          <div className="absolute left-0 top-0 h-1 w-20 bg-[#F4B400]" />

          <div className="mx-auto max-w-[1380px] px-6 py-12 sm:px-8 lg:px-12 lg:py-14">

            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

              {/* LEFT */}
              <div>

                <div className="flex items-center gap-3">
                  <span className="h-[3px] w-9 bg-[#F4B400]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#1558B0]">
                    Our Approach
                  </span>
                </div>

                <h2 className="mt-4 text-3xl font-bold leading-[0.98] tracking-[-0.045em] text-[#071B33] sm:text-4xl lg:text-5xl">
                  Built on
                  <br />
                  <span className="text-[#1558B0]">
                    the right principles.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
                  Every project is approached with practical planning,
                  disciplined execution, attention to detail, and a focus on
                  delivering dependable results.
                </p>
              </div>

              {/* RIGHT */}
              <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">

                {/* CARD 01 */}
                <div className="group bg-white p-5 transition-all duration-300 hover:bg-[#071B33] sm:p-6">

                  <span className="text-[9px] font-bold tracking-[0.25em] text-[#F4B400]">
                    01
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-[#071B33] transition-colors duration-300 group-hover:text-white">
                    Precision
                  </h3>

                  <p className="mt-2 text-[13px] leading-5 text-slate-500 transition-colors duration-300 group-hover:text-white/55">
                    Careful planning and accurate execution across every stage
                    of the construction process.
                  </p>
                </div>

                {/* CARD 02 */}
                <div className="group bg-white p-5 transition-all duration-300 hover:bg-[#071B33] sm:p-6">

                  <span className="text-[9px] font-bold tracking-[0.25em] text-[#F4B400]">
                    02
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-[#071B33] transition-colors duration-300 group-hover:text-white">
                    Quality
                  </h3>

                  <p className="mt-2 text-[13px] leading-5 text-slate-500 transition-colors duration-300 group-hover:text-white/55">
                    Consistent attention to structural quality, finishing, and
                    the overall result.
                  </p>
                </div>

                {/* CARD 03 */}
                <div className="group bg-white p-5 transition-all duration-300 hover:bg-[#071B33] sm:p-6">

                  <span className="text-[9px] font-bold tracking-[0.25em] text-[#F4B400]">
                    03
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-[#071B33] transition-colors duration-300 group-hover:text-white">
                    Reliability
                  </h3>

                  <p className="mt-2 text-[13px] leading-5 text-slate-500 transition-colors duration-300 group-hover:text-white/55">
                    Dependable execution with an emphasis on professional
                    construction standards.
                  </p>
                </div>

                {/* CARD 04 */}
                <div className="group bg-white p-5 transition-all duration-300 hover:bg-[#071B33] sm:p-6">

                  <span className="text-[9px] font-bold tracking-[0.25em] text-[#F4B400]">
                    04
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-[#071B33] transition-colors duration-300 group-hover:text-white">
                    Long-Term Value
                  </h3>

                  <p className="mt-2 text-[13px] leading-5 text-slate-500 transition-colors duration-300 group-hover:text-white/55">
                    Construction and finishing work designed around
                    durability, performance, and lasting quality.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            FINAL CTA
        ============================================================ */}
        <section className="relative overflow-hidden bg-[#071B33]">

          {/* Background grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "65px 65px",
            }}
          />

          {/* Decorative circle */}
          <div className="pointer-events-none absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-[#F4B400]/10" />

          <div className="relative mx-auto max-w-[1380px] px-6 py-11 sm:px-8 lg:px-12 lg:py-14">

            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-center">

              {/* Text */}
              <div>

                <div className="flex items-center gap-3">
                  <span className="h-[3px] w-9 bg-[#F4B400]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#F4B400]">
                    Start Your Project
                  </span>
                </div>

                <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                  Have a construction
                  <br />
                  requirement?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
                  Tell us about your requirement and let&apos;s discuss how we
                  can approach your project with quality, precision, and
                  dependable execution.
                </p>
              </div>

              {/* CTA */}
              <a
                href="/contact"
                className="group inline-flex w-fit items-center gap-5 bg-[#F4B400] px-6 py-4 text-sm font-bold text-[#071B33] shadow-[0_10px_30px_rgba(244,180,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <span>Get an Estimate</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071B33] text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#1558B0]">
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