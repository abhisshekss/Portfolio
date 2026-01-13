import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Navigation = () => {
  const navItems = ["Home", "About", "Skills", "Portfolio", "Experience", "Contact"];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <motion.a
          href="#home"
          className="font-display text-xl font-bold text-foreground"
          whileHover={{ scale: 1.05 }}
        >
          Abhisshek<span className="text-primary">.</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#contact"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Get in touch
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
