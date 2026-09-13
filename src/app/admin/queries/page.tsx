"use client";

import {
  ArrowLeft,
  ChevronDown,
  Eye,
  Filter,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const queries = [
  {
    id: "SB-001",
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    email: "rahul@example.com",
    project: "Residential Construction",
    location: "Noida",
    date: "Today",
    status: "New",
  },
  {
    id: "SB-002",
    name: "Amit Verma",
    phone: "+91 98765 12345",
    email: "amit@example.com",
    project: "Waterproofing",
    location: "Greater Noida",
    date: "Yesterday",
    status: "Contacted",
  },
  {
    id: "SB-003",
    name: "Priya Singh",
    phone: "+91 98765 67890",
    email: "priya@example.com",
    project: "Renovation",
    location: "Delhi",
    date: "Aug 07",
    status: "Estimate Pending",
  },
  {
    id: "SB-004",
    name: "Rohit Gupta",
    phone: "+91 98765 24680",
    email: "rohit@example.com",
    project: "Turnkey Project",
    location: "Gurgaon",
    date: "Aug 06",
    status: "Completed",
  },
  {
    id: "SB-005",
    name: "Neha Kapoor",
    phone: "+91 98765 13579",
    email: "neha@example.com",
    project: "Tile & Stone Work",
    location: "Delhi",
    date: "Aug 05",
    status: "New",
  },
];

export default function QueriesPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredQueries = queries.filter((query) => {
    const matchesSearch =
      query.name.toLowerCase().includes(search.toLowerCase()) ||
      query.project.toLowerCase().includes(search.toLowerCase()) ||
      query.location.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || query.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#0E2748]">

      {/* Header */}
      <header className="flex h-20 items-center justify-between border-b bg-white px-6 lg:px-10">

        <div className="flex items-center gap-4">

          <Link
            href="/admin"
            className="flex h-9 w-9 items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-50"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <p className="text-sm text-gray-500">
              Admin Panel
            </p>

            <h1 className="text-xl font-bold">
              Customer Queries
            </h1>
          </div>

        </div>

        <button className="bg-[#114FA7] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0E2748]">
          + New Query
        </button>

      </header>

      {/* Content */}
      <main className="p-5 sm:p-8">

        {/* Page heading */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold">
            All Customer Queries
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage enquiries received from customers.
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
                placeholder="Search customer, project or location..."
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

        {/* Query table */}
        <div className="overflow-hidden bg-white shadow-sm">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px]">

              <thead>
                <tr className="border-b bg-[#F9FAFB] text-left text-xs uppercase tracking-wider text-gray-500">

                  <th className="px-6 py-4">
                    Customer
                  </th>

                  <th className="px-6 py-4">
                    Project
                  </th>

                  <th className="px-6 py-4">
                    Location
                  </th>

                  <th className="px-6 py-4">
                    Date
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

                {filteredQueries.map((query) => (

                  <tr
                    key={query.id}
                    className="border-b last:border-0 hover:bg-gray-50"
                  >

                    <td className="px-6 py-5">

                      <div>
                        <p className="font-semibold">
                          {query.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          {query.id}
                        </p>
                      </div>

                    </td>

                    <td className="px-6 py-5 text-sm text-gray-600">
                      {query.project}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-600">
                      {query.location}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-500">
                      {query.date}
                    </td>

                    <td className="px-6 py-5">
                      <StatusBadge status={query.status} />
                    </td>

                    <td className="px-6 py-5 text-right">

  <Link
    href={`/admin/queries/${query.id}`}
    className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 hover:bg-gray-50"
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
          {filteredQueries.length === 0 && (
            <div className="py-16 text-center">

              <p className="font-semibold">
                No queries found
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Try changing your search or filter.
              </p>

            </div>
          )}

          {/* Footer */}
          <div className="border-t px-6 py-4 text-sm text-gray-500">
            Showing {filteredQueries.length} of {queries.length} queries
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
    "Estimate Pending":
      "bg-orange-50 text-orange-700",
    Completed:
      "bg-green-50 text-green-700",
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