import {Metrophobic, Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";

export const metrophobic = Metrophobic({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});