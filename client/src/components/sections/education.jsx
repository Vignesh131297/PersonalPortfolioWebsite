import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { EDUCATION, CERTIFICATIONS } from "@/lib/constants";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Education & <span className="text-portfolio-accent">Certifications</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div 
              className="glass-effect p-8 rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-portfolio-accent p-3 rounded-full mr-4">
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-portfolio-text">Education</h3>
              </div>
              
              <div className="border-l-4 border-portfolio-accent pl-6">
                <h4 className="text-xl font-bold text-portfolio-accent mb-2">
                  {EDUCATION.degree}
                </h4>
                <p className="text-lg font-semibold text-portfolio-highlight mb-2">
                  {EDUCATION.university}
                </p>
                <p className="text-portfolio-neutral mb-4">{EDUCATION.period}</p>
                <p className="text-sm text-portfolio-neutral">
                  {EDUCATION.description}
                </p>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div 
              className="glass-effect p-8 rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-portfolio-highlight p-3 rounded-full mr-4">
                  <i className="fas fa-certificate text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-portfolio-text">Certifications</h3>
              </div>
              
              <div className="space-y-6">
                {CERTIFICATIONS.map((cert, index) => (
                  <motion.div 
                    key={cert.title}
                    className="border-l-4 border-portfolio-highlight pl-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + (0.2 * index) }}
                  >
                    <h4 className="text-lg font-bold text-portfolio-highlight mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-portfolio-neutral text-sm mb-2">
                      {cert.institution}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {cert.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          className="bg-portfolio-accent/20 text-portfolio-accent px-2 py-1 rounded text-xs"
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
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}