"use client";
import { motion } from "framer-motion";

export default function About({ data }: { data: any }) {
  return (
    <section id="about" className="scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-6">About Me</h2>
        <p className="text-2xl md:text-4xl font-medium leading-tight text-zinc-200">
          {data.bio}
        </p>
      </motion.div>
    </section>
  );
}
