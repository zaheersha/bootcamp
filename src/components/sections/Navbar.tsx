import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../attached_assets/logo_-_Eviternship_1772863765020_1772986885866.png";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Program", href: "#program" },
  { name: "Achievements", href: "#achievements" },
  { name: "Internships", href: "#internships" },
  { name: "Partners", href: "#partners" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between w-full">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center bg-white rounded-lg p-1.5"
          >
            <img
              src={logo}
              alt="EVITernship"
              className="h-8 md:h-10 object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>

                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            <a
              href="#enroll"
              className="px-6 py-2.5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-28 overflow-y-auto lg:hidden"
          >
            <ul className="flex flex-col items-center gap-8 px-4">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-medium text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 }}
                className="mt-6"
              >
                <a
                  href="#enroll"
                  onClick={() => setIsOpen(false)}
                  className="px-7 py-3 rounded-full bg-primary text-white font-semibold hover:scale-105 transition-all"
                >
                  Enroll Now
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}