import React, { useState } from 'react';
import { FAQS } from '../data/gymData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border-b border-zinc-850 bg-zinc-900/20 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-red-500">
            Frequently Asked Questions
          </div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl text-balance">
            Got Questions Before Visiting? We Have Answers.
          </h2>
          <p className="mt-3 text-sm text-zinc-300">
            Straightforward answers to the most common questions from new and prospective members.
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-12 space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 transition-colors hover:border-zinc-700"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-red-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-zinc-800/80 px-5 sm:px-6 pb-6 pt-4 text-sm leading-relaxed text-zinc-300 bg-zinc-950/40">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sub text */}
        <div className="mt-8 text-center text-xs text-zinc-400">
          <span>Still have questions? Call us directly anytime at </span>
          <a href="tel:+15557428920" className="text-red-400 font-bold hover:underline">
            (555) 742-8920
          </a>
        </div>

      </div>
    </section>
  );
};
