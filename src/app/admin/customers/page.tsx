"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Eye,
  Filter,
  Search,
  ChevronDown,
} from "lucide-react";
import { customers } from "@/data/customers";

export default function CustomersPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredCustomers = customers.filter((customer) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      customer.name.toLowerCase().includes(searchText) ||
      customer.id.toLowerCase().includes(searchText) ||
      customer.phone.toLowerCase().includes(searchText) ||
      customer.email.toLowerCase().includes(searchText) ||
      customer.location.toLowerCase().includes(searchText);

    const matchesStatus =
      status === "All" || customer.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="flex h-20 items-center justify-between border-b bg-white px-6 lg:px-10">

        <div className="flex items-center gap-4">

          <Link
            href="/admin"
            className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
          >
            <ArrowLeft size={20} />
          </Link>

          <div>
            <p className="text-sm text-slate-500">
              Admin Panel
            </p>

            <h1 className="text-2xl font-bold text-[#12335b]">
              Customers
            </h1>
          </div>

        </div>

      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

        {/* Heading */}
        <div className="mb-7">

          <h2 className="text-2xl font-bold text-slate-800">
            All Customers
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage customers and their project information.
          </p>

        </div>

        {/* Filters */}
        <div className="mb-6 bg-white p-5 shadow-sm">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

            {/* Search */}
            <div className="relative flex-1">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search customer, ID, phone, email or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-[#114FA7]"
              />

            </div>

            {/* Status */}
            <div className="relative">

              <Filter
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="appearance-none border border-gray-200 bg-white py-3 pl-11 pr-10 text-sm outline-none focus:border-[#114FA7]"
              >
                <option>All</option>
                <option>New</option>
                <option>Contacted</option>
                <option>Estimate Pending</option>
                <option>Completed</option>
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

            </div>

          </div>

        </div>

        {/* Customer Table */}
        <div className="overflow-hidden bg-white shadow-sm">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1000px]">

              <thead>

                <tr className="border-b bg-[#F9FAFB] text-left text-xs uppercase tracking-wider text-gray-500">

                  <th className="px-6 py-4">
                    Customer
                  </th>

                  <th className="px-6 py-4">
                    Phone
                  </th>

                  <th className="px-6 py-4">
                    Location
                  </th>

                  <th className="px-6 py-4">
                    Project
                  </th>

                  <th className="px-6 py-4">
                    Total Value
                  </th>

                  <th className="px-6 py-4">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredCustomers.map((customer) => (

                  <tr
                    key={customer.id}
                    className="border-b last:border-0 hover:bg-gray-50"
                  >

                    {/* Customer */}
                    <td className="px-6 py-5">

                      <div>

                        <p className="font-semibold text-slate-800">
                          {customer.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          {customer.id}
                        </p>

                      </div>

                    </td>

                    {/* Phone */}
                    <td className="px-6 py-5 text-sm text-slate-600">
                      {customer.phone}
                    </td>

                    {/* Location */}
                    <td className="px-6 py-5 text-sm text-slate-600">
                      {customer.location}
                    </td>

                    {/* Project */}
                    <td className="px-6 py-5 text-sm text-slate-600">
                      {customer.project}
                    </td>

                    {/* Value */}
                    <td className="px-6 py-5 text-sm font-semibold text-slate-800">
                      {customer.estimatedCost}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <StatusBadge status={customer.status} />
                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-right">

                      <Link
                        href={`/admin/customers/${customer.id}`}
                        className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 text-sm text-[#114FA7] hover:bg-gray-50"
                      >
                        <Eye size={16} />
                        View
                      </Link>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* No results */}
          {filteredCustomers.length === 0 && (
            <div className="py-16 text-center">

              <p className="font-semibold text-slate-800">
                No customers found
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Try changing your search or filter.
              </p>

            </div>
          )}

          {/* Footer */}
          <div className="border-t px-6 py-4 text-sm text-gray-500">
            Showing {filteredCustomers.length} of {customers.length} customers
          </div>

        </div>

      </main>

    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const styles: Record<string, string> = {
    New: "bg-blue-50 text-blue-700",
    Contacted: "bg-yellow-50 text-yellow-700",
    "Estimate Pending": "bg-orange-50 text-orange-700",
    Completed: "bg-green-50 text-green-700",
  };

  return (
    <span
      className={`inline-flex px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}