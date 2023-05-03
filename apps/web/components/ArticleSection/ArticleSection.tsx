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

// You might be wondering why I'm using a different way of props declaration instead of React.FC
// There are few shortcomings about using React.FC
// refer to: https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript

const ArticleSection = ({ articles }: ArticlesSectionProps) => {
  return (
    <section>
      <h3 className="uppercase text-4xl tracking-wide text-center font-light mb-16">
        All the latest from AEG
      </h3>

      <div className="flex gap-6 flex-col sm:flex-row">
        {articles.map(({ key, ...item }) => (
          <ArticleCard key={key} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
