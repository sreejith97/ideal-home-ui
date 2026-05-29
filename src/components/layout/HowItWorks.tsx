import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-white py-[100px] lg:py-28 ">
      <div
        className=" relative overflow-hidden mx-auto max-w-6xl rounded-[2rem] bg-secondary px-6 py-8 sm:px-8 sm:py-10 lg:px-[38px] lg:py-[50px] text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/hero_background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex flex-col">
              <h2>Design Your Villa Interiors</h2>
              <h2>Before Spending a Dirham</h2>
            </div>

            <p>
              Upload your villa floor plan and collaborate live with our
              designers to create a full 3D interior concept within an hour.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span>icon</span> No guessing
              </div>
              <div className="flex items-center gap-2">
                <span>icon</span> No Expensive Redesigns
              </div>
              <div className="flex items-center gap-2">
                <span>icon</span> No Delays
              </div>
            </div>

            <div className="flex mt-2">
              <button className="flex items-center gap-2">
                Start Your 3D Interior Design <span></span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div>Icon</div>
              <p>
                Upload Floor
                <br />
                Plan
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div>Icon</div>
              <p>Get 3D Design</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div>Icon</div>
              <p>Live Design Edit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
