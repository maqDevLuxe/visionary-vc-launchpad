import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const partners = [
  {
    name: "Elena Vasquez",
    role: "Managing Partner",
    bio: "Former CTO at Stripe. 15 years in deep tech investing. Stanford CS, MIT MBA.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Marcus Chen",
    role: "General Partner",
    bio: "Ex-Google DeepMind. Led $4B+ in exits across AI and robotics. Caltech PhD.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Sofia Andersson",
    role: "Partner, Climate & Bio",
    bio: "Founded two climate unicorns. Board advisor to EU Green Deal. Oxford DPhil.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
  },
];

const Partners = () => (
  <section id="team" className="section-padding bg-muted/30">
    <div className="max-w-7xl mx-auto px-6">
      <SectionReveal>
        <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Leadership</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight">The Partners</h2>
      </SectionReveal>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {partners.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-sm aspect-[4/5]">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-display font-semibold">{p.name}</h3>
                <p className="text-sm text-primary font-body mt-1">{p.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground font-body leading-relaxed">{p.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
