import React, { useState } from 'react';
import Image from 'next/image';
import { Modal } from 'components';

interface HeroSectionProps {
  images: {
    url: string;
    alt: string;
  }[];
  content: string;
}

const HeroSection = ({ images, content }: HeroSectionProps) => {
  const [activeImg, setActiveImg] = useState('');

  const onCloseModal = () => {
    setActiveImg('');
  };

  const onViewImg = (data: string) => () => {
    setActiveImg(data);
  };

  return (
    <div className="flex gap-6 mb-[230px]">
      <div className="flex-1 overflow-hidden hover:bg-slate-300 transition-all duration-300">
        <Image
          src={images[0].url}
          alt={images[0].alt}
          width={384}
          height={600}
          className="w-full object-cover hover:scale-110 transition-all duration-300 hover:opacity-70 cursor-pointer"
          onClick={onViewImg(images[0].url)}
          priority
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
            onClick={onViewImg(images[1].url)}
            priority
          />
        </div>
        <div className="overflow-hidden hover:bg-slate-300 transition-all duration-300">
          <Image
            src={images[2].url}
            alt={images[2].alt}
            width={384}
            height={290}
            className="w-full object-cover hover:scale-110 transition-all duration-300 hover:opacity-70 cursor-pointer"
            onClick={onViewImg(images[2].url)}
            priority
          />
        </div>
      </div>
      <div className="flex-1">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <Modal isOpen={!!activeImg} onClose={onCloseModal}>
        <div>
          <Image
            src={activeImg}
            alt="Selected image"
            width={384}
            height={290}
            className="w-full object-cover mb-6"
          />
          <div>
            <h3 className="text-xl mb-2">This is a sample title</h3>
            <p>
              Assuming that each picture has a description. Just to make it look
              better.
            </p>
            <button
              className="block py-3 px-12 rounded-md bg-slate-300 mt-6 focus:outline-none"
              onClick={onCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HeroSection;
