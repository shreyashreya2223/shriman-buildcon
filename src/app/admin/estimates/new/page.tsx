"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Calculator,
  Plus,
  Trash2,
  User,
  MapPin,
  Phone,
  Mail,
  Save,
} from "lucide-react";
import { estimates as defaultEstimates } from "@/data/estimates";
type Item = {
  id: number;
  description: string;
  quantity: number;
  unit: string;
  rate: number;
};

export default function CreateEstimate() {
  const router = useRouter();

  const [customer] = useState({
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    email: "rahul.sharma@example.com",
    location: "Noida",
  });
    const [project, setProject] = useState("Residential Construction");

  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      description: "Civil Construction Work",
      quantity: 1,
      unit: "Project",
      rate: 2500000,
    },
    {
      id: 2,
      description: "Electrical & Plumbing Work",
      quantity: 1,
      unit: "Project",
      rate: 500000,
    },
  ]);

const [taxType, setTaxType] = useState<"CGST_SGST" | "IGST">(
  "CGST_SGST"
);

const [taxRate, setTaxRate] = useState(18);

  const subtotal = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.quantity * item.rate,
      0
    );
  }, [items]);

const taxAmount = subtotal * (taxRate / 100);

const cgstAmount =
  taxType === "CGST_SGST"
    ? subtotal * ((taxRate / 2) / 100)
    : 0;

const sgstAmount =
  taxType === "CGST_SGST"
    ? subtotal * ((taxRate / 2) / 100)
    : 0;

const igstAmount =
  taxType === "IGST"
    ? subtotal * (taxRate / 100)
    : 0;

