/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { ProfileHeader } from './components/ProfileHeader';
import { WorkShowcase } from './components/WorkShowcase';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] text-[#e2e8f0] font-sans flex flex-col justify-between relative overflow-x-hidden selection:bg-slate-700 selection:text-white">
      {/* Subtle deep bluish ambient lighting combining with profile image */}
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(30,58,138,0.2),transparent_70%)]" />

      <div className="relative z-10 flex-1">
        <Navbar />
        <ProfileHeader />
        <WorkShowcase />
      </div>

      <Footer />
    </div>
  );
}
