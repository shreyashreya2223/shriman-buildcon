"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  User,
} from "lucide-react";

const customers = [
  {
    id: "SB-001",
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    email: "rahul.sharma@example.com",
    location: "Noida",
    project: "Residential Construction",
    date: "August 9, 2026",
    status: "Active",
    projects: 1,
    totalValue: "₹35,00,000",
    area: "2,500 sq. ft.",
    requirement:
      "Looking for complete residential construction including civil work, finishing, electrical and plumbing.",
  },
  {
    id: "SB-002",
    name: "Amit Verma",
    phone: "+91 98765 12345",
    email: "amit@example.com",
    location: "Greater Noida",
    project: "Waterproofing",
    date: "August 8, 2026",
    status: "Active",
    projects: 1,
    totalValue: "₹12,00,000",
    area: "1,800 sq. ft.",
    requirement:
      "Looking for complete waterproofing work for the residential property.",
  },
  {
    id: "SB-003",
    name: "Priya Singh",
    phone: "+91 98765 67890",
    email: "priya@example.com",
    location: "Delhi",
    project: "Renovation",
    date: "August 7, 2026",
    status: "Estimate Pending",
    projects: 1,
    totalValue: "₹18,00,000",
    area: "1,500 sq. ft.",
    requirement:
      "Looking for renovation work including flooring, painting, electrical and interior improvements.",
  },
  {
    id: "SB-004",
    name: "Rohit Gupta",
    phone: "+91 98765 24680",
    email: "rohit@example.com",
    location: "Gurgaon",
    project: "Turnkey Project",
    date: "August 6, 2026",
    status: "Completed",
    projects: 1,
    totalValue: "₹45,00,000",
    area: "3,000 sq. ft.",
    requirement:
      "Looking for a complete turnkey construction project.",
  },
  {
    id: "SB-005",
    name: "Neha Kapoor",
    phone: "+91 98765 13579",
    email: "neha@example.com",
    location: "Delhi",
    project: "Tile & Stone Work",
    date: "August 5, 2026",
    status: "Active",
    projects: 1,
    totalValue: "₹8,00,000",
    area: "1,200 sq. ft.",
    requirement:
      "Looking for tile and stone installation work for the property.",
  },
];

export default function CustomerDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const customer = customers.find(
    (item) => item.id === id
  );

  if (!customer) {
    return (
      <main className="min-h-screen bg-slate-50 p-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/admin/customers"
            className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            <ArrowLeft size={18} />
            Back to Customers
          </Link>

          <div className="mt-8 border border-slate-200 bg-white p-8">
            <h1 className="text-xl font-bold text-[#12335b]">
              Customer not found
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              The requested customer does not exist.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b bg-white px-6 py-5 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-4">

            <Link
              href="/admin/customers"
              className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            >
              <ArrowLeft size={20} />
            </Link>

            <div>
              <p className="text-sm text-slate-500">
                Admin Panel
              </p>

              <h1 className="text-2xl font-bold text-[#12335b]">
                Customer Details
              </h1>
            </div>

          </div>

          <span
            className={`inline-flex w-fit px-4 py-2 text-sm font-semibold ${
              customer.status === "Completed"
                ? "bg-green-50 text-green-700"
                : customer.status === "Estimate Pending"
                ? "bg-orange-50 text-orange-700"
                : "bg-blue-50 text-blue-700"
            }`}
          >
            {customer.status}
          </span>

        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-10">

        {/* Customer Information */}
        <section className="mb-6 border border-slate-200 bg-white">

          <div className="border-b border-slate-200 px-6 py-5">

            <h2 className="text-xl font-bold text-[#12335b]">
              Customer Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Complete customer information.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">

            <InfoItem
              icon={<User size={18} />}
              label="Customer Name"
              value={customer.name}
            />

            <InfoItem
              icon={<CheckCircle2 size={18} />}
              label="Customer ID"
              value={customer.id}
            />

            <InfoItem
              icon={<Phone size={18} />}
              label="Phone"
              value={customer.phone}
            />

            <InfoItem
              icon={<Mail size={18} />}
              label="Email"
              value={customer.email}
            />

            <InfoItem
              icon={<MapPin size={18} />}
              label="Location"
              value={customer.location}
            />

            <InfoItem
              icon={<Calendar size={18} />}
              label="Customer Since"
              value={customer.date}
            />

          </div>

        </section>

        {/* Customer Summary */}
        <section className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">

          <SummaryCard
            title="Total Projects"
            value={String(customer.projects)}
          />

          <SummaryCard
            title="Total Project Value"
            value={customer.totalValue}
          />

          <SummaryCard
            title="Current Project"
            value={customer.project}
          />

        </section>

        {/* Project Details */}
        <section className="mb-6 border border-slate-200 bg-white">

          <div className="border-b border-slate-200 px-6 py-5">

            <h2 className="text-xl font-bold text-[#12335b]">
              Project Details
            </h2>

          </div>

          <div className="p-6">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              <div>
                <p className="mb-2 text-sm text-slate-500">
                  Project Type
                </p>

                <p className="text-lg font-semibold text-slate-800">
                  {customer.project}
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm text-slate-500">
                  Project Area
                </p>

                <p className="text-lg font-semibold text-slate-800">
                  {customer.area}
                </p>
              </div>

            </div>

            <div className="mt-6">

              <p className="mb-2 text-sm text-slate-500">
                Customer Requirement
              </p>

              <div className="bg-slate-50 p-5 leading-7 text-slate-700">
                {customer.requirement}
              </div>

            </div>

          </div>

        </section>

        {/* Actions */}
        <section className="border border-slate-200 bg-white p-6">

          <h2 className="mb-5 text-xl font-bold text-[#12335b]">
            Customer Actions
          </h2>

          <div className="flex flex-wrap gap-4">

            <a
              href={`https://wa.me/${customer.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a
              href={`tel:${customer.phone}`}
              className="flex items-center gap-2 border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Phone size={18} />
              Call Customer
            </a>

            <a
              href={`mailto:${customer.email}`}
              className="flex items-center gap-2 border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Mail size={18} />
              Send Email
            </a>

          </div>

        </section>

      </main>

    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-blue-50 text-[#1558b0]">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {label}
        </p>

        <p className="mt-1 font-semibold text-slate-800">
          {value}
        </p>
      </div>

    </div>
  );
}

function SummaryCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border border-slate-200 bg-white p-6">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-xl font-bold text-[#12335b]">
        {value}
      </p>

    </div>
  );
}