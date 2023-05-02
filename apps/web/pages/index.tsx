import { Button } from 'components';
import HeroSection from '../components/HeroSection/HeroSection';
import ArticleSection from '../components/ArticleSection/ArticleSection';

const Web = ({ hero, articles }) => {
  return (
    <div>
      <HeroSection {...hero} />
      <ArticleSection articles={articles} />
    </div>
  );
};

export const getStaticProps = async () => {
  // Mock API call
  // assuming that the API call will take 500ms to complete
  const res = new Promise<typeof mockData>((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 500);
  });
  const { hero, articles } = await res;

  return {
    props: {
      hero,
      articles,
    },
  };
};

const mockData = {
  hero: {
    images: [
      {
        url: '/images/hero-01.jpg',
        alt: 'Image 1',
      },
      {
        url: '/images/hero-02.jpg',
        alt: 'Image 2',
      },
      {
        url: '/images/hero-03.jpg',
        alt: 'Image 3',
      },
    ],
    content: `<h3 class="border-b border-white text-2xl uppercase leading-loose tracking-widest mb-6 font-light">
                Answer your body&apos;s needs
              </h3>

              <p class="font-light leading-relaxed text-lg mb-12">
                The way the ingredients are sourced affects the way we nourish our
                bodies. Author Mark Schatzer believes our body naturally develops an
                appetite for the foods and nutrients it needs to be healthy, but that
                artificial flavourings are getting in the way. This can be reversed by
                focusing on high-quality ingredients and being mindful as your
                appetite guides you to consume according to your body&apos;s needs
              </p>

              <p class="text-red-600 uppercase mb-6">Be mindful</p>

              <p class="text-lg">
                Sourcing local or organic food is a good way to start being more
                mindful about what you&apos;re cooking and eating
              </p>`,
  },
  articles: [
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
  ],
};

export default Web;
