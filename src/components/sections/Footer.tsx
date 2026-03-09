import { Linkedin, Instagram, Youtube } from "lucide-react";
import logo from "../../attached_assets/logo_-_Eviternship_1772863765020_1772986885866.png";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
  <a href="#home" className="inline-flex items-center z-50 bg-white rounded-md p-0.5">
  <img src={logo} alt="EVITernship" className="h-10 md:h-10 object-contain" />
</a>
        
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
              Empowering students to become job-ready full-stack developers through intensive training, real-world projects, and expert mentorship.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/60 hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#program" className="text-white/60 hover:text-primary transition-colors text-sm">Bootcamp Program</a></li>
              <li><a href="#achievements" className="text-white/60 hover:text-primary transition-colors text-sm">Our Achievements</a></li>
              <li><a href="#projects" className="text-white/60 hover:text-primary transition-colors text-sm">Projects Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">Full Stack Development</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">Offline Internships</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">Data Analysis</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">DevOps Engineering</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li className="text-white/60 text-sm flex flex-col">
                <span className="text-white/40 mb-1">Phone</span>
                <a href="tel:9494333702" className="hover:text-primary transition-colors">9494333702</a>
              </li>
              <li className="text-white/60 text-sm flex flex-col">
                <span className="text-white/40 mb-1">Email</span>
                <a href="mailto:team@eviternship.com" className="hover:text-primary transition-colors">team@eviternship.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} EVITernship. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