const grandTotal = subtotal + taxAmount;

  function addItem() {
    setItems([
      ...items,
      {
        id: Date.now(),
        description: "",
        quantity: 1,
        unit: "Sq. Ft.",
        rate: 0,
      },
    ]);
  }

  function removeItem(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }

  function updateItem(
    id: number,
    field: keyof Item,
    value: string | number
  ) {
    setItems(
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]:
                field === "quantity" || field === "rate"
                  ? Number(value)
                  : value,
            }
          : item
      )
    );
  }

  function formatCurrency(value: number) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  }
    function handleSave() {
    const saved = localStorage.getItem("estimates");

    const currentEstimates = saved
      ? JSON.parse(saved)
      : [...defaultEstimates];

    const numbers = currentEstimates
      .map((item: { id: string }) => {
        const match = String(item.id).match(/EST-(\d+)/);
        return match ? Number(match[1]) : 0;
      });

    const nextNumber =
      Math.max(0, ...numbers) + 1;

    const newId = `EST-${String(nextNumber).padStart(3, "0")}`;

    const newEstimate = {
      id: newId,
      customer: customer.name,
      project,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      total: formatCurrency(grandTotal),
      status: "Draft",
    };

    const updatedEstimates = [
      newEstimate,
      ...currentEstimates,
    ];

    localStorage.setItem(
      "estimates",
      JSON.stringify(updatedEstimates)
    );

    alert("Estimate saved successfully!");

    router.push(`/admin/estimates/${newId}`);
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white px-8 py-5">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <Link
              href="/admin"
              className="flex h-10 w-10 items-center justify-center border border-slate-200 hover:bg-slate-50"
            >
              <ArrowLeft size={20} />
            </Link>

            <div>
              <p className="text-sm text-slate-500">
                Admin Panel
              </p>

              <h1 className="text-2xl font-bold text-[#12335b]">
                Create Estimate
              </h1>
            </div>

          </div>

          <button
  onClick={handleSave}
            className="flex items-center gap-2 bg-[#1558b0] px-6 py-3 font-semibold text-white hover:bg-[#10488f]"
          >
            <Save size={18} />
            Save Estimate
          </button>

        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-8 py-8">

        {/* CUSTOMER CARD */}
        <section className="mb-6 border border-slate-200 bg-white">

          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-xl font-bold text-[#12335b]">
              Customer Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Customer details for this estimate
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-4">

            <Info
              icon={<User size={18} />}
              label="Customer"
              value={customer.name}
            />

            <Info
              icon={<Phone size={18} />}
              label="Phone"
              value={customer.phone}
            />

            <Info
              icon={<Mail size={18} />}
              label="Email"
              value={customer.email}
            />

            <Info
              icon={<MapPin size={18} />}
              label="Location"
              value={customer.location}
            />

          </div>

        </section>

        {/* ESTIMATE INFORMATION */}
        <section className="mb-6 border border-slate-200 bg-white">

          <div className="border-b border-slate-200 px-6 py-5">

            <div className="flex items-center gap-3">
              <Calculator
                className="text-[#1558b0]"
                size={22}
              />

              <h2 className="text-xl font-bold text-[#12335b]">
                Estimate Details
              </h2>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                Estimate Number
              </label>

              <input
  value="Auto-generated on save"
  readOnly
  className="w-full border border-slate-300 bg-slate-50 px-4 py-3 outline-none"
/>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                Project Type
              </label>

              <select
  value={project}
  onChange={(e) => setProject(e.target.value)}
  className="w-full border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#1558b0]"
>
  <option value="Residential Construction">
    Residential Construction
  </option>

  <option value="Commercial Construction">
    Commercial Construction
  </option>

  <option value="Industrial Construction">
    Industrial Construction
  </option>

  <option value="Turnkey Project">
    Turnkey Project
  </option>

  <option value="Renovation">
    Renovation
  </option>

  <option value="Waterproofing">
    Waterproofing
  </option>

  <option value="Civil Construction">
    Civil Construction
  </option>

  <option value="Electrical & Plumbing">
    Electrical & Plumbing
  </option>

  <option value="Other">
    Other
  </option>
</select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                Valid For
              </label>

              <select className="w-full border border-slate-300 bg-white px-4 py-3 outline-none">
                <option>15 Days</option>
                <option>30 Days</option>
                <option>45 Days</option>
                <option>60 Days</option>
              </select>
            </div>

          </div>

        </section>

        {/* ITEMS */}
        <section className="mb-6 border border-slate-200 bg-white">

          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

            <div>
              <h2 className="text-xl font-bold text-[#12335b]">
                Estimate Items
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Add construction work and services
              </p>
            </div>

            <button
              onClick={addItem}
              className="flex items-center gap-2 bg-[#1558b0] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#10488f]"
            >
              <Plus size={18} />
              Add Item
            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-50">

                <tr className="border-b border-slate-200 text-left text-sm text-slate-500">

                  <th className="px-6 py-4">
                    Description
                  </th>

                  <th className="px-4 py-4">
                    Qty
                  </th>

                  <th className="px-4 py-4">
                    Unit
                  </th>

                  <th className="px-4 py-4">
                    Rate
                  </th>

                  <th className="px-4 py-4">
                    Amount
                  </th>

                  <th className="px-4 py-4">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {items.map((item) => (

                  <tr
                    key={item.id}
                    className="border-b border-slate-200"
                  >

                    <td className="px-6 py-4">

                      <input
                        value={item.description}
                        onChange={(e) =>
                          updateItem(
                            item.id,
                            "description",
                            e.target.value
                          )
                        }
                        placeholder="Enter work description"
                        className="w-full min-w-[250px] border border-slate-300 px-3 py-2.5 outline-none focus:border-[#1558b0]"
                      />

                    </td>

                    <td className="px-4 py-4">

                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateItem(
                            item.id,
                            "quantity",
                            e.target.value
                          )
                        }
                        className="w-24 border border-slate-300 px-3 py-2.5 outline-none focus:border-[#1558b0]"
                      />

                    </td>

                    <td className="px-4 py-4">

                      <select
                        value={item.unit}
                        onChange={(e) =>
                          updateItem(
                            item.id,
                            "unit",
                            e.target.value
                          )
                        }
                        className="border border-slate-300 px-3 py-2.5 outline-none"
                      >
                        <option>Sq. Ft.</option>
                        <option>Sq. M.</option>
                        <option>Project</option>
                        <option>Day</option>
                        <option>Hour</option>
                        <option>Unit</option>
                      </select>

                    </td>

                    <td className="px-4 py-4">

                      <input
                        type="number"
                        value={item.rate}
                        onChange={(e) =>
                          updateItem(
                            item.id,
                            "rate",
                            e.target.value
                          )
                        }
                        className="w-32 border border-slate-300 px-3 py-2.5 outline-none focus:border-[#1558b0]"
                      />

                    </td>

                    <td className="px-4 py-4 font-semibold text-slate-800">

                      {formatCurrency(
                        item.quantity * item.rate
                      )}

                    </td>

                    <td className="px-4 py-4">

                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex h-9 w-9 items-center justify-center text-red-500 hover:bg-red-50"
                      >
                        <Trash2 size={18} />
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

        {/* TOTALS */}
        <section className="mb-6 flex justify-end">

          <div className="w-full border border-slate-200 bg-white p-6 md:w-[450px]">

            <h2 className="mb-5 text-xl font-bold text-[#12335b]">
              Estimate Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold">
                  {formatCurrency(subtotal)}
                </span>
              </div>

{/* GST SECTION */}

<div className="border-t border-slate-200 pt-4">

  <div className="mb-4 flex items-center justify-between">

    <span className="font-semibold text-[#12335b]">
      GST
    </span>

    <select
      value={taxType}
      onChange={(e) =>
        setTaxType(
          e.target.value as "CGST_SGST" | "IGST"
        )
      }
      className="border border-slate-300 bg-white px-3 py-2 text-sm outline-none"
    >
      <option value="CGST_SGST">
        CGST + SGST
      </option>

      <option value="IGST">
        IGST
      </option>
    </select>

  </div>

  {/* GST RATE */}

  <div className="mb-4 flex items-center justify-between">

    <span className="text-sm text-slate-500">
      GST Rate
    </span>

 <input
  type="number"
  min="0"
  max="100"
  step="1"
  value={taxRate}
  onChange={(e) =>
    setTaxRate(Number(e.target.value))
  }
  className="w-20 border border-slate-300 px-3 py-2 text-center text-sm outline-none focus:border-[#1558b0]"
/>

<span className="text-sm text-slate-600">
  %
</span>
  </div>

  {/* CGST + SGST */}

  {taxType === "CGST_SGST" && (
    <div className="space-y-3">

      <div className="flex justify-between text-sm text-slate-600">

        <span>
          CGST ({taxRate / 2}%)
        </span>

        <span className="font-semibold">
          {formatCurrency(cgstAmount)}
        </span>

      </div>

      <div className="flex justify-between text-sm text-slate-600">

        <span>
          SGST ({taxRate / 2}%)
        </span>

        <span className="font-semibold">
          {formatCurrency(sgstAmount)}
        </span>

      </div>

    </div>
  )}

  {/* IGST */}

  {taxType === "IGST" && (
    <div className="flex justify-between text-sm text-slate-600">

      <span>
        IGST ({taxRate}%)
      </span>

      <span className="font-semibold">
        {formatCurrency(igstAmount)}
      </span>

    </div>
  )}

</div>

              <div className="border-t border-slate-200 pt-4">

                <div className="flex justify-between">

                  <span className="text-lg font-bold text-[#12335b]">
                    Grand Total
                  </span>

                  <span className="text-2xl font-bold text-[#1558b0]">
                    {formatCurrency(grandTotal)}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* NOTES */}
        <section className="border border-slate-200 bg-white p-6">

          <h2 className="mb-4 text-xl font-bold text-[#12335b]">
            Notes & Terms
          </h2>

          <textarea
            rows={5}
            placeholder="Add payment terms, project conditions, exclusions, notes..."
            className="w-full border border-slate-300 px-4 py-3 outline-none focus:border-[#1558b0]"
          />

        </section>

      </main>

    </div>
  );
}

function Info({
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