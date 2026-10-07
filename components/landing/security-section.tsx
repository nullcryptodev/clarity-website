"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "BFT consensus",
    description:
      "Tolerates one-third of validators being faulty. Quorum requires two-thirds plus one. No single party can advance the chain alone.",
  },
  {
    icon: Lock,
    title: "Automatic slashing",
    description:
      "A validator that signs two conflicting votes loses stake and future earnings. Enforcement is mathematical, not a vote.",
  },
  {
    icon: Eye,
    title: "Verifiable state",
    description:
      "Every value is provable against a Merkle root. A client holding only a state root can verify without trusting the server that answered.",
  },
  {
    icon: FileCheck,
    title: "Immutable history",
    description:
      "Every committed block is final. No reorgs, no fork choice, no probabilistic settlement. History cannot be rewritten.",
  },
];

const properties = [
  "BFT",
  "Slashing",
  "Merkle proofs",
  "Ed25519",
  "Immediate finality",
];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="security"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Guarantees
            </span>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              Security is
              <br />
              <span className="text-muted-foreground">{' the design.'}</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              These aren&apos;t features that can be enabled or disabled. They&apos;re
              properties of the protocol itself — enforced by consensus rules, not by
              policy.
            </p>

            {/* Properties */}
            <div className="flex flex-wrap gap-3">
              {properties.map((property, index) => (
                <span
                  key={property}
                  className={`px-4 py-2 border border-foreground/10 text-sm font-mono transition-all duration-500 ${isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                    }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  {property}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Features */}
          <div className="grid gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 group ${isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}