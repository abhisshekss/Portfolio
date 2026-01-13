import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Sparkles } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Behind the Designs
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Shaping Experiences That Make Life{" "}
              <span className="gradient-text">Simpler</span>
            </h2>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="p-3 rounded-xl gradient-bg">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1">
                  B.Tech in Computer Science
                </h3>
                <p className="text-muted-foreground text-sm">
                  Blockchain Specialization
                </p>
                <p className="text-muted-foreground text-sm">
                  Vellore Institute of Technology, AP
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I'm a product designer focused on building clean, intuitive interfaces
                that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                UI/UX Designer with hands-on experience in user-centered design,
                wireframing, UX research, and high-fidelity prototyping using Figma.
                Strong understanding of usability, accessibility, and design systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Certified in UI/UX design and actively building design-focused case
                studies that demonstrate my ability to craft meaningful digital
                experiences.
              </p>

              <motion.div
                className="flex items-center gap-4 pt-4"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-2 text-primary">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium">Let's Build Something Meaningful Together</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
