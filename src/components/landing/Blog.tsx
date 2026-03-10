import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "AI",
    title: "Why Foundation Models Will Reshape Every Industry by 2028",
    date: "Mar 2026",
    read: "8 min",
  },
  {
    tag: "Climate",
    title: "The $10T Opportunity in Industrial Decarbonization",
    date: "Feb 2026",
    read: "12 min",
  },
  {
    tag: "Thesis",
    title: "Our 2026 Investment Outlook: Conviction Over Consensus",
    date: "Jan 2026",
    read: "6 min",
  },
];

const Blog = () => (
  <section id="insights" className="section-padding">
    <div className="max-w-7xl mx-auto px-6">
      <SectionReveal>
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Insights</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight">
              VC Perspectives
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm text-primary font-body hover:underline">
            All Articles <ArrowUpRight size={14} />
          </a>
        </div>
      </SectionReveal>
      <div className="space-y-0 divide-y divide-border">
        {posts.map((p, i) => (
          <motion.a
            key={p.title}
            href="#"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col md:flex-row md:items-center justify-between py-8 gap-4"
          >
            <div className="flex items-center gap-4 flex-1">
              <span className="text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/30 px-2 py-1 rounded-sm font-body">
                {p.tag}
              </span>
              <h3 className="text-lg md:text-xl font-display font-medium group-hover:text-primary transition-colors duration-300">
                {p.title}
              </h3>
            </div>
            <div className="flex items-center gap-6 text-xs text-muted-foreground font-body">
              <span>{p.date}</span>
              <span>{p.read}</span>
              <ArrowUpRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
