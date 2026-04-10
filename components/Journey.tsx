"use client";
import { motion } from "framer-motion";

export default function Journey({ data }: { data: any[] }) {
  return (
    <section id="journey" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-8">The Journey</h2>
        
        <div className="relative border-l-2 border-zinc-800/80 ml-3 pl-8 pb-4 space-y-12">
          {data.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[41px] top-1.5 w-3 h-3 bg-zinc-600 rounded-full ring-[8px] ring-black" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                <span className="text-sm text-zinc-500 font-mono w-16 shrink-0">{item.year}</span>
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
              </div>
              <p className="text-zinc-400 sm:ml-[4.5rem] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
