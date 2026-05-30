import Button from "../ui/Button";

const Contact = () => {
  return (
    <section className="bg-linear-to-t from-secondary to-[#000000] py-[58px] px-[121px] ">
      <div className="mx-auto max-w-[1200px] rounded-[2rem] text-white">
        <div className="flex flex-row gap-[65px] items-center relative z-10">
          <div className="flex flex-col">
            <Button
              text="Get in touch"
              className="w-[143px] h-[35px] mb-[28px] rounded-[10px] gap-[10px] px-[14px] py-[14px] bg-primary text-white  lg:w-[143px] font-inter font-bold font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[150%]  text-center align-middle leading-[24px] text-center "
            />
            <div className="flex flex-col gap-y-[10px] max-w-[451px]">
              <h2 className="font-inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[32px] leading-[130%]  align-middle">
                Let's discuss your project!
              </h2>

              <p className="font-inter font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[150%]  align-middle">
                Contact us today and learn more about how our interior fit out &
                custom manufacturing services can bring your ideas to life.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-[686px] ">
            <h2 className="font-inter mb-[24px] font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[32px] leading-[130%]  align-middle">
              We Love to Hear From You
            </h2>

            <form className="flex flex-col gap-[18px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
                <input
                  className="rounded-[5px] border bg-white px-2.5 py-2.5 text-[16px] text-[#1d1d1d] placeholder:text-[#797777] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="rounded-[5px] border bg-white px-2.5 py-2.5 text-[16px] text-[#1d1d1d] placeholder:text-[#797777] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  type="email"
                  placeholder="Your Email"
                />
              </div>

              <input
                className=" rounded-[5px] border bg-white px-2.5 py-2.5 text-[16px] text-[#1d1d1d] placeholder:text-[#797777] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                type="tel"
                placeholder="Phone Number"
              />

              <textarea
                className="rounded-[5px]  border bg-white px-2.5 py-2.5 text-[16px] text-[#1d1d1d] placeholder:text-[#797777] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Message"
                rows={4}
              ></textarea>

              <div>
                <Button
                  text="Submit"
                  className="w-[200px] h-[52px] mb-[28px] mt-[8px] rounded-[10px] gap-[10px] px-[14px] py-[14px] bg-primary text-white  lg:w-[200px] font-inter font-bold font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[150%]  text-center align-middle leading-[24px] text-center "
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
