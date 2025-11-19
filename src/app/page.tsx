// app/page.tsx
"use client";

import { useState } from "react";
import {
  Phone,
  Zap,
  Shield,
  Clock,
  CalendarCheck2,
  MessageSquare,
  Signal,
  Timer,
  Mic,
  PhoneOff,
  Truck,
  Wrench,
  Thermometer,
  Plug,
  Bug,
  DoorClosed,
  Calendar,
  Home,
  CheckCircle2,
  Star,
  Languages,
  PhoneMissed,
  CalendarX,
  Angry,
  AlertOctagon,
  Filter,
  PlayCircle,
  Bot,
  ClipboardList,
  TrendingUp,
  ArrowRightCircle,
  Hammer,
  Smile,
  HardHat,
  Waves,
  MessageCircle,
  Inbox,
  CalendarPlus,
  Settings2,
  Infinity,
  Users,
  Wand2,
  Globe,
  Mail,
  Twitter,
  Linkedin,
  Headphones,
  Send,
} from "lucide-react";

const BRAND_NAME = "Matchbox";
const COMPANY_NAME = "Digital Matchbox Technology LLC";
const DEMO_NUMBER = "902-707-2325";
const DEMO_TEL = "tel:+19027072325";
const SUPPORT_EMAIL = "hello@getmatchbox.org";

const faqItems = [
  {
    question: "Is this better than using a call center?",
    answer:
      "Yes. It answers in under a second, keeps a friendly tone every time, follows your exact script, and books directly onto your calendar—no hold music or handoffs.",
  },
  {
    question: "Can it handle emergencies?",
    answer:
      "Yes. You can define emergency rules by service type and hours. Urgent calls are prioritized and routed to on-call techs automatically.",
  },
  {
    question: "Can it answer after-hours?",
    answer:
      "Absolutely—24/7/365. You choose how after-hours calls are handled: book next available or escalate.",
  },
  {
    question: "Does it replace my office receptionist?",
    answer:
      "It can replace or support your team. Many shops use Matchbox to cover overflow, lunches, vacations, and after-hours.",
  },
  {
    question: "Can it integrate with my existing calendar?",
    answer:
      "Yes. We connect to popular calendars and CRMs. Don’t see yours? We’ll set up a custom flow.",
  },
  {
    question: "Is Matchbox part of Digital Matchbox?",
    answer:
      "Yes. Matchbox is built and operated by Digital Matchbox, focused on AI tools for home service businesses.",
  },
];

// ───────────────────────── HEADER ─────────────────────────

