import Image from "next/image";
import Button from "../ui/Button";

const FILTERS = ["Kitchen", "Door", "Closet", "uPVC Windows"];

const Gallery = () => {
  return (
    <section className="bg-[#222222] py-12 md:py-16 lg:py-24 mb-[60px] md:mb-[80px] lg:mb-[100px]">
      <div className="mx-auto w-[92%] md:w-[95%] lg:w-full max-w-[1200px] sm:px-8 lg:px-0">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-semibold text-[22px] sm:text-[24px] md:text-[28px] lg:text-[28px] leading-[100%] text-center align-middle text-white">
            Designed. Built. Delivered
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          <button className="bg-white text-black px-4 py-1.5 md:px-6 md:py-2 rounded-[8px] text-[13px] md:text-sm font-medium transition-all">
            All
          </button>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className="bg-transparent border border-white/40 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-[8px] text-[13px] md:text-sm font-medium hover:bg-white/10 transition-all"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-2.5 h-auto md:h-[988px] max-h-none md:max-h-[988px] mb-8 md:mb-0">
          <div className="md:col-span-2 md:row-span-2 rounded-[10px] overflow-hidden bg-neutral-800 relative group">
            <Image
              src="/assets/project_1.png"
              alt="Kitchen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-1 md:row-span-1 rounded-[10px] overflow-hidden bg-neutral-800 relative group">
            <Image
              src="/assets/project_2.jpg"
              alt="Windows"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-1 md:row-span-1 rounded-[10px] overflow-hidden bg-neutral-800 relative group">
            <Image
              src="/assets/project_3.png"
              alt="Second Kitchen"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-2 md:row-span-1 rounded-[10px] overflow-hidden bg-neutral-800 relative group">
            <Image
              src="/assets/project_4.jpg"
              alt="Livingroom"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-2 md:row-span-1 rounded-[10px] overflow-hidden bg-neutral-800 relative group">
            <Image
              src="/assets/project_5.png"
              alt="Closet"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-1 md:row-span-1 rounded-[10px] overflow-hidden bg-neutral-800 relative group">
            <Image
              src="/assets/project_6.png"
              alt="Door"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-1 md:row-span-1 rounded-[10px] overflow-hidden bg-neutral-800 relative group">
            <Image
              src="/assets/project_7.jpg"
              alt="Livingroom"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            text="Explore Projects"
            iconPosition="right"
            className="hover:bg-[#4aaeb0] inline-flex items-center justify-center gap-2 rounded-[8px] bg-primary px-6 py-3 font-medium text-[14px] md:text-[16px] text-white transition-all duration-300 w-full sm:w-[200px] h-[48px] md:h-[52px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
