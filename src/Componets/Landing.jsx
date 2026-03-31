import React from "react";

function Landing() {
  return (
    <div className="relative w-full h-[120vh] sm:h-[160vh] md:h-[200vh] lg:h-[250vh]">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover object-top"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:quality(90)"
          alt=""
        />
      </div>

      <div className="absolute top-0 w-full">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 text-white">
          <div className="mt-36 sm:mt-56 md:mt-72 lg:mt-[26rem] xl:mt-[32rem]">
            <p className="text-xs sm:text-base md:text-lg lg:text-2xl leading-relaxed">
              Global digital design studio
            </p>
            <p className="text-xs sm:text-base md:text-lg lg:text-2xl leading-relaxed">
              partnering with brands and businesses
            </p>
            <p className="text-xs sm:text-base md:text-lg lg:text-2xl leading-relaxed">
              that create exceptional experiences
            </p>
            <p className="text-xs sm:text-base md:text-lg lg:text-2xl leading-relaxed">
              where people live, work, and unwind.
            </p>
          </div>

          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            <h1 className="text-[2.8rem] sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none">
              Digital
            </h1>
            <h1 className="text-[2.8rem] sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none">
              Design
            </h1>
            <h1 className="text-[2.8rem] sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none">
              Experience
            </h1>
          </div>

          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mt-8 sm:mt-12 lg:mt-20">
            <p className="text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space
            </p>
            <a>
              href="#" className="text-xs sm:text-sm md:text-base lg:text-xl
              border-b border-zinc-300 pb-1 mt-6 sm:mt-8 lg:mt-10 inline-block"
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
