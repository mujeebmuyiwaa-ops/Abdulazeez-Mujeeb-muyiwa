import React from 'react';
import { TESTIMONIALS, GYM_INFO } from '../data/gymData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="border-b border-zinc-850 bg-zinc-900/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-red-500">
              Verified Member Reviews
            </div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Real Local Members. Real Measurable Changes.
            </h2>
            <p className="mt-4 text-base text-zinc-300">
              Read what everyday residents in Downtown West and surrounding neighborhoods say about training at IronCore Gym.
            </p>
          </div>

          {/* Google Review Badge Box */}
          <div className="shrink-0 rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white tabular-nums">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              Based on <strong>{GYM_INFO.stats.reviewCount} verified Google reviews</strong>
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-7 transition-all hover:border-zinc-700 hover:bg-zinc-900/90"
            >
              <div>
                {/* Rating Stars & Timeframe */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-400">{t.timeframe}</span>
                </div>

                {/* Measurable Outcome Metric Banner */}
                <div className="mt-4 rounded-md border border-zinc-800 bg-zinc-950/80 px-3 py-2 text-xs font-bold text-red-400">
                  {t.highlightMetric}
                </div>

                {/* Quote */}
                <p className="mt-4 text-sm leading-relaxed text-zinc-300 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="mt-6 pt-5 border-t border-zinc-800/80">
                <div className="font-bold text-white text-sm">{t.name}</div>
                <div className="text-xs text-zinc-400">{t.role}</div>
                <div className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  <span>{t.neighborhood}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Local Community Note */}
        <div className="mt-10 text-center text-xs text-zinc-400">
          <span>All reviews from real paying members living or working within 5 miles of 412 Market St.</span>
        </div>

      </div>
    </section>
  );
};
