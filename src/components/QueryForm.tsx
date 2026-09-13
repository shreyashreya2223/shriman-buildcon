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
    <section className="bg-[#F7F9FC] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* =========================================================
              LEFT SIDE
          ========================================================= */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[#F4B400]" />

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#114FA7]">
                Get In Touch
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-[#0E2748] sm:text-5xl">
              Let&apos;s Discuss
              <span className="block text-[#114FA7]">
                Your Project
              </span>
            </h1>

            <p className="mt-6 leading-8 text-gray-600">
              Tell us about your construction or renovation
              requirement. Share a few details and our team can
              understand your project better.
            </p>

            {/* =====================================================
                CONTACT DETAILS
            ===================================================== */}
            <div className="mt-10 space-y-6">

              {/* PHONE */}
              <a
                href="tel:+918527890800"
                className="group flex gap-4"
                aria-label="Call Shriman Buildcon"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#114FA7] shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Phone
                  </p>

                  <p className="mt-1 font-semibold text-[#0E2748] transition-colors duration-300 group-hover:text-[#114FA7]">
                    +91 85278 90800
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:shrimanbuildcon@gmail.com"
                className="group flex gap-4"
                aria-label="Email Shriman Buildcon"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#114FA7] shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 font-semibold text-[#0E2748] transition-colors duration-300 group-hover:text-[#114FA7]">
                    shrimanbuildcon@gmail.com
                  </p>
                </div>
              </a>

              {/* LOCATION */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=New%20Delhi%2C%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4"
                aria-label="View Shriman Buildcon location on Google Maps"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#114FA7] shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 font-semibold text-[#0E2748] transition-colors duration-300 group-hover:text-[#114FA7]">
                    New Delhi, India
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* =========================================================
              FORM
          ========================================================= */}
          <div className="bg-white p-7 shadow-sm sm:p-10">

            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 size={34} />
                </div>

                <h2 className="mt-6 text-3xl font-bold text-[#0E2748]">
                  Query Received
                </h2>

                <p className="mt-4 max-w-md leading-7 text-gray-600">
                  Thank you for contacting Shriman Buildcon.
                  Our team will review your requirement and get
                  back to you.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 font-semibold text-[#114FA7] transition-colors hover:text-[#0E2748]"
                >
                  Submit another query
                </button>

              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                {/* FORM HEADER */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0E2748]">
                    Request a Free Estimate
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    Fill in the details below and tell us about
                    your requirement.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* NAME */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#0E2748]">
                      Full Name *
                    </label>

                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full border border-gray-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#114FA7] focus:ring-1 focus:ring-[#114FA7]"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#0E2748]">
                      Phone Number *
                    </label>

                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#114FA7] focus:ring-1 focus:ring-[#114FA7]"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#0E2748]">
                      Email Address
                    </label>

                    <input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border border-gray-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#114FA7] focus:ring-1 focus:ring-[#114FA7]"
                    />
                  </div>

                  {/* PROJECT TYPE */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#0E2748]">
                      Project Type *
                    </label>

                    <select
                      name="projectType"
                      required
                      defaultValue=""
                      className="w-full border border-gray-200 bg-white px-4 py-3.5 text-gray-600 outline-none transition focus:border-[#114FA7] focus:ring-1 focus:ring-[#114FA7]"
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
                    <label className="mb-2 block text-sm font-semibold text-[#0E2748]">
                      Project Location *
                    </label>

                    <input
                      name="location"
                      type="text"
                      required
                      placeholder="City / Area"
                      className="w-full border border-gray-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#114FA7] focus:ring-1 focus:ring-[#114FA7]"
                    />
                  </div>

                  {/* BUDGET */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#0E2748]">
                      Approximate Budget
                    </label>

                    <select
                      name="budget"
                      defaultValue=""
                      className="w-full border border-gray-200 bg-white px-4 py-3.5 text-gray-600 outline-none transition focus:border-[#114FA7] focus:ring-1 focus:ring-[#114FA7]"
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
                <div className="mt-5">
                  <label className="mb-2 block text-sm font-semibold text-[#0E2748]">
                    Tell Us About Your Requirement *
                  </label>

                  <textarea
                    name="requirement"
                    required
                    rows={5}
                    placeholder="Describe your project, approximate area, work required, timeline, etc."
                    className="w-full resize-none border border-gray-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#114FA7] focus:ring-1 focus:ring-[#114FA7]"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="group mt-7 flex w-full items-center justify-center gap-3 bg-[#114FA7] px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#0E2748]"
                >
                  Submit Project Query

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="mt-4 text-center text-xs text-gray-400">
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