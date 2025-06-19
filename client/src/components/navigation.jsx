import { motion } from "framer-motion";
import { Home, User, Code, Briefcase, FolderOpen, Mail } from "lucide-react";

const navItems = [
	{ href: "#hero", icon: <Home size={22} /> },
	{ href: "#about", icon: <User size={22} /> },
	{ href: "#skills", icon: <Code size={22} /> },
	{ href: "#experience", icon: <Briefcase size={22} /> },
	{ href: "#projects", icon: <FolderOpen size={22} /> },
	{ href: "#contact", icon: <Mail size={22} /> },
];

export default function Navigation() {
	const handleNavClick = (e, href) => {
		e.preventDefault();
		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<motion.nav
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.5 }}
			className="fixed top-8 inset-x-0 mx-auto z-50 glass-effect rounded-full px-8 py-4 flex justify-center items-center w-fit shadow-lg"
		>
			<ul className="flex space-x-6 items-center m-0 p-0">
				{navItems.map((item, index) => (
					<li key={item.href} className="flex items-center">
						<motion.a
							href={item.href}
							onClick={(e) => handleNavClick(e, item.href)}
							className="nav-item text-portfolio-text hover:text-portfolio-accent transition-colors duration-300 flex items-center justify-center rounded-full p-2 bg-white/10 hover:bg-portfolio-accent/20"
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.95 }}
						>
							{item.icon}
						</motion.a>
					</li>
				))}
			</ul>
		</motion.nav>
	);
}