function Header() {
  return (
    <header className="relative">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-cyan-500 text-slate-900 font-semibold tracking-tight">
              m
            </div>
            <span className="text-lg md:text-xl font-semibold tracking-tight">
              {BRAND_NAME}
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#how" className="hover:text-slate-100 transition-colors">
              How it works
            </a>
            <a
              href="#industries"
              className="hover:text-slate-100 transition-colors"
            >
              Industries
            </a>
            <a
              href="#features"
              className="hover:text-slate-100 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-slate-100 transition-colors"
            >
              Pricing
            </a>
            <a href="#faq" className="hover:text-slate-100 transition-colors">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={DEMO_TEL}
              className="hidden sm:flex items-center gap-2 rounded-lg bg-slate-800/60 ring-1 ring-inset ring-slate-700 hover:ring-slate-600 px-4 py-2.5 text-sm text-slate-100 transition"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">{DEMO_NUMBER}</span>
            </a>
            <a
              href={DEMO_TEL}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-900 px-4 py-2.5 text-sm font-medium shadow-sm hover:opacity-95 transition"
            >
              <Zap className="h-4 w-4" />
              <span>Call Our Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// ───────────────────────── HERO ─────────────────────────

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-16 lg:px-8 lg:pt-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 ring-1 ring-inset ring-slate-700 px-3 py-1 text-xs text-slate-300">
              <Shield className="h-3.5 w-3.5" />
              Trusted by busy home service pros
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
              Never Miss Another Customer Call
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              {BRAND_NAME} is your 24/7 AI virtual receptionist for plumbing,
              HVAC, electrical, and other home service businesses. Answers
              instantly, books jobs, sends SMS, and keeps your calendar full.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={DEMO_TEL}
                className="inline-flex justify-center items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-900 px-5 py-3 text-sm font-medium shadow-sm hover:opacity-95 transition"
              >
                <Phone className="h-4 w-4" />
                Call Our Live Demo
              </a>
              <a
                href="#how"
                className="inline-flex justify-center items-center gap-2 rounded-lg bg-slate-800/60 ring-1 ring-inset ring-slate-700 px-5 py-3 text-sm text-slate-100 hover:ring-slate-600 transition"
              >
                <PlayCircle className="h-4 w-4" />
                See How It Works
              </a>
            </div>

            <div className="mt-5 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="h-4 w-4" />
                <span>24/7 answering</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CalendarCheck2 className="h-4 w-4" />
                <span>Instant booking</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MessageSquare className="h-4 w-4" />
                <span>SMS confirmations</span>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-300">Demo line</div>
                <div className="text-sm font-medium text-slate-100">
                  {DEMO_NUMBER}
                </div>
              </div>
            </div>
          </div>

          {/* Visual Panel */}
          <div>
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/40 ring-1 ring-inset ring-slate-800 p-6 overflow-hidden">
              <div className="absolute -top-10 -right-10 h-[24rem] w-[24rem] rounded-full bg-indigo-500/10 blur-3xl" />
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Phone preview */}
                <div className="rounded-xl bg-slate-950/60 ring-1 ring-inset ring-slate-800 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-slate-900 font-medium tracking-tight">
                        AI
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-100">
                          AI Receptionist
                        </div>
                        <div className="text-xs text-slate-400">
                          Active • 24/7
                        </div>
                      </div>
                    </div>
                    <Signal className="h-4 w-4 text-slate-400" />
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="rounded-lg bg-slate-800/70 px-3 py-2 text-xs text-slate-200 max-w-[80%]">
                        Hi, thanks for calling Mike’s Plumbing. How can I help
                        today?
                      </div>
                    </div>
                    <div className="flex items-start gap-2 justify-end">
                      <div className="rounded-lg bg-indigo-600/90 px-3 py-2 text-xs text-slate-50 max-w-[80%]">
                        Kitchen sink is leaking. Can you come tomorrow morning?
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="rounded-lg bg-slate-800/70 px-3 py-2 text-xs text-slate-200 max-w-[80%]">
                        Absolutely. What’s the address and best callback
                        number?
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="rounded-lg bg-slate-800/70 px-3 py-2 text-xs text-slate-200 max-w-[80%]">
                        You’re booked for 9:00 AM. A confirmation SMS is on the
                        way.
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Timer className="h-3.5 w-3.5" />
                      00:42
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="rounded-full bg-slate-800 p-2 ring-1 ring-inset ring-slate-700 hover:ring-slate-600 transition">
                        <Mic className="h-4 w-4 text-slate-300" />
                      </button>
                      <button className="rounded-full bg-red-600/90 p-2 hover:bg-red-600 transition">
                        <PhoneOff className="h-4 w-4 text-slate-50" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Service illustration */}
                <div className="grid gap-4">
                  <div className="rounded-xl bg-slate-950/60 ring-1 ring-inset ring-slate-800 p-4">
                    <div className="flex items-center gap-3">
                      <Truck className="h-6 w-6 text-indigo-400" />
                      <div>
                        <div className="text-sm font-medium text-slate-100">
                          Dispatch-ready
                        </div>
                        <div className="text-xs text-slate-400">
                          Jobs booked directly onto your calendar
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-5 gap-2">
                      <div className="flex aspect-[4/3] items-center justify-center rounded-md bg-slate-900/80 ring-1 ring-inset ring-slate-800">
                        <Wrench className="h-5 w-5 text-slate-300" />
                      </div>
                      <div className="flex aspect-[4/3] items-center justify-center rounded-md bg-slate-900/80 ring-1 ring-inset ring-slate-800">
                        <Thermometer className="h-5 w-5 text-slate-300" />
                      </div>
                      <div className="flex aspect-[4/3] items-center justify-center rounded-md bg-slate-900/80 ring-1 ring-inset ring-slate-800">
                        <Plug className="h-5 w-5 text-slate-300" />
                      </div>
                      <div className="flex aspect-[4/3] items-center justify-center rounded-md bg-slate-900/80 ring-1 ring-inset ring-slate-800">
                        <Bug className="h-5 w-5 text-slate-300" />
                      </div>
                      <div className="flex aspect-[4/3] items-center justify-center rounded-md bg-slate-900/80 ring-1 ring-inset ring-slate-800">
                        <DoorClosed className="h-5 w-5 text-slate-300" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-950/60 ring-1 ring-inset ring-slate-800 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-400">
                        Today’s bookings
                      </div>
                      <Calendar className="h-4 w-4 text-slate-400" />
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between rounded-lg bg-slate-900/80 ring-1 ring-inset ring-slate-800 p-2">
                        <div className="flex items-center gap-2">
                          <Home className="h-4 w-4 text-indigo-400" />
                          <div className="text-xs">
                            <div className="text-slate-100">Leak repair</div>
                            <div className="text-slate-400">
                              9:00 AM • SMS sent
                            </div>
                          </div>
                        </div>
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-900/80 ring-1 ring-inset ring-slate-800 p-2">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-yellow-300" />
                          <div className="text-xs">
                            <div className="text-slate-100">Breaker trip</div>
                            <div className="text-slate-400">
                              11:30 AM • Confirmed
                            </div>
                          </div>
                        </div>
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-900/80 ring-1 ring-inset ring-slate-800 p-2">
                        <div className="flex items-center gap-2">
                          <Thermometer className="h-4 w-4 text-cyan-300" />
                          <div className="text-xs">
                            <div className="text-slate-100">AC tune-up</div>
                            <div className="text-slate-400">
                              3:00 PM • New lead
                            </div>
                          </div>
                        </div>
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust row */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-300" />
                  4.9/5 average call satisfaction
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-300" />
                  Secure &amp; compliant
                </div>
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-indigo-300" />
                  Multi-language
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── PAIN POINTS ─────────────────────────

