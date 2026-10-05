/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { MenuHighlights } from './components/MenuHighlights';
import { Gallery } from './components/Gallery';
import { VirtualTour } from './components/VirtualTour';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { Faq } from './components/Faq';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { FullMenuModal } from './components/FullMenuModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const scrollToLocation = () => {
    const locSection = document.getElementById('localizacao');
    if (locSection) {
      locSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1416] text-[#e3e8ea] flex flex-col font-sans selection:bg-[#546d75] selection:text-white">
      {/* Top Header */}
      <Header
        onOpenMenuModal={() => setMenuModalOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenMenu={() => setMenuModalOpen(true)}
          onScrollToLocation={scrollToLocation}
        />

        {/* Trust Social Proof Bar */}
        <TrustBar />

        {/* About Section */}
        <About onOpenMenu={() => setMenuModalOpen(true)} />

        {/* 4 Pillars Experience Section */}
        <Experience />

        {/* Menu Highlights (Real Items + Categories) */}
        <MenuHighlights onOpenFullMenu={() => setMenuModalOpen(true)} />

        {/* Atmosphere & Dishes Gallery */}
        <Gallery />

        {/* Virtual 360 Tour Section */}
        <VirtualTour />

        {/* Google Reviews & Social Proof */}
        <Reviews />

        {/* Location, Hours & Interactive Map */}
        <Location />

        {/* Frequently Asked Questions (FAQ) with Schema.org FAQPage */}
        <Faq onOpenContactModal={() => setContactModalOpen(true)} />

        {/* Final Conversion CTA */}
        <CtaFinal
          onOpenMenu={() => setMenuModalOpen(true)}
          onScrollToLocation={scrollToLocation}
          onOpenContactModal={() => setContactModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenMenu={() => setMenuModalOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar
        onOpenMenu={() => setMenuModalOpen(true)}
        onScrollToLocation={scrollToLocation}
      />

      {/* Interactive Modals */}
      <FullMenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
