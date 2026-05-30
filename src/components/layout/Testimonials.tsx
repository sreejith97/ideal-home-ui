import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto bg-[#231F20] px-6 py-12 sm:px-8 sm:py-16 lg:px-[60px] lg:py-[80px] text-white">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-8 max-w-[1200px] mx-auto">
          <div className="flex flex-col justify-center lg:col-span-4 gap-6 lg:gap-8 w-full lg:w-auto text-center lg:text-left items-center lg:items-start">
            <div className="flex flex-col gap-3 max-w-[436px] w-full">
              <h4 className="text-primary font-inter font-semibold text-[20px] sm:text-[22px] md:text-[24px] lg:text-[24px] leading-[130%] align-middle">
                Testimonials
              </h4>
              <h2 className="font-inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[32px] leading-[130%] align-middle">
                What They’re Talking About Company ?
              </h2>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <button className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white/10 hover:border-white">
                <ChevronLeft
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  strokeWidth={1.5}
                />
              </button>
              <button className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white/10 hover:border-white">
                <ChevronRight
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  strokeWidth={1.5}
                />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-auto place-items-center lg:place-items-start">
            <div className="flex flex-col gap-y-3.5 rounded-[10px] bg-secondary border border-white/5 p-6 lg:p-[30px] shadow-lg w-full max-w-[335px] lg:w-[335px] card-shadow">
              <div className="text-primary">
                <Quote
                  className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] rotate-180 opacity-80"
                  strokeWidth={1}
                />
              </div>

              <p className="font-inter font-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] leading-[150%] text-[#797777]">
                Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen
                elit libero facilisis etiam ridiculus Lorem ipsum dolor sit amet
                consectetura dipiscin g ipsum rephen elit libero facilisis etiam
                ridiculus
              </p>

              <div className="flex items-center gap-4 mt-4">
                <div className="relative h-10 w-10 lg:h-12 lg:w-12 overflow-hidden rounded-full bg-gray-600 flex-shrink-0">
                  <div className="absolute inset-0 bg-gray-500"></div>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-primary font-inter font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[150%] tracking-normal align-middle">
                    Sarah Johnson
                  </span>
                  <span className="font-inter font-normal text-[13px] sm:text-[14px] md:text-[14px] lg:text-[14px] leading-[140%] tracking-normal align-middle text-gray-300">
                    Customer
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-3.5 rounded-[10px] bg-secondary border border-white/5 p-6 lg:p-8 shadow-lg w-full max-w-[335px] lg:w-[335px] card-shadow">
              <div className="text-primary">
                <Quote
                  className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] rotate-180 opacity-80"
                  strokeWidth={1}
                />
              </div>

              <p className="font-inter font-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] leading-[150%] text-[#797777]">
                Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen
                elit libero facilisis etiam ridiculus Lorem ipsum dolor sit amet
                consectetura dipiscin g ipsum rephen elit libero facilisis etiam
                ridiculus
              </p>

              <div className="flex items-center gap-4 mt-4">
                <div className="relative h-10 w-10 lg:h-12 lg:w-12 overflow-hidden rounded-full bg-gray-600 flex-shrink-0">
                  <div className="absolute inset-0 bg-gray-500"></div>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-primary font-inter font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[150%] tracking-normal align-middle">
                    Alex Roke
                  </span>
                  <span className="font-inter font-normal text-[13px] sm:text-[14px] md:text-[14px] lg:text-[14px] leading-[140%] tracking-normal align-middle text-gray-300">
                    Customer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