function PainPoints() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
          Your Customers Are Calling. Are You Answering?
        </h2>
        <p className="mt-3 text-base text-slate-300">
          What real reviews say hurts most:
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <PhoneMissed className="h-5 w-5 text-rose-300" />
              <div className="text-sm font-medium text-slate-100">
                Missed calls
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Jobs go to whoever answers first.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <Timer className="h-5 w-5 text-amber-300" />
              <div className="text-sm font-medium text-slate-100">
                Slow callbacks
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Customers won’t wait around—especially in emergencies.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <CalendarX className="h-5 w-5 text-fuchsia-300" />
              <div className="text-sm font-medium text-slate-100">
                Scheduling mistakes
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Double-bookings and no-shows cost money.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <Angry className="h-5 w-5 text-rose-300" />
              <div className="text-sm font-medium text-slate-100">
                Rude or stressed receptionists
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Bad tone = bad reviews and lost referrals.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <AlertOctagon className="h-5 w-5 text-red-300" />
              <div className="text-sm font-medium text-slate-100">
                Emergency calls not answered
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              After-hours rings go to voicemail.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-cyan-300" />
              <div className="text-sm font-medium text-slate-100">
                Leads slipping through the cracks
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              No tracking = no follow-up and lost revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── HOW IT WORKS ─────────────────────────

function HowItWorks() {
  return (
    <section id="how" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
          How It Works
        </h2>
        <p className="mt-3 text-base text-slate-300">
          Simple setup. Immediate results.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-4">
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-indigo-600/20 flex items-center justify-center">
                <Phone className="h-5 w-5 text-indigo-400" />
              </div>
              <div className="text-sm font-medium text-slate-100">
                1) Customer calls your number
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Keep your existing number or forward it to Matchbox.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-indigo-600/20 flex items-center justify-center">
                <Bot className="h-5 w-5 text-indigo-400" />
              </div>
              <div className="text-sm font-medium text-slate-100">
                2) AI answers instantly
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Friendly, on-brand, and always calm—no hold music.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-indigo-600/20 flex items-center justify-center">
                <ClipboardList className="h-5 w-5 text-indigo-400" />
              </div>
              <div className="text-sm font-medium text-slate-100">
                3) Collects details + books the job
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Name, address, issue, and time slot—all logged and ready for
              dispatch.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-indigo-600/20 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-indigo-400" />
              </div>
              <div className="text-sm font-medium text-slate-100">
                4) Sends SMS confirmation
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Customers get instant confirmation and reminders so they actually
              show up.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-slate-950/60 ring-1 ring-inset ring-slate-800 p-5">
          <div className="text-xs uppercase tracking-wide text-slate-400">
            Sample call
          </div>
          <div className="mt-3 grid gap-3">
            <div className="flex items-start gap-2">
              <div className="rounded-lg bg-slate-900 px-3 py-2 text-xs text-slate-200 max-w-[70%]">
                “Hi, thanks for calling Mike’s Plumbing. How can I help today?”
              </div>
            </div>
            <div className="flex items-start gap-2 justify-end">
              <div className="rounded-lg bg-indigo-600/90 px-3 py-2 text-xs text-slate-50 max-w-[70%]">
                “Water heater stopped working.”
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="rounded-lg bg-slate-900 px-3 py-2 text-xs text-slate-200 max-w-[70%]">
                “Sorry to hear that. Are you seeing any leaks or error lights?”
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="rounded-lg bg-slate-900 px-3 py-2 text-xs text-slate-200 max-w-[70%]">
                “I can book our next available tech. What’s your address?”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── BENEFITS ─────────────────────────

