import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/lib/constants";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/attached_assets/Vignesh%20Arumugam%20Resume_1750228466857.pdf';
    link.download = 'Vignesh_Arumugam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <motion.div 
          className="absolute w-96 h-96 morphing-blob bg-gradient-to-r from-portfolio-accent/20 to-portfolio-highlight/20"
          style={{
            left: mousePosition.x * 0.02 + 'px',
            top: mousePosition.y * 0.02 + 'px',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Hexagons */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 border-2 border-portfolio-accent/30"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              rotate: [0, 360],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-portfolio-accent/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Holographic Frame */}
        <motion.div 
          className="cyber-border glass-effect p-12 rounded-3xl relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-portfolio-accent"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-portfolio-accent"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-portfolio-accent"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-portfolio-accent"></div>

          {/* Floating Avatar */}
          <motion.div 
            className="mb-8 relative"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-32 h-32 mx-auto relative">
              <motion.div 
                className="skill-orb"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-portfolio-accent to-portfolio-highlight flex items-center justify-center">
                  <i className="fas fa-user text-3xl text-white"></i>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Glitch Effect Name */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-portfolio-text">Hi, I'm</span>
            <motion.div 
              className="relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5, delay: 0.5 }}
            >
              <span className="hologram-text block text-transparent bg-clip-text bg-gradient-to-r from-portfolio-accent via-portfolio-highlight to-portfolio-accent">
                {PERSONAL_INFO.name}
              </span>
              <motion.div 
                className="absolute top-0 right-0 w-1 h-full bg-portfolio-accent"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </motion.h1>
          
          {/* Animated Title with Neon Effect */}
          <motion.div 
            className="text-2xl md:text-3xl text-portfolio-neutral mb-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.span 
              className="text-glow"
              animate={{ 
                textShadow: [
                  "0 0 10px var(--portfolio-accent)",
                  "0 0 20px var(--portfolio-accent), 0 0 30px var(--portfolio-highlight)",
                  "0 0 10px var(--portfolio-accent)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {PERSONAL_INFO.title}
            </motion.span>
            
            {/* Floating Code Symbols */}
            <motion.div 
              className="absolute -top-4 -right-4 text-portfolio-accent/50"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              &lt;/&gt;
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 text-portfolio-highlight/50"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              {"{ }"}
            </motion.div>
          </motion.div>
          
          {/* Description with Typewriter Effect */}
          <motion.p 
            className="text-lg text-portfolio-neutral max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Crafting digital experiences with{" "}
            <span className="text-portfolio-accent font-semibold">React.js</span> and modern web technologies.
            Transforming ideas into interactive, responsive applications that engage users.
          </motion.p>
          
          {/* Enhanced Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={downloadResume}
                className="relative bg-gradient-to-r from-portfolio-accent to-portfolio-highlight hover:from-portfolio-highlight hover:to-portfolio-accent text-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden group"
                size="lg"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative z-10 flex items-center">
                  <i className="fas fa-download mr-2"></i>
                  Download Resume
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToProjects}
                variant="outline"
                className="relative border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-8 py-4 rounded-full font-semibold text-lg cyber-border group"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  <motion.i 
                    className="fas fa-rocket mr-2"
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  View Projects
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div 
            className="flex justify-center space-x-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            {[
              { icon: "fab fa-react", name: "React" },
              { icon: "fab fa-js", name: "JavaScript" },
              { icon: "fab fa-html5", name: "HTML5" },
              { icon: "fab fa-css3-alt", name: "CSS3" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="relative group"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-portfolio-accent/20 to-portfolio-highlight/20 flex items-center justify-center border border-portfolio-accent/30">
                  <i className={`${tech.icon} text-xl text-portfolio-accent`}></i>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-portfolio-neutral opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-portfolio-accent/70 text-sm mb-2">Scroll Down</div>
        <motion.div 
          className="w-6 h-10 border-2 border-portfolio-accent rounded-full flex justify-center"
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(147, 51, 234, 0.7)",
              "0 0 0 10px rgba(147, 51, 234, 0)",
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-2 bg-portfolio-accent rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}