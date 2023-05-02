import React from 'react';
import Image from 'next/image';

interface ArticleCardProps {
  thumbnail: string;
  title: string;
  description: string;
  slug: string;
}

const ArticleCard = ({ thumbnail, title, description }: ArticleCardProps) => {
  const onReadMore = () => {
    console.log('Read more clicked!');
  };

  return (
    <div>
      <Image
        src={thumbnail}
        alt={title}
        width={384}
        height={290}
        className="object-contain border-b-4 border-primary"
      />
      <div className="py-6">
        <div className="text-base mb-3">{title}</div>
        <div className="font-light leading-relaxed opacity-70">
          {description}
        </div>
      </div>
      <a
        className="cursor-pointer border-b border-primary py-3"
        onClick={onReadMore}
      >
        READ MORE
      </a>
    </div>
  );
};

export default ArticleCard;
