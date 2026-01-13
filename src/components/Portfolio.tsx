import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Plane, LayoutDashboard, ChefHat } from "lucide-react";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "Travel Booking Website",
      category: "UI/UX Design",
      icon: Plane,
      color: "from-orange-500 to-rose-500",
      description:
        "End-to-end UX design covering search, listing, and booking flows with intuitive navigation.",
      highlights: [
        "User personas & journey mapping",
        "Low-fidelity wireframes → high-fidelity UI",
        "Responsive and accessibility-friendly design",
        "Focus on minimal booking friction",
      ],
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      category: "UI/UX Design",
      icon: LayoutDashboard,
      color: "from-blue-500 to-cyan-500",
      description:
        "Productivity-focused dashboard design with structured user flows to reduce cognitive load.",
      highlights: [
        "Reusable component-based design system",
        "Strong emphasis on spacing and clarity",
        "Optimized information hierarchy",
        "Dark & light theme support",
      ],
    },
    {
      id: 3,
      title: "Recipe App",
      category: "UI/UX Design",
      icon: ChefHat,
      color: "from-green-500 to-emerald-500",
      description:
        "Clean, modern UI with focus on discoverability and ease of use for food enthusiasts.",
      highlights: [
        "Visually rich cards & smooth transitions",
        "Playful interactions & micro-animations",
        "Search & filter functionality",
        "Save & share recipes feature",
      ],
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Selected Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each project is a story of solving real problems through thoughtful design.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Left - Project info */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                      >
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-6">{project.description}</p>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-primary font-medium w-fit"
                    >
                      View Case Study
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Right - Highlights */}
                  <div className="flex items-center">
                    <div className="w-full p-6 rounded-2xl bg-secondary/50 border border-border">
                      <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                        Key Highlights
                      </p>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                            className="flex items-start gap-3 text-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-foreground">{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
