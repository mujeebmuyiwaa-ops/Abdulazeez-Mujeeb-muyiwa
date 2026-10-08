import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/gymData';
import { Check, X, Shield, Sparkles, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="border-b border-zinc-850 bg-zinc-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-red-500">
            Simple, Honest Pricing
          </div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            No Hidden Fees. No Traps. 100% Transparent.
          </h2>
          <p className="mt-4 text-base text-zinc-300 sm:text-lg">
            Choose the plan that fits your routine. All memberships include free 2-hour parking, locker rooms with private showers, and free coach orientation.
          </p>

          {/* Billing Toggle (Functional Segmented Control) */}
          <div className="mt-8 inline-flex items-center rounded-lg border border-zinc-800 bg-zinc-900/80 p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`rounded-md px-4 py-2 text-xs font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-zinc-100 text-zinc-900 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Month-to-Month (No Commitment)
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`flex items-center gap-1.5 rounded-md px-4 py-2 text-xs font-bold transition-all ${
                billingCycle === 'annual'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>12-Month Membership</span>
              <span className="text-[10px] font-extrabold uppercase bg-red-950 text-red-200 px-1.5 py-0.5 rounded">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPriceMonthly : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-xl border p-7 sm:p-8 transition-all ${
                  plan.popular
                    ? 'border-red-600 bg-zinc-900 shadow-xl shadow-red-950/20 ring-1 ring-red-600'
                    : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                }`}
              >
                {/* Popular Ribbon / Marker */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded bg-red-600 px-3.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-white shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2 text-xs text-zinc-400 min-h-[32px]">{plan.description}</p>

                  {/* Price Block */}
                  <div className="mt-6 flex items-baseline gap-1 border-b border-zinc-800 pb-6">
                    <span className="text-4xl font-black text-white tabular-nums sm:text-5xl">
                      ${price}
                    </span>
                    <span className="text-sm font-medium text-zinc-400">/ month</span>
                    {billingCycle === 'annual' && (
                      <span className="ml-2 text-xs text-red-400 font-semibold">(billed annually)</span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      What&apos;s Included:
                    </div>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-zinc-200">
                        <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2 space-y-2 text-xs text-zinc-500">
                        {plan.notIncluded.map((notFeat) => (
                          <div key={notFeat} className="flex items-start gap-2.5 line-through">
                            <X className="h-4 w-4 shrink-0 text-zinc-600 mt-0.5" />
                            <span>{notFeat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="mt-8 pt-6 border-t border-zinc-850">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full rounded-md py-3 text-center text-xs font-bold uppercase tracking-wider transition-all active:scale-98 ${
                      plan.popular
                        ? 'bg-red-600 text-white hover:bg-red-500 shadow-md shadow-red-950'
                        : 'bg-zinc-800 text-white hover:bg-zinc-700'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                  <p className="mt-2 text-center text-[11px] text-zinc-500">
                    Try first session free before committing
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee & Single Day Pass Info Box */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
            <Shield className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-base font-bold text-white">14-Day 100% Money-Back Guarantee</h4>
              <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
                Join IronCore, workout for up to two weeks, and if you aren&apos;t completely thrilled with the equipment, atmosphere, or coaches, we will refund every single penny. No awkward questions asked.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
            <HelpCircle className="h-6 w-6 text-red-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-base font-bold text-white">Visiting the Area? Single Day Passes: $20</h4>
              <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
                Traveling for business or visiting family downtown? Walk-in day passes are available during all staffed hours (5 AM – 10 PM weekdays) with full access to Olympic racks, turf, and showers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
