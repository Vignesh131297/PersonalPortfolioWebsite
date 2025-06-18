import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { PERSONAL_INFO } from "@/lib/constants";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-secondary/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Get In <span className="text-portfolio-accent">Touch</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-portfolio-text">
                Let's Create Something Amazing Together
              </h3>
              <p className="text-lg text-portfolio-neutral mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with talented individuals. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="bg-portfolio-accent p-3 rounded-full mr-6">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-portfolio-accent">Email</h4>
                    <p className="text-portfolio-neutral">{PERSONAL_INFO.email}</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="bg-portfolio-highlight p-3 rounded-full mr-6">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-portfolio-highlight">Phone</h4>
                    <p className="text-portfolio-neutral">{PERSONAL_INFO.phone}</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="bg-blue-500 p-3 rounded-full mr-6">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400">Location</h4>
                    <p className="text-portfolio-neutral">{PERSONAL_INFO.location}</p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="flex space-x-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-linkedin text-white text-xl"></i>
                </motion.a>
                <motion.a 
                  href={PERSONAL_INFO.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 p-3 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-github text-white text-xl"></i>
                </motion.a>
                <motion.a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="bg-portfolio-accent hover:bg-blue-600 p-3 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-envelope text-white text-xl"></i>
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-xl">
                <div className="mb-6">
                  <Label htmlFor="name" className="block text-sm font-semibold text-portfolio-neutral mb-2">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-portfolio-secondary/50 border border-portfolio-neutral/20 text-white placeholder-portfolio-neutral/50 focus:border-portfolio-accent"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-6">
                  <Label htmlFor="email" className="block text-sm font-semibold text-portfolio-neutral mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-portfolio-secondary/50 border border-portfolio-neutral/20 text-white placeholder-portfolio-neutral/50 focus:border-portfolio-accent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="mb-6">
                  <Label htmlFor="subject" className="block text-sm font-semibold text-portfolio-neutral mb-2">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-portfolio-secondary/50 border border-portfolio-neutral/20 text-white placeholder-portfolio-neutral/50 focus:border-portfolio-accent"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="mb-6">
                  <Label htmlFor="message" className="block text-sm font-semibold text-portfolio-neutral mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-portfolio-secondary/50 border border-portfolio-neutral/20 text-white placeholder-portfolio-neutral/50 focus:border-portfolio-accent resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-accent hover:bg-blue-600 text-white py-4 text-lg font-semibold"
                  size="lg"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
