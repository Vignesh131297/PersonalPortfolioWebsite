import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-portfolio-accent">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-portfolio-accent to-portfolio-highlight rounded-full p-1">
                <div className="w-full h-full bg-portfolio-secondary rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-6xl text-portfolio-accent"></i>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-portfolio-text">
                Transforming Ideas into Interactive Experiences
              </h3>
              <p className="text-lg text-portfolio-neutral mb-6 leading-relaxed">
                Detail-oriented professional with a unique journey from Manual Testing to Front-End Development. 
                My background in quality assurance gives me a keen eye for detail and user experience optimization.
              </p>
              <p className="text-lg text-portfolio-neutral mb-8 leading-relaxed">
                Passionate about creating visually appealing and user-friendly interfaces using modern web technologies. 
                Skilled in Adobe Creative Suite and Figma, I bridge the gap between design and development.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="text-center p-6 glass-effect rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-2xl font-bold text-portfolio-accent mb-2">2+</h4>
                  <p className="text-portfolio-neutral">Years Experience</p>
                </motion.div>
                <motion.div 
                  className="text-center p-6 glass-effect rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-2xl font-bold text-portfolio-highlight mb-2">5+</h4>
                  <p className="text-portfolio-neutral">Projects Completed</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
