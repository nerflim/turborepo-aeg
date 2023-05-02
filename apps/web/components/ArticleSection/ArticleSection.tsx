import React from 'react';
import ArticleCard from './ArticleCard';

interface ArticlesSectionProps {
  articles: {
    key: string;
    thumbnail: string;
    title: string;
    description: string;
    slug: string;
  }[];
}

const ArticleSection = ({ articles }: ArticlesSectionProps) => {
  return (
    <div>
      <h3 className="uppercase text-4xl tracking-wide text-center font-light mb-16">
        All the latest from AEG
      </h3>

      <div className="flex gap-6">
        {articles.map(({ key, ...item }) => (
          <ArticleCard key={key} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;
