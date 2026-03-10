import SectionReveal from "./SectionReveal";
import { Zap, Users, Globe, TrendingUp } from "lucide-react";

const pillars = [
  { icon: Zap, title: "Technical Advisory", desc: "Direct access to our network of 200+ CTOs and technical advisors." },
  { icon: Users, title: "Talent Network", desc: "We've placed 500+ executive hires across our portfolio." },
  { icon: Globe, title: "Global Expansion", desc: "Offices in SF, London, Singapore, and Tel Aviv for market entry support." },
  { icon: TrendingUp, title: "Growth Capital", desc: "Dedicated growth fund for follow-on investments through IPO." },
];

const ValueCreation = () => (
  <section className="section-padding bg-muted/30">
    <div className="max-w-7xl mx-auto px-6">
      <SectionReveal>
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Value Add</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight">
            Beyond Capital
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-xl mx-auto">
            We're operators turned investors. Our platform accelerates portfolio companies from seed to scale.
          </p>
        </div>
      </SectionReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((p, i) => (
          <SectionReveal key={p.title} delay={i * 0.1}>
            <div className="p-8 border border-border rounded-sm bg-background hover:border-primary/20 transition-all duration-500 group">
              <p.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-display font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ValueCreation;
