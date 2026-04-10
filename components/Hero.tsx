"use client";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero({ data }: { data: any }) {
  return (
    <section className="relative w-full pt-32 pb-16 md:py-0 md:min-h-screen flex flex-col md:justify-center items-center text-center px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-violet-600/20 via-fuchsia-600/10 to-transparent rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl flex flex-col items-center z-10"
      >
        <div className="w-28 h-28 mb-6 rounded-full overflow-hidden border border-zinc-800 relative bg-zinc-900 shadow-xl scale-110">
            <Image src="/profile.png" alt="Aaditya Dubey" fill className="object-cover" priority />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Aaditya Dubey
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-10 font-light max-w-2xl text-balance">
          {data.about.headline}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center max-w-sm sm:max-w-none mx-auto">
          <a href="https://drive.google.com/drive/folders/1yogwjlVroXOM3vksSsSmBhZ8xCLwpfOO" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-white text-black rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            View Resume 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 bg-black border border-zinc-700 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-900 hover:border-purple-500/50 transition-all shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]">
            <Mail className="w-4 h-4" />
            Get in touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
