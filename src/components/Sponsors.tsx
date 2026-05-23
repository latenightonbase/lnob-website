"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const tiers = [
  {
    name: "Presenting Sponsor",
    description:
      "Premier brand placement across all episodes, social channels, and live broadcasts. Full integration into the show experience.",
    features: [
      "Title card placement on every episode",
      "Dedicated sponsor segment during live shows",
      "Logo on all social media assets",
      "Custom co-branded content series",
      "Direct audience engagement opportunities",
    ],
    highlight: true,
  },
  {
    name: "Supporter Sponsor",
    description:
      "Meaningful brand presence with recurring visibility across the show's growing audience.",
    features: [
      "Logo placement on episodes",
      "Mentions during live broadcasts",
      "Social media cross-promotion",
      "Audience analytics reporting",
    ],
    highlight: false,
  },
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
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
            Partnerships
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Partner With Late Night
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Reach an engaged audience of builders, founders, and decision-makers
            at the frontier of technology. Limited sponsorship slots to maintain
            exclusivity.
          </p>
        </motion.div>

        {/* Tiers */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className={`relative flex h-full flex-col rounded-2xl border p-7 transition-colors duration-300 sm:p-8 ${
                tier.highlight
                  ? "border-accent/35 bg-accent/[0.04] shadow-[0_24px_100px_rgba(59,130,246,0.08)]"
                  : "border-border bg-surface/30 hover:bg-surface/45"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-8">
                  <span className="text-xs px-3 py-1 rounded-full bg-accent text-white font-medium">
                    Premier
                  </span>
                </div>
              )}

              <h3 className="mb-2 text-xl font-semibold">{tier.name}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted">
                {tier.description}
              </p>

              <motion.ul variants={staggerContainer} className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <motion.li
                    key={feature}
                    variants={staggerItem}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <svg
                      className="w-4 h-4 text-accent mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.a
                href="mailto:bill@latenightonbase.com?subject=Sponsorship Inquiry"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center justify-center w-full py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  tier.highlight
                    ? "bg-accent hover:bg-accent-bright text-white"
                    : "border border-border hover:border-muted text-foreground bg-surface/50"
                }`}
              >
                Inquire Now
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
