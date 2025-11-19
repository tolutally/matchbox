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
  Sparkles,
  SlidersHorizontal,
  Headphones,
  PhoneForwarded,
  Linkedin,
  Send,
  Activity,
  MoonStar,
  MapPin,
  UserCheck,
  PiggyBank,
  Building2,
} from "lucide-react";

const BRAND_NAME = "Matchbox";
const COMPANY_NAME = "Digital Matchbox Technology LLC";
const DEMO_NUMBER = "902-707-2325";
const DEMO_TEL = "tel:+19027072325";
const SUPPORT_EMAIL = "hello@getmatchbox.org";

const SERVICE_TYPES = [
  "Plumbing",
  "HVAC",
  "Electrical",
  "Appliance Repair",
  "Pest Control",
  "Garage Doors",
  "Handyman / Other",
  "Others",
];

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
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-900 px-4 py-2.5 text-sm font-medium shadow-sm hover:opacity-95 transition"
            >
              <Zap className="h-4 w-4" />
              <span>Talk to an expert</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// ----------------------- HERO -----------------------

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-16 lg:px-8 lg:pt-14">
        {/* Text Content - Top */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 ring-1 ring-inset ring-slate-700 px-3 py-1 text-xs text-slate-300">
            <Shield className="h-3.5 w-3.5" />
            Trusted by busy home service pros
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
            Never Miss Another Customer Call
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {BRAND_NAME} is your 24/7 AI receptionist for plumbers, HVAC techs, electricians, and other home service pros. It answers instantly, books jobs, sends SMS, and keeps your calendar full.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="text-slate-400 text-xs uppercase tracking-widest">
              Hear it instantly by dialing {DEMO_NUMBER}   
            </p>
            <a
              href={DEMO_TEL}
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60 hover:scale-105 transition-all duration-300"
            >
              <span className="text-2xl">📞</span>
              Call Demo Line
              <ArrowRightCircle className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <span className="text-slate-400 text-medium tracking-tight font-medium">
             No sign-up or email needed — just call.
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
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
        </div>

        {/* Visual Panel - Bottom */}
        <div className="mt-12 max-w-5xl mx-auto">
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
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
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
    </section>
  );
}

// ───────────────────────── PAIN POINTS ─────────────────────────

function PainPoints() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Image Column - Left (40%) */}
          <div className="w-full lg:w-2/5 flex-shrink-0">
            <div className="relative w-full max-h-[600px] overflow-hidden rounded-2xl">
              <img
                src="/images/painpoint-image-final.png"
                alt="Frustrated plumber looking at phone"
                className="w-full h-full object-cover object-center"
              />
              {/* Gradient fade at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Content Column - Right (60%) */}
          <div className="w-full lg:w-3/5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
              Your Customers Are Calling. Are You Answering?
            </h2>
            <p className="mt-3 text-base text-slate-300">
              What real reviews say hurts most:
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── HOW IT WORKS ─────────────────────────

