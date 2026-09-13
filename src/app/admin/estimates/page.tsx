"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus } from "lucide-react";

import { estimates as defaultEstimates } from "@/data/estimates";

export default function AllEstimatesPage() {
  const [estimates, setEstimates] = useState(defaultEstimates);

  useEffect(() => {
    const saved = localStorage.getItem("estimates");

    if (saved) {
      setEstimates(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="flex h-20 items-center justify-between border-b bg-white px-6 lg:px-10">
        <div className="flex items-center gap-4">
          <Link
            href="/admin"
            className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
          >
            <ArrowLeft size={20} />
          </Link>

          <div>
            <p className="text-sm text-slate-500">Admin Panel</p>
            <h1 className="text-2xl font-bold text-[#12335b]">All Estimates</h1>
          </div>
        </div>

        <Link
          href="/admin/estimates/new"
          className="inline-flex items-center gap-2 rounded bg-[#1558b0] px-5 py-3 text-sm font-semibold text-white hover:bg-[#10488f]"
        >
          <Plus size={16} /> New Estimate
        </Link>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="mb-7 rounded bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Estimate Overview</h2>
              <p className="mt-1 text-sm text-slate-500">
                Review all estimates and quickly create a new estimate for any customer.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Total Estimates</p>
                <p className="mt-2 text-2xl font-semibold text-slate-800">{estimates.length}</p>
              </div>
              <div className="rounded border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Latest Estimate</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">{estimates[0].id}</p>
              </div>
              <div className="rounded border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Estimate Value</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">{estimates[0].total}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-left text-sm">
              <thead className="border-b bg-[#F9FAFB] text-xs uppercase tracking-wider text-gray-500">
                <tr>
                  <th className="px-6 py-4">Estimate ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Project</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {estimates.map((estimate) => (
                  <tr
  key={estimate.id}
  onClick={() => (window.location.href = `/admin/estimates/${estimate.id}`)}
  className="cursor-pointer border-b last:border-0 hover:bg-gray-50"
>
                    <td className="px-6 py-5 font-semibold text-slate-800">{estimate.id}</td>
                    <td className="px-6 py-5 text-slate-600">{estimate.customer}</td>
                    <td className="px-6 py-5 text-slate-600">{estimate.project}</td>
                    <td className="px-6 py-5 text-slate-600">{estimate.date}</td>
                    <td className="px-6 py-5 font-semibold text-slate-800">{estimate.total}</td>
                    <td className="px-6 py-5 text-slate-600">{estimate.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
