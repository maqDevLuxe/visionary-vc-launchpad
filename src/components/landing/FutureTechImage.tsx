import { motion } from "framer-motion";
import futureTech from "@/assets/future-tech.jpg";

const FutureTechImage = () => (
  <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
    <motion.div
      initial={{ scale: 1.1 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: [0.25, 0.1, 0, 1] }}
      className="absolute inset-0"
    >
      <img
        src={futureTech}
        alt="Futuristic architecture representing innovation"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.1em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.35em" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-xs uppercase text-foreground/70 font-body tracking-widest"
      >
        Building Tomorrow's Infrastructure
      </motion.p>
    </div>
  </section>
);

export default FutureTechImage;
