import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  images: {
    url: string;
    alt: string;
  }[];
  content: string;
}

const HeroSection = ({ images, content }: HeroSectionProps) => {
  return (
    <div className="flex gap-6 mb-[230px] snap-start">
      <div className="flex-1 overflow-hidden hover:bg-slate-300 transition-all duration-300">
        <Image
          src={images[0].url}
          alt={images[0].alt}
          width={384}
          height={600}
          className="w-full object-cover hover:scale-110 transition-all duration-300 hover:opacity-70 cursor-pointer"
        />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <div className="overflow-hidden hover:bg-slate-300 transition-all duration-300">
          <Image
            src={images[1].url}
            alt={images[1].alt}
            width={384}
            height={290}
            className="w-full object-cover hover:scale-110 transition-all duration-300 hover:opacity-70 cursor-pointer"
          />
        </div>
        <div className="overflow-hidden hover:bg-slate-300 transition-all duration-300">
          <Image
            src={images[2].url}
            alt={images[2].alt}
            width={384}
            height={290}
            className="w-full object-cover hover:scale-110 transition-all duration-300 hover:opacity-70 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex-1">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default HeroSection;
