import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const testimonials = [
  {
    quote: "Apex didn't just write a check—they rewired our entire go-to-market strategy and introduced us to the CTO who became our co-founder.",
    name: "James Liu",
    title: "CEO, NeuralPath AI (Acquired by Google)",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "In a sea of VCs who talk about being 'founder-friendly,' Apex actually shows up. Their technical diligence made our Series A seamless.",
    name: "Priya Sharma",
    title: "CTO, QuantumSecure (IPO, NASDAQ)",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "They gave us the conviction to ignore the noise and build something truly transformative. Best partners we could ask for.",
    name: "Erik Johansson",
    title: "Founder, LunarGrid",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  },
];

const Testimonials = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto px-6">
      <SectionReveal>
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Testimonials</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight">
            Founder Voices
          </h2>
        </div>
      </SectionReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="p-8 border border-border rounded-sm bg-card/40"
          >
            <p className="text-sm text-foreground/80 font-body leading-relaxed italic">
              "{t.quote}"
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
              <div>
                <p className="text-sm font-display font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground font-body">{t.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