function HowItWorks() {
  return (
    <section id="how" className="z-10 sm:p-8 w-full max-w-7xl border rounded-3xl mt-24 mx-auto p-6 relative shadow-2xl bg-slate-950/40 backdrop-blur-xl border-slate-800/50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 px-1">
        <h2 className="text-[36px] sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] tracking-tighter text-slate-50">
          How it works.
        </h2>
        <span aria-hidden="true" role="separator" aria-orientation="vertical" className="hidden sm:block w-px h-10 bg-slate-800"></span>
        <p className="sm:text-base text-sm mt-1 tracking-tight text-slate-300">
          Simple setup. Immediate results.
        </p>
      </div>

      <div className="h-px mt-4 bg-slate-800"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-6 sm:mt-8 items-stretch">
        {/* STEP 1 */}
        <div className="sm:p-6 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 border rounded-[24px] p-5 relative flex flex-col bg-slate-950/30 backdrop-blur-md border-slate-700/50 hover:border-indigo-500/30 animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
          <span className="absolute -top-4 left-5 inline-flex items-center px-4 py-1.5 rounded-full border text-xs sm:text-sm tracking-tight border-slate-700/50 bg-slate-950/60 backdrop-blur-sm text-slate-200">
            STEP 1
          </span>
          {/* Visual */}
          <div className="relative h-40 sm:h-44 rounded-2xl border overflow-hidden bg-gradient-to-br from-slate-900/50 via-slate-950/50 to-slate-900/50 backdrop-blur-sm border-slate-700/30 flex items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-indigo-500/20 ring-1 ring-indigo-400/40 animate-pulse">
                <Phone className="h-5 w-5 text-indigo-300 animate-[float_3s_ease-in-out_infinite]" />
              </div>
              <div className="space-y-2">
                <div className="h-2.5 w-28 rounded bg-slate-700"></div>
                <div className="h-2 w-20 rounded bg-slate-800"></div>
                <div className="h-2 w-16 rounded bg-slate-800"></div>
              </div>
            </div>
          </div>
          {/* Copy */}
          <h3 className="mt-5 text-xl sm:text-2xl tracking-tighter text-slate-100">
            Customer calls your number
          </h3>
          <p className="mt-2 text-sm sm:text-base max-w-[52ch] tracking-tight text-slate-300">
            Keep your existing number or forward it to Matchbox.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="sm:p-6 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 border rounded-[24px] p-5 relative flex flex-col bg-slate-950/30 backdrop-blur-md border-slate-700/50 hover:border-indigo-500/30 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
          <span className="absolute -top-4 left-5 inline-flex items-center px-4 py-1.5 rounded-full border text-xs sm:text-sm tracking-tight border-slate-700/50 bg-slate-950/60 backdrop-blur-sm text-slate-200">
            STEP 2
          </span>
          {/* Visual */}
          <div className="relative h-40 sm:h-44 rounded-2xl border overflow-hidden bg-gradient-to-br from-indigo-600/15 via-slate-950/50 to-cyan-500/10 backdrop-blur-sm border-slate-700/30 p-4">
            <div className="border rounded-xl p-4 w-full h-full bg-slate-950/40 backdrop-blur-sm border-slate-700/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-7 w-7 rounded-full flex items-center justify-center bg-indigo-500/30 animate-pulse">
                  <Bot className="h-4 w-4 text-indigo-200 animate-[float_3s_ease-in-out_0.5s_infinite]" />
                </div>
                <div className="h-2 w-24 rounded bg-slate-200/80"></div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-3/4 rounded bg-slate-800"></div>
                <div className="h-2 w-2/3 rounded bg-slate-800"></div>
                <div className="h-2 w-1/2 rounded bg-slate-800"></div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-2.5 w-16 rounded-full bg-emerald-400/80"></div>
                <div className="h-2.5 w-10 rounded-full bg-slate-700"></div>
              </div>
            </div>
          </div>
          {/* Copy */}
          <h3 className="mt-5 text-xl sm:text-2xl tracking-tighter text-slate-100">
            AI answers instantly
          </h3>
          <p className="mt-2 text-sm sm:text-base max-w-[52ch] tracking-tight text-slate-300">
            Friendly, on-brand, and always calm—no hold music.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="sm:p-6 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 border rounded-[24px] p-5 relative flex flex-col bg-slate-950/30 backdrop-blur-md border-slate-700/50 hover:border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
          <span className="absolute -top-4 left-5 inline-flex items-center px-4 py-1.5 rounded-full border text-xs sm:text-sm tracking-tight border-slate-700/50 bg-slate-950/60 backdrop-blur-sm text-slate-200">
            STEP 3
          </span>
          {/* Visual */}
          <div className="relative h-40 sm:h-44 rounded-2xl border overflow-hidden bg-slate-900/50 backdrop-blur-sm border-slate-700/30 p-4">
            <div className="grid grid-cols-2 gap-3 h-full">
              <div className="border rounded-lg p-3 bg-slate-950/40 backdrop-blur-sm border-slate-700/30 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-4 w-4 text-cyan-300 animate-[float_3s_ease-in-out_1s_infinite]" />
                  <div className="h-1.5 w-14 rounded bg-cyan-400/80"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-1 w-full rounded bg-slate-800"></div>
                  <div className="h-1 w-4/5 rounded bg-slate-800"></div>
                </div>
              </div>
              <div className="border rounded-lg p-3 bg-slate-950/40 backdrop-blur-sm border-slate-700/30 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Home className="h-4 w-4 text-indigo-300 animate-[float_3s_ease-in-out_1.5s_infinite]" />
                  <div className="h-1.5 w-12 rounded bg-indigo-400/80"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-1 w-full rounded bg-slate-800"></div>
                  <div className="h-1 w-3/4 rounded bg-slate-800"></div>
                </div>
              </div>
              <div className="border rounded-lg p-3 bg-slate-950/40 backdrop-blur-sm border-slate-700/30 hover:border-emerald-500/30 transition-colors col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-emerald-300 animate-[float_3s_ease-in-out_2s_infinite]" />
                  <div className="h-1.5 w-20 rounded bg-emerald-400/80"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-1 w-full rounded bg-slate-800"></div>
                  <div className="h-1 w-2/3 rounded bg-slate-800"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Copy */}
          <h3 className="mt-5 text-xl sm:text-2xl tracking-tighter text-slate-100">
            Collects details + books the job
          </h3>
          <p className="mt-2 text-sm sm:text-base max-w-[52ch] tracking-tight text-slate-300">
            Name, address, issue, and time slot—all logged and ready for dispatch.
          </p>
        </div>

        {/* STEP 4 */}
        <div className="sm:p-6 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 border rounded-[24px] p-5 relative flex flex-col bg-slate-950/30 backdrop-blur-md border-slate-700/50 hover:border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
          <span className="absolute -top-4 left-5 inline-flex items-center px-4 py-1.5 rounded-full border text-xs sm:text-sm tracking-tight border-slate-700/50 bg-slate-950/60 backdrop-blur-sm text-slate-200">
            STEP 4
          </span>
          {/* Visual */}
          <div className="relative h-40 sm:h-44 rounded-2xl border overflow-hidden bg-gradient-to-br from-emerald-500/10 via-slate-950/50 to-indigo-500/10 backdrop-blur-sm border-slate-700/30 p-4">
            <div className="border rounded-xl p-4 w-full h-full bg-slate-950/40 backdrop-blur-sm border-slate-700/30 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl flex items-center justify-center bg-emerald-500/20 animate-pulse">
                  <MessageSquare className="h-4 w-4 text-emerald-300 animate-[float_3s_ease-in-out_2.5s_infinite]" />
                </div>
                <div className="space-y-1">
                  <div className="h-2 w-24 rounded bg-slate-200/80"></div>
                  <div className="h-2 w-16 rounded bg-slate-700"></div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-2 w-full rounded bg-slate-800"></div>
                <div className="h-2 w-5/6 rounded bg-slate-800"></div>
                <div className="h-2 w-2/3 rounded bg-slate-800"></div>
              </div>
            </div>
          </div>
          {/* Copy */}
          <h3 className="mt-5 text-xl sm:text-2xl tracking-tighter text-slate-100">
            Sends SMS confirmation
          </h3>
          <p className="mt-2 text-sm sm:text-base max-w-[52ch] tracking-tight text-slate-300">
            Customers get instant confirmation and reminders so they actually show up.
          </p>
        </div>
      </div>

      {/* Get Started CTA */}
      <div className="mt-12 flex justify-center animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
        <a
          href={DEMO_TEL}
          className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
        >
          <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
          <span>Get Started - Call {DEMO_NUMBER}</span>
        </a>
      </div>
    </section>
  );
}

