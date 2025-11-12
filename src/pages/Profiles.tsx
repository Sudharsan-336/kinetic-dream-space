import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Code2 } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    icon: Github,
    stats: "GitHub Contributions",
    link: "https://github.com/Sudharsan-336",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "LeetCode",
    icon: Code2,
    stats: "LeetCode Problems Solved",
    link: "https://leetcode.com/u/sudharsan336/",
    color: "from-orange-500 to-red-500",
  },
];

export default function Profiles() {
  return (
    <div className="min-h-screen py-32 px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-float" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text pb-2">Coding Profiles</h1>
          <p className="text-xl text-muted-foreground pt-1">My presence across coding platforms</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="glass-card border-border overflow-hidden group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${profile.color}`}
                    >
                      <profile.icon size={32} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl gradient-text group-hover:glow-text transition-all">
                        {profile.name}
                      </CardTitle>
                      <p className="text-muted-foreground">{profile.stats}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${profile.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>

      </div>
    </div>
  );
}
