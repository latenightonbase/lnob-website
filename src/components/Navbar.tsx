"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clapperboard, Handshake, Info, Mail, Mic, type LucideIcon } from "lucide-react";
import { smoothEase, staggerContainer, staggerItem } from "@/lib/motion";

type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks: NavLink[] = [
    { label: "Episodes", href: "#episodes", icon: Clapperboard },
    { label: "About", href: "#about", icon: Info },
    { label: "Guests", href: "#guests", icon: Mic },
    { label: "Sponsors", href: "#sponsors", icon: Handshake },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: smoothEase }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/82 shadow-[0_18px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between sm:h-24 lg:h-22">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Late Night Onchain"
                width={42}
                height={42}
                className="rounded-full ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="hidden text-lg font-semibold tracking-tight text-foreground/95 sm:block">
                Late Night Onchain
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden items-center gap-8 rounded-full border border-white/8 bg-background/20 px-5 py-2.5 backdrop-blur-sm md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="md:hidden" aria-hidden />
          </div>
        </div>
      </motion.nav>

      {/* Mobile bottom menu */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.25, ease: smoothEase }}
        className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto grid max-w-md grid-cols-5 gap-1 rounded-2xl border border-white/10 bg-background/85 p-1.5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <motion.div key={link.label} variants={staggerItem}>
                <Link
                  href={link.href}
                  aria-label={link.label}
                  className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl px-2 py-1.5 text-muted transition-colors duration-200 hover:bg-white/[0.05] hover:text-foreground active:bg-white/[0.08]"
                >
                  <Icon className="h-5 w-5 shrink-0" strokeWidth={1.75} />
                  <span className="text-[10px] font-semibold leading-none">
                    {link.label}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}
