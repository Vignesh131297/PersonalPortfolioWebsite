import { motion } from "framer-motion";

export default function ParticleBackground() {
  const particles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    top: `${20 + (i * 20)}%`,
    left: `${10 + (i * 15)}%`,
    delay: i * 1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle absolute w-1 h-1 bg-portfolio-accent rounded-full"
          style={{ top: particle.top, left: particle.left }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
