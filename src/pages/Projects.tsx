import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects: Array<{
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live?: string;
}> = [
  {
    title: "JavaMiniGames",
    description:"Built interactive, engaging, and visually appealing Java-based classic games using console and Swing GUI, applying OOP and event-driven programming for smooth, responsive, dynamic, and real-time gameplay with scoring and real-time input handling.",
    tech: ["Java", "Swing", "OOP", "Collections Framework", "Event Handling"],
    image: "JavaMiniGames.jpg",
    github: "https://github.com/Sudharsan-336/JavaMiniGames",
  },
  {
    title: "ATM Simulation System",
    description: "The ATM Simulation System is a Java-based project that simulates real-world ATM functionality. Users can perform essential banking operations such as deposits, withdrawals, transfers, and balance inquiries. The system also supports account creation, PIN management, transaction history, and file-based data persistence.",
    tech: ["Java", "OOP", "File Handling", "Exception Handling", "Collections Framework"],
    image: "ATM System.jpg",
    github: "https://github.com/Sudharsan-336/ATM-Project",
  },
  {
    title: "Hotel Management System",
   description: "Developed a Java-based Hotel Management System with room booking, food ordering, and billing. Implemented Luxury and Deluxe Rooms using OOP concepts and Java Serialization for data persistence, demonstrating skills in Java programming and event-driven application development.",
    tech: ["Java", "OOP", "File Handling", "Serialization", "Exception Handling", "Collections", "ArrayLists"],
    image: "Hotel.jpeg",
    github: "https://github.com/Sudharsan-336/Hotel-Management-System/tree/main",
  },

];

export default function Projects() {
  return (
    <div className="min-h-screen py-20 md:py-32 px-4 sm:px-6 relative">
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16 px-2"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 gradient-text pb-2">My Projects</h1>
          <p className="text-lg sm:text-xl text-muted-foreground pt-1">A showcase of my recent work and experiments</p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="glass-card border-border overflow-hidden group h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg sm:text-xl gradient-text pb-1">{project.title}</CardTitle>
                  <CardDescription className="pt-1 text-sm sm:text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col justify-end pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button size="sm" className="flex-1 text-xs sm:text-sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
