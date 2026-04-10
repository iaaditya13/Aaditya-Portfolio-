"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const TwitterIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const LinkedinIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function Contact({ data }: { data: any }) {
  return (
    <section id="contact" className="scroll-mt-24 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center space-y-8 bg-zinc-900/50 border border-white/5 rounded-3xl p-12 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
        
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight z-10">Let's build something.</h2>
        <p className="text-zinc-400 max-w-md text-balance z-10">
          Always open to discuss new opportunities, startups, or community building. My inbox is open.
        </p>
        
        <a href={`mailto:${data.email}`} className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] mt-4 z-10">
            <Mail className="w-5 h-5" />
            {data.email}
        </a>
        
        <div className="flex gap-4 mt-8 z-10">
          <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-black border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-black border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-black border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-fuchsia-500/50 hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all duration-300">
            <InstagramIcon className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
