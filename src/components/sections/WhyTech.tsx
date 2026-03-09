import { motion } from "framer-motion";
import { TrendingUp, Rocket, Building2, Globe2 } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    value: 500,
    suffix: "B+",
    title: "Tech Industry by 2030",
    description: "India's tech sector is projected to reach $500B by 2030, creating millions of new jobs."
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    value: 2,
    suffix: "x",
    title: "Startup Growth",
    description: "The startup ecosystem is growing at an unprecedented rate, offering massive opportunities."
  },
  {
    icon: <Building2 className="w-8 h-8 text-primary" />,
    value: 68,
    suffix: "K+",
    title: "Tech Startups",
    description: "With over 68,000 recognized startups, the demand for skilled developers is at an all-time high."
  },
  {
    icon: <Globe2 className="w-8 h-8 text-primary" />,
    value: 1,
    suffix: "st",
    title: "Global Hub",
    description: "India is rapidly becoming the global hub for technology innovation and software development."
  }
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-4xl md:text-5xl font-bold font-display text-white">
      {count}{suffix}
    </span>
  );
}

export default function WhyTech() {
  return (
    <section id="why-tech" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Why Choose <span className="text-gradient-primary">Software Development?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            The Indian tech industry is booming. There has never been a better time to start a career in software engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                {stat.icon}
              </div>
              <div className="mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white/90">{stat.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
