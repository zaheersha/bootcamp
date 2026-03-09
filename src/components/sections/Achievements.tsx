import { motion } from "framer-motion";
import { Users, Briefcase, Presentation, Trophy, GraduationCap } from "lucide-react";

const achievements = [
  { value: "1000+", label: "Students Trained", icon: <Users /> },
  { value: "100+", label: "Projects Completed", icon: <Briefcase /> },
  { value: "25+", label: "Industry Workshops", icon: <Presentation /> },
  { value: "10+", label: "Hackathons Organized", icon: <Trophy /> },
  { value: "15+", label: "Coding Competitions", icon: <GraduationCap /> }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Our Past <span className="text-gradient-primary">Achievements</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            We have a proven track record of transforming students into capable developers through rigorous training and events.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-primary mb-4 w-8 h-8 md:w-10 md:h-10">
                {item.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-2">{item.value}</h3>
              <p className="text-sm text-white/60 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
