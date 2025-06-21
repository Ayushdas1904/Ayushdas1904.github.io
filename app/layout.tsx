import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { metrophobic, jetbrainsMono } from "./font";
import CustomCursor from "@/components/ui/Cursor";


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
        className={metrophobic.className}
      >
        <Providers>
          <CustomCursor />
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
