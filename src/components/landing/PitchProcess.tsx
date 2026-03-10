import SectionReveal from "./SectionReveal";

const steps = [
  { step: "01", title: "Submit", desc: "Send your deck via our portal. We review every submission within 72 hours." },
  { step: "02", title: "Deep Dive", desc: "Selected founders join a 60-minute technical deep-dive with our partners." },
  { step: "03", title: "Due Diligence", desc: "Our team conducts thorough market, tech, and team diligence in 2 weeks." },
  { step: "04", title: "Term Sheet", desc: "Conviction-driven offers. Clear terms. Founder-friendly structures." },
];

const PitchProcess = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto px-6">
      <SectionReveal>
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Process</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight">
            How We Invest
          </h2>
        </div>
      </SectionReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <SectionReveal key={s.step} delay={i * 0.1}>
            <div className="relative">
              <span className="text-6xl font-display font-bold text-primary/10">{s.step}</span>
              <h3 className="mt-2 text-lg font-display font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 border-t border-border" />
              )}
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PitchProcess;
