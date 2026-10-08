import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { Phone, Calendar, ArrowRight, CheckCircle2, Shield, Users, Clock } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [quickPhone, setQuickPhone] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone.trim()) return;
    setQuickSubmitted(true);
    setTimeout(() => {
      onOpenBooking();
      setQuickSubmitted(false);
      setQuickPhone('');
    }, 900);
  };

  return (
    <section className="relative overflow-hidden border-b border-zinc-850 bg-zinc-950 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background radial gradient glow for subtle depth */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Core Value Proposition & Conversion Form */}
          <div className="lg:col-span-7">
            
            {/* Clean unboxed location kicker */}
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500">
              <span>Downtown West</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>412 Market Street</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Locally Owned & Operated</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08] text-balance">
              The Local Strength &amp; Fitness Gym Built for Real Results.
            </h1>

            {/* Subheadline mentioning location & concrete benefits */}
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
              Clean Olympic barbell racks, attentive certified coaches, zero overcrowding, and honest month-to-month memberships. Right here on Market Street.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-red-950/60 transition-all hover:bg-red-500 hover:shadow-red-900/40 active:scale-98"
              >
                <span>Book a Free Session</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-md border border-zinc-700 bg-zinc-900 px-6 py-3.5 text-base font-bold text-white transition-all hover:border-zinc-500 hover:bg-zinc-850 active:scale-98"
              >
                <Phone className="h-4 w-4 text-red-500" />
                <span>Call Now: {GYM_INFO.phone}</span>
              </a>
            </div>

            {/* Quick 10-second pass claim field for ultra-low friction */}
            <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/80 p-3 sm:max-w-lg">
              <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="tel"
                  placeholder="Enter phone for instant VIP guest pass..."
                  value={quickPhone}
                  onChange={(e) => setQuickPhone(e.target.value)}
                  className="w-full rounded bg-zinc-950 px-3.5 py-2 text-sm text-white placeholder-zinc-500 border border-zinc-800 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  required
                />
                <button
                  type="submit"
                  disabled={quickSubmitted}
                  className="shrink-0 rounded bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs uppercase px-4 py-2 tracking-wide transition-colors"
                >
                  {quickSubmitted ? 'Generating...' : 'Get Pass'}
                </button>
              </form>
              <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-400 px-1">
                <span>Free 1st session passes remaining today: <strong className="text-zinc-200">6 spots</strong></span>
                <span className="text-emerald-400">No credit card needed</span>
              </div>
            </div>

            {/* Trust proof points (unboxed text metadata) */}
            <div className="mt-7 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-zinc-400">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>No high-pressure sales</span>
              </div>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <div className="flex items-center gap-1.5 text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Free 2-hr rear parking</span>
              </div>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <div className="flex items-center gap-1.5 text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Beginner &amp; advanced friendly</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Carrier */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
              <div className="aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
                <img
                  src={GYM_INFO.images.hero}
                  alt="IronCore Gym main training floor with squat racks and sled turf"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-102"
                />
              </div>

              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

              {/* Overlay card with live floor reassurance */}
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-zinc-800/90 bg-zinc-950/85 p-3.5 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400/20 animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white">Live Floor Status</span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">
                      Uncrowded &amp; ready · 8 squat racks open
                    </p>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="rounded bg-red-600/90 px-3 py-1.5 text-xs font-bold text-white hover:bg-red-500 transition-colors"
                  >
                    Visit Today
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
