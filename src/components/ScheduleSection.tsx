import React, { useState } from 'react';
import { SCHEDULE_DATA } from '../data/gymData';
import { Clock, User, Users, ChevronRight, Calendar } from 'lucide-react';
import { ScheduleItem } from '../types/gym';

interface ScheduleSectionProps {
  onBookClass: (classTitle: string, day: string, time: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onBookClass }) => {
  const days: Array<'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'> = [
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
  ];
  
  const dayLabels: Record<string, string> = {
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday'
  };

  const [selectedDay, setSelectedDay] = useState<'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'>('Mon');

  const filteredSessions = SCHEDULE_DATA.filter((item) => item.day === selectedDay);

  return (
    <section id="schedule" className="border-b border-zinc-850 bg-zinc-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-red-500">
              Coached Sessions &amp; Turf Schedule
            </div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Weekly Small Group &amp; Clinic Schedule.
            </h2>
            <p className="mt-4 text-base text-zinc-300">
              Every class is capped at 8 members to guarantee individual coach correction. Open gym lifting is available all day during operational hours.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Calendar className="h-4 w-4 text-red-500" />
            <span>Updated for the current week · Walk-in guest spots open</span>
          </div>
        </div>

        {/* Day Selector Segmented Control (Interactive Filter Buttons) */}
        <div className="mt-10 flex overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900/80 p-1.5 scrollbar-none">
          {days.map((day) => {
            const isActive = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex-1 min-w-[72px] py-2.5 px-3 text-center text-xs font-bold uppercase tracking-wider rounded-md transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                <span className="block sm:hidden">{day}</span>
                <span className="hidden sm:block">{dayLabels[day]}</span>
              </button>
            );
          })}
        </div>

        {/* Schedule Cards for Selected Day */}
        <div className="mt-6 space-y-3">
          {filteredSessions.length > 0 ? (
            filteredSessions.map((session) => (
              <div
                key={session.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-900/90"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  {/* Time */}
                  <div className="flex items-center gap-2 text-sm font-bold text-red-400 sm:w-44 tabular-nums">
                    <Clock className="h-4 w-4 shrink-0 text-red-500" />
                    <span>{session.time}</span>
                  </div>

                  {/* Title & Level */}
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {session.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-xs text-zinc-400">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3 text-zinc-500" />
                        {session.coach}
                      </span>
                      <span aria-hidden="true" className="text-zinc-700">·</span>
                      <span>{session.level}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Remaining Spots & Booking CTA */}
                <div className="flex items-center justify-between sm:justify-end gap-4 pt-2 sm:pt-0 border-t border-zinc-800/60 sm:border-0">
                  <div className="text-xs">
                    {session.spotsLeft > 0 ? (
                      <span className="text-zinc-300 font-medium">
                        <strong className="text-emerald-400 tabular-nums">{session.spotsLeft} guest spots</strong> left
                      </span>
                    ) : (
                      <span className="text-amber-400 font-medium">Waitlist Only</span>
                    )}
                  </div>

                  <button
                    onClick={() => onBookClass(session.title, dayLabels[session.day], session.time)}
                    className="inline-flex items-center gap-1 rounded bg-zinc-800 hover:bg-red-600 px-3.5 py-2 text-xs font-bold text-white uppercase tracking-wider transition-colors active:scale-98"
                  >
                    <span>Reserve Free Pass</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-12 text-center text-zinc-400">
              <p>Open gym strength floor is open all day on {dayLabels[selectedDay]}. Drop in anytime during staffed hours.</p>
            </div>
          )}
        </div>

        {/* Schedule Subnote */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400 px-2">
          <span>Looking to lift solo? Open gym floor has 8 power racks and is accessible anytime.</span>
          <span className="text-zinc-300 font-medium">All sessions take place at 412 Market St</span>
        </div>

      </div>
    </section>
  );
};
