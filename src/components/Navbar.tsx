import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from '../constants';
import logo from '../assets/logo.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Showcase', path: '/showcase' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* 🔥 LOGO */}
        <Link to="/" className="relative group flex items-center">

          {/* Glow */}
          <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-red-500/30 rounded-full"></div>

          {/* 🔥 BIGGER LOGO */}
          <motion.img
            src={logo}
            alt="Buddy Prints Logo"
            className="h-14 md:h-16 lg:h-18 w-auto object-contain relative z-10"
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 250 }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-widest transition-all duration-300 hover:text-red-500",
                location.pathname === link.path
                  ? "text-red-500"
                  : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <div className="hidden md:flex items-center gap-5 border-l border-white/10 pl-6 ml-2">
            
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-red-500 transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-green-500 transition"
            >
              <MessageCircle size={20} />
            </a>
          </div>

          {/* Mobile Menu */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-2xl uppercase tracking-widest",
                  location.pathname === link.path
                    ? "text-red-500"
                    : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};