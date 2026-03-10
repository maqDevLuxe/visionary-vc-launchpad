import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Brain, Shield, Cpu, Leaf, Satellite, Dna } from "lucide-react";

const areas = [
  { icon: Brain, title: "Artificial Intelligence", desc: "Foundation models, autonomous agents, and applied ML." },
  { icon: Shield, title: "Cybersecurity", desc: "Zero-trust architectures and quantum-safe cryptography." },
  { icon: Cpu, title: "Semiconductors", desc: "Next-gen chip design and edge computing silicon." },
  { icon: Leaf, title: "Climate Tech", desc: "Fusion energy, carbon capture, and sustainable materials." },
  { icon: Satellite, title: "Space Tech", desc: "LEO communications, orbital infrastructure, and propulsion." },
  { icon: Dna, title: "Biotech & Synbio", desc: "Computational drug discovery and synthetic biology platforms." },
];

const FocusAreas = () => (
  <section className="section-padding bg-muted/30">
    <div className="max-w-7xl mx-auto px-6">
      <SectionReveal>
        <div className="text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Focus</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight">
            AI & Deep Tech Verticals
          </h2>
        </div>
      </SectionReveal>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {areas.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-background p-8 group hover:bg-card/80 transition-colors duration-500"
          >
            <a.icon className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
            <h3 className="mt-5 text-lg font-display font-semibold">{a.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground font-body">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FocusAreas;
