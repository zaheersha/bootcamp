import { motion } from "framer-motion";

import quizImg from "../../../Eviternship - pics/Eviternship - pics/quizs.jpg";
import campusTeamImg from "../../../Eviternship - pics/Eviternship - pics/team+campus+Leads.jpg";
import team2024Img from "../../../Eviternship - pics/Eviternship - pics/2024-team.jpg";

export default function Events() {
  return (
    <section className="py-24 bg-secondary/20 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Events & <span className="text-gradient-primary">Presentations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            We regularly organize quizzes, leadership events, and team activities to build a strong developer and innovation community.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[500px]">

          {/* Quiz Event */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 rounded-2xl overflow-hidden relative group h-[300px] md:h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

            <img
              src={quizImg}
              alt="Quiz Competition"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute bottom-6 left-6 z-20">
              <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-2 inline-block">
                Quiz Competition
              </span>
              <h3 className="text-2xl font-bold text-white">
                Technical Quiz & Skill Assessments
              </h3>
            </div>
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-4 h-full">

            {/* Campus Leads */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden relative group flex-1 min-h-[200px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

              <img
                src={campusTeamImg}
                alt="Campus Leads"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute bottom-4 left-4 z-20">
                <span className="px-2 py-0.5 bg-blue-500 text-white text-[10px] font-bold rounded-full mb-1 inline-block">
                  Campus Leads
                </span>
                <h3 className="text-lg font-bold text-white">
                  Student Leadership Team
                </h3>
              </div>
            </motion.div>

            {/* 2024 Internship Team */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl overflow-hidden relative group flex-1 min-h-[200px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

              <img
                src={team2024Img}
                alt="2024 Internship Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute bottom-4 left-4 z-20">
                <span className="px-2 py-0.5 bg-purple-500 text-white text-[10px] font-bold rounded-full mb-1 inline-block">
                  2024 Batch
                </span>
                <h3 className="text-lg font-bold text-white">
                  Internship Team & Achievers
                </h3>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}