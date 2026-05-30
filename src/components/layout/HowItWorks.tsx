import {
  ArrowRight,
  BrickWall,
  CircleCheck,
  ImagePlay,
  PencilRuler,
} from "lucide-react";
import Button from "@/components/ui/Button";

const HowItWorks = () => {
  return (
    <section className="bg-white mb-[100px]  ">
      <div
        className=" relative overflow-hidden mx-auto max-w-[1200px] rounded-[2rem] bg-secondary px-6 py-8 sm:px-8 sm:py-10 lg:px-[38px] lg:py-[50px] text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/design_background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 " />
        <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-10 lg:gap-8 items-center">
          <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-10 lg:gap-8 items-center">
            <div className="flex flex-col gap-6 justify-center w-full max-w-[431px] mx-auto lg:mx-0">
              <div className="flex flex-col font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[32px] leading-[130%] align-middle">
                <h2>
                  Design Your Villa Interiors <br />{" "}
                  <span className="text-primary">
                    {" "}
                    Before Spending a Dirham{" "}
                  </span>
                </h2>
              </div>

              <p className="w-full font-inter font-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] leading-[150%] align-middle text-gray-200">
                Upload your villa floor plan and collaborate live with our
                designers to create a full 3D interior concept within an hour.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span>
                    <CircleCheck
                      size={25}
                      className="fill-white"
                      color="#000000"
                    />
                  </span>{" "}
                  No guessing
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <CircleCheck
                      size={25}
                      className="fill-white"
                      color="#000000"
                    />
                  </span>{" "}
                  No Expensive Redesigns
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <CircleCheck
                      size={25}
                      className="fill-white"
                      color="#000000"
                    />
                  </span>{" "}
                  No Delays
                </div>
              </div>

              <div className="flex mt-2">
                <Button
                  text="Start Your 3D Interior Design"
                  icon={<ArrowRight size={24} />}
                  iconPosition="right"
                  className="hover:bg-[#4aaeb0] inline-flex items-center justify-center gap-2 rounded-[8px] bg-primary px-6 py-3 font-medium text-[16px] text-white transition-all duration-300 w-full sm:w-[320px] h-[52px]"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-5 w-full max-w-[624px] mx-auto lg:mx-0">
              <div className="flex flex-col items-center justify-center gap-6 text-center w-[190px] h-[230px] bg-[#4D4A4A12]/50 border border-primary rounded-[24px] p-2 transition-all duration-300 hover:bg-[#4D4A4A10]/70 backdrop-blur-sm">
                <div className="w-[76px] h-[76px] rounded-full bg-primary flex items-center justify-center text-white">
                  <BrickWall size={34} strokeWidth={1} />
                </div>
                <p className="text-white font-inter font-normal text-[16px] leading-[1.3]">
                  Upload Floor
                  <br />
                  Plan
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-6 text-center w-[190px] h-[230px] bg-[#4D4A4A12]/50 border border-primary rounded-[24px] p-2 transition-all duration-300 hover:bg-[#4D4A4A10]/70 backdrop-blur-sm">
                <div className="w-[76px] h-[76px] rounded-full bg-primary flex items-center justify-center text-white">
                  <PencilRuler size={34} strokeWidth={1} />
                </div>
                <p className="text-white font-inter font-normal text-[16px] leading-[1.3]">
                  Get 3D Design
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-6 text-center w-[190px] h-[230px] bg-[#4D4A4A12]/50 border border-primary rounded-[24px] p-2 transition-all duration-300 hover:bg-[#4D4A4A10]/70 backdrop-blur-sm">
                <div className="w-[76px] h-[76px] rounded-full bg-primary flex items-center justify-center text-white">
                  <ImagePlay size={34} strokeWidth={1} />
                </div>
                <p className="text-white font-inter font-normal text-[16px] leading-[1.3]">
                  Live Design
                  <br />
                  Edit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
