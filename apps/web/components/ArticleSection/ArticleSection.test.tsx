import React from 'react';
import { render } from '@testing-library/react';
import ArticleSection from './ArticleSection';

describe('ArticleSection component', () => {
  const mockArticles = [
    {
      key: '1',
      thumbnail: 'https://example.com/image1.jpg',
      title: 'Article Title 1',
      description: 'This is a sample article description 1.',
      slug: 'article-slug-1',
    },
    {
      key: '2',
      thumbnail: 'https://example.com/image2.jpg',
      title: 'Article Title 2',
      description: 'This is a sample article description 2.',
      slug: 'article-slug-2',
    },
    {
      key: '3',
      thumbnail: 'https://example.com/image3.jpg',
      title: 'Article Title 3',
      description: 'This is a sample article description 3.',
      slug: 'article-slug-3',
    },
  ];

  it('should render with given articles', () => {
    const { getByText, getAllByTestId } = render(
      <ArticleSection articles={mockArticles} />
    );

    expect(getByText('All the latest from AEG')).toBeInTheDocument();

    const articleCards = getAllByTestId('article-card');
    expect(articleCards).toHaveLength(mockArticles.length);

    articleCards.forEach((card, index) => {
      const article = mockArticles[index];
      expect(card).toHaveTextContent(article.title);
      expect(card).toHaveTextContent(article.description);
    });
  });
});