// ───────────────────────── BENEFITS ─────────────────────────

function Benefits() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase">
            How we&rsquo;re different
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
            Why growing home service businesses<br className="hidden sm:block" />
            choose {BRAND_NAME}.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            We don&rsquo;t just answer calls. We turn every ring into a real job opportunity.
          </p>
        </div>

        {/* Top feature cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 px-7 py-8">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-50">
              Best-in-Class AI Call Handling
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {BRAND_NAME} picks up in under a second, handles new and repeat callers,
              and sounds like a calm, well-trained receptionist every time—24/7.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 px-7 py-8">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300">
              <SlidersHorizontal className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-50">
              Trade-Specific Call Playbooks
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Plumbing, HVAC, electrical, pest control—each trade gets its own
              questions, scripts, and emergency rules so calls are handled the way
              your techs actually work.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 px-7 py-8">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300">
              <Headphones className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-50">
              Done-For-You Setup & Support
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              We help configure forwarding, scripts, and SMS templates, then keep
              tuning them based on real calls so you just see more booked jobs.
            </p>
          </div>
        </div>

        {/* Lower benefit strip - Auto-scrolling carousel */}
        <div className="mt-10 overflow-hidden">
          <div 
            className="flex gap-4 [animation:scrollLeft_30s_linear_infinite] hover:[animation-play-state:paused]"
            onClick={(e) => {
              const target = e.currentTarget;
              target.style.animationPlayState = target.style.animationPlayState === 'paused' ? 'running' : 'paused';
            }}
          >
            {/* First set of cards */}
            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <Activity className="h-4 w-4" />
              </span>
              <span>Seasonal spikes don't overwhelm your phones.</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <MoonStar className="h-4 w-4" />
              </span>
              <span>True 24/7 emergency coverage</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <MapPin className="h-4 w-4" />
              </span>
              <span>Local intros and questions tailored to your services.</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <ClipboardList className="h-4 w-4" />
              </span>
              <span>Unified Call & Performance Dashboard.</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <UserCheck className="h-4 w-4" />
              </span>
              <span>Strong Lead Capture & Qualification</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <Plug className="h-4 w-4" />
              </span>
              <span>Plug-and-Play Software Integrations</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <PiggyBank className="h-4 w-4" />
              </span>
              <span>Lower Costs Than a Full-Time Receptionist</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <Building2 className="h-4 w-4" />
              </span>
              <span>Easy Oversight Across Teams & Locations</span>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <Activity className="h-4 w-4" />
              </span>
              <span>Seasonal spikes don't overwhelm your phones.</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <MoonStar className="h-4 w-4" />
              </span>
              <span>True 24/7 emergency coverage</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <MapPin className="h-4 w-4" />
              </span>
              <span>Local intros and questions tailored to your services.</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <ClipboardList className="h-4 w-4" />
              </span>
              <span>Unified Call & Performance Dashboard.</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <UserCheck className="h-4 w-4" />
              </span>
              <span>Strong Lead Capture & Qualification</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <Plug className="h-4 w-4" />
              </span>
              <span>Plug-and-Play Software Integrations</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <PiggyBank className="h-4 w-4" />
              </span>
              <span>Lower Costs Than a Full-Time Receptionist</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-nowrap flex-shrink-0 min-w-[280px] cursor-pointer transition-transform hover:scale-105">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <Building2 className="h-4 w-4" />
              </span>
              <span>Easy Oversight Across Teams & Locations</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
        
          <div className="group">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative text-7xl sm:text-9xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                0
              </div>
            </div>
            <p className="mt-3 text-base text-slate-600">missed calls</p>
          </div>

          <div className="group">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative text-7xl sm:text-9xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                40%+
              </div>
            </div>
            <p className="mt-3 text-base text-slate-600">more booked jobs</p>
          </div>

          <div className="group">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative text-7xl sm:text-9xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                100%
              </div>
            </div>
            <p className="mt-3 text-base text-slate-600">coverage, 24/7</p>
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
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 overflow-hidden">
            <div className="relative h-48 bg-slate-800/40 overflow-hidden">
              <img 
                src="/images/plumbing.png" 
                alt="Plumbing services"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3">
                <Wrench className="h-5 w-5 text-indigo-300" />
                <div className="text-sm font-medium text-slate-100">Plumbing</div>
              </div>
              <p className="mt-2 text-sm text-slate-400">
                Burst pipe at 10pm? We answer, triage, and book the emergency
                slot.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 overflow-hidden">
            <div className="relative h-48 bg-slate-800/40 overflow-hidden">
              <img 
                src="/images/hvac.png" 
                alt="HVAC services"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3">
                <Thermometer className="h-5 w-5 text-cyan-300" />
                <div className="text-sm font-medium text-slate-100">HVAC</div>
              </div>
              <p className="mt-2 text-sm text-slate-400">
                No cool air? We verify unit type, book tune-ups, and route
                emergencies.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 overflow-hidden">
            <div className="relative h-48 bg-slate-800/40 overflow-hidden">
              <img 
                src="/images/electrical.jpg" 
                alt="Electrical services"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
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
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 overflow-hidden">
            <div className="relative h-48 bg-slate-800/40 overflow-hidden">
              <img 
                src="/images/appliance-repair.png" 
                alt="Appliance repair services"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
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
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 overflow-hidden">
            <div className="relative h-48 bg-slate-800/40 overflow-hidden">
              <img 
                src="/images/pest-control.png" 
                alt="Pest control services"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
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
          </div>
          <div className="rounded-xl bg-slate-900/60 ring-1 ring-inset ring-slate-800 overflow-hidden">
            <div className="relative h-48 bg-slate-800/40 overflow-hidden">
              <img 
                src="/images/garage-doors.jpg" 
                alt="Garage door services"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
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
                  Talk to an expert
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

