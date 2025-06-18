import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCE } from "@/lib/constants";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Work <span className="text-portfolio-accent">Experience</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-portfolio-accent"></div>
            
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                className="relative timeline-item pl-20 mb-12"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 * index }}
              >
                <motion.div 
                  className="glass-effect p-8 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-portfolio-accent">{exp.title}</h3>
                    <span className="text-portfolio-neutral font-medium">
                      {exp.current && <span className="text-portfolio-highlight mr-2">●</span>}
                      {exp.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-portfolio-highlight mb-4">
                    {exp.company}
                  </h4>
                  
                  <ul className="text-portfolio-neutral space-y-2 mb-6">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + (0.1 * idx) }}
                      >
                        <i className="fas fa-check-circle text-portfolio-accent mr-3 mt-1"></i>
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        className="bg-portfolio-accent/20 text-portfolio-accent px-3 py-1 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.8 + (0.1 * idx) }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}