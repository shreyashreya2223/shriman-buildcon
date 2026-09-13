"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { estimates } from "@/data/estimates";

type Estimate = {
  id: string;
  customer: string;
  project: string;
  date: string;
  total: string;
  status: string;
};

export default function EditEstimatePage() {
  const params = useParams();
  const id = params.id as string;

  const estimate = estimates.find((item: Estimate) => item.id === id);

  const [customer, setCustomer] = useState(estimate?.customer || "");
  const [project, setProject] = useState(estimate?.project || "");
  const [date, setDate] = useState(estimate?.date || "");
  const [total, setTotal] = useState(estimate?.total || "");
  const [status, setStatus] = useState(estimate?.status || "Draft");
  useEffect(() => {
  const savedEstimates = JSON.parse(
    localStorage.getItem("estimates") || JSON.stringify(estimates)
  ) as Estimate[];

  const savedEstimate = savedEstimates.find(
    (item: Estimate) => item.id === id
  );

  if (savedEstimate) {
    setCustomer(savedEstimate.customer);
    setProject(savedEstimate.project);
    setDate(savedEstimate.date);
    setTotal(savedEstimate.total);
    setStatus(savedEstimate.status);
  }
}, [id]);

  if (!estimate) {
    return (
      <main className="min-h-screen bg-slate-50 p-10">
        <h1 className="text-2xl font-bold text-slate-800">
          Estimate Not Found
        </h1>

        <Link
          href="/admin/estimates"
          className="mt-4 inline-block text-blue-600"
        >
          ← Back to Estimates
        </Link>
      </main>
    );
  }

  const handleSave = () => {
  const savedEstimates = JSON.parse(
    localStorage.getItem("estimates") || JSON.stringify(estimates)
  ) as Estimate[];

  const updatedEstimates = savedEstimates.map((item: Estimate) =>
    item.id === id
      ? {
          ...item,
          customer,
          project,
          date,
          total,
          status,
        }
      : item
  );

  localStorage.setItem(
    "estimates",
    JSON.stringify(updatedEstimates)
  );

  alert("Estimate updated successfully!");
};

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="flex h-20 items-center justify-between border-b bg-white px-6 lg:px-10">
        <div className="flex items-center gap-4">
          <Link
            href={`/admin/estimates/${id}`}
            className="flex h-10 w-10 items-center justify-center border border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            <ArrowLeft size={20} />
          </Link>

          <div>
            <p className="text-sm text-slate-500">Admin Panel</p>

            <h1 className="text-2xl font-bold text-[#12335b]">
              Edit Estimate
            </h1>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 bg-[#1558b0] px-5 py-3 text-sm font-semibold text-white hover:bg-[#10488f]"
        >
          <Save size={16} />
          Save Changes
        </button>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Estimate Information */}
        <div className="mb-6 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-bold text-[#12335b]">
            Estimate Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Estimate ID */}
            <div>
              <label className="text-sm font-medium text-slate-600">
                Estimate ID
              </label>

              <input
                value={id}
                disabled
                className="mt-2 w-full border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-500"
              />
            </div>

            {/* Customer */}
            <div>
              <label className="text-sm font-medium text-slate-600">
                Customer
              </label>

              <input
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                className="mt-2 w-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#1558b0]"
              />
            </div>

            {/* Project */}
            <div>
              <label className="text-sm font-medium text-slate-600">
                Project
              </label>

              <input
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="mt-2 w-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#1558b0]"
              />
            </div>

            {/* Date */}
            <div>
              <label className="text-sm font-medium text-slate-600">
                Estimate Date
              </label>

              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-2 w-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#1558b0]"
              />
            </div>

            {/* Total */}
            <div>
              <label className="text-sm font-medium text-slate-600">
                Total Estimate
              </label>

              <input
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                className="mt-2 w-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#1558b0]"
              />
            </div>

            {/* Status */}
            <div>
              <label className="text-sm font-medium text-slate-600">
                Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#1558b0]"
              >
                <option>Draft</option>
                <option>Sent</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-end gap-3">
          <Link
            href={`/admin/estimates/${id}`}
            className="border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
          >
            Cancel
          </Link>

          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 bg-[#1558b0] px-5 py-3 text-sm font-semibold text-white hover:bg-[#10488f]"
          >
            <Save size={16} />
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}