// ----------------------- TESTIMONIALS -----------------------

function Testimonials() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl mt-6 relative">
          {/* Content */}
          <div className="flex min-h-[68vh] flex-col sm:py-28 md:min-h-[76vh] md:px-8 md:pt-16 md:pb-8 text-left mx-auto py-16 px-8 relative justify-center">
            {/* Section Header */}
            <div className="text-left max-w-3xl mb-16">
              <div className="inline-flex text-[13px] font-medium text-indigo-300 rounded-full bg-slate-900/80 ring-1 ring-indigo-500/40 mb-6 px-3.5 py-1.5 gap-2 items-center">
                <span className="uppercase text-[11px] text-indigo-100/90 tracking-widest">
                  CUSTOMER STORIES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white mb-4">
                What home service owners say about Matchbox
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                From missed calls and chaos to calm, booked calendars. Matchbox quietly runs your front desk while you stay on the tools.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="w-full">
              {/* Top feature testimonial */}
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                {/* Photo panel */}
                <div className="overflow-hidden h-96 sm:h-[26rem] md:h-[32rem] lg:h-[34rem] bg-slate-900/70 rounded-xl ring-1 ring-slate-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-slate-950/60 pointer-events-none z-10"></div>
                  <img
                    src="/images/tom-sullivanz.png"
                    alt="Home service owner on site"
                    className="w-full h-full object-cover opacity-90 blur-[0.5px]"
                    style={{
                      maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 50%, rgba(0,0,0,0.85) 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 50%, rgba(0,0,0,0.85) 100%)'
                    }}
                  />
                </div>

                {/* Quote panel */}
                <div className="flex flex-col sm:p-10 bg-slate-950/90 text-left rounded-xl ring-1 ring-slate-800 p-8 relative justify-center">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-300">
                      <path d="M3 21c3 0 7-2 7-7V4H3v10"></path>
                      <path d="M14 21c3 0 7-2 7-7V4h-7v10"></path>
                    </svg>
                  </div>
                  <p className="text-white tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-snug">
                    &ldquo;Matchbox handles every call, books the job, and texts the customer. I’m on-site all day and my calendar just fills up.&rdquo;
                  </p>
                  <div className="mt-8">
                    <div className="text-white text-base font-medium">
                      Tom Sullivan
                    </div>
                    <div className="text-slate-400 text-sm mt-1">
                      Owner, Sullivan Plumbing &amp; Heating
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid of small testimonials */}
              <div className="grid lg:grid-cols-3 mt-6 gap-6 relative" style={{ minHeight: '240px' }}>
                <style jsx>{`
                  @keyframes smoothSlideInUp {
                    0% {
                      opacity: 0;
                      transform: translateY(40px);
                    }
                    20% {
                      opacity: 1;
                      transform: translateY(0);
                    }
                    80% {
                      opacity: 1;
                      transform: translateY(0);
                    }
                    100% {
                      opacity: 0;
                      transform: translateY(-40px);
                    }
                  }
                `}</style>

                {/* Card 1 */}
                <div className="flex flex-col bg-slate-900/70 text-left rounded-xl ring-1 ring-slate-800 p-6 justify-between overflow-hidden relative">
                  <div style={{ animation: 'smoothSlideInUp 6s ease-in-out 0s infinite' }}>
                    <p className="text-slate-200 text-base leading-relaxed">
                      &ldquo;We used to miss 5–10 calls a day. With Matchbox, every call gets answered and we can see exactly who called and what they needed.&rdquo;
                    </p>
                    <div className="flex items-center gap-3 mt-6">
                      <img
                        src="/images/mike-chui.png"
                        alt="Michael Chui avatar"
                        className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-700"
                      />
                      <div>
                        <div className="text-white text-sm font-medium">
                          Michael Chui
                        </div>
                        <div className="text-slate-400 text-xs">
                          Owner, Chenne Electrical Services
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col bg-slate-900/70 text-left rounded-xl ring-1 ring-slate-800 p-6 justify-between overflow-hidden relative">
                  <div style={{ animation: 'smoothSlideInUp 6s ease-in-out 1s infinite' }}>
                    <p className="leading-relaxed text-base text-slate-200">
                      &ldquo;Our phones used to stress everyone out. Now Matchbox screens, books, and sends SMS. My team just shows up knowing where to go.&rdquo;
                    </p>
                    <div className="flex gap-3 mt-6 items-center">
                      <img
                        src="/images/amy-tulika.png"
                        alt="Amy Tulika avatar"
                        className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-700"
                      />
                      <div>
                        <div className="text-white text-sm font-medium">
                          Amy Tulika 
                        </div>
                        <div className="text-slate-400 text-xs">
                          Operations Manager, BrightAir HVAC
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col bg-slate-900/70 text-left rounded-xl ring-1 ring-slate-800 p-6 justify-between overflow-hidden relative">
                  <div style={{ animation: 'smoothSlideInUp 6s ease-in-out 2s infinite' }}>
                    <p className="text-slate-200 text-base leading-relaxed">
                      &ldquo;Weekends used to be a black hole for leads. With Matchbox, we’re booking weekend calls while we sleep—and customers love the instant reply.&rdquo;
                    </p>
                    <div className="flex items-center gap-3 mt-6">
                      <img
                        src="/images/david-mcpherson.png"
                        alt="David McPherson avatar"
                        className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-700"
                      />
                      <div>
                        <div className="text-white text-sm font-medium">
                          David McPherson
                        </div>
                        <div className="text-slate-400 text-xs">
                          Operator, Macpherson Garage Doors
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------- CONTACT -----------------------

