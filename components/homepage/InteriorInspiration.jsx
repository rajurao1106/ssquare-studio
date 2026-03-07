"use client"

import React, { useState } from "react";

const InteriorInspiration = () => {
  // State to store the URL of the image to be shown in the modal
  const [selectedImage, setSelectedImage] = useState(null);

  const designs = [
    {
      title: "Living Room",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      size: "md:col-span-2 md:row-span-2 h-[400px]",
    },
    {
      title: "Master Bedroom",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=400",
      size: "md:col-span-1 md:row-span-2 h-[400px]",
    },
    {
      title: "False Ceiling",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      size: "md:col-span-1 md:row-span-2 h-[400px]",
    },
    {
      title: "Dining Area",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=400",
      size: "md:col-span-1 md:row-span-2 h-[350px]",
    },
    {
      title: "Modular Kitchen",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
      size: "md:col-span-2 md:row-span-2 h-[350px]",
    },
    {
      title: "Wardrobe",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=400",
      size: "md:col-span-1 md:row-span-2 h-[350px]",
    },
  ];

  return (
    <section className="pt-24 relative">
      {/* Header Section */}
      <div className="flex flex-col px-8 md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h2 className="text-5xl max-lg:text-4xl  font-[Bodoni_Moda] font-extrabold text-slate-900 tracking-tight">
            Inspiration for home <br className="hidden lg:block"/> interior designs
          </h2>
          <p className="text-gray-500 text-lg mt-1 font-light">
            Give your home a new look with these interior design ideas curated for you
          </p>
        </div>
        <button className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-3 transition-all duration-300 shadow-lg">
          View All
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 h-screen md:grid-cols-4">
        {designs.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(item.image)} // Set image on click
            className={`group relative overflow-hidden h-full shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${item.size}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* --- Lightbox Modal --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 transition-all"
          onClick={() => setSelectedImage(null)} // Close when clicking background
        >
          {/* Close Button */}
          <button 
            className="absolute top-10 right-10 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          
          {/* Big Image */}
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] rounded-sm shadow-2xl animate-in fade-in zoom-in duration-300"
          />
        </div>
      )}
    </section>
  );
};

export default InteriorInspiration;