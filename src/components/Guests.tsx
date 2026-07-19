"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function Guests() {
  return (
    <section
      id="guests"
      className="relative overflow-hidden border-t border-border py-20 md:py-28"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-14"
        >
          <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">
            Be a Guest
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Want to come on the show?
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Late Night Onchain is a platform for founders and builders shipping
            at the frontier of onchain apps and infrastructure. We&apos;re
            currently booked out roughly a month — drop a line if you&apos;d
            like to join the waitlist.
          </p>
        </motion.div>

        {/* CTA card */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl"
        >
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -5 }}
            className="relative flex flex-col items-center rounded-2xl border border-accent/35 bg-accent/[0.04] p-8 text-center shadow-[0_24px_100px_rgba(59,130,246,0.08)] transition-colors duration-300 sm:p-10"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="text-xs px-3 py-1 rounded-full bg-accent text-white font-medium whitespace-nowrap">
                ~1 month waitlist
              </span>
            </div>

            <h3 className="mt-2 text-xl font-semibold">
              Pitch yourself or someone you&apos;d love to hear from
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Tell us what you&apos;re building and why now is the moment to
              talk about it. Short and direct works best.
            </p>

            <motion.a
              href="mailto:bill@latenightonbase.com?subject=Guest%20Inquiry"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-accent px-7 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-accent-bright"
            >
              Email Bill
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
