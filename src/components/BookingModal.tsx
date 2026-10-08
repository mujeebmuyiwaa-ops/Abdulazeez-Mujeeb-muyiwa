import React, { useState, useEffect } from 'react';
import { GYM_INFO, PROGRAMS } from '../data/gymData';
import { X, Check, Calendar, Clock, User, Phone, Mail, QrCode, Sparkles, ShieldCheck, MapPin, Printer } from 'lucide-react';
import { BookingFormData, ConfirmedPass } from '../types/gym';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: string;
  initialDay?: string;
  initialTime?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialProgram,
  initialDay,
  initialTime
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    fitnessGoal: 'Build Strength & Muscle',
    preferredDay: initialDay || 'Tomorrow',
    preferredTime: initialTime || 'Morning (6:00 AM – 9:00 AM)',
    experienceLevel: 'Beginner / Returning',
    notes: ''
  });

  const [confirmedPass, setConfirmedPass] = useState<ConfirmedPass | null>(null);

  useEffect(() => {
    if (initialProgram) {
      setFormData(prev => ({ ...prev, fitnessGoal: initialProgram }));
    }
    if (initialDay) {
      setFormData(prev => ({ ...prev, preferredDay: initialDay }));
    }
    if (initialTime) {
      setFormData(prev => ({ ...prev, preferredTime: initialTime }));
    }
  }, [initialProgram, initialDay, initialTime]);

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      // Validate step 3
      if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
        return;
      }
      
      const randomCode = `ICG-${Math.floor(1000 + Math.random() * 9000)}`;
      const pass: ConfirmedPass = {
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        bookingCode: randomCode,
        fullName: formData.fullName,
        phone: formData.phone,
        fitnessGoal: formData.fitnessGoal,
        preferredDay: formData.preferredDay,
        preferredTime: formData.preferredTime,
        createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };

      setConfirmedPass(pass);
      setStep(4);
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    setConfirmedPass(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 rounded-full p-2 text-zinc-400 hover:bg-zinc-850 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header indicator */}
        {step < 4 ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500">
              <span>Step {step} of 3</span>
              <span className="text-zinc-600">·</span>
              <span>Free VIP Guest Pass</span>
            </div>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-white">
              {step === 1 && "What is your main workout goal?"}
              {step === 2 && "When would you like to visit?"}
              {step === 3 && "Where should we send your guest pass?"}
            </h2>
            <p className="mt-1 text-xs text-zinc-400">
              No credit card required · Free 2-hour validated parking
            </p>

            {/* Progress Bar */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className={`h-1.5 rounded-full ${step >= 1 ? 'bg-red-600' : 'bg-zinc-800'}`} />
              <div className={`h-1.5 rounded-full ${step >= 2 ? 'bg-red-600' : 'bg-zinc-800'}`} />
              <div className={`h-1.5 rounded-full ${step >= 3 ? 'bg-red-600' : 'bg-zinc-800'}`} />
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Check className="h-3.5 w-3.5" />
              <span>Pass Confirmed &amp; Activated</span>
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-white">
              You&apos;re All Set, {confirmedPass?.fullName}!
            </h2>
            <p className="text-xs text-zinc-400">
              Present this pass at reception or screenshot it for entry.
            </p>
          </div>
        )}

        {/* STEP 1: Goal & Program Selection */}
        {step === 1 && (
          <form onSubmit={handleNext} className="mt-6 space-y-4">
            <div className="space-y-2">
              {[
                { title: 'Build Strength & Muscle', desc: 'Barbells, power racks, dumbbell training' },
                { title: 'Fat Loss & Conditioning', desc: 'Turf sleds, kettlebells, high-energy HIIT' },
                { title: '1-on-1 Personal Coaching', desc: 'Movement screen, tailored technique correction' },
                { title: 'Beginner Lifting Kickstart', desc: 'Learn barbell mechanics safely from zero' },
                { title: 'General Fitness / Tour Floor', desc: 'Check out the facility and workout independently' }
              ].map((item) => (
                <label
                  key={item.title}
                  className={`flex items-start gap-3 rounded-xl border p-3.5 cursor-pointer transition-all ${
                    formData.fitnessGoal === item.title
                      ? 'border-red-600 bg-red-950/20 text-white ring-1 ring-red-600'
                      : 'border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900'
                  }`}
                >
                  <input
                    type="radio"
                    name="fitnessGoal"
                    value={item.title}
                    checked={formData.fitnessGoal === item.title}
                    onChange={() => setFormData({ ...formData, fitnessGoal: item.title })}
                    className="mt-1 accent-red-600"
                  />
                  <div>
                    <div className="text-sm font-bold">{item.title}</div>
                    <div className="text-xs text-zinc-400">{item.desc}</div>
                  </div>
                </label>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-md bg-red-600 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-950 transition-colors hover:bg-red-500"
              >
                Continue to Date &amp; Time &rarr;
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Preferred Day & Time */}
        {step === 2 && (
          <form onSubmit={handleNext} className="mt-6 space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Preferred Day to Visit
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {['Today', 'Tomorrow', 'This Weekend', 'Monday', 'Wednesday', 'Friday'].map((day) => (
                  <button
                    type="button"
                    key={day}
                    onClick={() => setFormData({ ...formData, preferredDay: day })}
                    className={`rounded-lg border py-2.5 px-3 text-xs font-bold transition-all ${
                      formData.preferredDay === day
                        ? 'border-red-600 bg-red-950/40 text-white ring-1 ring-red-600'
                        : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Preferred Time Slot
              </label>
              <div className="mt-2 space-y-2">
                {[
                  'Morning (6:00 AM – 9:00 AM)',
                  'Midday / Lunch (11:30 AM – 1:30 PM)',
                  'Afternoon (2:00 PM – 4:30 PM)',
                  'Evening (5:00 PM – 8:00 PM)'
                ].map((slot) => (
                  <label
                    key={slot}
                    className={`flex items-center gap-3 rounded-lg border p-3 cursor-pointer text-xs font-bold transition-all ${
                      formData.preferredTime === slot
                        ? 'border-red-600 bg-red-950/30 text-white'
                        : 'border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="preferredTime"
                      value={slot}
                      checked={formData.preferredTime === slot}
                      onChange={() => setFormData({ ...formData, preferredTime: slot })}
                      className="accent-red-600"
                    />
                    <span>{slot}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 rounded-md border border-zinc-800 bg-zinc-900 py-3 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 rounded-md bg-red-600 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-950 transition-colors hover:bg-red-500"
              >
                Next: Contact Details &rarr;
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Contact Info & Validation */}
        {step === 3 && (
          <form onSubmit={handleNext} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Smith"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-300">
                  Mobile Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="jordan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300">
                Any injuries or notes for the coach? (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Mild shoulder stiffness, brand new to barbells..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="mt-1 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div className="flex gap-3 pt-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-1/3 rounded-md border border-zinc-800 bg-zinc-900 py-3 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 rounded-md bg-red-600 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-950 transition-colors hover:bg-red-500"
              >
                Claim Free Guest Pass
              </button>
            </div>

            <p className="text-center text-[11px] text-zinc-500">
              100% Free · No sales pitch · Valid photo ID required upon entry
            </p>
          </form>
        )}

        {/* STEP 4: Digital VIP Pass Card */}
        {step === 4 && confirmedPass && (
          <div className="mt-6 space-y-5">
            {/* The Ticket Badge */}
            <div className="relative overflow-hidden rounded-xl border border-red-800/70 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 shadow-xl">
              <div className="flex items-start justify-between border-b border-zinc-800 pb-4">
                <div>
                  <div className="flex items-center gap-1.5 text-red-500 font-black text-xs tracking-wider uppercase">
                    <span>IronCore Gym</span>
                    <span>·</span>
                    <span>VIP Guest Pass</span>
                  </div>
                  <div className="text-xl font-black text-white mt-0.5">
                    {confirmedPass.fullName}
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-xs font-mono font-bold text-red-400 tabular-nums">
                    {confirmedPass.bookingCode}
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase">One-Time Pass</span>
                </div>
              </div>

              {/* Ticket Details */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-zinc-500 block">Focus Program:</span>
                  <span className="font-semibold text-zinc-200">{confirmedPass.fitnessGoal}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Scheduled Day:</span>
                  <span className="font-semibold text-zinc-200">{confirmedPass.preferredDay}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Target Window:</span>
                  <span className="font-semibold text-zinc-200">{confirmedPass.preferredTime}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Location:</span>
                  <span className="font-semibold text-zinc-200">412 Market St, Suite B</span>
                </div>
              </div>

              {/* QR Mock code */}
              <div className="mt-5 flex items-center justify-between border-t border-zinc-800 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded bg-white text-zinc-950 p-1">
                    {/* SVG barcode / QR simulation */}
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                      <path d="M2 2h8v8H2zM4 4v4h4V4zM14 2h8v8h-8zM16 4v4h4V4zM2 14h8v8H2zM4 16v4h4v-4zM14 14h2v2h-2zM18 14h4v2h-4zM14 18h4v2h-4zM20 18h2v4h-2zM14 20h2v2h-2zM18 20h2v2h-2z" />
                    </svg>
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    <strong className="text-zinc-200 block">Scan at Reception Tablet</strong>
                    <span>Valid for full facility &amp; locker access</span>
                  </div>
                </div>

                <div className="text-right text-[11px] text-emerald-400 font-semibold">
                  <span>Free 2-hr Parking Validated</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button
                onClick={() => window.print()}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 py-2.5 text-xs font-bold text-zinc-200 hover:text-white hover:bg-zinc-850 transition-colors"
              >
                <Printer className="h-4 w-4" />
                <span>Print or Save Pass Voucher</span>
              </button>

              <button
                onClick={handleResetAndClose}
                className="w-full rounded-md bg-red-600 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 transition-colors"
              >
                Done · See You on the Floor!
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
