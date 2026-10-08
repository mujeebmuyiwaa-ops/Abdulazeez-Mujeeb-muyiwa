import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          
          {/* Brand & Overview */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-red-600 text-xs font-black text-white">
                IC
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                {GYM_INFO.name}
              </span>
            </div>
            
            <p className="text-xs leading-relaxed text-zinc-400 max-w-sm">
              Downtown West&apos;s independent fitness and strength facility. Built for everyday lifters, professionals, and beginners seeking real coaching and clean equipment without corporate games.
            </p>

            <div className="pt-2 text-xs text-zinc-300 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-red-500 shrink-0" />
                <span>{GYM_INFO.address}, {GYM_INFO.neighborhood}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-red-500 shrink-0" />
                <a href={`tel:${GYM_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {GYM_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-red-500 shrink-0" />
                <a href={`mailto:${GYM_INFO.email}`} className="hover:text-white transition-colors">
                  {GYM_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Facility</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Training Programs</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Class Schedule</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why IronCore</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Membership Pricing</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Directions &amp; Map</a></li>
            </ul>
          </div>

          {/* Operational Hours */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Facility Hours
            </div>
            <div className="space-y-2 text-xs text-zinc-400">
              <div>
                <strong className="text-zinc-200 block">Staffed Hours:</strong>
                <span>Mon – Fri: 5:00 AM – 10:00 PM</span><br />
                <span>Sat – Sun: 7:00 AM – 7:00 PM</span>
              </div>
              <div>
                <strong className="text-zinc-200 block">Member Keycard:</strong>
                <span>24/7 Access (All-Access &amp; Coached members)</span>
              </div>
              <div>
                <strong className="text-zinc-200 block">Free Parking:</strong>
                <span>Elm Alley rear lot · 2 hrs validated</span>
              </div>
            </div>
          </div>

          {/* Quick Action Box */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Ready to Visit?
            </div>
            <p className="text-xs text-zinc-400">
              Get your free guest pass with zero commitment. Bring workout shoes and valid ID.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full rounded bg-red-600 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-red-500 shadow-sm"
            >
              Claim Free Guest Pass
            </button>
            <p className="text-[11px] text-zinc-500 text-center">
              Lockers &amp; private showers available
            </p>
          </div>

        </div>

        {/* Bottom Bar: Quiet Copyright */}
        <div className="mt-12 border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} IronCore Gym LLC. All rights reserved. Locally owned in Downtown West.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-zinc-400">Privacy Policy</span>
            <span className="text-zinc-400">Terms of Service</span>
            <span className="text-zinc-400">Gym Etiquette</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
