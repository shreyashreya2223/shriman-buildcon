"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const projectTypes = [
  "Civil Construction",
  "Turnkey Project",
  "Waterproofing",
  "Tile & Stone Work",
  "Renovation & Finishing",
  "Vendor Management",
  "Other",
];

export default function QueryForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      location: formData.get("location"),
      budget: formData.get("budget"),
      requirement: formData.get("requirement"),
    };

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit query.");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Sorry, your query could not be submitted. Please try again.");
    }
  }

  return (
    <section className="bg-[#F7F9FC] py-12 sm:py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-9 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* =========================================================
              LEFT SIDE
          ========================================================= */}
          <div>
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <div className="h-px w-8 bg-[#F4B400] sm:w-10" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#114FA7] sm:text-sm sm:tracking-[0.25em]">
                Get In Touch
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-[1.12] text-[#0E2748] sm:text-5xl sm:leading-tight">
              Let&apos;s Discuss
              <span className="block text-[#114FA7]">
                Your Project
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:mt-6 sm:text-base sm:leading-8">
              Tell us about your construction or renovation
              requirement. Share a few details and our team can
              understand your project better.
            </p>

            {/* =====================================================
                CONTACT DETAILS
            ===================================================== */}
            <div className="mt-7 space-y-4 sm:mt-10 sm:space-y-6">

              {/* PHONE */}
              <a
                href="tel:+918527890800"
                className="group flex gap-3 sm:gap-4"
                aria-label="Call Shriman Buildcon"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-white text-[#114FA7] shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md sm:h-12 sm:w-12">
                  <Phone size={18} className="sm:h-5 sm:w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 sm:text-xs">
                    Phone
                  </p>

                  <p className="mt-1 break-words text-sm font-semibold text-[#0E2748] transition-colors duration-300 group-hover:text-[#114FA7] sm:text-base">
                    +91 85278 90800
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:shrimanbuildcon@gmail.com"
                className="group flex gap-3 sm:gap-4"
                aria-label="Email Shriman Buildcon"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-white text-[#114FA7] shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md sm:h-12 sm:w-12">
                  <Mail size={18} className="sm:h-5 sm:w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 sm:text-xs">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-semibold text-[#0E2748] transition-colors duration-300 group-hover:text-[#114FA7] sm:text-base">
                    shrimanbuildcon@gmail.com
                  </p>
                </div>
              </a>

              {/* LOCATION */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=New%20Delhi%2C%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3 sm:gap-4"
                aria-label="View Shriman Buildcon location on Google Maps"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-white text-[#114FA7] shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md sm:h-12 sm:w-12">
                  <MapPin size={18} className="sm:h-5 sm:w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 sm:text-xs">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#0E2748] transition-colors duration-300 group-hover:text-[#114FA7] sm:text-base">
                    New Delhi, India
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* =========================================================
              FORM
          ========================================================= */}
          <div className="bg-white p-5 shadow-sm sm:p-7 lg:p-10">

            {submitted ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center sm:min-h-[500px]">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600 sm:h-16 sm:w-16">
                  <CheckCircle2 size={30} className="sm:h-[34px] sm:w-[34px]" />
                </div>

                <h2 className="mt-5 text-2xl font-bold text-[#0E2748] sm:mt-6 sm:text-3xl">
                  Query Received
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
                  Thank you for contacting Shriman Buildcon.
                  Our team will review your requirement and get
                  back to you.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-semibold text-[#114FA7] transition-colors hover:text-[#0E2748] sm:mt-7"
                >
                  Submit another query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                {/* FORM HEADER */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl font-bold text-[#0E2748] sm:text-2xl">
                    Request a Free Estimate
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
                    Fill in the details below and tell us about
                    your requirement.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">

                  {/* NAME */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#0E2748] sm:mb-2 sm:text-sm">
                      Full Name *
                    </label>

                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full border border-gray-200 bg-white px-3.5 py-3 text-sm outline-none transition focus:border-[#114FA7] focus:ring-1 focus:ring-[#114FA7] sm:px-4 sm:py-3.5"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#0E2748] sm:mb-2 sm:text-sm">
                      Phone Number *
                    </label>

                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 bg-white px-3.5 py-3 text-sm outline-none transition focus:border-[#114FA7] focus:ring-1 focus:ring-[#114FA7] sm:px-4 sm:py-3.5"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#0E2748] sm:mb-2 sm:text-sm">
                      Email Address
                    </label>

                    <input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border border-gray-200 bg-white px-3.5 py-3 text-sm outline-none transition focus:border-[#114FA7] focus:ring-1 focus:ring-[#114FA7] sm:px-4 sm:py-3.5"
                    />
                  </div>

                  {/* PROJECT TYPE */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#0E2748] sm:mb-2 sm:text-sm">
                      Project Type *
                    </label>

                    <select
                      name="projectType"
                      required
                      defaultValue=""
                      className="w-full border border-gray-200 bg-white px-3.5 py-3 text-sm text-gray-600 outline-none transition focus:border-[#114FA7] focus:ring-1 focus:ring-[#114FA7] sm:px-4 sm:py-3.5"
                    >
                      <option value="" disabled>
                        Select project type
                      </option>

                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* LOCATION */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#0E2748] sm:mb-2 sm:text-sm">
                      Project Location *
                    </label>

                    <input
                      name="location"
                      type="text"
                      required
                      placeholder="City / Area"
                      className="w-full border border-gray-200 bg-white px-3.5 py-3 text-sm outline-none transition focus:border-[#114FA7] focus:ring-1 focus:ring-[#114FA7] sm:px-4 sm:py-3.5"
                    />
                  </div>

                  {/* BUDGET */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#0E2748] sm:mb-2 sm:text-sm">
                      Approximate Budget
                    </label>

                    <select
                      name="budget"
                      defaultValue=""
                      className="w-full border border-gray-200 bg-white px-3.5 py-3 text-sm text-gray-600 outline-none transition focus:border-[#114FA7] focus:ring-1 focus:ring-[#114FA7] sm:px-4 sm:py-3.5"
                    >
                      <option value="" disabled>
                        Select budget range
                      </option>

                      <option>Below ₹5 Lakh</option>
                      <option>₹5–10 Lakh</option>
                      <option>₹10–25 Lakh</option>
                      <option>₹25–50 Lakh</option>
                      <option>₹50 Lakh–₹1 Crore</option>
                      <option>Above ₹1 Crore</option>
                    </select>
                  </div>
                </div>

                {/* REQUIREMENT */}
                <div className="mt-4 sm:mt-5">
                  <label className="mb-1.5 block text-xs font-semibold text-[#0E2748] sm:mb-2 sm:text-sm">
                    Tell Us About Your Requirement *
                  </label>

                  <textarea
                    name="requirement"
                    required
                    rows={4}
                    placeholder="Describe your project, approximate area, work required, timeline, etc."
                    className="w-full resize-none border border-gray-200 bg-white px-3.5 py-3 text-sm outline-none transition focus:border-[#114FA7] focus:ring-1 focus:ring-[#114FA7] sm:px-4 sm:py-3.5"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="group mt-5 flex w-full items-center justify-center gap-3 bg-[#114FA7] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0E2748] sm:mt-7 sm:px-7 sm:py-4 sm:text-base"
                >
                  Submit Project Query

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 sm:h-[18px] sm:w-[18px]"
                  />
                </button>

                <p className="mt-3 text-center text-[10px] leading-4 text-gray-400 sm:mt-4 sm:text-xs sm:leading-normal">
                  By submitting this form, you agree to be contacted
                  regarding your project enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}