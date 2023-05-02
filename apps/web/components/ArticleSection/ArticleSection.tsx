import React from 'react';
import ArticleItem from './ArticleItem';

const articlesData = [
  {
    key: '1',
    thumbnail: '/images/article-01.jpg',
    title: 'Summer Lunch Menu By Mark Best',
    description:
      "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
    slug: 'summer-lunch-menu-by-mark-best',
  },
  {
    key: '2',
    thumbnail: '/images/article-02.jpg',
    title: 'A Traditional Christmas Eve, Mark Best Style',
    description:
      "One of Australia's best chefs and AEG ambassador Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
    slug: 'a-traditional-christmas-eve-mark-best-style',
  },
  {
    key: '3',
    thumbnail: '/images/article-03.jpg',
    title: 'Taking Taste Further',
    description:
      "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of products - and the best out of your food.",
    slug: 'taking-taste-further',
  },
];

const ArticleSection = () => {
  return (
    <div>
      <h3 className="uppercase text-4xl tracking-wide text-center font-light mb-16">
        All the latest from AEG
      </h3>

      <div className="flex gap-6">
        {articlesData.map(({ key, ...item }) => (
          <ArticleItem key={key} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;
