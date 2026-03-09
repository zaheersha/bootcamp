import { motion } from "framer-motion";
import { Code2, Briefcase, Zap } from "lucide-react";

export default function Trainers() {
  return (
    <section className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Trainers from <span className="text-gradient-primary">Top MNCs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg leading-relaxed"
          >
            Learn directly from experienced engineers working in top multinational companies. They bring real-world experience, modern industry practices, and production-level code quality straight to the classroom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Expert Instructors",
                description: "Professionals with 5+ years experience in leading tech companies"
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Industry Standards",
                description: "Learn the exact tools, frameworks, and practices used in production"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Real-World Insights",
                description: "Get practical knowledge that goes beyond theoretical concepts"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
