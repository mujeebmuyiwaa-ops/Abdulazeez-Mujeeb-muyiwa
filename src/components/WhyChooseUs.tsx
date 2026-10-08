import React from 'react';
import { Shield, Users, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      num: '01',
      title: 'Capped Member Capacity',
      highlight: 'Never wait 20 minutes for a squat rack',
      description: 'Big box fitness clubs deliberately oversell memberships by 400%, creating nightmare crowds between 5:00 PM and 7:30 PM. We cap total active members so our 8 power racks and free weights are consistently open.',
      metric: '65 Max Active',
      metricLabel: 'Peak floor occupancy cap'
    },
    {
      num: '02',
      title: 'No Sneaky Contracts or Traps',
      highlight: 'Simple month-to-month freedom',
      description: 'You will never be trapped in a 12-month contract, and you don\'t need to send a certified letter to cancel. If you ever need to leave, simply notify us 14 days before your billing date. Period.',
      metric: '$0',
      metricLabel: 'Cancellation or surprise annual fees'
    },
    {
      num: '03',
      title: 'Coaches Who Actually Correct Reps',
      highlight: 'Active guidance without the ego',
      description: 'Our certified strength coaches are on the floor observing, offering spot assistance, and fixing spinal alignment. Every new member receives a complimentary 1-on-1 movement assessment upon joining.',
      metric: '100%',
      metricLabel: 'Certified CSCS / NASM staff'
    },
    {
      num: '04',
      title: 'Pristine, Sanitized Facility',
      highlight: 'Medical-grade clean standards',
      description: 'Gyms shouldn\'t smell like mold or have sticky barbells. Our staff conducts thorough wipe-downs and equipment sanitization every single hour. Clean towel service and private showers included.',
      metric: 'Hourly',
      metricLabel: 'Disinfection & maintenance rounds'
    }
  ];

  return (
    <section id="why-us" className="border-b border-zinc-850 bg-zinc-900/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-red-500">
            The IronCore Difference
          </div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            Why Local Lifters and Beginners Choose IronCore Gym.
          </h2>
          <p className="mt-4 text-base text-zinc-300 sm:text-lg">
            We don&apos;t rely on aggressive sales tactics or complicated membership tiers. We focus entirely on delivering the best training environment in the neighborhood.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-7 transition-all hover:border-zinc-700 hover:bg-zinc-900/90"
            >
              <div>
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                  <span className="text-sm font-black text-red-500">{pillar.num}</span>
                  <div className="text-right">
                    <span className="block text-xl font-black text-white tabular-nums">{pillar.metric}</span>
                    <span className="block text-[11px] text-zinc-400">{pillar.metricLabel}</span>
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-red-400">
                  {pillar.highlight}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-zinc-400 pt-4 border-t border-zinc-800/50">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Verified IronCore standard at 412 Market St</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 rounded-xl border border-red-900/40 bg-gradient-to-r from-red-950/40 via-zinc-900 to-zinc-900 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">
              Want to see the gym floor in person before deciding?
            </h4>
            <p className="mt-1 text-sm text-zinc-300">
              Drop by anytime during staffed hours. Take a look at our racks, talk to a coach, and take a free trial workout with zero pressure.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 rounded-md bg-red-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-950 transition-colors hover:bg-red-500"
          >
            Claim Free Trial Session
          </button>
        </div>

      </div>
    </section>
  );
};
