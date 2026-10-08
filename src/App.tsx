/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { StatusBanner } from './components/StatusBanner';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [initialProgram, setInitialProgram] = useState<string | undefined>();
  const [initialDay, setInitialDay] = useState<string | undefined>();
  const [initialTime, setInitialTime] = useState<string | undefined>();

  const handleOpenBooking = () => {
    setInitialProgram(undefined);
    setInitialDay(undefined);
    setInitialTime(undefined);
    setIsBookingOpen(true);
  };

  const handleSelectProgram = (programTitle: string) => {
    setInitialProgram(programTitle);
    setIsBookingOpen(true);
  };

  const handleSelectPlan = (planName: string) => {
    setInitialProgram(planName);
    setIsBookingOpen(true);
  };

  const handleBookClass = (classTitle: string, day: string, time: string) => {
    setInitialProgram(classTitle);
    setInitialDay(day);
    setInitialTime(time);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-red-600 selection:text-white pb-14 md:pb-0">
      {/* Dynamic Status / Operating Hours Ribbon */}
      <StatusBanner />

      {/* Primary Top Bar (Contract 3-zones) */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. About the Gym & Honest Chain Comparison */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* 3. Services & Training Programs */}
        <ProgramsSection onSelectProgram={handleSelectProgram} />

        {/* Interactive Coached Class Schedule */}
        <ScheduleSection onBookClass={handleBookClass} />

        {/* 4. Why Choose IronCore Gym */}
        <WhyChooseUs onOpenBooking={handleOpenBooking} />

        {/* 5. Transparent Memberships & Pricing */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 6. Attributable Local Testimonials */}
        <TestimonialsSection />

        {/* 7. Location, Hours, Directions & Direct Contact */}
        <LocationContactSection />

        {/* FAQ Objections Handler */}
        <FaqSection />

        {/* 8. Final Conversion Call-to-Action */}
        <FinalCta onOpenBooking={handleOpenBooking} />
      </main>

      {/* 9. Quiet Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Free Session Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProgram={initialProgram}
        initialDay={initialDay}
        initialTime={initialTime}
      />

      {/* Mobile Sticky Quick Action Bar (<15% mobile viewport cap) */}
      <MobileQuickBar onOpenBooking={handleOpenBooking} />
    </div>
  );
}
