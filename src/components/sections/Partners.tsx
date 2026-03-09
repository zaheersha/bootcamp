import { motion } from "framer-motion";
import Carousel from "../../components/Carousel";
import ashoka_1 from "../../../Eviternship - pics/Eviternship - pics/Ashoka Saachi/ashoka (1).jpg";
import ashoka_2 from "../../../Eviternship - pics/Eviternship - pics/Ashoka Saachi/ashoka (2).jpg";
import ashoka_3 from "../../../Eviternship - pics/Eviternship - pics/Ashoka Saachi/ashoka (3).jpg";

export default function Partners() {
  const saachiImages = [ashoka_1, ashoka_2, ashoka_3];

  return (
    <section id="partners" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Saachi & <span className="text-gradient-primary">Ashoka Partnership</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            Recent partnership highlights and success stories from our collaborations.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden h-[500px]"
        >
          <Carousel images={saachiImages} autoplay interval={5000} />
        </motion.div>
      </div>
    </section>
  );
}
