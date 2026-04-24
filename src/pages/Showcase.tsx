import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Instagram, MessageCircle } from 'lucide-react';
import { ProductModal } from '../components/ProductModal';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

// 🔥 IMPORT YOUR IMAGES
import dragon from '../assets/showcase/dragon.jpg';
import hoodie from '../assets/showcase/hoodie.jpg';
import jananayagan from '../assets/showcase/jananayagan.jpg';
import thala from '../assets/showcase/thala.jpg';
import atman from '../assets/showcase/atman.jpg';
import tshirt from '../assets/showcase/tshirt-premium.jpg';
import purple from '../assets/showcase/purple.jpg';
import skull from '../assets/showcase/skull.jpg';

// 🔥 LOCAL PRODUCTS (NO CONSTANTS NEEDED)
const PRODUCTS: Product[] = [
  {
    id: "001",
    name: "Dragon Street Art",
    description: "Premium dragon fusion artwork",
    category: "Graphic",
    image: dragon,
  },
  {
    id: "002",
    name: "G.O.A.D Hoodie",
    description: "Bold typography hoodie design",
    category: "Trendy",
    image: hoodie,
  },
  {
    id: "003",
    name: "Jananayagan Print",
    description: "Celebrity themed graphic print",
    category: "Graphic",
    image: jananayagan,
  },
  {
    id: "004",
    name: "Minimal Sleeve Print",
    description: "Clean minimal branding style",
    category: "Minimal",
    image: thala,
  },
  {
    id: "005",
    name: "Atman Typography",
    description: "Street typography design",
    category: "Trendy",
    image: atman,
  },
  {
    id: "006",
    name: "Premium Oversized",
    description: "High quality oversized design",
    category: "Custom",
    image: tshirt,
  },
  {
    id: "007",
    name: "Street Cartoon Vibe",
    description: "Creative modern artwork",
    category: "Trendy",
    image: purple,
  },
  {
    id: "008",
    name: "Skull Dark Edition",
    description: "Dark gothic skull design",
    category: "Graphic",
    image: skull,
  },
];

export const Showcase = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Trendy', 'Minimal', 'Graphic', 'Custom'];

  const filteredProducts =
    filter === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filter);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleInquiry = (productName: string) => {
    const message = encodeURIComponent(
      `Hi Buddy Prints! I'm interested in the "${productName}" design.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-white/10 pb-12">
          <div>
            <h1 className="text-6xl md:text-8xl font-black uppercase mb-4">
              Design <span className="text-red-500 italic">Showcase</span>
            </h1>
            <p className="text-white/50 uppercase tracking-[0.3em] text-xs max-w-md">
              Premium custom creations and recreations.
            </p>
          </div>

          {/* FILTER */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 text-[10px] uppercase tracking-widest border transition",
                  filter === cat
                    ? "bg-red-500 border-red-500 text-white"
                    : "border-white/20 text-white/50 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => handleOpenModal(product)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/10 group-hover:border-red-500/40 transition">
                
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* 🔥 OVERLAY */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center p-6 text-center">
                  <Eye className="mb-4 text-red-500" size={30} />
                  <h4 className="text-lg font-bold uppercase">{product.name}</h4>
                  <p className="text-xs text-white/60 mt-2">{product.description}</p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInquiry(product.name);
                    }}
                    className="mt-6 px-6 py-3 bg-red-500 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition flex items-center gap-2"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </button>
                </div>

                {/* CATEGORY */}
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-black/70 px-3 py-1 border border-white/10">
                  {product.category}
                </div>
              </div>

              {/* TITLE */}
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="font-bold uppercase group-hover:text-red-500 transition">
                    {product.name}
                  </h3>
                  <p className="text-white/30 text-xs mt-1">
                    Design #{product.id}
                  </p>
                </div>

                <Instagram size={14} className="text-white/30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-black uppercase mb-6">
            Want a <span className="text-red-500">Custom</span> Design?
          </h2>

          <button
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`)}
            className="px-10 py-4 bg-white text-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition"
          >
            Start Now
          </button>
        </div>
      </div>

      {/* MODAL */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
      />
    </div>
  );
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}