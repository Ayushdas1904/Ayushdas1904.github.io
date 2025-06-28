'use client';
import {Home} from "@/components/navPages/Home"
import { Projects } from '@/components/navPages/Projects';
import { Contact } from '@/components/navPages/Contact';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center gap-8">
      <Home/>
      <Projects/>
      <Contact/>
    </main>
  );
}
