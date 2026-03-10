import SectionReveal from "./SectionReveal";

const pillars = [
  { num: "01", title: "Category Creators", desc: "We invest in founders defining entirely new markets, not competing in existing ones." },
  { num: "02", title: "Technical Moats", desc: "Deep technology barriers—proprietary algorithms, patents, and network effects—are non-negotiable." },
  { num: "03", title: "Global Scale", desc: "From day one, our portfolio companies are engineered for planetary-scale impact." },
];

const Thesis = () => (
  <section id="thesis" className="section-padding">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <SectionReveal>
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Our Thesis</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.05]">
            Capital with <br />
            <span className="gradient-text">conviction.</span>
          </h2>
          <p className="mt-6 text-muted-foreground font-body text-lg leading-relaxed max-w-md">
            We don't follow trends. We identify paradigm shifts before they become obvious—and back
            the visionaries driving them.
          </p>
        </SectionReveal>
        <div className="space-y-8">
          {pillars.map((p, i) => (
            <SectionReveal key={p.num} delay={i * 0.15}>
              <div className="flex gap-6 group">
                <span className="text-3xl font-display font-bold text-primary/30 group-hover:text-primary transition-colors duration-500">
                  {p.num}
                </span>
                <div>
                  <h3 className="text-lg font-display font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Thesis;
