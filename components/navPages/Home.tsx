'use client';

import React, { useState } from 'react';
import Lottie from 'lottie-react';
import Typewriter from 'typewriter-effect';
import scrollDownAnimation from '@/public/scroll-down.json';
import { jetbrainsMono } from '@/app/font';
import Image from 'next/image';
import AyushImg from "@/public/Ayush.jpg";
import { MapPin } from 'lucide-react';

export function Home() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24 relative">
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 w-full max-w-5xl">
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        <h1 className="text-5xl sm:text-6xl font-bold">
                            Hey, I&apos;m <span className='text-[#e8390d]'>Ayush</span>
                        </h1>
                        <span
                            className="text-4xl sm:text-5xl"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{
                                transformOrigin: '70% 70%',
                                animation: isHovered ? 'wave 1.2s ease-in-out infinite' : 'none',
                                display: 'inline-block',
                            }}
                        >
                            👋
                        </span>
                    </div>
                    <p className='flex mt-4 text-[#dd431d]'> <span><MapPin /></span> Rudrapur, Uttarakhand, India</p>

                    <span className="tailwind-wrapper mt-4 text-2xl sm:text-3xl font-medium block text-left text-zinc-800 dark:text-zinc-200">
                        <Typewriter
                            options={{
                                strings: ['FULL STACK DEVELOPER', 'IT STUDENT'],
                                autoStart: true,
                                loop: true,
                                delay: 20,
                                deleteSpeed: 5,
                            }}
                        />
                    </span>

                    <p
                        className={`mt-4 text-base dark:text-zinc-500 max-w-xl leading-relaxed ${jetbrainsMono.className}`}
                    >
                        B.Tech IT student at IIIT Una. MERN stack developer building practical projects and improving problem-solving with DSA in C++.
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-40 h-60 sm:w-80 sm:h-120 relative shrink-0">
                    <Image
                        src={AyushImg}
                        alt="Ayush"
                        fill
                        className="rounded-full object-cover border-2 border-zinc-300 dark:border-zinc-700 shadow-lg"
                    />
                </div>
            </div>

            {/* Scroll Down Animation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 z-10">
                <Lottie animationData={scrollDownAnimation} loop />
            </div>
        </div>
    );
}
