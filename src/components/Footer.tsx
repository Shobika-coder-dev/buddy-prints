import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from '../constants';
import logo from '../assets/logo.png'; // ✅ IMPORT LOGO

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* 🔥 LOGO SECTION */}
        <div className="col-span-1 md:col-span-2">

          <Link to="/" className="flex flex-col items-start group mb-6">

            {/* 🔥 LOGO IMAGE */}
            <img
              src={logo}
              alt="Buddy Prints Logo"
              className="h-14 md:h-16 object-contain mb-2 group-hover:scale-105 transition"
            />

            {/* TAGLINE */}
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">
              Creation & Recreation
            </span>
          </Link>

          <p className="text-white/50 max-w-md mb-8">
            Premium custom T-shirt printing brand. We bring your creative ideas to life with bold streetwear designs.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#25D366] transition"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
            Quick Links
          </h4>

          <ul className="space-y-4 text-white/50 text-sm">
            <li><Link to="/showcase" className="hover:text-primary">Showcase</Link></li>

            {/* ❌ REMOVE CUSTOMIZE LINK */}
            {/* <li><Link to="/customize">Design Tool</Link></li> */}

            <li><Link to="/about" className="hover:text-primary">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
            Support
          </h4>

          <ul className="space-y-4 text-white/50 text-sm">
            <li><a href="#" className="hover:text-primary">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-primary">Returns</a></li>
            <li><a href="#" className="hover:text-primary">Size Guide</a></li>
            <li><a href="#" className="hover:text-primary">Tracking</a></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} Buddy Prints. All rights reserved.
        </p>

        <div className="flex gap-6 text-white/30 text-xs">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>

      </div>
    </footer>
  );
};