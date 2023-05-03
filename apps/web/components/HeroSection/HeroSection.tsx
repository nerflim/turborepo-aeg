import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { Modal } from 'components';
import { Transition } from '@headlessui/react';

interface HeroSectionProps {
  images: {
    url: string;
    alt: string;
  }[];
  content: string;
}

const imgContainerClassName =
  'overflow-hidden hover:bg-slate-300 transition-all duration-300';
const imgClassName =
  'w-full object-cover hover:scale-110 transition-all duration-300 hover:opacity-70 cursor-pointer';

// You might be wondering why I'm using a different way of props declaration instead of React.FC
// There are few shortcomings about using React.FC
// refer to: https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript

const HeroSection = ({ images, content }: HeroSectionProps) => {
  const [activeImg, setActiveImg] = useState('');

  const onCloseModal = () => {
    setActiveImg('');
  };

  const onViewImg = (data: string) => () => {
    setActiveImg(data);
  };

  return (
    <Transition
      show
      appear
      as={Fragment}
      enter="transition ease-out duration-1000"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
    >
      <section className="flex flex-col lg:flex-row items-start gap-6 mb-[230px]">
        <div className="w-full lg:basis-2/3 flex gap-6">
          <div className={`${imgContainerClassName} flex-1 relative`}>
            <Image
              src={images[0].url}
              alt={images[0].alt}
              className={imgClassName}
              onClick={onViewImg(images[0].url)}
              priority
              fill
            />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div className={imgContainerClassName}>
              <Image
                src={images[1].url}
                alt={images[1].alt}
                width={384}
                height={290}
                className={imgClassName}
                onClick={onViewImg(images[1].url)}
                priority
              />
            </div>
            <div className={imgContainerClassName}>
              <Image
                src={images[2].url}
                alt={images[2].alt}
                width={384}
                height={290}
                className={imgClassName}
                onClick={onViewImg(images[2].url)}
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        {/* MODAL */}
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
                Assuming that each picture has a description. Just to make it
                look better.
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
      </section>
    </Transition>
  );
};

export default HeroSection;
