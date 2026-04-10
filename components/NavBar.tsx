"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "/#about" },
    { name: "Journey", href: "/#journey" },
    { name: "Experience", href: "/#experience" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}
    >
      <div className={`flex items-center gap-1 sm:gap-2 px-6 py-2.5 rounded-full border transition-all duration-500 backdrop-blur-xl ${scrolled ? 'bg-black/40 border-white/10 shadow-[0_4px_30px_rgba(139,92,246,0.15)]' : 'bg-black/20 border-white/5'}`}>
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="text-xs sm:text-sm font-medium text-zinc-300 hover:text-white px-3 sm:px-4 py-2 rounded-full hover:bg-white/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300">
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
