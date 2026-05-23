"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn, fadeUp, staggerItem, viewportOnce } from "@/lib/motion";

type Episode = {
  videoId: string;
  title: string;
  guest: string;
  role: string;
  date: string;
  duration: string;
  tag: string;
};

const episodes: Episode[] = [
  {
    videoId: "QTCp16lKCig",
    title: "Onchain: The Next Generation of Trading on Base",
    guest: "Jesse Pollak",
    role: "Creator of Base",
    date: "May 10, 2026",
    duration: "58 min",
    tag: "Onchain",
  },
  {
    videoId: "NwZnrcsZ5oQ",
    title: "Infinex: An Effortless Crypto Wallet for Everyone",
    guest: "Kain Warwick",
    role: "Founder, Infinex • Formerly Synthetix",
    date: "May 3, 2026",
    duration: "1h 12 min",
    tag: "Apps",
  },
  {
    videoId: "LrrcDoPWJOA",
    title: "Inside Coinbase Ventures: Betting Big on Base & Builders",
    guest: "Hoolie Tejwani",
    role: "Head of Coinbase Ventures",
    date: "Apr 26, 2026",
    duration: "45 min",
    tag: "Tech",
  },
];

const tagColors: Record<string, string> = {
  AI: "text-blue-400 border-blue-400/20 bg-blue-400/5",
  Apps: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
  Tech: "text-violet-400 border-violet-400/20 bg-violet-400/5",
  Onchain: "text-amber-400 border-amber-400/20 bg-amber-400/5",
};

function EpisodeCard({ ep, index }: { ep: Episode; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.article
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-surface/20 transition-all duration-500 hover:border-border hover:bg-surface/40 hover:shadow-[0_24px_100px_rgba(0,0,0,0.28)]">
        <div className="grid gap-0 lg:grid-cols-[1.02fr_1fr]">
          {/* Media */}
          <div className="relative aspect-video self-stretch overflow-hidden bg-black lg:min-h-[360px]">
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${ep.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&color=white`}
                title={ep.title}
                allow="accelerated-encoding; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`Play: ${ep.title}`}
                className="absolute inset-0 w-full h-full cursor-pointer"
              >
                {/* High-res YouTube thumbnail with graceful fallback */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${ep.videoId}/maxresdefault.jpg`}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.dataset.fallback) {
                      img.dataset.fallback = "1";
                      img.src = `https://i.ytimg.com/vi/${ep.videoId}/hqdefault.jpg`;
                    }
                  }}
                />

                {/* Cinematic gradient — protects play button & duration badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-background/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/40 hidden md:block" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Glow ring */}
                    <div className="absolute inset-0 rounded-full bg-accent/30 blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                      className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md transition-all duration-500 group-hover:border-accent/40 group-hover:bg-accent/25 md:h-20 md:w-20"
                    >
                      <svg
                        className="w-6 h-6 md:w-7 md:h-7 text-white ml-1 transition-colors duration-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-background/70 backdrop-blur-md text-foreground/75 font-medium tracking-wide">
                    {ep.duration}
                  </span>
                </div>
              </button>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14">
            {/* Tag */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span
                className={`text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full border ${tagColors[ep.tag] || "text-muted border-border bg-surface/50"}`}
              >
                {ep.tag}
              </span>
              <span className="text-xs text-muted/70">{ep.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-extrabold leading-[1.1] tracking-tight text-foreground transition-colors duration-300 group-hover:text-white md:text-3xl lg:text-[2.35rem]">
              {ep.title}
            </h3>

            {/* Guest */}
            <div className="mt-7 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent/25 to-accent/5 border border-border flex items-center justify-center shrink-0">
                <span className="text-[13px] text-accent/80 font-semibold">
                  {ep.guest
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold tracking-tight text-foreground leading-snug">
                  {ep.guest}
                </p>
                <p className="text-[13px] text-muted leading-snug mt-0.5">
                  {ep.role}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="inline-flex items-center gap-2 text-sm text-accent/70 hover:text-accent group-hover:text-accent transition-colors duration-300 font-medium"
              >
                {playing ? "Now playing" : "Watch episode"}
                {!playing && (
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Episodes() {
  return (
    <section id="episodes" className="relative overflow-hidden py-20 md:py-28">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-accent/[0.015] rounded-full blur-[180px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-14 text-center md:mb-16"
        >
          <p className="text-[11px] text-accent/70 uppercase tracking-[0.25em] font-medium mb-4">
            Curated episodes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Featured Conversations
          </h2>
          <p className="mt-5 text-muted max-w-lg mx-auto text-base leading-relaxed">
            Deep dives with the founders, engineers, and operators building at
            the frontier.
          </p>
        </motion.div>

        {/* Episode cards — large editorial layout */}
        <div className="space-y-6 md:space-y-7">
          {episodes.map((ep, i) => (
            <EpisodeCard key={ep.videoId} ep={ep} index={i} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm text-muted hover:text-foreground transition-all duration-300 border border-border/60 hover:border-border px-8 py-3.5 rounded-xl bg-surface/20 hover:bg-surface/40"
          >
            View all episodes
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