function ContactSection() {
  const [selectedService, setSelectedService] = useState<string>("Plumbing");

  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Copy + highlights - First on mobile, second on desktop */}
              <div className="flex flex-col justify-center h-full order-2 lg:order-1">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold text-slate-50 tracking-tight">
                  Let&apos;s talk.
                </h2>
                <p className="text-base sm:text-lg max-w-2xl text-slate-300 mt-4">
                  Tell us about your plumbing, HVAC, electrical, or other home
                  service business. We&apos;ll help you see how Matchbox can
                  stop missed calls and keep your calendar full.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-slate-800/60 ring-1 ring-slate-700 flex items-center justify-center text-indigo-300">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-slate-50 font-semibold text-sm">
                        Quick response
                      </p>
                      <p className="text-slate-400 text-xs">
                        Most inquiries get a reply or call back in under 24
                        hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-slate-800/60 ring-1 ring-slate-700 flex items-center justify-center text-indigo-300">
                      <ArrowRightCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-slate-50 font-semibold text-sm">
                        Clear next steps
                      </p>
                      <p className="text-slate-400 text-xs">
                        We&apos;ll follow up with a simple plan to get your
                        phones onto Matchbox.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct contact card */}
                <div className="mt-8">
                  <div className="inline-flex gap-3 ring-1 ring-slate-800 bg-slate-950/90 rounded-2xl px-3 py-3 shadow-lg items-center">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-slate-900 text-sm font-semibold">
                      MB
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-indigo-400 leading-none uppercase tracking-wider">
                        AI Specialist
                      </p>
                      <p className="text-slate-50 font-semibold tracking-tight truncate">
                        Rochelle Smith
                      </p>
                    </div>
                    <a
                      href="mailto:hello@getmatchbox.com"
                      className="ml-1 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-900 px-3 py-2 text-xs font-semibold hover:opacity-95 transition-opacity"
                    >
                      Email us
                      <MessageCircle className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Form card - Second on mobile, first on desktop */}
              <div className="order-1 lg:order-2">
                <div className="rounded-2xl bg-slate-900/60 ring-1 ring-slate-800 p-6 shadow-lg h-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-indigo-400 uppercase tracking-wider">
                        Matchbox Support
                      </p>
                      <h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                        Book a quick call
                      </h3>
                    </div>
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-slate-900" />
                    </div>
                  </div>

                  <form action="#" method="POST" className="mt-6 space-y-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="ct-name"
                        className="block text-xs text-slate-300"
                      >
                        Your name
                        <span className="text-slate-500"> *</span>
                      </label>
                      <input
                        id="ct-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className="mt-1 w-full px-3 py-2.5 text-sm rounded-xl ring-1 ring-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none bg-slate-900/60 text-slate-100 placeholder:text-slate-500"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="ct-email"
                        className="block text-xs text-slate-300"
                      >
                        Email
                        <span className="text-slate-500"> *</span>
                      </label>
                      <div className="relative mt-1">
                        <Mail className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="ct-email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none bg-slate-900/60 text-slate-100 placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="ct-phone"
                        className="block text-xs text-slate-300"
                      >
                        Phone number
                        <span className="text-slate-500"> *</span>
                      </label>
                      <div className="relative mt-1">
                        <Phone className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="ct-phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="(902) 555-1234"
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none bg-slate-900/60 text-slate-100 placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    {/* Service type tiles */}
                    <div>
                      <span className="block text-xs text-slate-300 mb-1">
                        What type of home service do you run?
                        <span className="text-slate-500"> *</span>
                      </span>
                      <input
                        type="hidden"
                        name="serviceType"
                        value={selectedService}
                      />
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {SERVICE_TYPES.map((service) => {
                          const isActive = selectedService === service;
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => setSelectedService(service)}
                              className={`rounded-xl border px-3 py-2 text-xs sm:text-[13px] text-left transition-colors ${
                                isActive
                                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-900 border-transparent font-medium"
                                  : "bg-slate-900/60 text-slate-300 border-slate-700 hover:bg-slate-800"
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-900 px-4 py-3 text-sm font-semibold hover:opacity-95 transition-opacity"
                    >
                      Book a free call
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 ml-2"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                    <p className="text-[11px] text-slate-500">
                      By submitting, you agree to our Terms and Privacy Policy.
                    </p>
                  </form>
                </div>
              </div>

              {/* end right column */}
            </div>
        </div>
    </section>
  );
}

// ----------------------- FAQ -----------------------

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
      {/* <FeaturesSection /> */}
      {/* <Pricing /> */}
      <Testimonials />
      <ContactSection />
      <FAQ />
      <Footer />
      <MobileCTA />
    </div>
  );
}
