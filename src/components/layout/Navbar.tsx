import { Menu, Phone } from "lucide-react";
import Button from "@/components/ui/Button";

const Navbar = () => {
  return (
    <div className="absolute text-white top-[42px] left-1/2 -translate-x-1/2 z-10 w-full max-w-[1200px] h-[77px]  bg-[#00000069] backdrop-blur-[4px] rounded-[16px] px-6">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-x-[38px]">
          <Menu className="w-9 h-9 cursor-pointer" />

          <ul className="flex items-center gap-x-6 font-normal text-[18px] font-inter">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/assets/nav_logo.png"
            alt="Logo"
            className="h-[59px] w-auto"
          />
        </div>

        <div>
          <Button
            text="Start Your Project"
            className="w-[212px] h-[52px] rounded-[10px] flex items-center justify-center gap-2 bg-primary text-white font-medium text-base"
            icon={<Phone className="h-5 w-5" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
