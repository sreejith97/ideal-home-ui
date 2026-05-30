import { Globe, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <section className="w-full bg-black py-20">
      <div className="mx-auto max-w-6xl  text-white">
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full">
            <div className="flex flex-col gap-4">
              <div>
                <h2>Ideal Factory</h2>
              </div>
              <p className="font-inter text-[12px] sm:text-[13px] md:text-[13px] lg:text-[13px] leading-[20px] tracking-normal align-middle">
                Our kitchens may not be able to whisk you away to sun kissed
                foreign shores, but our collection boasts all the quality
                craftsmanship and style..
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-inter text-primary font-semibold text-[20px] sm:text-[22px] md:text-[24px] lg:text-[24px] leading-[130%] tracking-normal align-middle">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-2.5 font-inter font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[150%] tracking-normal align-middle">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Testimonials</li>
                <li>Projects</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-inter text-primary font-semibold text-[20px] sm:text-[22px] md:text-[24px] lg:text-[24px] leading-[130%] tracking-normal align-middle">
                Explore
              </h3>
              <ul className="flex flex-col gap-2.5 font-inter font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[150%] tracking-normal align-middle">
                <li>Walk in Closet</li>
                <li>Wardrobe Closet</li>
                <li>U-Shape Kitchen</li>
                <li>Pantry Kitchen</li>
                <li>Doors</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-inter text-primary font-semibold text-[20px] sm:text-[22px] md:text-[24px] lg:text-[24px] leading-[130%] tracking-normal align-middle">
                Contact
              </h3>
              <ul className="flex flex-col gap-3 font-inter font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[150%] tracking-normal align-middle">
                <li className="flex items-center gap-2">
                  <span>
                    <Globe
                      size={22}
                      strokeWidth={1.5}
                      className="text-primary"
                    />
                  </span>
                  <span>www.idealhome.ae</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <Mail
                      size={22}
                      strokeWidth={1.5}
                      className="text-primary"
                    />
                  </span>
                  <span>info@idealhome.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <Phone
                      size={22}
                      strokeWidth={1.5}
                      className="text-primary"
                    />
                  </span>
                  <span>+971-000-00-000</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <Phone
                      size={22}
                      strokeWidth={1.5}
                      className="text-primary"
                    />
                  </span>
                  <span>971 (0)50 312 2300</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full h-[1px] my-8 bg-primary"></div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
            <div>
              <p>Copyright ©2025 lumicore all rights reserved</p>
            </div>

            <div className="flex items-center gap-6">
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
