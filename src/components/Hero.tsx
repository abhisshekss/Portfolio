import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const Hero = () => {
  const services = [
    { num: "01", name: "UI Design" },
    { num: "02", name: "UX Research" },
    { num: "03", name: "Prototyping" },
    { num: "04", name: "Design Systems" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center section-padding pt-32"
    >
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-muted-foreground mb-4"
            >
              Hey, I'm a
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8"
            >
              <span className="gradient-text">UI/UX</span>
              <br />
              Designer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg max-w-md mb-8"
            >
              Crafting intuitive, scalable, and user-centered digital experiences
              that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#portfolio"
                className="flex items-center gap-2 px-8 py-4 gradient-bg rounded-full text-primary-foreground font-medium glow-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Work
                <ArrowUpRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Right content - services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full border border-primary/20" />
              <div className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full border border-primary/30" />
              
              <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border">
                <p className="text-muted-foreground text-sm mb-6">What I do</p>
                <div className="grid grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.num}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <span className="text-primary text-sm font-medium">#{service.num}</span>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {service.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
