import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const counters = [
  { end: 2.4, suffix: "B", prefix: "$", label: "Assets Under Management" },
  { end: 87, suffix: "+", prefix: "", label: "Portfolio Companies" },
  { end: 14, suffix: "", prefix: "", label: "Successful Exits" },
  { end: 6, suffix: "", prefix: "", label: "Global Offices" },
];

const Counter = ({ end, suffix, prefix, label }: typeof counters[0]) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setVal(end);
        clearInterval(timer);
      } else {
        setVal(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center p-8">
      <div className="text-4xl md:text-6xl font-display font-bold text-foreground">
        {prefix}
        {Number.isInteger(end) ? Math.round(val) : val.toFixed(1)}
        {suffix}
      </div>
      <div className="mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground font-body">
        {label}
      </div>
    </div>
  );
};

const AUMCounters = () => (
  <section className="section-padding bg-muted/30">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {counters.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Counter {...c} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AUMCounters;
