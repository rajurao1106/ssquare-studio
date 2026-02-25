import React from "react";

const About = () => {
  const stats = [
    { label: "Happy Clients", value: "255+" },
    { label: "Projects Done", value: "255+" },
    { label: "Awards Won", value: "255+" },
    { label: "Designers", value: "255+" },
  ];

  const gallery = [

    {
      title: "Master Bedroom",
      span: "md:col-span-1 md:row-span-1",
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "False Ceiling",
      span: "md:col-span-1 md:row-span-2",
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Modular Kitchen",
      span: "md:col-span-1 md:row-span-1",
      img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="min-h-screen p-8 md:p-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: About & Stats (Inspired by image_24975d.png) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="text-gray-400 text-sm tracking-widest uppercase">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight">
              Inspiration for home <br />
              <span className="text-[#E3C77A]">interior designs</span>
            </h1>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Give your home a new look with these interior design ideas curated
              specifically for your lifestyle and comfort.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 py-6">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-3xl font-light text-[#E3C77A]">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-tighter">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <button className="bg-[#8FAF9A] hover:bg-teal-700 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg">
            Know More
          </button>
        </div>

        {/* Right Side: Masonry Gallery (Inspired by image_250c3d.jpg) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden rounded-3xl bg-stone-900 ${item.span}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
              />
              {/* <div className="absolute bottom-4 left-4">
                <span className="bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-widest text-white px-3 py-1 rounded">
                  {item.title}
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
