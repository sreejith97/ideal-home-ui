import {
  CircleArrowRight,
  Factory,
  GitCompareArrows,
  PencilRuler,
  Wrench,
} from "lucide-react";
import Image from "next/image";

const Approach = () => {
  return (
    <section className="bg-white mb-[100px] ">
      <div className="mx-auto max-w-[1200px] rounded-[2rem] bg-secondary px-6 py-8 sm:px-8 sm:py-10 lg:px-[38px] lg:py-[50px] text-white">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.6rem] ">
            Why Villa Interior Projects Often Become Difficult?
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-white/80 sm:text-base font-inter">
            When interior systems are sourced from multiple suppliers, the
            process becomes fragmented, making it difficult to coordinate a
            consistent final result. The lack of commitment leads to:
          </p>
        </div>
        <div className="grid gap-x-9 gap-y-4 sm:grid-cols-2 mt-6">
          <div className="flex items-center gap-3 text-lg font-semibold text-2xl text-white">
            <CircleArrowRight size={34} strokeWidth={1} />
            <p>Quality Problems</p>
          </div>
          <div className="flex items-center gap-3 text-lg font-semibold text-2xl text-white">
            <CircleArrowRight size={34} strokeWidth={1} />
            <p>Poor value for money</p>
          </div>

          <div className="flex items-center gap-3 text-lg font-semibold text-2xl text-white">
            <CircleArrowRight size={34} strokeWidth={1} />
            <p>Delays during execution</p>
          </div>

          <div className="flex items-center gap-3 text-lg font-semibold text-2xl text-white">
            <CircleArrowRight size={34} strokeWidth={1} />
            <p>Weak after-sales support</p>
          </div>
        </div>
        <div className="mt-9">
          <Image
            src="/assets/project_video_image.png"
            alt="Banner"
            width={1200}
            height={600}
            className="w-full h-auto rounded-[10px]  border-[1px] border-[#4D4A4A] "
          />
        </div>

        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          <div className="col-span-1">
            <h2 className="font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[32px] leading-[130%] align-middle">
              The Ideal Factory Approach
            </h2>
          </div>

          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 ">
            <div className="flex flex-col gap-4 border-r-[1px] border-[#4D4A4A] pr-7">
              <GitCompareArrows size={37} color="#57B7C0" strokeWidth={1.67} />
              <h3 className="font-inter font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[150%]  align-middle">
                Multiple Interior Systems
              </h3>
              <p className="font-inter font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] leading-[140%]  text-justify">
                One Factory. Kitchens, wardrobes, doors, and premium window
                systems—manufactured together in one facility for coordinated
                villa interiors.
              </p>
            </div>

            <div className="flex flex-col gap-4 border-r-[1px] border-[#4D4A4A] pr-7">
              <PencilRuler size={37} color="#57B7C0" strokeWidth={1.67} />
              <h3 className="font-inter font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[150%]  align-middle">
                Coordinated Design
              </h3>
              <p className="font-inter font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] leading-[140%]  text-justify">
                Our designers ensure that kitchens, closets, doors, & window
                systems complement each other in style & proportion.
              </p>
            </div>

            <div className="flex flex-col gap-4 border-r-[1px] border-[#4D4A4A] pr-7">
              <Wrench size={37} color="#57B7C0" strokeWidth={1.67} />
              <h3 className="font-inter font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[150%]  align-middle">
                After-Sales Support & Maintenance
              </h3>
              <p className="font-inter font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] leading-[140%]  text-justify">
                Our team installs every product with precision to ensure the
                final result reflects the original design.
              </p>
            </div>

            <div className="flex flex-col gap-4 border-r-[1px] border-[#4D4A4A] pr-7">
              <Factory size={37} color="#57B7C0" strokeWidth={1.67} />
              <h3 className="font-inter font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[150%]  align-middle">
                Precision Manufacturing & Installation
              </h3>
              <p className="font-inter font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] leading-[140%]  text-justify">
                Manufactured in-house. Installed with precision. One accountable
                team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
