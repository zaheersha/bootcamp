import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Cta() {
  return (
    <section id="enroll" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-primary/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card max-w-5xl mx-auto rounded-3xl p-8 md:p-16 text-center border-primary/20 bg-background/40"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary">Tech Career</span> Today
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join the EVITernship Job Bootcamp and transform into an industry-ready software developer. Secure your future in the tech world.
            <br/>
            <span className="text-primary font-semibold">Starting March 20th, 2026</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
  href="https://forms.gle/aufMVzJpNYYH9D687"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full sm:w-auto"
>
  <button className="w-full px-8 py-4 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] group">
    Enroll Now
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
</a>
            <a href="/jobbootcamp.pdf" download>
  <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all backdrop-blur-md group">
    Download Brochure
    <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
  </button>
</a>
          </div>
          
          <p className="mt-6 text-sm text-white/40">Limited seats available for the March batch.</p>
        </motion.div>
      </div>
    </section>
  );
}
