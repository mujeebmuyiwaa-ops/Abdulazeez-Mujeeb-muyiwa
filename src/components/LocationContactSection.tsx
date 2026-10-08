import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { MapPin, Phone, Mail, Clock, Car, Train, Navigation, Send, CheckCircle2 } from 'lucide-react';

export const LocationContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredContact: 'phone'
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(GYM_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="location" className="border-b border-zinc-850 bg-zinc-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-red-500">
            Location, Hours &amp; Contact
          </div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            Convenient Downtown West Location with Free Parking.
          </h2>
          <p className="mt-4 text-base text-zinc-300 sm:text-lg">
            Located right in the heart of Downtown West. Whether you commute by car, bike, or metro, getting in and out of your workout is hassle-free.
          </p>
        </div>

        {/* 2-Column Layout: Details & Interactive Map vs Direct Message Form */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Location, Hours, Transit & Interactive Map Card */}
          <div className="space-y-6 lg:col-span-7">
            
            {/* Quick Contact Cards Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              
              {/* Address Card */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
                <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-wider">
                  <MapPin className="h-4 w-4" />
                  <span>Physical Address</span>
                </div>
                <div className="mt-2 text-base font-bold text-white">
                  {GYM_INFO.address}
                </div>
                <div className="text-xs text-zinc-400">
                  {GYM_INFO.neighborhood}
                </div>
                <div className="mt-3">
                  <a
                    href="https://maps.google.com/?q=412+Market+Street+Downtown"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300"
                  >
                    <Navigation className="h-3 w-3" />
                    <span>Open in Google Maps &rarr;</span>
                  </a>
                </div>
              </div>

              {/* Phone & Direct Contact */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
                <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-wider">
                  <Phone className="h-4 w-4" />
                  <span>Call or Text Front Desk</span>
                </div>
                <div className="mt-2 text-base font-bold text-white tabular-nums">
                  {GYM_INFO.phone}
                </div>
                <div className="text-xs text-zinc-400">
                  {GYM_INFO.email}
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={`tel:${GYM_INFO.phoneRaw}`}
                    className="text-xs font-bold text-red-400 hover:text-red-300"
                  >
                    Tap to Call
                  </a>
                  <span className="text-zinc-700">·</span>
                  <button
                    onClick={copyPhoneToClipboard}
                    className="text-xs font-medium text-zinc-400 hover:text-white"
                  >
                    {copiedPhone ? 'Copied to Clipboard!' : 'Copy Number'}
                  </button>
                </div>
              </div>

            </div>

            {/* Operating Hours Table Card */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                  <Clock className="h-4 w-4 text-red-500" />
                  <span>Operational &amp; Staffed Hours</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                  24/7 Keycard for Members
                </span>
              </div>

              <div className="mt-4 space-y-2.5 text-xs">
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="font-semibold text-white">Monday – Friday</span>
                  <span className="tabular-nums font-mono">5:00 AM – 11:00 PM (Staffed until 10:00 PM)</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="font-semibold text-white">Saturday – Sunday</span>
                  <span className="tabular-nums font-mono">7:00 AM – 8:00 PM (Staffed until 7:00 PM)</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400 pt-2 border-t border-zinc-800/50">
                  <span>Holidays &amp; Off-Hours</span>
                  <span>24/7 Keycard entry active year-round</span>
                </div>
              </div>
            </div>

            {/* Parking & Transit Information */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-3">
              <div className="flex items-start gap-3 text-xs text-zinc-300">
                <Car className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Free 2-Hour Validated Parking:</strong> 35 dedicated member spaces in our private rear lot. Enter via Elm Alley directly behind 412 Market St. Validate at reception iPad upon arrival.
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs text-zinc-300">
                <Train className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Public Transit:</strong> 2-minute walk from West Metro Station (Lines A &amp; B). Indoor secure bicycle racks available in the lobby.
                </div>
              </div>
            </div>

            {/* Stylized Interactive Map Card */}
            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 h-64">
              {/* Map background canvas simulation */}
              <div className="absolute inset-0 bg-[#161a22] flex items-center justify-center">
                {/* Street grid visual representation */}
                <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Road lines */}
                  <line x1="0" y1="120" x2="100%" y2="120" stroke="#475569" strokeWidth="8" />
                  <line x1="240" y1="0" x2="240" y2="100%" stroke="#475569" strokeWidth="8" />
                  <line x1="0" y1="200" x2="100%" y2="200" stroke="#334155" strokeWidth="4" />
                </svg>

                {/* Map Marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-xl shadow-red-950 ring-4 ring-red-500/30 animate-bounce">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="mt-2 rounded bg-zinc-950/90 px-3 py-1 text-xs font-bold text-white shadow-md border border-zinc-800">
                    IronCore Gym · 412 Market St
                  </div>
                </div>
              </div>

              {/* Map floating controls */}
              <div className="absolute bottom-3 right-3 z-20">
                <a
                  href="https://maps.google.com/?q=412+Market+Street+Downtown"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-zinc-900/95 border border-zinc-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-zinc-800 shadow transition-colors inline-flex items-center gap-1.5"
                >
                  <Navigation className="h-3.5 w-3.5 text-red-500" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Inquiry Message Form */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-7 sm:p-8">
              <h3 className="text-xl font-bold text-white">
                Have a Question? Send Us a Note.
              </h3>
              <p className="mt-1 text-xs text-zinc-400">
                Whether you have questions about equipment, corporate passes, or injury modifications, our staff replies within 2 hours during open hours.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-lg border border-emerald-900/50 bg-emerald-950/30 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
                  <h4 className="mt-3 text-base font-bold text-white">Message Received!</h4>
                  <p className="mt-2 text-xs text-zinc-300">
                    Thanks {formData.name}. Coach Marcus or Sarah will follow up via {formData.preferredContact} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', message: '', preferredContact: 'phone' });
                    }}
                    className="mt-5 text-xs text-red-400 underline hover:text-red-300 font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1.5 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1.5 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1.5 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300">
                      Preferred Reply Method
                    </label>
                    <div className="mt-1.5 flex gap-4 text-xs text-zinc-300">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={() => setFormData({ ...formData, preferredContact: 'phone' })}
                          className="accent-red-600"
                        />
                        <span>Phone / SMS</span>
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
                          className="accent-red-600"
                        />
                        <span>Email</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300">
                      Your Message or Question <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Ask about membership rates, personal training availability, beginner programs, or corporate plans..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1.5 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-red-600 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-950 transition-all hover:bg-red-500 active:scale-98"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Message to Staff</span>
                  </button>

                  <p className="text-center text-[11px] text-zinc-500">
                    We never spam or sell contact details. Instant unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
