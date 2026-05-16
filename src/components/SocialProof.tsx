"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50K+", label: "Weekly Viewers" },
  { value: "200+", label: "Episodes" },
  { value: "100+", label: "Guest Interviews" },
  { value: "4", label: "Platforms" },
];

const platforms = [
  {
    name: "YouTube",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "X / Twitter",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Spotify",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

/* Icon + wordmark logos — large, high contrast, monochrome white */
const partnerLogos: { name: string; logo: React.ReactNode }[] = [
  {
    name: "Base",
    logo: (
      <div className="flex items-center gap-3">
        <svg className="w-9 h-9" viewBox="0 0 111 111" fill="currentColor">
          <path d="M54.921 110.034C85.359 110.034 110.034 85.402 110.034 55.017C110.034 24.6319 85.359 0 54.921 0C26.0432 0 2.35281 22.1714 0 50.3923H72.8467V59.6416H0C2.35281 87.8625 26.0432 110.034 54.921 110.034Z" />
        </svg>
        <span className="text-2xl font-semibold tracking-tight">Base</span>
      </div>
    ),
  },
  {
    name: "Coinbase",
    logo: (
      <div className="flex items-center gap-3">
        <svg className="w-8 h-8" viewBox="0 0 48 48" fill="currentColor">
          <path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm0 37.92c-7.68 0-13.92-6.24-13.92-13.92S16.32 10.08 24 10.08 37.92 16.32 37.92 24 31.68 37.92 24 37.92zm0-22.56A8.64 8.64 0 0 0 15.36 24 8.64 8.64 0 0 0 24 32.64 8.64 8.64 0 0 0 32.64 24 8.64 8.64 0 0 0 24 15.36z" />
        </svg>
        <span className="text-2xl font-semibold tracking-tight">Coinbase</span>
      </div>
    ),
  },
  {
    name: "a16z",
    logo: (
      <span className="text-3xl font-bold tracking-tight">a16z</span>
    ),
  },
  {
    name: "Paradigm",
    logo: (
      <span className="text-2xl font-semibold tracking-[0.08em] uppercase">
        Paradigm
      </span>
    ),
  },
  {
    name: "Farcaster",
    logo: (
      <div className="flex items-center gap-3">
        <svg className="w-8 h-8" viewBox="0 0 1000 1000" fill="currentColor">
          <path d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z" />
          <path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.444H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z" />
          <path d="M693.333 746.667C681.06 746.667 671.111 756.616 671.111 768.889V795.556H666.667C654.394 795.556 644.444 805.505 644.444 817.778V844.444H893.333V817.778C893.333 805.505 883.384 795.556 871.111 795.556H866.667V768.889C866.667 756.616 856.717 746.667 844.444 746.667V351.111H868.889L897.778 253.333H720V746.667H693.333Z" />
        </svg>
        <span className="text-2xl font-semibold tracking-tight">Farcaster</span>
      </div>
    ),
  },
  {
    name: "Optimism",
    logo: (
      <div className="flex items-center gap-3">
        <svg className="w-8 h-8" viewBox="0 0 500 500" fill="currentColor">
          <circle cx="250" cy="250" r="250" fillOpacity="0.15" />
          <circle cx="250" cy="250" r="200" fillOpacity="0.2" />
          <path d="M177.133 310.146C163.802 310.146 153.138 306.506 145.141 299.227C137.274 291.818 133.341 281.545 133.341 268.408C133.341 265.026 133.73 261.126 134.507 256.709C136.451 246.436 139.866 234.593 144.752 221.18C155.675 193.082 176.226 179.033 206.407 179.033C215.181 179.033 223.048 180.459 229.997 183.313C237.076 186.036 242.685 190.324 246.822 196.177C250.959 201.9 253.028 208.917 253.028 217.228C253.028 220.48 252.639 224.314 251.862 228.731C249.529 240.041 246.178 251.885 241.81 264.26C236.276 279.497 228.473 291.17 218.402 299.227C208.33 306.506 195.906 310.146 180.812 310.146H177.133Z" />
          <path d="M295.161 308.979L321.575 179.033H366.69L340.587 308.979H295.161ZM369.846 164.443C362.767 164.443 356.899 162.238 352.243 157.821C347.717 153.274 345.454 147.82 345.454 141.449C345.454 133.786 348.35 127.35 354.144 122.154C360.067 116.828 367.156 114.165 375.411 114.165C382.49 114.165 388.293 116.37 392.819 120.787C397.475 125.204 399.803 130.658 399.803 137.159C399.803 144.952 396.907 151.454 391.113 156.65C385.319 161.846 378.165 164.443 369.846 164.443Z" />
        </svg>
        <span className="text-2xl font-semibold tracking-tight">Optimism</span>
      </div>
    ),
  },
  {
    name: "Uniswap",
    logo: (
      <div className="flex items-center gap-3">
        <svg className="w-8 h-8" viewBox="0 0 48 48" fill="currentColor">
          <path d="M17.14 7.85c-.37-.06-.38-.07-.1-.07.3 0 .82.1 1.16.21.78.27 1.5.83 2.3 1.8l.85 1.04.38-.06c2.14-.34 4.33.18 6.2 1.46l.56.39.23-.08c1.26-.44 2.7-.5 3.58-.13.25.1.62.3.67.4.02.04-.02.3-.1.58-.15.54-.2 1.7-.08 2.14.05.17.2.55.35.85l.27.55-.14.3c-.18.37-.28.94-.28 1.5 0 1.64.78 3.25 2.33 4.82.44.44.97.92 1.18 1.07.47.33 1 .88 1.17 1.22.14.26.16.4.16.91 0 .52-.02.65-.17.93-.2.38-.56.73-1.04 1-.47.27-.6.42-.65.74-.04.21.01.38.3 1.02.4.88.5 1.34.37 1.88-.07.27-.07.27.07.27.08 0 .35-.1.6-.22 1-.48 1.66-.48 2.37.01l.3.2-.3.16c-.53.3-1 .43-2.1.62-1.2.2-1.82.4-2.5.8-.15.09-.3.15-.33.14-.03-.02.1-.2.28-.4.56-.64.8-.78 2.03-1.16.34-.1.62-.2.62-.24 0-.03-.15-.15-.34-.27-.44-.27-.8-.67-.94-1.07-.08-.24-.1-.42-.04-.82.07-.46.06-.56-.07-.85-.18-.38-.59-.73-1.3-1.1-.28-.14-.69-.42-.91-.61-1.22-1.06-1.64-2.2-1.22-3.3.12-.3.11-.34-.06-.34-.32 0-.97-.33-1.3-.66-.4-.4-.5-.72-.5-1.53 0-.56-.03-.72-.16-.97-.22-.42-.52-.6-.52-.31 0 .08-.06.15-.12.15-.14 0-.14-.04 0-.53.15-.52.14-.82-.06-1.12-.27-.4-.66-.54-1.3-.43-.65.1-.94.04-1.42-.3-.2-.15-.4-.27-.42-.27-.02 0-.04.3-.04.66 0 .85-.14 1.47-.55 2.45-.34.83-.43 1.16-.49 1.8-.08.82.12 1.4.75 2.13.28.33.4.54.4.7 0 .23-.01.24-.12.12a4.9 4.9 0 0 1-.77-1.24c-.28-.62-.37-1-.37-1.63 0-.55.16-1.26.44-1.95.42-1.03.55-1.62.52-2.44-.02-.64-.1-.93-.46-1.57-.56-1.02-.64-1.63-.33-2.67.1-.33.16-.62.14-.64-.02-.02-.21.04-.42.14-.47.22-.97.32-.97.2 0-.04.21-.2.48-.37.65-.42 1.04-.85 1.32-1.48l.24-.53-.17-.37c-.24-.5-.67-.98-1.26-1.39-.82-.56-1.06-.87-1.34-1.68-.16-.47-.26-.6-.54-.76-.3-.17-.35-.18-.85-.06-1.32.3-2.24.06-3.07-.82l-.25-.26-.4.13c-1.83.56-3.47.34-4.95-.65-.15-.1-.2-.1-.26-.02-.04.06-.07.37-.07.69 0 .73-.12 1.17-.46 1.67-.16.23-.27.47-.27.57 0 .09-.03.16-.06.16-.13 0-.06-.63.1-1.01.23-.57.28-.94.2-1.6-.06-.49-.04-.65.08-.87.2-.37.14-.45-.3-.48-.5-.03-.94-.16-1.47-.43-.22-.12-.55-.25-.72-.3l-.32-.1.33-.02zm4.8 2.54c-.08-.2-.23-.44-.33-.54l-.18-.18.08.27c.04.15.12.4.18.56.14.41.19.78.13 1.08-.05.2-.04.2.08.04.16-.24.17-.73.04-1.23zm18 7.55c-.08 0-.08.36 0 .63.05.19.06.19.08-.01.02-.14 0-.4-.03-.56-.03-.04-.06-.07-.06-.06zM14.16 22.72c-2.28 2.75-3.72 6.16-3.97 9.4-.07.97-.01 2.85.12 3.62.57 3.22 2.08 5.88 4.6 8.1.8.7 1.17.96 2.4 1.64 2.75 1.53 5.63 2.18 8.72 1.98 1.94-.13 3.5-.52 5.23-1.3.82-.37 2.2-1.15 2.2-1.24 0-.03-.12-.02-.26.02-1.38.33-3.5.33-5.2 0-3.8-.75-7.3-3.12-9.6-6.5-.62-.91-1.5-2.55-1.5-2.78 0-.04.12.06.28.22.88.93 2.56 2.17 3.95 2.92 3.3 1.78 7.14 2.3 10.55 1.44.92-.23 2.22-.73 2.9-1.12l.26-.14-.45-.04c-2.6-.22-5-1.1-7.04-2.57-.59-.42-1.66-1.38-1.53-1.38.04 0 .36.15.71.33 1.87.95 3.8 1.47 5.94 1.6 1.32.08 3.22-.08 4.52-.39l.34-.08-.48-.4c-1.12-.93-2.45-1.56-4-1.88-.64-.13-2.2-.15-2.9-.04-1.18.2-2.4.64-3.86 1.42-1.1.58-1.33.68-1.99.82-.91.2-1.76.11-2.57-.26-.76-.35-1.22-.83-1.94-2.07-1.04-1.79-1.73-2.62-2.95-3.56-1.12-.86-1.86-1.16-3.37-1.38l-.39-.05.5-.6z" />
        </svg>
        <span className="text-2xl font-semibold tracking-tight">Uniswap</span>
      </div>
    ),
  },
  {
    name: "Coinbase Ventures",
    logo: (
      <div className="flex items-center gap-3">
        <svg className="w-7 h-7" viewBox="0 0 48 48" fill="currentColor">
          <path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm0 37.92c-7.68 0-13.92-6.24-13.92-13.92S16.32 10.08 24 10.08 37.92 16.32 37.92 24 31.68 37.92 24 37.92zm0-22.56A8.64 8.64 0 0 0 15.36 24 8.64 8.64 0 0 0 24 32.64 8.64 8.64 0 0 0 32.64 24 8.64 8.64 0 0 0 24 15.36z" />
        </svg>
        <span className="text-xl font-semibold tracking-tight whitespace-nowrap">
          Coinbase Ventures
        </span>
      </div>
    ),
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-24 md:py-32 border-t border-border">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-accent/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted/70 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Distribution platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-24 pb-24 border-b border-border/50"
        >
          <span className="text-[12px] text-foreground/75 uppercase tracking-[0.22em] font-semibold">
            Available on
          </span>
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-2.5 text-foreground/80 hover:text-foreground transition-colors duration-300 cursor-pointer"
            >
              {platform.icon}
              <span className="text-[15px] font-medium tracking-tight">
                {platform.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Previous Guests heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 md:mt-20"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border/30 rounded-2xl overflow-hidden border border-border/40">
            {partnerLogos.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                className="flex items-center justify-center bg-background hover:bg-surface/60 transition-colors duration-500 py-8 md:py-10 px-8"
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
