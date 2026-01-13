import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users, Lightbulb, Code } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Users,
      title: "Cross-functional Collaboration",
      description: "Worked closely with developers to ensure design feasibility and implementation accuracy.",
    },
    {
      icon: Lightbulb,
      title: "Design Thinking",
      description: "Applied user-centered design methodology to solve complex UX challenges.",
    },
    {
      icon: Code,
      title: "Developer Handoff",
      description: "Created detailed specifications and design documentation for seamless handoff.",
    },
  ];

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {/* Experience item */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative grid md:grid-cols-2 gap-8 md:gap-16"
          >
            {/* Left side - Title */}
            <div className="md:text-right md:pr-16">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Briefcase className="w-4 h-4" />
                Internship
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                UI/UX Design Intern
              </h3>
              <p className="text-xl text-primary font-medium mb-2">Tibura Solutions</p>
              <p className="text-muted-foreground">Gained real-world exposure to product design workflows</p>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-4 h-4 rounded-full gradient-bg border-4 border-background"
              />
            </div>

            {/* Right side - Highlights */}
            <div className="md:pl-16 pl-16 md:pl-16">
              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
