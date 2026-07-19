"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, scaleIn, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.86fr_1fr] lg:gap-16">
          {/* Portrait */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto w-full max-w-[520px] lg:mx-0"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_24px_100px_rgba(0,0,0,0.22)]"
            >
              <Image
                src="/images/bill-portrait.jpg"
                alt="Bill — Host of Late Night Onchain"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <motion.p
              variants={staggerItem}
              className="mb-3 text-xs font-medium uppercase tracking-widest text-accent"
            >
              Your Host
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mb-5 text-3xl font-bold tracking-tight md:text-4xl"
            >
              Bill
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="space-y-4 text-muted leading-relaxed"
            >
              <p>
                Builder, broadcaster, and student of what&apos;s next. Late
                Night Onchain is where builders get distribution — I interview
                the top teams on Robinhood, Solana, Base, Avax and Beyond.
              </p>
              <p>
                Every week, Bill sits down with founders, engineers, and
                operators building at the frontier of onchain apps and
                infrastructure — delivering real conversations with zero
                fluff.
              </p>
              <p>
                The mission is simple: make the most important conversations in
                tech accessible to everyone, live and unfiltered.
              </p>
            </motion.div>

            {/* Social links */}
            <motion.div variants={staggerItem} className="mt-8 flex items-center gap-3">
              <motion.a
                href="https://x.com/lateniteonchain"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-full border border-border bg-surface/30 p-3 text-muted transition-colors hover:text-foreground"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@billthebullAI"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-full border border-border bg-surface/30 p-3 text-muted transition-colors hover:text-foreground"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/varunbajajlatenight/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-full border border-border bg-surface/30 p-3 text-muted transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
