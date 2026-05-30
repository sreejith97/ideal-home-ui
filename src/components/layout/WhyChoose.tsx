import { CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";

const WhyChoose = () => {
  const benefits = [
    "One factory for kitchens, wardrobes, doors, and premium window systems.",
    "Fast 3D design before production",
    "Precision manufacturing with European machinery",
    "Solutions designed for UAE villas",
  ];

  return (
    <section className="bg-white mb-[60px] md:mb-[80px] lg:mb-[100px]">
      <div className="mx-auto w-[92%] md:w-[95%] lg:w-full max-w-[1200px] rounded-[20px] lg:rounded-[2rem] bg-gradient-to-t from-primary to-black text-white">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-y-8 lg:gap-y-0 lg:gap-x-[50px]">
          <div className="relative h-[250px] sm:h-[300px] md:h-[340px] lg:h-[363px] w-full lg:w-[560px] overflow-visible mt-8 lg:mt-0">
            <div className="">
              <Image
                src="/assets/chooseIdealFactory.png"
                alt="3D Kitchen"
                width={560}
                height={452}
                className="absolute -top-10 sm:-top-16 md:-top-20 lg:top-12 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-[90%] sm:w-[80%] md:w-[70%] lg:w-full max-w-[560px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-3.5 px-6 pb-8 lg:px-0 lg:pt-[69px] lg:pr-[55px] lg:pb-[63px]">
            <h2 className="font-bold text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] leading-[130%] lg:leading-[150%] align-middle text-center lg:text-left">
              Why Villa Owners Choose <br className="hidden md:block" />
              Ideal Factory
            </h2>

            <ul className="flex flex-col gap-2.5 mt-2 lg:mt-0">
              {benefits.map((text, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white/20" />
                  </div>
                  <p className="font-inter font-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] leading-[150%] tracking-normal">
                    {text}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-4 lg:mt-2 flex justify-center lg:justify-start">
              <button className="flex items-center justify-center w-full sm:w-auto gap-2 bg-white text-[#5bc5c7] px-6 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300 shadow-lg text-[14px] sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Start Your Free 3D Design</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
