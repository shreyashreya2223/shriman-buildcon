"use client";

import Link from "next/link";

import {
  Bell,
  Building2,
  Calculator,
  ChevronRight,
  ClipboardList,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Users,
} from "lucide-react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const queries = [
  {
    id: "SB-001",
    name: "Rahul Sharma",
    project: "Residential Construction",
    location: "Noida",
    date: "Today",
    status: "New",
  },
  {
    id: "SB-002",
    name: "Amit Verma",
    project: "Waterproofing",
    location: "Greater Noida",
    date: "Yesterday",
    status: "Contacted",
  },
  {
    id: "SB-003",
    name: "Priya Singh",
    project: "Renovation",
    location: "Delhi",
    date: "Aug 07",
    status: "Estimate Pending",
  },
  {
    id: "SB-004",
    name: "Rohit Gupta",
    project: "Turnkey Project",
    location: "Gurgaon",
    date: "Aug 06",
    status: "Completed",
  },
];

const stats = [
  {
    title: "Total Queries",
    value: "24",
    icon: ClipboardList,
  },
  {
    title: "New Queries",
    value: "12",
    icon: Bell,
  },
  {
    title: "Customers",
    value: "18",
    icon: Users,
  },
  {
    title: "Pending Estimates",
    value: "5",
    icon: Calculator,
  },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const router = useRouter();

  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#0E2748]">

      {/* Mobile header */}

      <header className="flex h-16 items-center justify-between border-b bg-white px-5 lg:hidden">

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center bg-[#114FA7] font-bold text-white">
            SB
          </div>

          <span className="font-bold">
            SHRIMAN BUILDCON
          </span>

        </div>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-[#0E2748]"
        >
          <Menu size={24} />
        </button>

      </header>

      {/* Sidebar */}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#0E2748] text-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">

          <div className="flex h-10 w-10 items-center justify-center bg-[#114FA7] font-bold">
            SB
          </div>

          <div>
            <p className="font-bold">SHRIMAN</p>

            <p className="text-xs tracking-[0.2em] text-[#F4B400]">
              BUILDCON
            </p>
          </div>

        </div>

        <nav className="px-4 py-6">

          <p className="mb-3 px-3 text-xs uppercase tracking-wider text-white/40">
            Main
          </p>

          <AdminLink
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
            href="/admin"
            active
          />

          <AdminLink
            icon={<ClipboardList size={18} />}
            label="Customer Queries"
            href="/admin/queries"
          />

          <AdminLink
            icon={<Users size={18} />}
            label="Customers"
            href="/admin/customers"
          />

          <p className="mb-3 mt-8 px-3 text-xs uppercase tracking-wider text-white/40">
            Business
          </p>

          <AdminLink
            icon={<Building2 size={18} />}
            label="Projects"
            href="/admin/projects"
          />

          <AdminLink
            icon={<Calculator size={18} />}
            label="Estimates"
            href="/admin/estimates"
          />

          <AdminLink
            icon={<FileText size={18} />}
            label="Bills & Invoices"
            href="/admin/invoices"
          />

          <p className="mb-3 mt-8 px-3 text-xs uppercase tracking-wider text-white/40">
            System
          </p>

          <AdminLink
            icon={<Settings size={18} />}
            label="Settings"
            href="/admin/settings"
          />

        </nav>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 p-4">

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-3 py-3 text-sm text-white/60 hover:text-white"
          >
            <LogOut size={18} />
            Sign Out
          </button>

        </div>

      </aside>

      {/* Main */}

      <main className="lg:ml-64">

        {/* Top bar */}

        <header className="hidden h-20 items-center justify-between border-b bg-white px-8 lg:flex">

          <div>

            <p className="text-sm text-gray-500">
              Admin Panel
            </p>

            <h1 className="text-xl font-bold">
              Dashboard
            </h1>

          </div>

          <div className="flex items-center gap-5">

            <button className="relative text-gray-500">

              <Bell size={21} />

              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#F4B400]" />

            </button>

            <div className="flex items-center gap-3 border-l pl-5">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#114FA7] text-sm font-bold text-white">
                A
              </div>

              <div>

                <p className="text-sm font-semibold">
                  Administrator
                </p>

                <p className="text-xs text-gray-500">
                  Admin
                </p>

              </div>

            </div>

          </div>

        </header>

        <div className="p-5 sm:p-8">

          {/* Mobile title */}

          <div className="mb-7 lg:hidden">

            <p className="text-sm text-gray-500">
              Admin Panel
            </p>

            <h1 className="text-2xl font-bold">
              Dashboard
            </h1>

          </div>

          {/* Stats */}

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((stat) => {

              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="bg-white p-6 shadow-sm"
                >

                  <div className="flex items-start justify-between">

                    <div>

                      <p className="text-sm text-gray-500">
                        {stat.title}
                      </p>

                      <p className="mt-2 text-3xl font-bold">
                        {stat.value}
                      </p>

                    </div>

                    <div className="flex h-11 w-11 items-center justify-center bg-[#F0F5FC] text-[#114FA7]">

                      <Icon size={21} />

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

          {/* Queries */}

          <div className="mt-8 bg-white shadow-sm">

            <div className="flex items-center justify-between border-b px-6 py-5">

              <div>

                <h2 className="font-bold">
                  Recent Customer Queries
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Latest enquiries received from the website
                </p>

              </div>

              <Link
                href="/admin/queries"
                className="flex items-center gap-1 text-sm font-semibold text-[#114FA7]"
              >
                View All
                <ChevronRight size={16} />
              </Link>

            </div>

            {/* Desktop table */}

            <div className="hidden overflow-x-auto md:block">

              <table className="w-full">

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

                  </tr>

                </thead>

                <tbody>

                  {queries.map((query) => (

                    <tr
                      key={query.id}
                      className="border-b last:border-0 hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        window.location.href = `/admin/queries/${query.id}`;
                      }}
                    >

                      <td className="px-6 py-5 font-semibold">
                        {query.name}
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

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            {/* Mobile cards */}

            <div className="divide-y md:hidden">

              {queries.map((query) => (

                <div
                  key={query.name}
                  className="p-5"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p className="font-semibold">
                        {query.name}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {query.project}
                      </p>

                    </div>

                    <StatusBadge status={query.status} />

                  </div>

                  <div className="mt-4 flex justify-between text-xs text-gray-500">

                    <span>
                      {query.location}
                    </span>

                    <span>
                      {query.date}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

function AdminLink({
  icon,
  label,
  active = false,
  href = "#",
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href?: string;
}) {

  return (

    <Link
      href={href}
      className={`mb-1 flex w-full items-center gap-3 px-3 py-3 text-sm transition-colors ${
        active
          ? "bg-[#114FA7] text-white"
          : "text-white/60 hover:bg-white/5 hover:text-white"
      }`}
    >
      {icon}
      {label}
    </Link>

  );
}

function StatusBadge({ status }: { status: string }) {

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