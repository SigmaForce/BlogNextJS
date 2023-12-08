import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './Footer';
import { siteConfig } from '@/config';

const items = [
  {
    href: '/',
    title: 'Home'
  },
  {
    href: '/about',
    title: 'Sobre Mim'
  }
];

describe('<Footer/>', () => {
  it('should render successfully', () => {
    render(<Footer items={items} />);

    const socialMediaSection = screen.getByText('Redes');
    const sitemapSection = screen.getByText('Sitemap');
    const title = screen.getByText(siteConfig.title);

    expect(title).toBeVisible();
    expect(socialMediaSection).toBeVisible();
    expect(sitemapSection).toBeVisible();
  });
});
