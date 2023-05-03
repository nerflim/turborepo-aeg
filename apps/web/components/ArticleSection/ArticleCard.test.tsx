import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ArticleCard from './ArticleCard';

describe('ArticleCard component', () => {
  const mockProps = {
    thumbnail: 'https://example.com/image.jpg',
    title: 'Article Title',
    description: 'This is a sample article description.',
    slug: 'article-slug',
  };

  it('should render with given props', () => {
    const { getByText, getByAltText, getByTestId } = render(
      <ArticleCard {...mockProps} />
    );

    expect(getByAltText(mockProps.title)).toBeInTheDocument();
    expect(getByText(mockProps.title)).toBeInTheDocument();
    expect(getByText(mockProps.description)).toBeInTheDocument();
    expect(getByTestId('read-more-btn')).toBeInTheDocument();
  });
});
