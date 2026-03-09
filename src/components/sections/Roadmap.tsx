import { motion } from "framer-motion";
import { Code2, Braces, Server, Database, BrainCircuit, Bot, Users, Trophy } from "lucide-react";

const stages = [
  {
    title: "Frontend Foundation",
    description: "Master the building blocks of the web with HTML5, CSS3, and JavaScript.",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Advanced Frontend",
    description: "Build interactive, modern UIs using React.js and Tailwind CSS.",
    icon: <Braces className="w-6 h-6" />,
    color: "from-cyan-500 to-teal-500"
  },
  {
    title: "Backend Development",
    description: "Create robust server-side applications using Node.js and Express.",
    icon: <Server className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Database Management",
    description: "Design and implement scalable databases using MongoDB and Mongoose.",
    icon: <Database className="w-6 h-6" />,
    color: "from-yellow-500 to-green-500"
  },
  {
    title: "DSA & Problem Solving",
    description: "Strengthen your logic and algorithms to crack top product-based company interviews.",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "AI Tools for Developers",
    description: "Learn to 10x your productivity using AI tools like ChatGPT and GitHub Copilot.",
    icon: <Bot className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Interview Preparation",
    description: "Mock interviews, resume building, and soft skills training.",
    icon: <Users className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Placement Support",
    description: "Guaranteed interview opportunities with our partner companies.",
    icon: <Trophy className="w-6 h-6" />,
    color: "from-primary to-orange-400"
  }
];

export default function Roadmap() {
  return (
    <section id="program" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            6-Month <span className="text-gradient-primary">Journey to Success</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            Our comprehensive curriculum is designed to take you from a beginner to a job-ready full-stack developer.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full"></div>

          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`relative flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[28px] md:left-1/2 w-10 h-10 -translate-x-1/2 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 w-full md:w-1/2 ${
                index % 2 === 0 ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"
              }`}>
                <div className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors duration-300 group">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stage.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    {stage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{stage.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{stage.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
