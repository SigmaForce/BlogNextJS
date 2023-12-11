import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SocialMedia } from './SocialMedia';
import { InstagramIcon, LinkedinIcon } from '../Icons';

const items = [
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/sigmaforc3/',
    icon: <LinkedinIcon data-testid="linkedin-icon" />
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/sigmaforc3/',
    icon: <InstagramIcon data-testid="instagram-icon" />
  }
];

describe('<SocialMedia>', () => {
  it('should render Social Media', () => {
    render(<SocialMedia items={items} />);

    const firstLink = screen.getByRole('link', { name: items[0].title });
    const secondLink = screen.getByRole('link', { name: items[1].title });

    const firstIcon = screen.getByTestId('linkedin-icon');
    const secondIcon = screen.getByTestId('instagram-icon');

    expect(firstLink).toHaveAttribute('href', items[0].href);
    expect(secondLink).toHaveAttribute('href', items[1].href);

    expect(firstIcon).toBeVisible();
    expect(secondIcon).toBeVisible();
  });
});
