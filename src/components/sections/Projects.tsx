import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import proj1 from "../../assets/images/project-1.jpg";
import proj2 from "../../assets/images/project-2.jpg";
import proj3 from "../../assets/images/project-3.jpg";
import proj4 from "../../assets/images/project-4.jpg";
import proj5 from "../../assets/images/project-5.jpg";
import proj6 from "../../assets/images/project-6.jpg";
import proj7 from "../../assets/images/project-7.jpg";

const projects = [
  {
    title: "Social Media Platform",
    category: "Full Stack",
    description: "A complete social network with real-time chat, post sharing, likes, and user profiles.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: proj2
  },
  {
    title: "Music Player App",
    category: "Frontend",
    description: "Spotify clone with audio playback, playlists, and a beautiful sleek UI.",
    tech: ["React", "Tailwind", "Context API"],
    image: proj3
  },
  {
    title: "Authentication System",
    category: "Backend Security",
    description: "Secure JWT-based auth system with email verification and password reset.",
    tech: ["Node.js", "Express", "JWT", "PostgreSQL"],
    image: proj4
  },
  {
    title: "Photo Sharing App",
    category: "Full Stack",
    description: "Instagram-like app with image upload, filters, and cloud storage integration.",
    tech: ["React", "Firebase", "Node.js"],
    image: proj5
  },
  {
    title: "Job Portal",
    category: "Full Stack",
    description: "Platform connecting job seekers and employers with resume parsing and application tracking.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    image: proj6
  },
  {
    title: "Stock Market Dashboard",
    category: "Data Visualization",
    description: "Real-time financial dashboard with interactive charts and portfolio tracking.",
    tech: ["React", "Recharts", "Finnhub API"],
    image: proj7
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Build <span className="text-gradient-primary">Real-World Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            Theory isn't enough. You will build production-ready applications that will make your portfolio stand out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:border-primary/40 transition-colors duration-300 h-full flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/60 text-sm mb-6 line-clamp-2 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
