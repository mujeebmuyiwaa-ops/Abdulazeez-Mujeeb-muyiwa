import React, { useState } from 'react';
import { PROGRAMS } from '../data/gymData';
import { Check, ArrowRight, Clock, UserCheck } from 'lucide-react';
import { Program } from '../types/gym';

interface ProgramsSectionProps {
  onSelectProgram: (programTitle: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  const [activeProgramId, setActiveProgramId] = useState<string>(PROGRAMS[0].id);

  return (
    <section id="programs" className="border-b border-zinc-850 bg-zinc-900/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-red-500">
              Training Programs &amp; Services
            </div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Designed Around Your Schedule and Goals.
            </h2>
            <p className="mt-4 text-base text-zinc-300 sm:text-lg">
              Whether you want to train solo with premium barbells, join high-energy small group conditioning, or work with a coach 1-on-1, every program at IronCore is built on real physiological progression.
            </p>
          </div>

          <div className="text-xs font-medium text-zinc-400">
            <span>Every program includes a complimentary first session</span>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/70 transition-all hover:border-zinc-700 hover:bg-zinc-900/90"
            >
              <div>
                {/* Image slot with measured scrim and unboxed tags */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
                  <img
                    src={program.image}
                    alt={program.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                  
                  {/* Clean unboxed tags inside bottom scrim */}
                  <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-zinc-300">
                    <span className="text-red-400 font-bold">{program.number}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    {program.tags.map((tag, idx) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {idx < program.tags.length - 1 && <span aria-hidden="true" className="text-zinc-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-bold text-white">
                    {program.title}
                  </h3>
                  
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    {program.fullDesc}
                  </p>

                  {/* Bullet features */}
                  <div className="mt-6 space-y-2.5">
                    {program.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="h-4 w-4 shrink-0 text-red-500 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Operational details */}
                  <div className="mt-6 pt-5 border-t border-zinc-800/80 space-y-2 text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-zinc-500" />
                      <span>{program.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCheck className="h-3.5 w-3.5 text-zinc-500" />
                      <span>{program.coach}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0">
                <button
                  onClick={() => onSelectProgram(program.title)}
                  className="flex w-full items-center justify-between rounded-md border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:border-red-600 hover:bg-red-600 active:scale-98"
                >
                  <span>Try Free Session in {program.title}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
