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
    <section className="bg-white mb-[100px]">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-t from-primary to-black text-white  ">
        <div className="flex flex-row items-center justify-center gap-x-[50px]">
          <div className="relative h-[363px] w-[560px] overflow-visible">
            <div className="">
              <Image
                src="/assets/chooseIdealFactory.png"
                alt="3D Kitchen"
                width={560}
                height={452}
                className="absolute top-12 left-0 w-full max-w-[560px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-3.5 pt-[69px] pr-[55px] pb-[63px]">
            <h2 className="font-bold text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] leading-[150%]  align-middle">
              Why Villa Owners Choose <br className="hidden md:block" />
              Ideal Factory
            </h2>

            <ul className="flex flex-col gap-2.5">
              {benefits.map((text, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-white fill-white/20" />
                  </div>
                  <p className="font-inter font-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] leading-[150%] tracking-normal">
                    {text}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-2 flex">
              <button className="flex items-center gap-2 bg-white text-[#5bc5c7] px-6 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300 shadow-lg">
                <Phone className="w-5 h-5" />
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
