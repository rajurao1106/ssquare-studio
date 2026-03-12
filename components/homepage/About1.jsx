import React from "react";
import about from "@/public/homepage/about.jpg";
import Image from "next/image";

const About1 = () => {
  const stats = [
    { label: "Happy Clients", value: "255+" },
    { label: "Projects Done", value: "255+" },
    { label: "Awards Won", value: "255+" },
    { label: "Designers", value: "255+" },
  ];

  const gallery = [
    {
      title: "Master Bedroom",
      // Mobile pe 1 col, Desktop pe 1 col
      span: "col-span-1 row-span-1 rounded-tl-2xl",
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "False Ceiling",
      // Mobile aur Desktop dono par 2 rows cover karega
      span: "col-span-1 row-span-2 rounded-r-2xl",
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Modular Kitchen",
      span: "col-span-1 row-span-1 rounded-bl-2xl",
      img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className=" p-4 py-20  font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 max-lg:gap-8 items-center">
        <div className="lg:col-span-6 grid grid-cols-1 gap-2 h-[400px] md:h-[550px]">
          <div
            className={`relative group overflow-hidden flex justify-between `}
          >
            <h1 className=" relative py-10  font-light tracking-widest items-end ">
              <p className="absolute text-6xl max-lg:text-5xl font-bold font-[Bodoni_Moda] text-[#E3C77A]">
                Interior Designs
              </p>
              <p className="[writing-mode:vertical-lr] text-xs max-lg:text-[8px] h-[110%] text-right py-10 max-lg:py-8">
                https://www.ssquarestudio.com
              </p>
            </h1>
            <Image
              height={1000}
              width={1000}
              priority
              src={about}
              alt={""}
              className="w-full h-full object-cover transition-transform duration-700 "
            />
          </div>
        </div>

        {/* Left Side: About & Stats */}
        <div className="lg:col-span-5 space-y-8 ">
          <div className="space-y-4">
            {/* <span className="text-gray-400 text-sm tracking-widest uppercase">
              About Us
            </span> */}
            <h1 className="text-4xl font-[Bodoni_Moda] font-bold md:text-6xl leading-tight">
              <p className="text-right">Inspiration For </p>
              <p className="text-right">
                {" "}
                <p className="italic text-[#E3C77A]"> Beautiful </p>
                {/* <p className="right-60 relative">Meets</p> */}
              </p>
              <p className="max-lg:text-center"> Interior Designs</p>
            </h1>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Give your home a new look with these interior design ideas curated
              specifically for your lifestyle and comfort.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 ">
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

          <button className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-3  transition-all duration-300 shadow-lg">
            Know More
          </button>
        </div>

        {/* Right Side: Masonry Gallery (Fixed for Mobile) */}
        {/* Yahan grid-cols-2 kiya hai taaki mobile pe bhi 2 side-by-side dikhe */}
      </div>
    </div>
  );
};

export default About1;
