"use client";
import React, { useRef } from "react";
import { ArrowRight, Shirt, ChefHat, DoorOpen, Scan } from "lucide-react";
import Button from "@/components/ui/Button";

const solutionsData = [
  {
    id: 1,
    title: "Kitchens",
    description: "Designed for daily use, built for long-term performance",
    image: "/assets/kitchen_solution.png",
    icon: <ChefHat size={34} />,
  },
  {
    id: 2,
    title: "Wardrobes & Closets",
    description: "Structured storage that stays organized over time",
    image: "/assets/wardrobes_solution.png",
    icon: <Shirt size={34} />,
  },
  {
    id: 3,
    title: "Wooden Doors",
    description: "Precise finishes that hold up with everyday use",
    image: "/assets/wooden_solution.png",
    icon: <DoorOpen size={34} />,
  },
  {
    id: 4,
    title: "Premium Window Systems",
    description: "Sealed systems for better comfort and control",
    image: "/assets/permium_solution.jpg",
    icon: <Scan size={34} />,
  },
];

const Solution = () => {
  const mainSectionRef = useRef<HTMLElement>(null);
  return (
    // <section
    //   className="relative min-h-screen py-16  bg-[#1a1a1a] text-white"
    //   style={{
    //     backgroundImage: "url('/assets/solution_background.jpg')",
    //   }}
    //   ref={mainSectionRef}
    // >
    //   <div className="absolute inset-0 bg-black/60" />
    //   <div className="max-w-[1348px] mx-auto relative z-10">
    //     <div className="text-center mb-12 mt-20">
    //       <h2 className="font-lexend font-bold text-[36px] sm:text-[42px] md:text-[48px] lg:text-[48px] leading-[120%] tracking-normal text-center align-middle mb-2.5">
    //         Our Solutions
    //       </h2>
    //       <p className="text-gray-200 font-semibold text-[32px]">
    //         We provide all type of modular <br />
    //         <span className="text-primary text-[32px] font-semibold tracking-wide">
    //           KITCHEN, CLOSET, DOOR{" "}
    //           <span className="normal-case">Services</span>
    //         </span>
    //       </p>
    //     </div>

    //     <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 ">
    //       {solutionsData.map((item) => (
    //         <div
    //           key={item.id}
    //           className="group flex flex-col overflow-hidden rounded-[10px] border border-white/5 bg-[#231F20CC] backdrop-blur-[2px]"
    //         >
    //           <div
    //             className="relative overflow-hidden"
    //             style={{ height: "clamp(220px, 32vh, 380px)" }}
    //           >
    //             <img
    //               src={item.image}
    //               alt={item.title}
    //               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
    //             />

    //             <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>

    //             <div className="absolute left-[26px] top-[26px] flex h-14 w-14 items-center justify-center rounded-[10px] bg-white text-primary">
    //               {item.icon}
    //             </div>
    //           </div>

    //           <div className="flex flex-1 flex-row w-full items-center justify-between px-5 py-5">
    //             <div>
    //               <h3 className="font-inter font-semibold text-[20px] sm:text-[22px] md:text-[24px] lg:text-[24px] leading-[1.3] text-white ">
    //                 {item.title}
    //               </h3>
    //               <p className="font-inter font-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] leading-[1.5] text-white/90 ">
    //                 {item.description}
    //               </p>
    //             </div>

    //             <div className="mt-auto flex justify-end">
    //               <button
    //                 className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary transition-all duration-300 group-hover:bg-primary-hover group-hover:shadow-[0_0_20px_rgb(var(--primary)_/_0.4)]"
    //                 aria-label={`Learn more about ${item.title}`}
    //               >
    //                 <ArrowRight className="h-4 w-4 text-white" />
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     <div className="mt-16 flex justify-center">
    //       <Button
    //         text="Explore Our Projects"
    //         icon={<ArrowRight size={18} />}
    //         iconPosition="right"
    //         className=" hover:bg-[#4aaeb0] text-white inline-flex items-center gap-2 rounded-[8px] bg-primary px-6 py-3 text-base font-medium text-white transition-all duration-300   w-[236px] h-[52px]"
    //       />
    //     </div>
    //   </div>
    // </section>

    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <section className="h-screen w-full relative bg-neutral-950 overflow-hidden">
        <div
          className="background-image absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/solution_background.jpg')" }}
        />

        <div className="svg-overlay absolute inset-0 pointer-events-none">
          <svg
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
            className="h-full w-full"
          >
            <defs>
              <mask id="simpleTextMask">
                <rect width="1920" height="1080" fill="white" />
                <g
                  className="text-to-zoom"
                  fontFamily="system-ui, sans-serif"
                  fontWeight="900"
                  fontSize="250"
                  textAnchor="middle"
                >
                  <text x="960" y="300" fill="black">
                    OUR
                  </text>
                  <text x="960" y="550" fill="black">
                    INTERIOR
                  </text>
                  <text x="960" y="800" fill="black">
                    SOLUTIONS
                  </text>
                </g>
              </mask>
            </defs>

            <rect
              width="1920"
              height="1080"
              fill="#171717"
              mask="url(#simpleTextMask)"
              className="pointer-events-auto"
            />

            <g
              className="text-to-zoom"
              fontFamily="system-ui, sans-serif"
              fontWeight="900"
              fontSize="250"
              textAnchor="middle"
              fill="none"
              stroke="white"
              strokeWidth="4"
            >
              <text x="960" y="300">
                OUR
              </text>
              <text x="960" y="550">
                INTERIOR
              </text>
              <text x="960" y="800">
                SOLUTIONS
              </text>
            </g>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Solution;
