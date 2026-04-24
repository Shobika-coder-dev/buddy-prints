import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { WHATSAPP_NUMBER } from '../constants';

export const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-[99] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:animate-pulse" />
      <span className="absolute right-full mr-4 bg-black/80 backdrop-blur-md text-white text-xs font-bold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
        Chat with us
      </span>
    </motion.button>
  );
};
