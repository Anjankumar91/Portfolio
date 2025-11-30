import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer 
      className="py-8 px-4 border-t border-border relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      <div className="container mx-auto text-center relative z-10">
        <motion.p 
          className="text-muted-foreground text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          © {new Date().getFullYear()} Your Name. Built with React & Tailwind CSS.
        </motion.p>
        <motion.p 
          className="text-muted-foreground text-xs mt-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-gradient-premium">Designed & Developed with passion for data</span>
        </motion.p>
      </div>
    </motion.footer>
  );
};
