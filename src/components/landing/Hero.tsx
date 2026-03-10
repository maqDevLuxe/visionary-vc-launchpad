import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block text-xs tracking-[0.4em] uppercase text-primary font-body">
            Silicon Valley · Est. 2018
          </span>
        </motion.div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0, 1] }}
            className="text-5xl md:text-7xl lg:text-[6.5rem] font-display font-bold leading-[0.95] tracking-tight"
          >
            Investing in the
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-2">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0, 1] }}
            className="text-5xl md:text-7xl lg:text-[6.5rem] font-display font-bold leading-[0.95] tracking-tight neon-text"
          >
            <span className="gradient-text">Future</span> of Everything
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body font-light leading-relaxed"
        >
          Apex Ventures deploys transformative capital into AI, deep tech, and frontier
          technologies shaping the next century.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pitch-us"
            className="magnetic-btn px-8 py-3.5 bg-primary text-primary-foreground font-display text-sm font-medium tracking-wide rounded-sm hover:bg-primary/90 transition-colors"
          >
            Submit Your Pitch
          </a>
          <a
            href="#portfolio"
            className="magnetic-btn px-8 py-3.5 border border-border text-foreground font-display text-sm font-medium tracking-wide rounded-sm hover:border-primary/50 transition-colors"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border border-muted-foreground/40 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 bg-muted-foreground/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