function Benefits() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
          Why Home Service Pros Choose {BRAND_NAME}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-3 rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <TrendingUp className="h-5 w-5 text-emerald-300" />
            <div className="text-sm">
              <div className="font-medium text-slate-100">
                Convert 20–40% more calls into booked jobs
              </div>
              <p className="mt-1 text-slate-400">
                Speed + friendly tone = more approvals and fewer lost quotes.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <ArrowRightCircle className="h-5 w-5 text-indigo-300" />
            <div className="text-sm">
              <div className="font-medium text-slate-100">
                Stop losing leads to competitors
              </div>
              <p className="mt-1 text-slate-400">
                Answer every call in under a second—even on weekends and
                holidays.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <Hammer className="h-5 w-5 text-cyan-300" />
            <div className="text-sm">
              <div className="font-medium text-slate-100">
                Run jobs while calls are handled for you
              </div>
              <p className="mt-1 text-slate-400">
                No more phone juggling on ladders or in crawlspaces.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <Smile className="h-5 w-5 text-amber-300" />
            <div className="text-sm">
              <div className="font-medium text-slate-100">
                Reduce stress and cancellations
              </div>
              <p className="mt-1 text-slate-400">
                Clear expectations and SMS reminders cut no-shows.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <Star className="h-5 w-5 text-amber-300" />
            <div className="text-sm">
              <div className="font-medium text-slate-100">
                Increase customer satisfaction and 5-star reviews
              </div>
              <p className="mt-1 text-slate-400">
                Polite, consistent phone experience on every single call.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <HardHat className="h-5 w-5 text-indigo-300" />
            <div className="text-sm">
              <div className="font-medium text-slate-100">
                Works even when you’re on another job
              </div>
              <p className="mt-1 text-slate-400">
                After-hours, weekends, holidays—Matchbox always answers.
                answers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── INDUSTRIES ─────────────────────────

