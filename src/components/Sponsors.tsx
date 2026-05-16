"use client";

import { motion } from "framer-motion";

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
      className="relative py-24 md:py-32 border-t border-border"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
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
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border ${
                tier.highlight
                  ? "border-accent/30 bg-accent/[0.03]"
                  : "border-border bg-surface/30"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-8">
                  <span className="text-xs px-3 py-1 rounded-full bg-accent text-white font-medium">
                    Premier
                  </span>
                </div>
              )}

              <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-sm text-muted mb-6 leading-relaxed">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
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
                  </li>
                ))}
              </ul>

              <a
                href="mailto:bill@latenightonbase.com?subject=Sponsorship Inquiry"
                className={`inline-flex items-center justify-center w-full py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  tier.highlight
                    ? "bg-accent hover:bg-accent-bright text-white"
                    : "border border-border hover:border-muted text-foreground bg-surface/50"
                }`}
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
