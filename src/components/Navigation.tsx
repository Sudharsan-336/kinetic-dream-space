import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Briefcase, Code, FileText, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/projects", label: "Projects", icon: Briefcase },
  { path: "/skills", label: "Skills", icon: Code },
  { path: "/resume", label: "Resume", icon: FileText },
  { path: "/contact", label: "Contact", icon: Mail },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-card px-6 py-3 rounded-full glow-border"
        >
          <ul className="flex gap-6 items-center">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground glow-text"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <item.icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <Button
          variant="default"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="rounded-full bg-primary text-primary-foreground shadow-xl hover:bg-primary/90 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-transform hover:scale-105"
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            id="mobile-navigation"
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 120 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl"
          >
            <nav className="flex items-center justify-center h-full px-6">
              <ul className="flex flex-col gap-4 items-center w-full max-w-xs">
                {navItems.map((item) => (
                  <li key={item.path} className="w-full">
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-lg transition-all duration-300 ${
                          isActive
                            ? "bg-primary text-primary-foreground glow-text scale-105"
                            : "glass-card text-muted-foreground hover:text-foreground hover:scale-[1.02]"
                        }`
                      }
                    >
                      <item.icon size={24} />
                      <span className="font-medium">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
