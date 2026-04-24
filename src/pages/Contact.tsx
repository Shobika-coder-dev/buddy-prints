import React from 'react';
import { motion } from 'motion/react';
import { Send, Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { WHATSAPP_NUMBER, INSTAGRAM_URL } from '../constants';

export const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Buddy Prints! I'd like to discuss a custom design project.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const whatsappMessage = encodeURIComponent(
      `*New Inquiry from Buddy Prints Website*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Subject:* ${subject}\n\n` +
      `*Message:* ${message}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-8">Get In <span className="text-primary italic">Touch</span></h1>
            <p className="text-white/50 text-lg mb-12 leading-relaxed max-w-md">
              Have a custom request or a question about your order? Our team is here to help you create something legendary.
            </p>

            <div className="space-y-8">
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-start gap-6 group text-left w-full"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <MessageCircle className="text-primary group-hover:text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-1">WhatsApp</h4>
                  <p className="text-white/50 group-hover:text-white transition-colors">{WHATSAPP_NUMBER}</p>
                </div>
              </button>

              <a 
                href="mailto:buddyprints.official@gmail.com" 
                className="flex items-start gap-6 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="text-primary group-hover:text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-white/50 group-hover:text-white transition-colors">buddyprints.official@gmail.com</p>
                </div>
              </a>

              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-6 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <Instagram className="text-primary group-hover:text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Instagram</h4>
                  <p className="text-white/50 group-hover:text-white transition-colors">@buddy_printxx._</p>
                </div>
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-10 relative"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <h3 className="text-xl font-bold uppercase tracking-widest mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Name</label>
                  <input name="name" type="text" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-primary transition-colors text-white" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Email</label>
                  <input name="email" type="email" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-primary transition-colors text-white" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Subject</label>
                <input name="subject" type="text" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-primary transition-colors text-white" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Message</label>
                <textarea name="message" rows={5} className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-primary transition-colors resize-none text-white" required></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold uppercase tracking-widest py-5 flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all neon-glow">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
