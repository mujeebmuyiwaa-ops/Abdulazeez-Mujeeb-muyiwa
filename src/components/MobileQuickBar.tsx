import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { Phone, CalendarCheck } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block border-t border-zinc-800 bg-zinc-950/95 p-2 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        
        {/* Quick Phone Call Button */}
        <a
          href={`tel:${GYM_INFO.phoneRaw}`}
          className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-xs font-bold text-white transition-colors active:bg-zinc-800"
          aria-label="Call IronCore Gym directly"
        >
          <Phone className="h-3.5 w-3.5 text-red-500" />
          <span className="truncate">Call Gym</span>
        </a>

        {/* Primary Booking Action Button */}
        <button
          onClick={onOpenBooking}
          className="flex h-11 flex-[1.6] items-center justify-center gap-1.5 rounded-lg bg-red-600 px-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-950 transition-colors active:bg-red-700"
        >
          <CalendarCheck className="h-3.5 w-3.5" />
          <span className="truncate">Free Session Pass</span>
        </button>

      </div>
    </div>
  );
};
