// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Matchbox Frontdesk — AI Virtual Receptionist for Home Service Pros",
  description:
    "Never miss another customer call. Matchbox Frontdesk is an AI receptionist for plumbers, HVAC, electricians, and home service pros. Books jobs, answers 24/7, sends SMS confirmations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-slate-950 text-slate-100 selection:bg-indigo-500/20 selection:text-indigo-100`}
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Decorative background */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -right-20 h-[36rem] w-[36rem] rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,rgba(99,102,241,0.06),transparent)]" />
        </div>

        {children}
      </body>
    </html>
  );
}
