import { motion } from "framer-motion";

const navItems = [
  { href: "#hero", icon: "fas fa-home" },
  { href: "#about", icon: "fas fa-user" },
  { href: "#skills", icon: "fas fa-code" },
  { href: "#experience", icon: "fas fa-briefcase" },
  { href: "#projects", icon: "fas fa-folder-open" },
  { href: "#contact", icon: "fas fa-envelope" },
];

export default function Navigation() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 glass-effect rounded-full px-8 py-4"
    >
      <ul className="flex space-x-8">
        {navItems.map((item, index) => (
          <li key={item.href}>
            <motion.a
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="nav-item text-portfolio-text hover:text-portfolio-accent transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={item.icon}></i>
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}