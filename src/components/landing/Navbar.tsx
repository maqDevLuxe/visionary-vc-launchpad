import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["Portfolio", "Thesis", "Team", "Insights", "Pitch Us"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-surface"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-semibold tracking-tight">
          APEX<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-body tracking-wide"
            >
              {l}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass-surface border-t border-border px-6 pb-6"
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
