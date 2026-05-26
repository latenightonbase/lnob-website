"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, smoothEase, staggerContainer, staggerItem } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col justify-start overflow-hidden pt-24 pb-12 lg:justify-center lg:py-16">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 hidden h-[480px] w-[480px] rounded-full bg-accent/10 blur-[150px] lg:block" />
        <div className="absolute top-1/4 -right-32 hidden h-[520px] w-[520px] rounded-full bg-accent-bright/[0.08] blur-[170px] lg:block" />
        <div
          className="absolute inset-0 hidden opacity-[0.05] lg:block"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(255 255 255 / 0.6) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 55% 45%, black 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 55% 45%, black 0%, transparent 75%)",
          }}
        />
        <div className="noise-overlay absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 hidden h-32 bg-gradient-to-t from-background to-transparent lg:block" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Copy column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6"
          >


            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 backdrop-blur-sm sm:gap-2.5 sm:px-3 sm:py-1.5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <motion.span
                  animate={{ scale: [1, 2.4, 1], opacity: [0.55, 0, 0.55] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inline-flex h-full w-full rounded-full bg-red-500"
                />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/85 sm:text-[11px] sm:tracking-[0.25em]">
                Live Mon–Thu · 12PM PST
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[3.5rem] font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl sm:font-semibold md:text-7xl lg:text-[5.25rem] xl:text-[6rem]"
            >
              Late Night
              <br />
              <span className="bg-gradient-to-br from-accent-bright via-accent to-accent bg-clip-text text-transparent">
                on Base
              </span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-white sm:text-lg sm:font-normal sm:text-muted md:text-xl"
            >
              Breaking down what actually matters in AI, apps &amp; tech.
            </motion.p>

            {/* Mobile-only in-flow video — edge-to-edge horizontal strip */}
            <motion.div
              variants={staggerItem}
              className="mt-8 -mx-6 lg:hidden"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-video w-full object-cover"
              >
                <source src="/lnob-vid.mp4" type="video/mp4" />
              </video>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5"
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="https://x.com/latenightonbase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-blue inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-accent-bright sm:w-auto"
                >
                  <svg
                    className="h-[14px] w-[14px]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Watch Live on X
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="#sponsors"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface/25 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-muted hover:bg-surface/45 sm:w-auto"
                >
                  Partner With Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Video showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
            className="hidden lg:col-span-6 lg:block "
          >
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-[680px] xl:max-w-[760px] ">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-accent-bright/10 to-transparent blur-3xl"
              />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/30 shadow-2xl shadow-black/50 ring-1 ring-white/5">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/images/hero-poster.jpg"
                  className="aspect-[16/9] w-full object-cover"
                >
                  <source src="/lnob-vid.mp4" type="video/mp4" />
                </video>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                />
                
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue — desktop only */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-7 w-[18px] items-start justify-center rounded-full border border-white/15 pt-1.5"
        >
          <div className="h-1.5 w-[3px] rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
