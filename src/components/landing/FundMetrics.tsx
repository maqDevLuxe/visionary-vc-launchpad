import SectionReveal from "./SectionReveal";

const metrics = [
  { value: "3.8x", label: "Average Fund Multiple" },
  { value: "42%", label: "Gross IRR" },
  { value: "94%", label: "Follow-on Rate" },
  { value: "12", label: "Unicorns Created" },
];

const FundMetrics = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto px-6">
      <SectionReveal>
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Performance</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight">
            Fund Performance
          </h2>
        </div>
      </SectionReveal>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border neon-border rounded-sm overflow-hidden">
        {metrics.map((m, i) => (
          <SectionReveal key={m.label} delay={i * 0.1}>
            <div className="bg-background p-8 md:p-12 text-center">
              <div className="text-4xl md:text-5xl font-display font-bold neon-text text-primary">
                {m.value}
              </div>
              <div className="mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground font-body">
                {m.label}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FundMetrics;
