import Button from "@/components/ui/Button";
import { CircleArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat py-16 md:py-24 lg:py-32"
      style={{
        backgroundImage: "url('/assets/hero_background.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:top-[248px] lg:left-[143px] w-[90%] sm:w-[480px] md:w-[540px] lg:w-[632px] h-auto lg:h-[423px] rounded-[10px] px-6 py-8 lg:px-[30px] lg:py-[46px] gap-[21px] bg-[#0E0B0B75] backdrop-blur-[4px]">
        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="font-sans font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] tracking-normal align-middle max-w-[578px]">
            Design & Delivery of Your Villa Interiors{" "}
            <span className="text-primary lg:h-[45px]">Made Simple</span>
          </h1>

          <p className="mt-[16px] py-[2px] max-w-[578px] font-inter font-medium text-sm sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[150%] tracking-normal text-neutral-200">
            Kitchens, closets, doors, and premium uPVC windows designed,
            manufactured, and installed by one trusted Emirati factory.
          </p>

          <div className="mt-[20px] flex flex-wrap gap-4">
            <Button
              text="Get Your FREE 3D Design Now"
              className="w-full sm:w-[280px] md:w-[320px] lg:w-[329px] h-[52px] rounded-[10px] gap-[10px] px-[14px] py-[14px] bg-white font-inter font-bold text-[15px] md:text-[18px] leading-[24px] text-center"
              icon={<CircleArrowRight className="text-[20px] lg:text-[24px]" />}
              iconPosition="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
