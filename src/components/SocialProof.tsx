"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

const stats = [
  { value: "50K+", label: "Weekly Viewers" },
  { value: "400+", label: "Shows" },
  { value: "300+", label: "Interviews" },
  { value: "5", label: "Platforms" },
];

const platforms = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@billthebullAI",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "X / Twitter",
    href: "https://x.com/latenightonbase",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/2qFgx4LsD9YUAxMrfTNJ60",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/varunbajajlatenight/",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@latenightonbase",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.84a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24z" />
      </svg>
    ),
  },
];

/* Brand marks — monochrome white, large, high contrast */
const CoinbaseMark = (
  <svg className="w-8 h-8" viewBox="0 0 48 48" fill="currentColor" fillRule="evenodd">
    <path d="M24 48a24 24 0 1 0 0-48 24 24 0 0 0 0 48ZM19.2 14.4a4.8 4.8 0 0 0-4.8 4.8v9.6a4.8 4.8 0 0 0 4.8 4.8h9.6a4.8 4.8 0 0 0 4.8-4.8v-9.6a4.8 4.8 0 0 0-4.8-4.8z" />
  </svg>
);

const partnerLogos: { name: string; logo: React.ReactNode }[] = [
  {
    name: "Base",
    logo: (
      <div className="flex items-center gap-2 sm:gap-3">
        <svg className="w-7 h-7 sm:w-9 sm:h-9 shrink-0" viewBox="0 0 111 111" fill="currentColor">
          <path d="M54.921 110.034C85.359 110.034 110.034 85.402 110.034 55.017C110.034 24.6319 85.359 0 54.921 0C26.0432 0 2.35281 22.1714 0 50.3923H72.8467V59.6416H0C2.35281 87.8625 26.0432 110.034 54.921 110.034Z" />
        </svg>
        <span className="text-lg sm:text-2xl font-semibold tracking-tight">Base</span>
      </div>
    ),
  },
  {
    name: "Coinbase",
    logo: (
      <div className="flex items-center gap-2 sm:gap-3">
        {CoinbaseMark}
        <span className="text-lg sm:text-2xl font-semibold tracking-tight">Coinbase</span>
      </div>
    ),
  },
  {
    name: "Coinbase Ventures",
    logo: (
      <div className="flex items-center gap-2 sm:gap-3">
        {CoinbaseMark}
        <span className="text-sm sm:text-xl font-semibold tracking-tight text-center sm:whitespace-nowrap leading-tight">
          Coinbase Ventures
        </span>
      </div>
    ),
  },
  {
    name: "Optimism",
    logo: (
      <div className="flex items-center gap-2 sm:gap-3">
        <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="24" fill="#FF0420" />
          <path
            d="M16.4 30.4c-1.86 0-3.36-.44-4.52-1.32-1.13-.9-1.7-2.18-1.7-3.84 0-.34.04-.78.12-1.32.22-1.22.54-2.66 1-4.34 1.28-3.46 3.84-5.18 7.7-5.18 1.05 0 2 .18 2.84.54.85.32 1.52.86 2.02 1.6.5.72.74 1.6.74 2.62 0 .32-.04.76-.13 1.32-.27 1.45-.6 2.92-1 4.4-.66 1.92-1.6 3.36-2.84 4.32-1.22.94-2.72 1.42-4.5 1.42z"
            fill="#fff"
          />
          <path
            d="M27.94 30.1l3.16-15.18h5.06l-.7 3.34h-3.42c-.83 0-1.36.4-1.6 1.2l-.36 1.74h3.42l-.66 3.1H29.4l-1.18 5.8z"
            fill="#fff"
          />
        </svg>
        <span className="text-lg sm:text-2xl font-semibold tracking-tight">Optimism</span>
      </div>
    ),
  },
  {
    name: "Farcaster",
    logo: (
      <div className="flex items-center gap-2 sm:gap-3">
        <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" viewBox="0 0 1000 1000" fill="currentColor">
          <path d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z" />
          <path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.444H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z" />
          <path d="M693.333 746.667C681.06 746.667 671.111 756.616 671.111 768.889V795.556H666.667C654.394 795.556 644.444 805.505 644.444 817.778V844.444H893.333V817.778C893.333 805.505 883.384 795.556 871.111 795.556H866.667V768.889C866.667 756.616 856.717 746.667 844.444 746.667V351.111H868.889L897.778 253.333H720V746.667H693.333Z" />
        </svg>
        <span className="text-lg sm:text-2xl font-semibold tracking-tight">Farcaster</span>
      </div>
    ),
  },
  {
    name: "Ethereum",
    logo: (
      <div className="flex items-center gap-2 sm:gap-3">
        <svg className="w-6 h-8 sm:w-7 sm:h-9 shrink-0" viewBox="0 0 256 417" fill="currentColor">
          <path d="M127.96 0l-2.8 9.5v275.66l2.8 2.8 127.96-75.64L127.96 0z" fillOpacity="0.7" />
          <path d="M127.96 0L0 212.32l127.96 75.64V154.16z" />
          <path d="M127.96 312.19l-1.58 1.93v98.2l1.58 4.6L256 236.58z" fillOpacity="0.7" />
          <path d="M127.96 416.9v-104.71L0 236.58z" />
          <path d="M127.96 287.96l127.96-75.64-127.96-58.16z" fillOpacity="0.4" />
          <path d="M0 212.32l127.96 75.64v-133.8z" fillOpacity="0.85" />
        </svg>
        <span className="text-lg sm:text-2xl font-semibold tracking-tight">Ethereum</span>
      </div>
    ),
  },
  {
    name: "Aerodrome",
    logo: (
      <div className="flex items-center gap-2 sm:gap-3">
        <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" viewBox="0 0 48 48" fill="currentColor">
          <path d="M24 4 4 40h11l9-16 9 16h11L24 4z" />
        </svg>
        <span className="text-lg sm:text-2xl font-semibold tracking-tight">Aerodrome</span>
      </div>
    ),
  },
  {
    name: "Solana",
    logo: (
      <div className="flex items-center gap-2 sm:gap-3">
        <svg className="w-8 h-6 sm:w-9 sm:h-7 shrink-0" viewBox="0 0 397 311" fill="currentColor">
          <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" />
          <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" />
          <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" />
        </svg>
        <span className="text-lg sm:text-2xl font-semibold tracking-tight">Solana</span>
      </div>
    ),
  },
];

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-accent/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Stats row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 grid grid-cols-2 gap-4 md:mb-20 md:grid-cols-4 md:gap-5"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="rounded-2xl border border-border/50 bg-surface/20 px-4 py-6 text-center"
            >
              <div className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm tracking-wide text-muted/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Distribution platforms */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 border-b border-border/50 pb-16 sm:gap-x-5 md:mb-20 md:pb-20"
        >
          <motion.span
            variants={staggerItem}
            className="w-full text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground/75 sm:w-auto"
          >
            Available on
          </motion.span>
          {platforms.map((platform) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              whileHover={{ y: -2 }}
              className="flex cursor-pointer items-center gap-2.5 rounded-full border border-white/8 bg-surface/20 px-4 py-2 text-foreground/80 transition-colors duration-300 hover:border-border hover:bg-surface/45 hover:text-foreground"
            >
              {platform.icon}
              <span className="text-[14px] font-medium tracking-tight">
                {platform.name}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Previous Guests heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <p className="text-[11px] text-accent uppercase tracking-[0.25em] font-medium mb-5">
            Who we&apos;ve hosted
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Previous Guests
          </h2>
        </motion.div>

        {/* Logo strip — large, high-contrast, Claude.ai-inspired grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 md:mt-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border/30 rounded-2xl overflow-hidden border border-border/40">
            {partnerLogos.map((logo) => (
              <motion.div
                key={logo.name}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="flex items-center justify-center bg-background px-3 py-7 transition-colors duration-500 hover:bg-surface/60 sm:px-6 md:px-8 md:py-10"
              >
                <div className="text-white/80 hover:text-white transition-colors duration-500">
                  {logo.logo}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
