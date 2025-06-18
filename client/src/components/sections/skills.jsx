import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { SKILLS, ADDITIONAL_SKILLS } from "@/lib/constants";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimateSkills(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section id="skills" className="py-20 bg-portfolio-secondary/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-portfolio-accent">Skills</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass-effect p-8 rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-6">
                  <i className={`${skill.icon} text-3xl ${skill.color} mr-4`}></i>
                  <h3 className="text-xl font-bold text-portfolio-text">{skill.name}</h3>
                </div>
                
                <div className="w-full bg-portfolio-neutral/20 rounded-full h-3 mb-4">
                  <motion.div 
                    className="skill-bar h-3 rounded-full"
                    style={{ backgroundColor: `var(--portfolio-accent)` }}
                    initial={{ width: 0 }}
                    animate={animateSkills ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 2, delay: 0.5 + (0.1 * index) }}
                  />
                </div>
                
                <span className="text-sm text-portfolio-neutral">
                  {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-portfolio-text">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {ADDITIONAL_SKILLS.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="bg-portfolio-accent/20 text-portfolio-accent px-4 py-2 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + (0.1 * index) }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}