import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { Check, X, Dumbbell, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="border-b border-zinc-850 bg-zinc-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-red-500">
            About IronCore Gym
          </div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            A Serious, Welcoming Gym Built for Real Everyday Progress.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
            We opened IronCore on Market Street because we were fed up with giant corporate gyms. You know the kind: broken machines ignored for weeks, predatory fine-print cancellation clauses, and weight rooms so packed at 6:00 PM you can't even get a barbell.
          </p>
        </div>

        {/* Story & Facility Grid */}
        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          
          {/* Facility Photo with subtle frame */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-xl">
              <img
                src={GYM_INFO.images.equipment}
                alt="Pristine free weights area at IronCore Gym"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover aspect-[4/3]"
              />
              <div className="p-5 bg-zinc-900/90 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-300">
                <span className="font-semibold text-white">Full Urethane Dumbbell Rack (5 – 130 lbs)</span>
                <span className="text-zinc-500">· Sanitized Hourly</span>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-6 lg:col-span-6">
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-red-950/60 text-red-500 border border-red-800/40">
                  <Dumbbell className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Top-Tier Heavy Gear That Never Breaks Down</h3>
                  <p className="text-xs text-zinc-400">Eleiko Olympic bars, 8 power racks, and heavy-duty steel.</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                If a cable ever wears or a pin loosens, we fix it within 24 hours. We don't tape &quot;Out of Order&quot; signs to equipment and leave them for three months.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-red-950/60 text-red-500 border border-red-800/40">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Real Floor Coaching with Zero Ego</h3>
                  <p className="text-xs text-zinc-400">Supportive staff on the floor from 6 AM to 9 PM daily.</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Whether you&apos;re a college athlete or a 45-year-old accountant learning to squat for the first time, our coaches treat you with genuine respect and active guidance.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-red-950/60 text-red-500 border border-red-800/40">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Strict Floor Capacity (No 6 PM Stampedes)</h3>
                  <p className="text-xs text-zinc-400">We cap active memberships to protect your workout time.</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Big box gyms sell thousands of passes hoping 80% don&apos;t show up. We do the opposite: we intentionally cap memberships so your workouts are efficient, focused, and uninterrupted.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-900 transition-colors hover:bg-white active:scale-98"
              >
                <span>Tour the Gym in Person</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>

        </div>

        {/* Corporate Chain vs IronCore Gym Honest Comparison */}
        <div className="mt-20">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white">How IronCore Compares to Big Corporate Chains</h3>
            <p className="mt-1 text-sm text-zinc-400">Why local fitness enthusiasts make the switch to IronCore.</p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/40">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/80 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  <th className="py-4 px-6">Gym Experience Factor</th>
                  <th className="py-4 px-6 text-zinc-400">Typical Big-Box Chain</th>
                  <th className="py-4 px-6 text-red-400 font-bold bg-red-950/20">IronCore Gym</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Peak Hour Floor Crowding</td>
                  <td className="py-4 px-6 text-zinc-400">Long lines for squat racks &amp; benches</td>
                  <td className="py-4 px-6 font-semibold text-emerald-400 bg-red-950/10">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-emerald-400" />
                      Strict floor cap — gear always accessible
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Contract Terms</td>
                  <td className="py-4 px-6 text-zinc-400">12-month lock-in + certified mail to cancel</td>
                  <td className="py-4 px-6 font-semibold text-emerald-400 bg-red-950/10">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-emerald-400" />
                      100% month-to-month, cancel anytime
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Staff Attention &amp; Coaching</td>
                  <td className="py-4 px-6 text-zinc-400">Staff glued to reception desks or phones</td>
                  <td className="py-4 px-6 font-semibold text-emerald-400 bg-red-950/10">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-emerald-400" />
                      Active coaches on floor to check form
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Cleanliness &amp; Hygiene</td>
                  <td className="py-4 px-6 text-zinc-400">Sweat on benches, empty wipe dispensers</td>
                  <td className="py-4 px-6 font-semibold text-emerald-400 bg-red-950/10">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-emerald-400" />
                      Hourly disinfection rounds, fresh chalk
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Parking</td>
                  <td className="py-4 px-6 text-zinc-400">Paid street meters or chaotic public ramps</td>
                  <td className="py-4 px-6 font-semibold text-emerald-400 bg-red-950/10">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-emerald-400" />
                      Free 2-hr validated rear lot (35 spaces)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
