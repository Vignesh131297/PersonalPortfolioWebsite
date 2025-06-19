import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/lib/constants";

export default function HeroSection() {
  const downloadResume = () => {
    // Create a link to download the resume PDF
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
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-portfolio-text">Hi, I'm</span>
            <motion.span 
              className="text-portfolio-accent block"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5, delay: 0.5 }}
              style={{ 
                overflow: "hidden",
                borderRight: "2px solid var(--portfolio-accent)",
                whiteSpace: "nowrap",
                display: "inline-block"
              }}
            >
              {PERSONAL_INFO?.name}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-portfolio-neutral mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {PERSONAL_INFO.title}
          </motion.p>
          
          <motion.p 
            className="text-lg text-portfolio-neutral max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Passionate developer transitioning from Manual Testing to creating visually appealing and user-friendly interfaces with modern web technologies.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <Button
              onClick={downloadResume}
              className="bg-portfolio-accent hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg"
              size="lg"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </Button>
            <Button
              onClick={scrollToProjects}
              variant="outline"
              className="border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-8 py-4 rounded-full font-semibold text-lg"
              size="lg"
            >
              <i className="fas fa-eye mr-2"></i>
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <i className="fas fa-chevron-down text-2xl text-portfolio-accent"></i>
      </motion.div>
    </section>
  );
}
