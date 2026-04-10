export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-8 mt-auto z-10 relative">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Aaditya Dubey. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-zinc-500">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
