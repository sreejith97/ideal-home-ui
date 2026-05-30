import { Menu, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed text-white top-4 md:top-6 lg:top-[42px] left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[95%] lg:w-full max-w-[1200px] h-[60px] md:h-[68px] lg:h-[77px] bg-[#00000069] backdrop-blur-[4px] rounded-[16px] px-4 md:px-5 lg:px-6">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-x-4 md:gap-x-6 lg:gap-x-[38px]">
          <Menu className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 cursor-pointer" />

          <ul className="hidden lg:flex items-center gap-x-6 font-normal text-[18px] font-inter">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/assets/nav_logo.png"
            alt="Logo"
            className="h-[36px] md:h-[46px] lg:h-[59px] w-auto"
          />
        </div>

        <div className="hidden md:block">
          <Button
            text="Start Your Project"
            className="w-[160px] lg:w-[212px] h-[44px] lg:h-[52px] rounded-[10px] flex items-center justify-center gap-2 bg-primary text-white font-medium text-sm lg:text-base"
            icon={<Phone className="h-4 w-4 lg:h-5 lg:w-5" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
