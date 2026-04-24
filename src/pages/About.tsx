import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-black text-white">

      <div className="max-w-5xl mx-auto text-center">

        {/* 🔥 TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black uppercase mb-10 leading-tight"
        >
          The <span className="text-primary">Story</span> Behind The Print
        </motion.h1>

        {/* 🔥 DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6 text-white/60 text-lg leading-relaxed"
        >
          <p>
            Buddy Prints was born from street culture — where fashion meets identity.
            We don’t just print designs, we build statements.
          </p>

          <p>
            Every piece we create is about individuality. Whether it’s your original idea
            or a recreated concept, we turn it into something bold, wearable, and premium.
          </p>

          <p>
            Our focus is simple — quality, creativity, and impact.
            If it doesn’t stand out, we don’t print it.
          </p>
        </motion.div>
      </div>

      {/* 🔥 VALUES SECTION */}
      <div className="mt-28 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {[
          {
            title: "Premium Quality",
            desc: "Heavy cotton, long-lasting prints, and attention to detail in every piece."
          },
          {
            title: "Creative Freedom",
            desc: "Your idea. Your design. We bring it to life exactly how you imagine."
          },
          {
            title: "Fast Execution",
            desc: "Quick turnaround without compromising quality or finish."
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="p-8 border border-white/10 hover:border-primary transition"
          >
            <h3 className="text-xl font-bold uppercase mb-4 text-primary">
              {item.title}
            </h3>

            <p className="text-white/50 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>

      {/* 🔥 BOTTOM CTA */}
      <div className="mt-28 text-center">

        <h2 className="text-4xl font-black uppercase mb-6">
          Wear Your <span className="text-primary">Identity</span>
        </h2>

        <p className="text-white/50 mb-8">
          Start your custom design journey with Buddy Prints.
        </p>

        <button
          onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")}
          className="px-10 py-4 bg-primary text-white font-bold uppercase tracking-widest 
          hover:bg-white hover:text-black transition"
        >
          Start Now
        </button>

      </div>

    </div>
  );
};