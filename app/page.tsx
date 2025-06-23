'use client';
import { useState } from 'react';
import {Home} from "@/components/navPages/Home"
import { Projects } from '@/components/navPages/Projects';
import { Contact } from '@/components/navPages/Contact';

export default function HomePage() {
  return (
    <main>
      <Home/>
      <Projects/>
      <Contact/>
    </main>
  );
}
