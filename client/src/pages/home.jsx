import Navigation from "@/components/navigation";
import ParticleBackground from "@/components/particles";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import EducationSection from "@/components/sections/education";
import ContactSection from "@/components/sections/contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg text-portfolio-text">
      <Navigation />
      <ParticleBackground />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <motion.footer 
        className="py-8 border-t border-portfolio-neutral/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-portfolio-neutral">
            © 2024 Vignesh Arumugam. Designed & Developed with 
            <i className="fas fa-heart text-red-500 mx-1"></i> 
            and <i className="fas fa-coffee text-yellow-600 mx-1"></i>
          </p>
        </div>

      </motion.footer>
    </div>
  );
}