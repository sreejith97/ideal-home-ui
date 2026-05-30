import { Globe, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-[92%] md:w-[95%] lg:w-full max-w-[1200px] text-white">
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 w-full text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start gap-4">
              <div>
                <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold">
                  Ideal Factory
                </h2>
              </div>
              <p className="font-inter text-[12px] sm:text-[13px] md:text-[13px] lg:text-[13px] leading-[20px] tracking-normal align-middle">
                Our kitchens may not be able to whisk you away to sun kissed
                foreign shores, but our collection boasts all the quality
                craftsmanship and style..
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-4">
              <h3 className="font-inter text-primary font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[130%] tracking-normal align-middle">
                Quick Links
              </h3>
              <ul className="flex flex-col items-center sm:items-start gap-2.5 font-inter font-medium text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[150%] tracking-normal align-middle">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Testimonials</li>
                <li>Projects</li>
              </ul>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-4">
              <h3 className="font-inter text-primary font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[130%] tracking-normal align-middle">
                Explore
              </h3>
              <ul className="flex flex-col items-center sm:items-start gap-2.5 font-inter font-medium text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[150%] tracking-normal align-middle">
                <li>Walk in Closet</li>
                <li>Wardrobe Closet</li>
                <li>U-Shape Kitchen</li>
                <li>Pantry Kitchen</li>
                <li>Doors</li>
              </ul>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-4">
              <h3 className="font-inter text-primary font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[130%] tracking-normal align-middle">
                Contact
              </h3>
              <ul className="flex flex-col items-center sm:items-start gap-3 font-inter font-medium text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[150%] tracking-normal align-middle">
                <li className="flex items-center gap-2">
                  <span>
                    <Globe
                      className="text-primary w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]"
                      strokeWidth={1.5}
                    />
                  </span>
                  <span>www.idealhome.ae</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <Mail
                      className="text-primary w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]"
                      strokeWidth={1.5}
                    />
                  </span>
                  <span>info@idealhome.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <Phone
                      className="text-primary w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]"
                      strokeWidth={1.5}
                    />
                  </span>
                  <span>+971-000-00-000</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <Phone
                      className="text-primary w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]"
                      strokeWidth={1.5}
                    />
                  </span>
                  <span>971 (0)50 312 2300</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full h-[1px] my-6 lg:my-8 bg-primary"></div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full text-[13px] md:text-[15px] lg:text-base text-center sm:text-left">
            <div>
              <p>Copyright ©2025 lumicore all rights reserved</p>
            </div>

            <div className="flex items-center gap-4 lg:gap-6">
              <span>Terms & Condition</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
