import { MessageCircle, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingButtons() {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const whatsappMessage =
    "Hello, I would like to know more about the Job Guarantee Bootcamp program.";

  const whatsappLink =
    `https://wa.me/919494333702?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_4px_14px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform hover:shadow-[0_6px_20px_rgba(34,197,94,0.6)] group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:animate-pulse" />

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full border-2 border-green-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75"></span>
      </motion.a>

      {/* Scroll To Top Button */}
      {showTop && (
        <motion.button
  onClick={scrollToTop}
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0 }}
  className="fixed bottom-24 right-6 z-50 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white 
  shadow-[0_0_12px_rgba(249,115,22,0.7)] 
  hover:scale-110 hover:shadow-[0_0_20px_rgba(249,115,22,1)] 
  transition-all duration-300"
  aria-label="Scroll to top"
>
  <ArrowUp className="w-6 h-6 animate-pulse" />
</motion.button>
      )}
    </>
  );
}