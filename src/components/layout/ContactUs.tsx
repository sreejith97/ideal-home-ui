import Button from "../ui/Button";

const Contact = () => {
  return (
    <section className="bg-linear-to-t from-secondary to-[#000000] py-10 sm:py-14 lg:py-[58px] px-5 sm:px-10 lg:px-[121px]">
      <div className="mx-auto max-w-[1200px] rounded-[2rem] text-white">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[65px] items-center lg:items-start relative z-10 w-full">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:w-auto">
            <Button
              text="Get in touch"
              className="w-[143px] h-[35px] mb-6 lg:mb-[28px] rounded-[10px] gap-[10px] px-[14px] py-[14px] bg-primary text-white font-inter font-bold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[24px] text-center align-middle"
            />
            <div className="flex flex-col gap-y-[10px] w-full max-w-[500px] lg:max-w-[451px]">
              <h2 className="font-inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[32px] leading-[130%] align-middle">
                Let's discuss your project!
              </h2>

              <p className="font-inter font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[150%] align-middle">
                Contact us today and learn more about how our interior fit out &
                custom manufacturing services can bring your ideas to life.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-[686px]">
            <h2 className="font-inter mb-6 lg:mb-[24px] font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[32px] leading-[130%] align-middle text-center lg:text-left">
              We Love to Hear From You
            </h2>

            <form className="flex flex-col gap-[18px] w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
                <input
                  className="rounded-[5px] border bg-white px-2.5 py-2.5 text-[16px] text-[#1d1d1d] placeholder:text-[#797777] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary w-full"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="rounded-[5px] border bg-white px-2.5 py-2.5 text-[16px] text-[#1d1d1d] placeholder:text-[#797777] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary w-full"
                  type="email"
                  placeholder="Your Email"
                />
              </div>

              <input
                className="rounded-[5px] border bg-white px-2.5 py-2.5 text-[16px] text-[#1d1d1d] placeholder:text-[#797777] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary w-full"
                type="tel"
                placeholder="Phone Number"
              />

              <textarea
                className="rounded-[5px] border bg-white px-2.5 py-2.5 text-[16px] text-[#1d1d1d] placeholder:text-[#797777] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary w-full"
                placeholder="Message"
                rows={4}
              ></textarea>

              <div className="flex justify-center lg:justify-start">
                <Button
                  text="Submit"
                  className="w-full sm:w-[200px] h-[52px] mb-[28px] mt-[8px] rounded-[10px] gap-[10px] px-[14px] py-[14px] bg-primary text-white font-inter font-bold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[24px] text-center align-middle"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
