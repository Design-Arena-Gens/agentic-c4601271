"use client";

import { useState } from "react";

const categories = [
  "Electronics",
  "Documents",
  "Clothing",
  "Accessories",
  "Stationery",
  "Others"
];

export default function ReportPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="container max-w-3xl">
      <div className="rounded-3xl bg-white shadow-xl p-8 md:p-12 space-y-8">
        <div>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Report Lost Item
          </span>
          <h1 className="font-heading text-3xl md:text-4xl text-slate-900 mt-4">
            Submit Lost Item Details
          </h1>
          <p className="text-slate-600 mt-2">
            Provide accurate information so we can alert the community and help
            you reclaim your belongings faster.
          </p>
        </div>

        {isSubmitted ? (
          <div className="rounded-2xl border border-primary/30 bg-primary/5 px-6 py-8 text-sm text-slate-700">
            <h2 className="font-heading text-xl text-primary mb-3">
              Thanks for reporting!
            </h2>
            <p>
              Our team will verify the details and notify you as soon as we find
              a match. Keep an eye on your email for updates.
            </p>
            <button
              className="mt-6 btn-primary px-5 py-3 rounded-full shadow hover:shadow-lg transition"
              onClick={() => setIsSubmitted(false)}
            >
              Report Another Item
            </button>
          </div>
        ) : (
          <form
            className="space-y-6"
            onSubmit={(event) => {
              event.preventDefault();
              setIsSubmitted(true);
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Item Name
                <input
                  required
                  type="text"
                  placeholder="e.g. Dell XPS 13 Laptop"
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Category
                <select
                  required
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Date Lost
                <input
                  required
                  type="date"
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Last Seen Location
                <input
                  required
                  type="text"
                  placeholder="e.g. Library Block, Ground Floor"
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Detailed Description
              <textarea
                required
                rows={4}
                placeholder="Mention distinguishing features, brand, color, serial numbers, etc."
                className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              />
            </label>

            <div className="grid md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Contact Email
                <input
                  required
                  type="email"
                  placeholder="name@nsut.ac.in"
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Contact Number
                <input
                  required
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  pattern="\\+?[0-9\\s-]{7,}"
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Upload Photo (optional)
              <input
                type="file"
                accept="image/*"
                className="rounded-2xl border border-dashed border-slate-300 px-4 py-6 text-base text-slate-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <span className="text-xs text-slate-500">
                JPG or PNG up to 5MB. Helps in quicker identification.
              </span>
            </label>

            <button
              type="submit"
              className="w-full md:w-auto btn-primary px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
            >
              Submit Report
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
