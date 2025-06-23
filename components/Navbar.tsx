'use client';

import { Home, User, Briefcase, Contact, Wrench } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function Navbar() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Skills', url: '#', icon: User },
    { name: 'Tools', url: '#', icon: Wrench },
    { name: 'Contact', url: '#', icon: Contact }
  ]

  return <NavBar items={navItems} />
}