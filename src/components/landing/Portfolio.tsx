import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const companies = [
  { name: "NeuralPath AI", status: "Acquired by Google · $2.1B", sector: "Artificial Intelligence" },
  { name: "QuantumSecure", status: "IPO · NASDAQ · $4.8B", sector: "Cybersecurity" },
  { name: "Helix Robotics", status: "Series D · $890M Valuation", sector: "Robotics" },
  { name: "Synthex Bio", status: "Acquired by Pfizer · $1.6B", sector: "Biotech" },
  { name: "AetherCloud", status: "IPO · NYSE · $7.2B", sector: "Cloud Infrastructure" },
  { name: "LunarGrid", status: "Series C · $420M Valuation", sector: "Clean Energy" },
];

const Portfolio = () => (
  <section id="portfolio" className="section-padding">
    <div className="max-w-7xl mx-auto px-6">
      <SectionReveal>
        <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Portfolio</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight">
          Notable Exits & Companies
        </h2>
      </SectionReveal>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companies.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0, 1] }}
            whileHover={{ y: -4 }}
            className="group p-6 border border-border rounded-sm bg-card/40 hover:border-primary/30 transition-all duration-500"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-primary/70 font-body">
              {c.sector}
            </span>
            <h3 className="mt-3 text-xl font-display font-semibold group-hover:text-primary transition-colors duration-300">
              {c.name}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground font-body">{c.status}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
