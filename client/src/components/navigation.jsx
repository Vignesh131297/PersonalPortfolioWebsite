import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { href: "#hero", icon: "fas fa-home", label: "Home", color: "from-purple-500 to-pink-500" },
  { href: "#about", icon: "fas fa-user", label: "About", color: "from-blue-500 to-cyan-500" },
  { href: "#skills", icon: "fas fa-code", label: "Skills", color: "from-green-500 to-emerald-500" },
  { href: "#experience", icon: "fas fa-briefcase", label: "Experience", color: "from-orange-500 to-red-500" },
  { href: "#projects", icon: "fas fa-folder-open", label: "Projects", color: "from-violet-500 to-purple-500" },
  { href: "#contact", icon: "fas fa-envelope", label: "Contact", color: "from-cyan-500 to-blue-500" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("#hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href);
      const currentSection = sections.find(section => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-effect scale-90' : 'glass-effect'
        } rounded-full px-6 py-3`}
      >
        {/* Animated Background Orb */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-20"
          animate={{
            background: [
              "radial-gradient(circle, var(--portfolio-accent) 0%, transparent 70%)",
              "radial-gradient(circle, var(--portfolio-highlight) 0%, transparent 70%)",
              "radial-gradient(circle, var(--portfolio-accent) 0%, transparent 70%)",
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <ul className="flex space-x-2 relative z-10">
          {navItems.map((item, index) => (
            <motion.li 
              key={item.href}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              {/* Active Section Indicator */}
              {activeSection === item.href && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-portfolio-accent/30 to-portfolio-highlight/30 border border-portfolio-accent/50"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <motion.a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-item relative block w-12 h-12 rounded-full flex items-center justify-center text-portfolio-text hover:text-white transition-colors duration-300 group"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Hover Effect Background */}
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)"
                  }}
                />
                
                {/* Icon */}
                <motion.i 
                  className={`${item.icon} text-lg relative z-10`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Tooltip */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-portfolio-secondary/90 text-portfolio-text px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  {item.label}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-portfolio-secondary/90 rotate-45"></div>
                </motion.div>
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Floating Side Navigation for Mobile */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 md:hidden"
      >
        <div className="glass-effect rounded-full p-2 space-y-3">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.href 
                  ? 'bg-portfolio-accent scale-150' 
                  : 'bg-portfolio-neutral/50 hover:bg-portfolio-accent/70'
              }`}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.2 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-portfolio-accent to-portfolio-highlight z-50 origin-left"
        style={{ 
          scaleX: typeof window !== 'undefined' ? 
            (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) : 0 
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}