import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section
      className=" relative h-screen bg-cover bg-center bg-no-repeat py-16 md:py-24 lg:py-32 "
      style={{
        backgroundImage: "url('/assets/hero_background.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="w-[423px] h-[632px] sm:w-[480px] md:w-[540px] lg:w-[632px] rounded-[10px] px-[30px] gap-[21px] bg-[#0E0B0B75] backdrop-blur-[4px]">
        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="font-sans font-bold text-[48px] leading-[120%] tracking-normal align-middle max-w-[578px]">
            Design & Delivery of Your Villa Interiors{" "}
            <span className="text-primary h-[45px]">Made Simple</span>
          </h1>

          <p className="mt-[19px] px-[8px] py-[16px] max-w-[578px] font-inter font-medium text-base sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[150%] tracking-normal text-neutral-200">
            Kitchens, closets, doors, and premium uPVC windows designed,
            manufactured, and installed by one trusted Emirati factory.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* <button className="rounded-xl bg-white px-6 py-3 text-black">
              Start Nows
            </button> */}

            <Button
              text="Get Your FREE 3D Design Now"
              className="w-[329px] h-[52px] rounded-[10px] gap-[10px] px-[20px] py-[12px] bg-white sm:w-[280px] md:w-[320px] lg:w-[329px] font-inter font-bold text-base md:text-[18px] leading-[24px] text-center "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
