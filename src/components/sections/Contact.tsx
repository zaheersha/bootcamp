import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text = `Hello, my name is ${name}.
Phone: ${phone}
Email: ${email}

I would like to request a callback to know more about the Job Guarantee Bootcamp.

Message: ${message}`;

    const whatsappURL = `https://wa.me/919494333702?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left Contact Info */}
          <div className="lg:w-1/3">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Get in <span className="text-gradient-primary">Touch</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 mb-8"
            >
              Have questions about the bootcamp? Our team is here to help you make the right career choice.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Call Us</p>
                  <a
                    href="tel:9494333702"
                    className="text-lg font-semibold text-white hover:text-primary transition-colors"
                  >
                    +91 9494333702
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Email Us</p>
                  <a
                    href="mailto:team@eviternship.com"
                    className="text-lg font-semibold text-white hover:text-primary transition-colors"
                  >
                    team@eviternship.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Location</p>
                  <p className="text-lg font-semibold text-white">
                    SJDC College Campus
                  </p>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 glass-card rounded-2xl p-8 border-white/10"
          >

            <form className="space-y-6" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Any questions?"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] group"
              >
                Request Callback
              </button>

            </form>

          </motion.div>

        </div>
      </div>
    </section>
  );
}