function Industries() {
  return (
    <section id="industries" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
          Built for Home Services
        </h2>
        <p className="mt-3 text-base text-slate-300">
          Custom scripts per trade. We speak your customers’ language.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <Wrench className="h-5 w-5 text-indigo-300" />
              <div className="text-sm font-medium text-slate-100">Plumbing</div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Burst pipe at 10pm? We answer, triage, and book the emergency
              slot.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <Thermometer className="h-5 w-5 text-cyan-300" />
              <div className="text-sm font-medium text-slate-100">HVAC</div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              No cool air? We verify unit type, book tune-ups, and route
              emergencies.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <Plug className="h-5 w-5 text-yellow-200" />
              <div className="text-sm font-medium text-slate-100">
                Electrical
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Breaker trips or dead outlets? We collect details and schedule
              safely.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <Waves className="h-5 w-5 text-slate-200" />
              <div className="text-sm font-medium text-slate-100">
                Appliance Repair
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Model/serial capture, warranty status, and calendar bookings
              handled.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <Bug className="h-5 w-5 text-lime-300" />
              <div className="text-sm font-medium text-slate-100">
                Pest Control
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Urgent infestations routed; quarterly plans scheduled on the spot.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <DoorClosed className="h-5 w-5 text-indigo-300" />
              <div className="text-sm font-medium text-slate-100">
                Garage Doors
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Broken springs or stuck doors? We book fast and confirm by SMS.
            </p>
          </div>
        </div>

        <div className="mt-4 text-xs text-slate-400">
          Also great for: Handyman, Drain Cleaning, and more.
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── DEMO CTA ─────────────────────────

function DemoCTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600/15 to-cyan-500/10 ring-1 ring-inset ring-slate-800 p-8">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Try It Right Now
              </h3>
              <p className="mt-2 text-base text-slate-300">
                Call our AI receptionist and hear what your business could sound
                like in under 60 seconds.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={DEMO_TEL}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-900 px-5 py-3 text-sm font-medium shadow-sm hover:opacity-95 transition"
                >
                  <Phone className="h-4 w-4" />
                  Call the Demo Line
                </a>
                <div className="rounded-lg bg-slate-900/60 ring-1 ring-inset ring-slate-800 px-3 py-2 text-sm text-slate-100">
                  {DEMO_NUMBER}
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-slate-950/60 ring-1 ring-inset ring-slate-800 p-5">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <div className="text-sm font-medium text-slate-100">
                  What you’ll hear
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-indigo-300" />
                  Friendly greeting customized to your business
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4 text-indigo-300" />
                  Smart questions that book the job
                </li>
                <li className="flex items-center gap-2">
                  <Send className="h-4 w-4 text-indigo-300" />
                  Instant SMS confirmation preview
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── FEATURES ─────────────────────────

function FeaturesSection() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
          Features that keep the phone handled
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-indigo-300" />
              <div className="text-sm font-medium text-slate-100">
                24/7 answering
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Never send a customer to voicemail again.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <Inbox className="h-5 w-5 text-indigo-300" />
              <div className="text-sm font-medium text-slate-100">
                Lead capture + CRM
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Auto-sync caller details to your existing tools.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <CalendarPlus className="h-5 w-5 text-indigo-300" />
              <div className="text-sm font-medium text-slate-100">
                Appointment booking
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Books jobs directly onto your calendar.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <AlertOctagon className="h-5 w-5 text-indigo-300" />
              <div className="text-sm font-medium text-slate-100">
                Emergency routing
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              After-hours escalations to on-call techs.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-indigo-300" />
              <div className="text-sm font-medium text-slate-100">
                SMS confirmations
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Reduce cancellations and no-shows with reminders.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5">
            <div className="flex items-center gap-3">
              <Languages className="h-5 w-5 text-indigo-300" />
              <div className="text-sm font-medium text-slate-100">
                Multi-language
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Serve every neighborhood with confidence.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-5 sm:col-span-2 lg:col-span-3">
            <div className="flex items-center gap-3">
              <Settings2 className="h-5 w-5 text-indigo-300" />
              <div className="text-sm font-medium text-slate-100">
                Custom scripts per service
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Tailored flows for installs, repairs, quotes, and maintenance
              plans—per trade, per location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── PRICING ─────────────────────────

function Pricing() {
  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
              Straightforward pricing
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Pay for minutes. Unlimited calls, no contracts.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
            <Shield className="h-4 w-4" />
            30-day money-back guarantee
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Starter */}
          <div className="rounded-2xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-6 flex flex-col">
            <div className="text-sm font-medium text-slate-100">Starter</div>
            <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-50">
              $149
              <span className="text-base text-slate-400">/mo</span>
            </div>
            <div className="mt-1 text-xs text-slate-400">
              Includes 300 minutes
            </div>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Infinity className="h-4 w-4 text-indigo-300" />
                Unlimited calls
              </li>
              <li className="flex items-center gap-2">
                <ClipboardList className="h-4 w-4 text-indigo-300" />
                Lead capture
              </li>
              <li className="flex items-center gap-2">
                <CalendarPlus className="h-4 w-4 text-indigo-300" />
                Appointment scheduling
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-indigo-300" />
                SMS confirmations
              </li>
            </ul>
            <a
              href={DEMO_TEL}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-900 px-4 py-2.5 text-sm font-medium hover:opacity-95 transition"
            >
              <Phone className="h-4 w-4" />
              Call to Start
            </a>
          </div>

          {/* Pro */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/50 ring-2 ring-indigo-500/40 p-6 flex flex-col">
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium text-slate-100">Pro</div>
              <span className="text-[0.7rem] rounded-full bg-indigo-500/20 text-indigo-200 px-2 py-0.5 ring-1 ring-inset ring-indigo-400/30">
                Most popular
              </span>
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-50">
              $299
              <span className="text-base text-slate-400">/mo</span>
            </div>
            <div className="mt-1 text-xs text-slate-400">
              Includes 800 minutes
            </div>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Infinity className="h-4 w-4 text-indigo-300" />
                Unlimited calls
              </li>
              <li className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-indigo-300" />
                Custom scripts per service
              </li>
              <li className="flex items-center gap-2">
                <AlertOctagon className="h-4 w-4 text-indigo-300" />
                Emergency routing
              </li>
              <li className="flex items-center gap-2">
                <Inbox className="h-4 w-4 text-indigo-300" />
                CRM integrations
              </li>
            </ul>
            <a
              href={DEMO_TEL}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-900 px-4 py-2.5 text-sm font-medium hover:opacity-95 transition"
            >
              <Phone className="h-4 w-4" />
              Call Sales
            </a>
          </div>

          {/* Agency */}
          <div className="rounded-2xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-6 flex flex-col">
            <div className="text-sm font-medium text-slate-100">
              Agency / White-label
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-50">
              Custom
            </div>
            <div className="mt-1 text-xs text-slate-400">
              High volume minutes
            </div>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Users className="h-4 w-4 text-indigo-300" />
                Multi-location support
              </li>
              <li className="flex items-center gap-2">
                <Wand2 className="h-4 w-4 text-indigo-300" />
                Full white-label
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-indigo-300" />
                Priority routing
              </li>
              <li className="flex items-center gap-2">
                <Headphones className="h-4 w-4 text-indigo-300" />
                Dedicated success manager
              </li>
            </ul>
            <a
              href={DEMO_TEL}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-900 px-4 py-2.5 text-sm font-medium hover:opacity-95 transition"
            >
              <Phone className="h-4 w-4" />
              Talk to Us
            </a>
          </div>
        </div>
        <div className="mt-4 text-xs text-slate-400">
          Overages billed per minute. Cancel anytime.
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── FAQ ─────────────────────────

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
          FAQ
        </h2>
        <div className="mt-6 divide-y divide-slate-800 rounded-xl ring-1 ring-inset ring-slate-800 bg-slate-900/60">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="p-5" key={item.question}>
                <button
                  className="w-full flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="text-base font-medium text-slate-100">
                    {item.question}
                  </div>
                  <span
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ArrowRightCircle className="h-5 w-5 text-slate-400" />
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-2 text-sm text-slate-300">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={DEMO_TEL}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-900 px-4 py-2.5 text-sm font-medium hover:opacity-95 transition"
          >
            <Phone className="h-4 w-4" />
            Call the Demo Line
          </a>
          <span className="text-xs text-slate-400">
            or email{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="underline decoration-slate-600 hover:text-slate-200"
            >
              {SUPPORT_EMAIL}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── FOOTER ─────────────────────────

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-10 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-cyan-500 text-slate-900 font-semibold tracking-tight">
                m
              </div>
              <span className="text-lg font-semibold tracking-tight">
                {BRAND_NAME}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-400">
              AI receptionist for home service businesses. Answer every call,
              book more jobs, and keep customers happy.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <a
                href={DEMO_TEL}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900/60 ring-1 ring-inset ring-slate-800 px-3 py-2 text-slate-100 hover:ring-slate-700 transition"
              >
                <Phone className="h-4 w-4" />
                {DEMO_NUMBER}
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900/60 ring-1 ring-inset ring-slate-800 px-3 py-2 text-slate-100 hover:ring-slate-700 transition"
              >
                <Mail className="h-4 w-4" />
                {SUPPORT_EMAIL}
              </a>
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-100">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <a href="#how" className="hover:text-slate-200 transition">
                  How it works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-slate-200 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-slate-200 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-200 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-100">Social</div>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="#"
                className="rounded-lg bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-2 text-slate-300 hover:text-slate-100 hover:ring-slate-700 transition"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-lg bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-2 text-slate-300 hover:text-slate-100 hover:ring-slate-700 transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-lg bg-slate-900/60 ring-1 ring-inset ring-slate-800 p-2 text-slate-300 hover:text-slate-100 hover:ring-slate-700 transition"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800 pt-5 text-xs text-slate-500">
          <div>
            © <span>{year}</span> {BRAND_NAME} • Built by {COMPANY_NAME}.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ───────────────────────── MOBILE CTA ─────────────────────────

function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-20 md:hidden">
      <div className="mx-auto max-w-7xl px-6 pb-4">
        <div className="rounded-xl bg-slate-900/80 backdrop-blur ring-1 ring-inset ring-slate-800 p-3">
          <div className="flex items-center justify-between gap-3">
            <div className="text-xs text-slate-300">
              Demo line •{" "}
              <span className="text-slate-100 font-medium">
                {DEMO_NUMBER}
              </span>
            </div>
            <a
              href={DEMO_TEL}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-900 px-4 py-2 text-sm font-medium"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────── PAGE COMPOSITION ─────────────────────────

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Benefits />
      <Industries />
      <DemoCTA />
      <FeaturesSection />
      <Pricing />
      <FAQ />
      <Footer />
      <MobileCTA />
    </div>
  );
}
