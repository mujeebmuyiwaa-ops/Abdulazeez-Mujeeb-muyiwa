import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { Phone, Menu, X, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single-element Brand Zone */}
        <a 
          href="#" 
          className="group flex items-center gap-2 text-xl font-black tracking-tighter text-white transition-colors"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded bg-red-600 text-sm font-black text-white shadow-sm shadow-red-900/40">
            IC
          </span>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-red-500 transition-colors">
            {GYM_INFO.name}
          </span>
        </a>

        {/* Zone 2: 4-6 Text Navigation Links */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden items-center gap-4 sm:flex">
          <a
            href={`tel:${GYM_INFO.phoneRaw}`}
            className="flex items-center gap-2 text-xs font-semibold text-zinc-300 transition-colors hover:text-white"
            title="Call IronCore Gym directly"
          >
            <Phone className="h-3.5 w-3.5 text-red-500" />
            <span className="whitespace-nowrap">{GYM_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm shadow-red-950 transition-all hover:bg-red-500 hover:shadow-red-900/50 active:scale-98"
          >
            Book Free Session
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenBooking}
            className="rounded bg-red-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white"
          >
            Free Pass
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 text-zinc-400 hover:bg-zinc-850 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-800 bg-zinc-950 px-5 pt-3 pb-6 md:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-medium text-zinc-200 transition-colors hover:text-red-400"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-4 border-t border-zinc-800/80 flex flex-col gap-3">
              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 py-2.5 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4 text-red-500" />
                Call Now: {GYM_INFO.phone}
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full rounded-md bg-red-600 py-3 text-center text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-red-950"
              >
                Book Free Trial Session
              </button>

              <div className="flex items-center justify-between text-xs text-zinc-400 pt-1 px-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                  {GYM_INFO.address}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-emerald-500" />
                  Open Today till 11 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
