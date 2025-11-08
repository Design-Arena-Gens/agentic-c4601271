"use client";

import Link from "next/link";

const featureCards = [
  {
    title: "Quick Search",
    icon: "🔍",
    description:
      "Filter and locate lost belongings in seconds using smart search tags."
  },
  {
    title: "Easy Reporting",
    icon: "📝",
    description:
      "Submit lost item reports with photos and details from any device."
  },
  {
    title: "Verified Claims",
    icon: "✅",
    description:
      "Every claim is validated by NSUT administration to prevent misuse."
  }
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="container grid gap-10 items-center md:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            NSUT Lost & Found
          </span>
          <h1 className="font-heading text-4xl md:text-5xl text-slate-900 leading-tight">
            Lost &amp; Found Portal - NSUT
          </h1>
          <p className="text-lg text-slate-600">
            Report lost belongings or claim found items seamlessly. Stay
            connected with the NSUT community and reunite with what matters
            most.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/report"
              className="btn-primary px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              Report Lost Item
            </Link>
            <Link
              href="/found"
              className="btn-secondary px-6 py-3 rounded-full shadow-md hover:bg-white transition"
            >
              View Found Items
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl" />
          <div className="relative rounded-3xl border border-slate-200 bg-white shadow-lg p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">
                🎒
              </div>
              <div>
                <p className="font-heading text-xl">Search Smart</p>
                <p className="text-sm text-slate-500">
                  Filter by category, location, or date to find your belongings.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-secondary px-4 py-3 shadow-sm">
                <p className="font-medium text-slate-700">Lost today</p>
                <p className="text-2xl font-semibold text-primary">5 items</p>
              </div>
              <div className="rounded-2xl bg-secondary px-4 py-3 shadow-sm">
                <p className="font-medium text-slate-700">Claims approved</p>
                <p className="text-2xl font-semibold text-primary">92%</p>
              </div>
            </div>
            <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-4 py-5 text-sm text-slate-600">
              “I found my calculator within a day thanks to the portal!”
              <span className="block mt-3 font-medium text-primary">
                — Priya, B.Tech CSE
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <h2 className="font-heading text-3xl text-center text-slate-900 mb-12">
            Everything You Need To Reunite Items With Owners
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl bg-secondary shadow-lg p-8 hover:-translate-y-1 transition-transform"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="font-heading text-xl text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container bg-primary text-white rounded-3xl px-8 py-14 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="font-heading text-3xl mb-3">
            Found or Lost Something? Get Started!
          </h3>
          <p className="text-white/80">
            Log the item details or browse the campus inventory to reunite NSUT
            community members with their belongings.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/report"
            className="bg-white text-primary px-6 py-3 rounded-full font-semibold shadow-md hover:bg-slate-100"
          >
            Report Now
          </Link>
          <Link
            href="/found"
            className="border border-white/60 px-6 py-3 rounded-full font-semibold hover:bg-white/10"
          >
            Browse Items
          </Link>
        </div>
      </section>
    </div>
  );
}
