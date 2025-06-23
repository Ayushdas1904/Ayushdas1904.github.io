import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { metrophobic, jetbrainsMono, poppins} from "./font";
import CustomCursor from "@/components/ui/Cursor";
import { Navbar } from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTopBtn from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";
import { LightPullThemeSwitcher } from "@/components/ui/light-pull-theme-switcher";
import { Component } from "@/components/ui/cursor-follower";


export const metadata: Metadata = {
  title: "Das' Portfolio",
  description: "My First Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <Providers>
          {/* <CustomCursor /> */}
          <Component/>
          {/* <ThemeToggle /> */}
          <LightPullThemeSwitcher/>
          {/* <Preloader /> */}
          <ScrollProgress />
          <Navbar />
          {children}
          <ScrollToTopBtn/>
        </Providers>
      </body>
    </html>
  );
}
