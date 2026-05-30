"use client";
import { useRef } from "react";
import { ArrowRight, Shirt, ChefHat, DoorOpen, Scan } from "lucide-react";
import Button from "@/components/ui/Button";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".zoom-trigger",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(".background-image", { opacity: 1, duration: 1 })
        .to(
          ".text-to-zoom",
          { scale: 20, svgOrigin: "960 550", duration: 2 },
          "<0.5",
        )
        .to(".svg-overlay", { opacity: 0, duration: 1 }, "-=0.8");

      const cards = gsap.utils.toArray(".solution-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card as Element,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card as Element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative bg-neutral-950 font-sans text-neutral-200 mb-[60px] md:mb-[80px] lg:mb-[100px]"
    >
      <div className="zoom-trigger absolute top-0 left-0 w-full h-[150vh] pointer-events-none" />

      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
        <div
          className="background-image absolute inset-0 bg-cover bg-center opacity-0"
          style={{ backgroundImage: "url('/assets/solution_background.jpg')" }}
        />

        <div className="svg-overlay absolute inset-0">
          <svg
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
            className="h-full w-full"
          >
            <defs>
              <pattern
                id="texture-bg"
                patternUnits="userSpaceOnUse"
                width="1920"
                height="1080"
              >
                <image
                  href="/assets/solution_bg_pattern.jpg"
                  x="0"
                  y="0"
                  width="1920"
                  height="1080"
                  preserveAspectRatio="xMidYMid slice"
                />
                <rect width="1920" height="1080" fill="#000000" opacity="0.6" />
              </pattern>
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
              fill="url(#texture-bg)"
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
      </div>

      <div className="h-[50vh] w-full pointer-events-none" />

      <div className="content-area relative z-10 w-full pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-[1348px] mx-auto w-full px-4 md:px-6">
          <div className="relative z-[-10] pt-12 md:pt-16 lg:pt-20 pb-6 lg:pb-8 mb-8 lg:mb-12">
            <div className="text-center">
              <h2 className="font-lexend font-bold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[120%] tracking-normal text-center align-middle mb-2.5 text-white">
                Our Solutions
              </h2>
              <p className="text-gray-200 font-semibold text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px]">
                We provide all type of modular <br />
                <span className="text-primary text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px] font-semibold tracking-wide">
                  KITCHEN, CLOSET, DOOR{" "}
                  <span className="normal-case text-gray-200">Services</span>
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-2 mt-8 lg:mt-12 relative z-20">
            {solutionsData.map((item) => (
              <div
                key={item.id}
                className="solution-card group flex flex-col overflow-hidden rounded-[10px] border border-white/10 bg-black/60 backdrop-blur-md"
              >
                <div
                  className="relative overflow-hidden"
                  style={{ height: "clamp(220px, 28vh, 320px)" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>

                  <div className="absolute left-[16px] lg:left-[26px] top-[16px] lg:top-[26px] flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-[8px] lg:rounded-[10px] bg-white text-primary">
                    {item.icon}
                  </div>
                </div>

                <div className="flex flex-1 flex-col sm:flex-row w-full items-start sm:items-center justify-between px-4 lg:px-5 py-4 lg:py-5 gap-4 sm:gap-0">
                  <div>
                    <h3 className="font-inter font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[1.3] text-white">
                      {item.title}
                    </h3>
                    <p className="font-inter font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[1.5] text-white/90 mt-1 sm:mt-0">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto flex justify-end w-full sm:w-auto">
                    <button
                      className="flex h-10 w-10 items-center justify-center rounded-[8px] lg:rounded-[10px] bg-primary transition-all duration-300 group-hover:bg-[#4aaeb0] group-hover:shadow-[0_0_20px_rgb(var(--primary)_/_0.4)]"
                      aria-label={`Learn more about ${item.title}`}
                    >
                      <ArrowRight className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 lg:mt-16 flex justify-center pb-6 lg:pb-8 solution-card">
            <Button
              text="Explore Our Projects"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              className="hover:bg-[#4aaeb0] inline-flex items-center gap-2 rounded-[8px] bg-primary px-5 lg:px-6 py-3 text-sm lg:text-base font-medium text-white transition-all duration-300 w-[200px] lg:w-[236px] h-[46px] lg:h-[52px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
