import React, { useMemo } from 'react';
import { GYM_INFO } from '../data/gymData';
import { Clock, Phone, MapPin, Star, ShieldCheck } from 'lucide-react';

export const StatusBanner: React.FC = () => {
  // Compute open/closed status dynamically
  const statusInfo = useMemo(() => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeVal = hours + minutes / 60;

    const isWeekend = day === 0 || day === 6;
    const openTime = isWeekend ? 7 : 5;
    const closeTime = isWeekend ? 20 : 23;

    const isOpen = currentTimeVal >= openTime && currentTimeVal < closeTime;

    return {
      isOpen,
      todayHours: isWeekend ? GYM_INFO.hours.weekends : GYM_INFO.hours.weekdays,
      closingTimeStr: isWeekend ? '8:00 PM' : '11:00 PM',
      openingTimeStr: isWeekend ? '7:00 AM' : '5:00 AM',
    };
  }, []);

  return (
    <div className="w-full border-b border-zinc-800 bg-zinc-900/60 text-xs text-zinc-300">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-2 py-2 px-4 sm:px-6 lg:px-8">
        
        {/* Left: Open/Closed Status + Staff Hours */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-medium">
            <span
              className={`h-2 w-2 rounded-full ${
                statusInfo.isOpen
                  ? 'bg-emerald-400 ring-2 ring-emerald-400/30'
                  : 'bg-amber-400'
              }`}
            />
            <span className={statusInfo.isOpen ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}>
              {statusInfo.isOpen ? 'Open Now' : 'Closed Now (Keycard 24/7)'}
            </span>
            <span className="text-zinc-500">·</span>
            <span className="text-zinc-400">
              Staffed until {statusInfo.closingTimeStr}
            </span>
          </div>

          <span className="hidden text-zinc-600 sm:inline">|</span>

          <span className="hidden items-center gap-1 text-zinc-400 sm:flex">
            <ShieldCheck className="h-3.5 w-3.5 text-zinc-400" />
            <span>24/7 keycard access for members</span>
          </span>
        </div>

        {/* Right: Reviews + Direct Contact link */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-white">4.9/5</span>
            <span className="text-zinc-400">({GYM_INFO.stats.reviewCount} local reviews)</span>
          </div>

          <span className="text-zinc-700">|</span>

          <a
            href={`tel:${GYM_INFO.phoneRaw}`}
            className="flex items-center gap-1 font-semibold text-zinc-200 transition-colors hover:text-red-400"
          >
            <Phone className="h-3 w-3 text-red-500" />
            <span className="tabular-nums">{GYM_INFO.phone}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
