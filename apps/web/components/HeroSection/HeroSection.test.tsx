import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection component', () => {
  const images = [
    {
      url: 'https://example.com/image1.jpg',
      alt: 'Image 1',
    },
    {
      url: 'https://example.com/image2.jpg',
      alt: 'Image 2',
    },
    {
      url: 'https://example.com/image3.jpg',
      alt: 'Image 3',
    },
  ];
  const content = '<p>Sample content</p>';

  it('renders images and content', () => {
    const { getByAltText, getByText } = render(
      <HeroSection images={images} content={content} />
    );

    const img1 = getByAltText('Image 1');
    const img2 = getByAltText('Image 2');
    const img3 = getByAltText('Image 3');
    const contentElement = getByText('Sample content');

    expect(img1).toBeInTheDocument();
    expect(img2).toBeInTheDocument();
    expect(img3).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
