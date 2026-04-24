import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WHATSAPP_NUMBER } from "../constants";

// 🔥 Your real images
import dragon from "../assets/showcase/dragon.jpg";
import hoodie from "../assets/showcase/hoodie.jpg";
import jananayagan from "../assets/showcase/jananayagan.jpg";
import skull from "../assets/showcase/skull.jpg";

export const Home = () => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("Black");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState("");

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`
🔥 NEW ORDER - BUDDY PRINTS

👤 Name: ${name}
👕 Color: ${color}
📏 Size: ${size}

📝 Text: ${text || "None"}

🗒 Notes:
${notes || "None"}

📌 I will share design image.
    `);

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <main className="bg-black text-white">

      {/* 🔥 HERO */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-4">
              Premium Streetwear Brand
            </p>

            <h1 className="text-6xl md:text-8xl font-black uppercase leading-tight">
              Custom <br />
              <span className="text-primary drop-shadow-[0_0_12px_red]">
                Creation
              </span>
              <br /> & Recreation
            </h1>

            <p className="text-white/60 mt-6 max-w-md">
              Elevate your street style with premium custom prints.
            </p>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setOpen(true)}
                className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition flex items-center gap-2"
              >
                Customize Now <ArrowRight size={18} />
              </button>

              <Link
                to="/showcase"
                className="px-8 py-4 border border-white/20 hover:border-white"
              >
                Explore Showcase
              </Link>
            </div>
          </div>

          <div>
            <img
              src={dragon}
              className="rounded-xl border border-white/10 w-full h-[500px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* 🔥 SHOWCASE */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-12">
            <h2 className="text-5xl font-black uppercase">
              Design <span className="text-primary">Showcase</span>
            </h2>

            <Link to="/showcase">View All →</Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[dragon, hoodie, jananayagan, skull].map((img, i) => (
              <div key={i} className="group border border-white/10 overflow-hidden hover:border-primary transition">
                <img
                  src={img}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 BRAND */}
      <section className="px-6 py-24 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-6">
            More Than Just <span className="text-primary">Prints</span>
          </h2>
          <p className="text-white/60">
            We turn your ideas into premium streetwear. Built for creators.
          </p>
        </div>
      </section>

      {/* 🔥 PROCESS */}
      <section className="px-6 py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-5xl font-black uppercase mb-16">
            How It <span className="text-primary">Works</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Choose", desc: "Pick your design" },
              { step: "02", title: "Customize", desc: "Add your style" },
              { step: "03", title: "Order", desc: "We deliver" }
            ].map((item) => (
              <div key={item.step} className="p-8 border border-white/10">
                <h3 className="text-primary mb-2">{item.step}</h3>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-white/50 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 WHY */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          {["Premium Quality", "Fast Delivery", "Custom Support"].map((text, i) => (
            <div key={i} className="border border-white/10 p-8">
              <h3 className="text-xl font-bold">{text}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* 🔥 TESTIMONIALS */}
      <section className="px-6 py-24 bg-neutral-950 text-center">
        <h2 className="text-5xl font-black uppercase mb-12">
          What Our <span className="text-primary">Customers Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Best quality 🔥", "Loved it!", "Amazing prints"].map((t, i) => (
            <div key={i} className="border border-white/10 p-6">
              "{t}"
            </div>
          ))}
        </div>
      </section>
<section className="px-6 py-32 flex items-center justify-center relative overflow-hidden">

  {/* 🔥 Background Glow */}
  <div className="absolute w-[600px] h-[600px] bg-red-500/20 blur-[120px] rounded-full"></div>

  <div className="text-center relative z-10">

    {/* TITLE */}
    <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">

      <span className="text-white">Ready to</span>{" "}
      
      <span className="text-primary relative">
        Create?

        {/* 🔥 Glow underline */}
        <span className="absolute left-0 bottom-0 w-full h-2 bg-primary blur-md opacity-60"></span>
      </span>

    </h2>

    {/* SUBTEXT */}
    <p className="text-white/50 mt-6 max-w-md mx-auto">
      Turn your idea into premium streetwear. Start your custom design now.
    </p>

    {/* BUTTON */}
    <button
      onClick={() => setOpen(true)}
      className="mt-10 px-10 py-4 bg-primary text-white font-bold uppercase tracking-widest 
      shadow-[0_0_25px_rgba(255,0,0,0.6)] 
      hover:shadow-[0_0_40px_rgba(255,0,0,0.9)] 
      hover:scale-105 transition duration-300"
    >
      Customize Now
    </button>

  </div>
</section>

      {/* 🔥 MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black border border-white/20 p-6 w-full max-w-md">

            <h2 className="mb-4 text-xl text-primary uppercase">Place Order</h2>

            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mb-3 bg-black border border-white/20"
            />

            <select value={size} onChange={(e) => setSize(e.target.value)} className="w-full p-3 mb-3 bg-black border border-white/20">
              <option>S</option><option>M</option><option>L</option><option>XL</option>
            </select>

            <select value={color} onChange={(e) => setColor(e.target.value)} className="w-full p-3 mb-3 bg-black border border-white/20">
              <option>Black</option><option>White</option><option>Red</option>
            </select>

            <input
              placeholder="Custom Text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-3 mb-3 bg-black border border-white/20"
            />

            <textarea
              placeholder="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3 mb-4 bg-black border border-white/20"
            />

            <div className="flex gap-3">
              <button onClick={() => setOpen(false)} className="flex-1 border border-white/20 py-3">
                Cancel
              </button>

              <button onClick={handleWhatsApp} className="flex-1 bg-primary py-3 text-white">
                WhatsApp
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
};