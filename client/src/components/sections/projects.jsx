import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);

  const mainProject = PROJECTS.find(p => p.type === "main");
  const additionalProjects = PROJECTS.filter(p => p.type === "additional");

  return (
    <section id="projects" className="py-20 bg-portfolio-secondary/50 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Code Symbols */}
        {["{ }", "< />", "( )", "[ ]"].map((symbol, index) => (
          <motion.div
            key={symbol}
            className="absolute text-portfolio-accent/10 text-6xl font-mono font-bold"
            style={{
              left: `${15 + index * 20}%`,
              top: `${20 + index * 15}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + index * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="hologram-text">Featured</span>{" "}
          <span className="text-portfolio-accent text-glow">Projects</span>
        </motion.h2>

        <div className="max-w-7xl mx-auto">
          {/* Main Project - Hero Card */}
          {mainProject && (
            <motion.div 
              className="relative mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="project-card glass-effect p-8 md:p-12 rounded-3xl relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Holographic Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-portfolio-accent/30 cyber-border"></div>
                
                {/* Corner Markers */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-portfolio-accent"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-portfolio-accent"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-portfolio-accent"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-portfolio-accent"></div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Interactive 3D Mockup */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <motion.div 
                      className="relative perspective-1000"
                      whileHover={{ rotateY: 15, rotateX: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Main Screen */}
                      <div className="bg-gradient-to-br from-portfolio-accent to-portfolio-highlight p-2 rounded-2xl shadow-2xl">
                        <div className="bg-portfolio-primary rounded-xl overflow-hidden">
                          {/* Browser Header */}
                          <div className="bg-portfolio-secondary/80 p-4 flex items-center justify-between">
                            <div className="flex space-x-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="text-xs text-portfolio-neutral bg-portfolio-primary/50 px-3 py-1 rounded-full">
                              KCPL Admin Dashboard
                            </div>
                          </div>
                          
                          {/* Screen Content */}
                          <div className="p-6">
                            <motion.div 
                              className="space-y-4"
                              animate={{
                                scale: [1, 1.02, 1],
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="bg-portfolio-accent/20 h-4 rounded w-1/3"></div>
                                <div className="bg-portfolio-highlight/30 h-6 w-6 rounded-full"></div>
                              </div>
                              <div className="bg-portfolio-highlight/20 h-3 rounded w-3/4"></div>
                              <div className="grid grid-cols-3 gap-3">
                                <motion.div 
                                  className="bg-portfolio-accent/30 h-16 rounded-lg flex items-center justify-center"
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                  <i className="fas fa-users text-portfolio-accent"></i>
                                </motion.div>
                                <motion.div 
                                  className="bg-portfolio-highlight/30 h-16 rounded-lg flex items-center justify-center"
                                  whileHover={{ scale: 1.1, rotate: -5 }}
                                >
                                  <i className="fas fa-chart-pie text-portfolio-highlight"></i>
                                </motion.div>
                                <motion.div 
                                  className="bg-portfolio-neutral/30 h-16 rounded-lg flex items-center justify-center"
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                  <motion.i 
                                    className="fas fa-cog text-portfolio-neutral"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                  />
                                </motion.div>
                              </div>
                              <div className="bg-portfolio-accent/10 h-20 rounded-lg flex items-center justify-center">
                                <motion.div
                                  className="w-12 h-12 border-4 border-portfolio-accent border-t-transparent rounded-full"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <motion.div
                        className="absolute -top-4 -right-4 w-8 h-8 bg-portfolio-highlight rounded-full flex items-center justify-center text-xs text-white font-bold"
                        animate={{ 
                          y: [-5, 5, -5],
                          boxShadow: [
                            "0 0 10px var(--portfolio-highlight)",
                            "0 0 20px var(--portfolio-highlight)",
                            "0 0 10px var(--portfolio-highlight)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        JS
                      </motion.div>
                      <motion.div
                        className="absolute -bottom-4 -left-4 w-8 h-8 bg-portfolio-accent rounded-full flex items-center justify-center text-xs text-white font-bold"
                        animate={{ 
                          y: [5, -5, 5],
                          boxShadow: [
                            "0 0 10px var(--portfolio-accent)",
                            "0 0 20px var(--portfolio-accent)",
                            "0 0 10px var(--portfolio-accent)"
                          ]
                        }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        ⚛️
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Project Details */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <div>
                      <motion.h3 
                        className="text-4xl font-bold mb-4 hologram-text"
                        whileHover={{ scale: 1.05 }}
                      >
                        {mainProject.title}
                      </motion.h3>
                      <p className="text-lg text-portfolio-neutral leading-relaxed">
                        {mainProject.description}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-portfolio-accent cyber-border inline-block pr-4">
                        Core Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {mainProject.features?.map((feature, idx) => (
                          <motion.div 
                            key={idx}
                            className="flex items-center group"
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.8 + (0.1 * idx) }}
                            whileHover={{ x: 10 }}
                          >
                            <motion.i 
                              className="fas fa-chevron-right text-portfolio-accent mr-3 group-hover:text-portfolio-highlight transition-colors"
                              whileHover={{ rotate: 90 }}
                            />
                            <span className="text-portfolio-neutral group-hover:text-portfolio-text transition-colors">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-portfolio-highlight">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {mainProject.technologies.map((tech, idx) => (
                          <motion.span
                            key={tech}
                            className="bg-gradient-to-r from-portfolio-accent/20 to-portfolio-highlight/20 text-portfolio-accent px-4 py-2 rounded-full text-sm font-medium border border-portfolio-accent/30 cyber-border"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 1 + (0.1 * idx) }}
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: "rgba(147, 51, 234, 0.3)",
                              boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)"
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4 pt-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="bg-gradient-to-r from-portfolio-accent to-portfolio-highlight hover:from-portfolio-highlight hover:to-portfolio-accent text-white px-6 py-3 rounded-full font-semibold neon-glow">
                          <i className="fas fa-external-link-alt mr-2"></i>
                          Live Demo
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="outline" className="border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-6 py-3 rounded-full font-semibold cyber-border">
                          <i className="fab fa-github mr-2"></i>
                          Source Code
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Additional Projects - 3D Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 + (0.2 * index) }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <motion.div
                  className="project-card glass-effect p-8 rounded-2xl relative overflow-hidden h-full"
                  whileHover={{ 
                    rotateX: 10,
                    rotateY: 10,
                    scale: 1.05,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/20 to-portfolio-highlight/20 rounded-2xl opacity-0"
                    animate={{ 
                      opacity: hoveredProject === index ? 0.7 : 0,
                      scale: hoveredProject === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div 
                      className="bg-gradient-to-br from-portfolio-highlight to-portfolio-accent p-6 rounded-xl mb-6 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <i className={`fas ${index === 0 ? 'fa-mobile-alt' : 'fa-chart-line'} text-4xl text-white`}></i>
                    </motion.div>
                    
                    <motion.h4 
                      className="text-2xl font-bold mb-4 text-portfolio-text"
                      animate={{ 
                        color: hoveredProject === index ? "var(--portfolio-accent)" : "var(--portfolio-text)"
                      }}
                    >
                      {project.title}
                    </motion.h4>
                    
                    <p className="text-portfolio-neutral mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIdx) => (
                        <motion.span
                          key={tech}
                          className="bg-portfolio-accent/20 text-portfolio-accent px-3 py-1 rounded-full text-xs font-medium"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.5 + (techIdx * 0.1) }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(147, 51, 234, 0.4)"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 bg-portfolio-accent rounded-full flex items-center justify-center"
                    animate={{ 
                      rotate: hoveredProject === index ? 360 : 0,
                      scale: hoveredProject === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fas fa-code text-white text-xs"></i>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}