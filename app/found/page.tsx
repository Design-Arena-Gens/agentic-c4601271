"use client";

import { useMemo, useState } from "react";

type Item = {
  id: number;
  title: string;
  category: string;
  location: string;
  dateFound: string;
  description: string;
  status: "Pending Claim" | "Under Verification";
};

const mockItems: Item[] = [
  {
    id: 1,
    title: "Apple AirPods Pro",
    category: "Electronics",
    location: "ECE Block - Seminar Hall",
    dateFound: "2024-03-02",
    description:
      "Found in the front row seat. Case has a small sticker with initials 'SK'.",
    status: "Pending Claim"
  },
  {
    id: 2,
    title: "HP Pavilion Laptop",
    category: "Electronics",
    location: "Library Block - Study Area",
    dateFound: "2024-03-04",
    description:
      "Grey laptop with NSUT sticker on the lid. Charger present in the bag.",
    status: "Under Verification"
  },
  {
    id: 3,
    title: "Wallet with ID",
    category: "Documents",
    location: "Canteen - Cash Counter",
    dateFound: "2024-03-06",
    description:
      "Brown leather wallet containing NSUT ID card (BBA). Collect with verification.",
    status: "Pending Claim"
  },
  {
    id: 4,
    title: "Casio Scientific Calculator",
    category: "Stationery",
    location: "Mechanical Block - Room 204",
    dateFound: "2024-03-06",
    description:
      "Calculator with scratched keypad. Found after the Mechanics lecture.",
    status: "Pending Claim"
  }
];

export default function FoundItemsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredItems = useMemo(() => {
    return mockItems.filter((item) => {
      const matchesCategory =
        category === "All" || item.category === category;
      const matchesSearch =
        search.trim().length === 0 ||
        [item.title, item.description, item.location]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="container">
      <div className="rounded-3xl bg-white shadow-xl p-8 md:p-12 space-y-10">
        <header className="space-y-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Found Items
          </span>
          <h1 className="font-heading text-3xl md:text-4xl text-slate-900">
            Browse Found Items
          </h1>
          <p className="text-slate-600">
            Review the latest found belongings reported across the NSUT campus.
            Use filters to quickly identify items that might belong to you.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-[2fr,1fr] items-start">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Search Items
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, location, description..."
              className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Category
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <option value="All">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Documents">Documents</option>
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
              <option value="Stationery">Stationery</option>
              <option value="Others">Others</option>
            </select>
          </label>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredItems.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-primary/30 bg-primary/5 px-6 py-10 text-center text-slate-600">
              No items match your search yet. Try adjusting filters or check
              back later.
            </div>
          ) : (
            filteredItems.map((item) => (
              <article
                key={item.id}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-secondary p-6 shadow-lg"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-heading text-xl text-slate-900">
                      {item.title}
                    </h2>
                    <p className="text-xs uppercase tracking-wide text-primary/80 font-semibold">
                      {item.category}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-4 py-1 text-xs font-semibold ${
                      item.status === "Pending Claim"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/20 text-[#5f4704]"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                  <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                    📍 {item.location}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                    📅 Found:{" "}
                    {new Date(item.dateFound).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric"
                    })}
                  </span>
                </div>
                <button className="mt-6 w-full rounded-full bg-white text-primary font-semibold py-3 shadow-md hover:bg-slate-100 transition">
                  Claim This Item
                </button>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
