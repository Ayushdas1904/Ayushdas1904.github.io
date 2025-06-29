'use client';
import {Home} from "@/components/navPages/Home"
import { Projects } from '@/components/navPages/Projects';
import Contact from '@/components/navPages/Contact';
import { jetbrainsMono } from "./font";


export default function HomePage() {
  return (
    <main className={`flex flex-col items-center justify-center`}>
      <Home/>
      <Projects/>
      <Contact/>
    </main>
  );
}
