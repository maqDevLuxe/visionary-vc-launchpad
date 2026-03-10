import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { ArrowUpRight } from "lucide-react";

const Footer = () => (
  <section id="pitch-us">
    {/* CTA */}
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionReveal>
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Ready?</span>
          <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.05]">
            Let's build the <br />
            <span className="neon-text text-primary">future together.</span>
          </h2>
          <p className="mt-6 text-muted-foreground font-body text-lg max-w-lg mx-auto">
            We back exceptional founders at the earliest stages.
            If you're building something transformative, we want to hear from you.
          </p>
          <motion.a
            href="mailto:pitch@apexventures.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 mt-10 px-10 py-4 bg-primary text-primary-foreground font-display text-sm font-medium tracking-wide rounded-sm hover:bg-primary/90 transition-colors"
          >
            Submit Your Pitch <ArrowUpRight size={16} />
          </motion.a>
        </SectionReveal>
      </div>
    </div>

    {/* Footer */}
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-lg font-semibold tracking-tight">
              APEX<span className="text-primary">.</span>
            </span>
            <p className="mt-1 text-xs text-muted-foreground font-body">
              © 2026 Apex Ventures. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-8 text-xs text-muted-foreground font-body">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  </section>
);

export default Footer;
