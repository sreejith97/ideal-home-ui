import React from "react";
import Button from "@/components/ui/Button";

const Gallery = () => {
  return (
    <section className="bg-[#222222] py-16 lg:py-24 mb-[100px]">
      <div className="mx-auto max-w-[1200px]  sm:px-8 lg:px-0">
        <div className="text-center mb-8">
          <h2 className="font-semibold text-[22px] sm:text-[24px] md:text-[28px] lg:text-[28px] leading-[100%] text-center align-middle text-white">
            Designed. Built. Delivered
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-white text-black px-6 py-2 rounded-[8px] text-sm font-medium transition-all">
            All
          </button>
          {["Kitchen", "Door", "Closet", "uPVC Windows"].map((filter) => (
            <button
              key={filter}
              className="bg-transparent border border-white/40 text-white px-6 py-2 rounded-[8px] text-sm font-medium hover:bg-white/10 transition-all"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-2.5 max-h-[988px] h-[988px]">
          <div className="md:col-span-2 md:row-span-2 rounded-[10px] overflow-hidden bg-neutral-800 relative group">
            <img
              src="/assets/project_1.png"
              alt="Kitchen"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-1 md:row-span-1 rounded-[10px] overflow-hidden bg-neutral-800 relative group">
            <img
              src="/assets/project_2.jpg"
              alt="Windows"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-1 md:row-span-1 rounded-[10px] overflow-hidden bg-neutral-800 relative group">
            <img
              src="/assets/project_3.png"
              alt="Second Kitchen"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-2 md:row-span-1 rounded-[10px] overflow-hidden bg-neutral-800 relative group">
            <img
              src="/assets/project_4.jpg"
              alt="Livingroom"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-2 md:row-span-1 rounded-[10px] overflow-hidden bg-neutral-800 relative group">
            <img
              src="/assets/project_5.png"
              alt="Closet"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-1 md:row-span-1 rounded-[10px] overflow-hidden bg-neutral-800 relative group">
            <img
              src="/assets/project_6.png"
              alt="Door"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-1 md:row-span-1 rounded-[10px] overflow-hidden bg-neutral-800 relative group">
            <img
              src="/assets/project_7.jpg"
              alt="Livingroom"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="flex justify-center ">
          <Button
            text="Explore Projects"
            iconPosition="right"
            className="hover:bg-[#4aaeb0] inline-flex items-center justify-center gap-2 rounded-[8px] bg-primary px-6 py-3 font-medium text-[16px] text-white transition-all duration-300 w-full sm:w-[200px] h-[52px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
