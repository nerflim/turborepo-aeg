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
    <div className="flex gap-6 mb-[230px]">
      <div className="flex-1">
        <Image
          src={images[0].url}
          alt={images[0].alt}
          width={384}
          height={600}
          className="w-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <Image
          src={images[1].url}
          alt={images[1].alt}
          width={384}
          height={290}
          className="w-full object-cover"
        />
        <Image
          src={images[2].url}
          alt={images[2].alt}
          width={384}
          height={290}
          className="w-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default HeroSection;
