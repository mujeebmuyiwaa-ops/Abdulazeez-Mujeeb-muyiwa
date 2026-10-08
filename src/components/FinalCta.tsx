import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { Phone, ArrowRight, ShieldCheck, MapPin, Clock } from 'lucide-react';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800 bg-zinc-950 py-20 lg:py-28">
      {/* Background glow */}
      <div 
        className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/15 blur-[130px]" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        
        <div className="inline-flex items-center gap-2 rounded-full border border-red-800/60 bg-red-950/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-400">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>Limited Guest Passes Available This Week</span>
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
          Stop Guessing. Come Experience IronCore Gym for Free.
        </h2>

        <p className="mt-5 mx-auto max-w-2xl text-base text-zinc-300 sm:text-lg">
          Meet a coach, try out the Olympic power racks, run the turf, and see why locals are leaving giant corporate gym chains. No credit card required.
        </p>

        {/* Dual Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row sm:items-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-8 py-4 text-base font-bold uppercase tracking-wider text-white shadow-xl shadow-red-950/70 transition-all hover:bg-red-500 hover:shadow-red-900/40 active:scale-98"
          >
            <span>Claim Your Free Guest Pass</span>
            <ArrowRight className="h-5 w-5" />
          </button>

          <a
            href={`tel:${GYM_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2.5 rounded-md border border-zinc-750 bg-zinc-900 px-7 py-4 text-base font-bold text-white transition-all hover:border-zinc-500 hover:bg-zinc-850 active:scale-98"
          >
            <Phone className="h-4 w-4 text-red-500" />
            <span>Call Us: {GYM_INFO.phone}</span>
          </a>
        </div>

        {/* Footnote reassurance */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Zero sales pressure
          </span>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-zinc-500" />
            412 Market St, Downtown West
          </span>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-zinc-500" />
            2-Hour Free Parking Included
          </span>
        </div>

      </div>
    </section>
  );
};
