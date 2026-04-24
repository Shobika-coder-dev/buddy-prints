import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Instagram, RefreshCcw } from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { cn } from '../lib/utils';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<string>('L');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Reset states when product changes
  React.useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [product]);

  if (!product) return null;

  const handleInquiry = () => {
    const message = encodeURIComponent(`Hi Buddy Prints! I'm interested in the "${product.name}" design (Size: ${selectedSize}) from your showcase.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleInstagramDM = () => {
    window.open('https://www.instagram.com/buddy_printxx._', '_blank');
  };

  const handleShare = async () => {
    if (!product) return;
    try {
      if (navigator.share) {
        await navigator.share({
          title: product.name,
          text: `Check out this design from Buddy Prints: ${product.name}`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-3 bg-black/50 hover:bg-primary rounded-full transition-all border border-white/10 hover:border-primary group"
            >
              <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-3/5 h-[40vh] md:h-auto bg-zinc-900 relative group overflow-hidden">
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                  <RefreshCcw className="animate-spin text-primary/20" size={40} />
                </div>
              )}
              <img
                src={imageError ? `https://picsum.photos/seed/${product.id}/800/1000` : product.image}
                alt={product.name}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  console.error("Image failed to load:", product.image);
                  setImageError(true);
                }}
                className={cn(
                  "w-full h-full object-cover transition-all duration-700",
                  imageLoaded ? "scale-100 blur-0" : "scale-110 blur-xl"
                )}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Details Section */}
            <div className="w-full md:w-2/5 p-8 sm:p-12 flex flex-col overflow-y-auto bg-black">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                    {product.category}
                  </span>
                  <span className="text-[10px] text-white/30 uppercase tracking-widest">Design #{product.id.padStart(3, '0')}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
                  {product.name}
                </h2>
                {product.price > 0 && (
                  <p className="text-2xl font-mono text-primary">${product.price.toFixed(2)}</p>
                )}
              </div>

              <div className="mb-10">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4">
                  The Concept
                </h3>
                <p className="text-white/70 leading-relaxed text-sm font-light">
                  {product.description}
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4">
                  Available Sizes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[50px] h-12 flex items-center justify-center border text-xs font-bold transition-all ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-white neon-glow'
                          : 'border-white/10 hover:border-white/30 text-white/40 hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto space-y-4">
                <div className="flex gap-4">
                  <button
                    onClick={handleInquiry}
                    className="flex-1 py-5 flex items-center justify-center gap-3 bg-white text-black font-black uppercase text-xs tracking-[0.2em] hover:bg-primary hover:text-white transition-all active:scale-95 neon-glow"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </button>
                  <button
                    onClick={handleInstagramDM}
                    className="flex-1 py-5 flex items-center justify-center gap-3 glass text-white font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all active:scale-95"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </button>
                </div>
                
                <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/10">
                  <button 
                    onClick={handleShare}
                    className="text-white/30 hover:text-primary transition-colors flex items-center gap-2 text-[10px] uppercase tracking-widest"
                  >
                    <X className="w-4 h-4 rotate-45" />
                    Share Design
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
