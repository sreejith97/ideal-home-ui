import { CheckCircle2, Phone } from "lucide-react";

const WhyChoose = () => {
  const benefits = [
    "One factory for kitchens, wardrobes, doors, and premium window systems.",
    "Fast 3D design before production",
    "Precision manufacturing with European machinery",
    "Solutions designed for UAE villas",
  ];

  return (
    <section className="bg-white py-[100px] lg:py-28">
      {/* Main Container with Gradient
        Using bg-gradient-to-tr (bottom-left to top-right) to match the visual 
        flow of the provided image where the dark area is top/right.
      */}
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-t from-primary to-black px-6 py-12 sm:px-8 sm:py-16 lg:px-[60px] lg:py-[80px] text-white">
        {/* 2-Column Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image Area */}
          <div className="flex justify-center lg:justify-start w-full">
            {/* Placeholder for the 3D Kitchen Image */}
            <div className="relative w-full max-w-[500px] aspect-[4/3] flex items-center justify-center">
              <span className="text-white/50 border border-white/20 p-10 rounded-xl border-dashed">
                [ 3D Isometric Kitchen Image ]
              </span>
              {/* If using Next.js Image: 
                 <Image src="/path-to-image.png" alt="3D Kitchen" fill className="object-contain" /> 
              */}
            </div>
          </div>

          {/* Right Column: Content Area */}
          <div className="flex flex-col gap-8">
            {/* Heading */}
            <h2 className="font-bold text-[30px] sm:text-[34px] md:text-[40px] lg:text-[40px] leading-[150%] align-middle">
              Why Villa Owners Choose <br className="hidden md:block" />
              Ideal Factory
            </h2>

            {/* List Items Container */}
            <ul className="flex flex-col gap-5">
              {benefits.map((text, index) => (
                <li key={index} className="flex items-start gap-4">
                  {/* Icon Wrapper to prevent shrinking */}
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-white fill-white/20" />
                  </div>
                  <p className="text-base md:text-lg text-gray-100 leading-relaxed">
                    {text}
                  </p>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
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
