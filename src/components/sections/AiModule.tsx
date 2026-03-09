import { motion } from "framer-motion";
import { Sparkles, Terminal, Bug, Lightbulb } from "lucide-react";

const modules = [
  {
    title: "Prompt Engineering",
    description: "Learn how to write effective prompts to get the best code and solutions from AI models.",
    icon: <Lightbulb className="w-8 h-8" />
  },
  {
    title: "AI in Development",
    description: "Integrate AI tools into your daily workflow to write code faster and more efficiently.",
    icon: <Terminal className="w-8 h-8" />
  },
  {
    title: "Debugging with AI",
    description: "Use AI to quickly identify and fix complex bugs, understand error messages, and optimize code.",
    icon: <Bug className="w-8 h-8" />
  },
  {
    title: "Understanding Limitations",
    description: "Know when to rely on AI and when human intuition and logic are necessary.",
    icon: <Sparkles className="w-8 h-8" />
  }
];

export default function AiModule() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30 border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" /> Future-Proof Skills
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">AI Tools</span> for Developers
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                The future of coding is augmented by AI. We teach you how to leverage powerful AI assistants to become a 10x developer, giving you a massive edge in the job market.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                {/* Simulated Logos */}
                <div className="glass-card px-6 py-3 rounded-lg flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-black">C</div>
                  <span className="font-semibold text-white/90">ChatGPT</span>
                </div>
                <div className="glass-card px-6 py-3 rounded-lg flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white">G</div>
                  <span className="font-semibold text-white/90">Gemini</span>
                </div>
                <div className="glass-card px-6 py-3 rounded-lg flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold text-black">Co</div>
                  <span className="font-semibold text-white/90">GitHub Copilot</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                  {module.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{module.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
