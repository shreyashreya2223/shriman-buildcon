import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <main className="min-h-screen bg-white px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#F4B400]">
            Project Not Found
          </p>

          <h1 className="text-4xl font-bold text-[#102A4C] sm:text-5xl">
            We couldn&apos;t find that project.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500">
            The project you&apos;re looking for may have been moved
            or the link may be incorrect.
          </p>

          <Link
            href="/projects"
            className="mt-10 inline-flex items-center gap-3 bg-[#1558B0] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0F438A]"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        <div className="relative mx-auto max-w-[1500px]">

          <div className="relative h-[520px] overflow-hidden sm:h-[600px] lg:h-[680px]">

            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#061B35]/65" />

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#061B35] via-[#061B35]/50 to-transparent" />

            {/* Project number */}
            <div className="absolute right-8 top-8 text-7xl font-bold text-white/10 sm:right-12 sm:text-8xl lg:right-16 lg:text-9xl">
              {project.id}
            </div>

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 px-6 pb-10 sm:px-10 sm:pb-14 lg:px-16 lg:pb-16">

              <div className="max-w-4xl">

                <div className="mb-5 inline-flex bg-[#F4B400] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#081B33]">
                  {project.category}
                </div>

                <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
                  {project.title}
                </h1>

                <div className="mt-5 flex items-center gap-2 text-base font-medium text-white/85">
                  <MapPin
                    size={19}
                    className="text-[#F4B400]"
                  />
                  {project.location}
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECT DETAILS ================= */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[1fr_320px]">

            {/* Description */}
            <div>

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#F4B400]">
                Project Overview
              </p>

              <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#102A4C] sm:text-4xl lg:text-5xl">
                Built with quality,
                <br />
                precision & reliability.
              </h2>

              <div className="mt-8 max-w-3xl border-l-2 border-[#F4B400] pl-6">
                <p className="text-lg leading-8 text-slate-600">
                  {project.description}
                </p>
              </div>

            </div>


            {/* Project information */}
            <div className="border-t border-slate-200 pt-6 lg:border-t-0 lg:border-l lg:pl-10">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Project Details
              </p>

              <div className="mt-7 space-y-6">

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    Project
                  </p>

                  <p className="mt-2 text-base font-semibold text-[#102A4C]">
                    {project.title}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    Category
                  </p>

                  <p className="mt-2 text-base font-semibold text-[#102A4C]">
                    {project.category}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    Location
                  </p>

                  <p className="mt-2 text-base font-semibold text-[#102A4C]">
                    {project.location}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-[#081B33] px-6 py-16 sm:px-10 lg:px-16">

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F4B400]">
              Start Your Project
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Have a construction requirement?
            </h2>

          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-4 bg-white px-7 py-4 text-sm font-bold text-[#081B33] transition-all duration-300 hover:bg-[#F4B400]"
          >
            Get an Estimate

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight size={17} />
            </span>
          </Link>

        </div>

      </section>


      {/* ================= BACK TO PROJECTS ================= */}
      <section className="px-6 py-10 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm font-bold text-[#102A4C] transition-colors hover:text-[#1558B0]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-[#1558B0]">
              <ArrowLeft size={17} />
            </span>

            Back to all projects
          </Link>

        </div>

      </section>

    </main>
  );
}