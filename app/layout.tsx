import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Lost & Found Portal - NSUT",
  description:
    "Centralized Lost & Found management for Netaji Subhas University of Technology students and staff."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body bg-slate-50 text-slate-900">
        <SiteHeader />
        <main className="pt-28 pb-16">{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="container py-8 flex flex-col sm:flex-row justify-between gap-4 text-sm text-slate-600">
            <span>© {new Date().getFullYear()} NSUT Lost &amp; Found portal</span>
            <div className="flex gap-3">
              <Link className="hover:text-primary" href="/report">
                Report Lost Item
              </Link>
              <Link className="hover:text-primary" href="/found">
                View Found Items
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
