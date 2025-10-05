import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen py-32 px-4 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">My Resume</h1>
          <p className="text-xl text-muted-foreground">Download my professional resume</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-12 rounded-3xl text-center"
        >
          <motion.div
            className="inline-flex p-8 rounded-full bg-primary/10 mb-8"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring" }}
          >
            <FileText size={80} className="text-primary" />
          </motion.div>

          <h2 className="text-2xl font-bold mb-4">Professional Resume</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Get the full overview of my experience, education, and skills in a beautifully formatted PDF.
          </p>

          <Button
            size="lg"
            className="glow-border hover:scale-105 transition-transform"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <motion.div 
            className="glass-card p-6 rounded-2xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Experience</h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="font-semibold">Senior Full Stack Developer</div>
                <div className="text-sm text-muted-foreground">Tech Company • 2021 - Present</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="font-semibold">Full Stack Developer</div>
                <div className="text-sm text-muted-foreground">Startup Inc • 2019 - 2021</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="font-semibold">Frontend Developer</div>
                <div className="text-sm text-muted-foreground">Agency • 2018 - 2019</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="glass-card p-6 rounded-2xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Education</h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="font-semibold">B.S. Computer Science</div>
                <div className="text-sm text-muted-foreground">University Name • 2014 - 2018</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="font-semibold">Certifications</div>
                <div className="text-sm text-muted-foreground">AWS Certified Developer</div>
                <div className="text-sm text-muted-foreground">MongoDB Certified Professional</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
