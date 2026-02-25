import React from 'react';

const InteriorInspiration = () => {
  const designs = [
    {
      title: 'Living Room',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      size: 'md:col-span-2 md:row-span-2 h-[400px]',
    },
    {
      title: 'Master Bedroom',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=400',
      size: 'md:col-span-1 md:row-span-2 h-[400px]',
    },
    {
      title: 'False Ceiling',
      image: 'https://images.unsplash.com/photo-1513519247388-19345420d484?auto=format&fit=crop&q=80&w=400',
      size: 'md:col-span-1 md:row-span-2 h-[400px]',
    },
    {
      title: 'Dining Area',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&q=80&w=400',
      size: 'md:col-span-1 md:row-span-2 h-[350px]',
    },
    {
      title: 'Modular Kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
      size: 'md:col-span-2 md:row-span-2 h-[350px]',
    },
    {
      title: 'Wardrobe',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=400',
      size: 'md:col-span-1 md:row-span-2 h-[350px]',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Inspiration for home interior designs
          </h2>
          <p className="text-gray-500 text-lg mt-1 font-light">
            Give your home a new look with these interior design ideas curated for you
          </p>
        </div>
        <button className="group flex items-center text-[#E3C77A] font-semibold hover:text-rose-700 transition-colors">
          View All 
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {designs.map((item, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ${item.size}`}
          >
            {/* Image with Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
            
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            {/* Label - Styled exactly like the screenshot */}
            <div className="absolute bottom-5 left-5 z-20">
              <span className="bg-black/70 backdrop-blur-md text-white text-[11px] uppercase tracking-wider px-3 py-1.5 rounded font-bold border border-white/10">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteriorInspiration;