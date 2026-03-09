import { motion } from "framer-motion";
import { MapPin, Calendar, Code, Database, Monitor } from "lucide-react";
import Carousel from "../../components/Carousel";
// 2026 Images
import img2026_1 from "../../../Eviternship - pics/Eviternship - pics/2026 - internship - sjdc/2026 (1).jpeg";
import img2026_2 from "../../../Eviternship - pics/Eviternship - pics/2026 - internship - sjdc/2026 (2).jpg";
import img2026_3 from "../../../Eviternship - pics/Eviternship - pics/2026 - internship - sjdc/2026 (3).jpg";
import img2026_4 from "../../../Eviternship - pics/Eviternship - pics/2026 - internship - sjdc/2026 (4).jpg";
import img2026_5 from "../../../Eviternship - pics/Eviternship - pics/2026 - internship - sjdc/2026 (5).jpg";
import img2026_6 from "../../../Eviternship - pics/Eviternship - pics/2026 - internship - sjdc/2026 (6).jpg";
import img2026_7 from "../../../Eviternship - pics/Eviternship - pics/2026 - internship - sjdc/2026 (7).jpg";
import img2026_8 from "../../../Eviternship - pics/Eviternship - pics/2026 - internship - sjdc/2026 (8).jpg";
import img2026_9 from "../../../Eviternship - pics/Eviternship - pics/2026 - internship - sjdc/2026 (9).jpg";
import img2026_10 from "../../../Eviternship - pics/Eviternship - pics/2026 - internship - sjdc/2026 (10).jpg";
import img2026_11 from "../../../Eviternship - pics/Eviternship - pics/2026 - internship - sjdc/2026 (11).jpg";




// 2024 Images
import img2024_1 from "../../../Eviternship - pics/Eviternship - pics/2024 - internship-sjdc/2024 (1).jpg";
import img2024_2 from "../../../Eviternship - pics/Eviternship - pics/2024 - internship-sjdc/2024 (2).jpg";
import img2024_3 from "../../../Eviternship - pics/Eviternship - pics/2024 - internship-sjdc/2024 (3).jpg";
import img2024_4 from "../../../Eviternship - pics/Eviternship - pics/2024 - internship-sjdc/2024 (4).jpg";
import img2024_5 from "../../../Eviternship - pics/Eviternship - pics/2024 - internship-sjdc/2024 (5).jpg";
import img2024_6 from "../../../Eviternship - pics/Eviternship - pics/2024 - internship-sjdc/2024 (6).jpg";
import img2024_7 from "../../../Eviternship - pics/Eviternship - pics/2024 - internship-sjdc/2024 (7).jpg";
import img2024_8 from "../../../Eviternship - pics/Eviternship - pics/2024 - internship-sjdc/2024 (8).jpg";
import img2024_9 from "../../../Eviternship - pics/Eviternship - pics/2024 - internship-sjdc/2024 (9).jpg";
import img2024_10 from "../../../Eviternship - pics/Eviternship - pics/2024 - internship-sjdc/2024 (10).jpg";
import img2024_11 from "../../../Eviternship - pics/Eviternship - pics/2024 - internship-sjdc/2024 (11).jpg";
import img2024_12 from "../../../Eviternship - pics/Eviternship - pics/2024 - internship-sjdc/2024 (12).jpg";
import img2024_13 from "../../../Eviternship - pics/Eviternship - pics/2024 - internship-sjdc/2024 (13).jpg";
import img2024_14 from "../../../Eviternship - pics/Eviternship - pics/2024 - internship-sjdc/2024 (14).jpg";
import img2024_15 from "../../../Eviternship - pics/Eviternship - pics/2024 - internship-sjdc/2024 (15).jpg";


export default function Internships() {
const images2026 = [
img2026_1,
img2026_2,
img2026_3,
img2026_4,
img2026_5,
img2026_6,
img2026_7,
img2026_8,
img2026_9,
img2026_10,
img2026_11
];  

const images2024 = [
img2024_1,
img2024_2,
img2024_3,
img2024_4,
img2024_5,
img2024_6,
img2024_7,
img2024_8,
img2024_9,
img2024_10,
img2024_11,
img2024_12,
img2024_13,
img2024_14,
img2024_15
];

  return (
    <section id="internships" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* 2026 Internship */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-gradient-primary">2026 Internship</span> Program
              </h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Our ongoing 2026 batch brings hands-on experience and real-world learning to students. Training from industry experts at SJDC College.
              </p>
              <div className="glass-card p-6 rounded-2xl border-primary/20 bg-primary/5">
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">Active Tracks:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                      <Code className="w-5 h-5 text-blue-400" />
                      <span className="text-sm font-medium">Full Stack Dev</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                      <Database className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-medium">Data Analysis</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                      <Monitor className="w-5 h-5 text-orange-400" />
                      <span className="text-sm font-medium">DevOps</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-2/3 rounded-2xl overflow-hidden h-[400px]"
            >
              <Carousel images={images2026} autoplay interval={5000} />
            </motion.div>
          </div>
        </div>

        {/* 2024 Internship */}
        <div className="border-t border-white/10 pt-20">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-gradient-primary">2024 Internship</span> Batch
              </h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Our successful 2024 cohort completed intensive training with 200+ students across multiple tracks, building impressive portfolios and securing opportunities.
              </p>
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-white/70">Students Trained</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-2/3 rounded-2xl overflow-hidden h-[400px]"
            >
              <Carousel images={images2024} autoplay interval={6000} />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
