import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { SKILLS, ADDITIONAL_SKILLS } from "@/lib/constants";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animateSkills, setAnimateSkills] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimateSkills(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section id="skills" className="py-20 bg-portfolio-secondary/50 relative overflow-hidden" ref={ref}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 md:grid-cols-12 h-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-portfolio-accent/20"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                borderColor: [
                  "rgba(147, 51, 234, 0.1)",
                  "rgba(6, 182, 212, 0.2)",
                  "rgba(147, 51, 234, 0.1)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="hologram-text">Technical</span>{" "}
          <span className="text-portfolio-accent text-glow">Arsenal</span>
        </motion.h2>

        {/* Central Skills Orbit */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <motion.div 
            className="relative w-80 h-80 mx-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Central Hub */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-portfolio-accent to-portfolio-highlight flex items-center justify-center neon-glow"
              animate={{ 
                rotate: 360,
                boxShadow: [
                  "0 0 20px var(--portfolio-accent)",
                  "0 0 40px var(--portfolio-highlight)",
                  "0 0 20px var(--portfolio-accent)"
                ]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                boxShadow: { duration: 2, repeat: Infinity }
              }}
            >
              <i className="fas fa-code text-2xl text-white"></i>
            </motion.div>

            {/* Orbiting Skills */}
            {SKILLS.map((skill, index) => {
              const angle = (index * 360) / SKILLS.length;
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <motion.div
                  key={skill.name}
                  className="absolute w-16 h-16 rounded-full cursor-pointer group"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: 1,
                    rotate: -360
                  } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + index * 0.1,
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  whileHover={{ 
                    scale: 1.5,
                    rotate: 0,
                    zIndex: 10
                  }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  {/* Skill Orb */}
                  <motion.div 
                    className="w-full h-full rounded-full bg-gradient-to-br from-portfolio-accent/80 to-portfolio-highlight/80 flex items-center justify-center border-2 border-portfolio-accent/50 backdrop-blur-sm"
                    animate={{
                      boxShadow: hoveredSkill?.name === skill.name ? [
                        "0 0 20px var(--portfolio-accent)",
                        "0 0 40px var(--portfolio-accent)",
                        "0 0 60px var(--portfolio-accent)"
                      ] : "0 0 10px var(--portfolio-accent)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className={`${skill.icon} ${skill.color} text-lg`}></i>
                  </motion.div>

                  {/* Floating Tooltip */}
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-portfolio-secondary/90 text-portfolio-text px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity cyber-border"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="font-semibold">{skill.name}</div>
                    <div className="text-xs text-portfolio-accent">{skill.level}% Proficiency</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-portfolio-secondary/90 rotate-45"></div>
                  </motion.div>

                  {/* Connection Line to Center */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 origin-left h-0.5 bg-gradient-to-r from-portfolio-accent/50 to-transparent"
                    style={{
                      width: `${radius}px`,
                      transform: `translate(-50%, -50%) rotate(${angle + 180}deg)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  />
                </motion.div>
              );
            })}

            {/* Orbital Rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-portfolio-accent/20"
                style={{
                  width: `${80 + ring * 40}px`,
                  height: `${80 + ring * 40}px`,
                }}
                animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                transition={{ 
                  duration: 30 + ring * 10, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
              />
            ))}
          </motion.div>
        </div>

        {/* Skills Proficiency Display */}
        {hoveredSkill && (
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="glass-effect p-6 rounded-2xl text-center max-w-xs">
              <h3 className="text-2xl font-bold text-portfolio-accent mb-3">{hoveredSkill.name}</h3>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(147, 51, 234, 0.2)"
                    strokeWidth="6"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: hoveredSkill.level / 100 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{
                      strokeDasharray: `${2 * Math.PI * 40}`,
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--portfolio-accent)" />
                      <stop offset="100%" stopColor="var(--portfolio-highlight)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-portfolio-accent">{hoveredSkill.level}%</span>
                </div>
              </div>
              <p className="text-sm text-portfolio-neutral">
                {hoveredSkill.level >= 90 ? 'Expert Level' : hoveredSkill.level >= 80 ? 'Advanced' : 'Intermediate'}
              </p>
            </div>
          </motion.div>
        )}

        {/* Additional Technologies Cloud */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 hologram-text">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {ADDITIONAL_SKILLS.map((skill, index) => (
              <motion.div
                key={skill}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + (0.1 * index) }}
                whileHover={{ 
                  scale: 1.1,
                  rotateX: 15,
                  rotateY: 15,
                }}
              >
                <motion.span
                  className="block bg-gradient-to-r from-portfolio-accent/20 to-portfolio-highlight/20 text-portfolio-accent px-6 py-3 rounded-full text-sm font-medium border border-portfolio-accent/30 cyber-border floating-card"
                  whileHover={{
                    backgroundColor: "rgba(147, 51, 234, 0.1)",
                    borderColor: "rgba(147, 51, 234, 0.8)",
                    boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
                  }}
                >
                  {skill}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {["React", "JS", "CSS", "HTML"].map((tech, index) => (
            <motion.div
              key={tech}
              className="absolute text-portfolio-accent/20 font-mono text-4xl font-bold"
              style={{
                left: `${20 + index * 20}%`,
                top: `${30 + index * 15}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 5, 0, -5, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            >
              {`<${tech}/>`}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}