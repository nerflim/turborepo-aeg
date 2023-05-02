import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex gap-6 mb-[230px]">
      <div className="flex-1">
        <img
          src="/images/hero-01.jpg"
          alt="Image 1"
          className="w-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <img
          src="/images/hero-02.jpg"
          alt="Image 2"
          className="w-full object-cover"
        />
        <img
          src="/images/hero-03.jpg"
          alt="Image 3"
          className="w-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="border-b border-white text-2xl uppercase leading-loose tracking-widest mb-6 font-light">
          Answer your body&apos;s needs
        </h3>

        <p className="font-light leading-relaxed text-lg mb-12">
          The way the ingredients are sourced affects the way we nourish our
          bodies. Author Mark Schatzer believes our body naturally develops an
          appetite for the foods and nutrients it needs to be healthy, but that
          artificial flavourings are getting in the way. This can be reversed by
          focusing on high-quality ingredients and being mindful as your
          appetite guides you to consume according to your body&apos;s needs
        </p>

        <p className="text-red-600 uppercase mb-6">Be mindful</p>

        <p className="text-lg">
          Sourcing local or organic food is a good way to start being more
          mindful about what you&apos;re cooking and eating
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
