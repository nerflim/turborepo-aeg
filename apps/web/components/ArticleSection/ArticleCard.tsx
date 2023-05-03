import React, { MouseEvent } from 'react';
import Image from 'next/image';

interface ArticleCardProps {
  thumbnail: string;
  title: string;
  description: string;
  slug: string;
}

// You might be wondering why I'm using a different way of props declaration instead of React.FC
// There are few shortcomings about using React.FC
// refer to: https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript

const ArticleCard = ({ thumbnail, title, description }: ArticleCardProps) => {
  const onReadMore = (e: MouseEvent<HTMLAnchorElement>) => {
    console.log('Read more clicked!');
    console.log(e.target);
  };

  return (
    <a
      className="flex-1 group cursor-pointer hover:-translate-y-3 transition-transform duration-300 mb-12 sm:mb-0"
      onClick={onReadMore}
    >
      <div className="overflow-hidden border-b-4 border-primary group-hover:shadow-xl">
        <Image
          src={thumbnail}
          alt={title}
          width={384}
          height={290}
          className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="py-6">
        <div className="text-base mb-3">{title}</div>
        <div className="font-light leading-relaxed opacity-70">
          {description}
        </div>
      </div>
      <div className="cursor-pointer border-b border-primary py-3 inline-block group-hover:border-b-4 group-hover:font-bold transition-all">
        READ MORE
      </div>
    </a>
  );
};

export default ArticleCard;
