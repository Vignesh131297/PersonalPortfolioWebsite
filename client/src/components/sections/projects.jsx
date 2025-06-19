import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mainProject = PROJECTS.find(p => p.type === "main");
  const additionalProjects = PROJECTS.filter(p => p.type === "additional");

  return (
    <section id="projects" className="py-20 bg-portfolio-secondary/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured <span className="text-portfolio-accent">Projects</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          {/* Main Project */}
          {mainProject && (
            <motion.div 
              className="project-card glass-effect p-8 rounded-xl mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Project Mockup */}
                  <div className="bg-gradient-to-br from-portfolio-accent to-portfolio-highlight p-1 rounded-xl">
                    <div className="bg-portfolio-secondary p-1 rounded-lg overflow-hidden">
                      <div className="aspect-video w-full rounded-lg shadow-lg overflow-hidden bg-white">
                        <img
                          src="/attached_assets/image.png"
                          alt="Dashboard Preview"
                          className="w-full h-full object-fit"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3 className="text-3xl font-bold mb-4 text-portfolio-accent">
                    {mainProject.title}
                  </h3>
                  <p className="text-lg text-portfolio-neutral mb-6 leading-relaxed">
                    {mainProject.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3 text-portfolio-text">Key Features:</h4>
                    <ul className="space-y-2 text-portfolio-neutral">
                      {mainProject.features?.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          className="flex items-center"
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.8 + (0.1 * idx) }}
                        >
                          <i className="fas fa-check text-portfolio-accent mr-3"></i>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {mainProject.technologies.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        className="bg-portfolio-accent/20 text-portfolio-accent px-3 py-1 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 1 + (0.1 * idx) }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                   
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Additional Projects */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card glass-effect p-6 rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 + (0.2 * index) }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <div className="bg-gradient-to-br from-portfolio-highlight to-portfolio-accent p-4 rounded-lg mb-4">
                    <i className={`fas ${index === 0 ? 'fa-mobile-alt' : 'fa-chart-line'} text-3xl text-white`}></i>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-portfolio-text">{project.title}</h4>
                  <p className="text-portfolio-neutral text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={tech}
                        className="bg-portfolio-accent/20 text-portfolio-accent px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
