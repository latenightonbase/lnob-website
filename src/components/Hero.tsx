"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          {/* <source src="/videos/hero-loop.mp4" type="video/mp4" /> */}
        </video>

        {/* Cinematic gradients — keep the host visible, fade for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />

        {/* Subtle film grain */}
        <div className="noise-overlay absolute inset-0" />
      </div>

      {/* Soft directional glow — off to the side, not centered on the face */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-accent/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Content — bottom-left, editorial */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-8 pb-24 lg:pb-32">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.92]"
          >
            Late Night
            <br />
            <span className="text-accent">on Base</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg sm:text-xl text-muted max-w-xl leading-relaxed"
          >
            Breaking down what actually matters in AI, apps &amp; tech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link
              href="https://x.com/latenightonbase"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-accent hover:bg-accent-bright text-white px-7 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 glow-blue"
            >
              <svg
                className="w-[14px] h-[14px]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Watch Live on X
            </Link>
            <Link
              href="#sponsors"
              className="inline-flex items-center gap-2 border border-border hover:border-muted text-foreground px-7 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 bg-surface/20 backdrop-blur-sm"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — kept minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[18px] h-7 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
        >
          <div className="w-[3px] h-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
