import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Logo } from './Logo';

describe('Logo', () => {
  it('should render successfully', () => {
    render(<Logo />);

    const logoText = screen.getByRole('heading', { name: /logo/i });

    expect(logoText).toBeVisible();
  });
});
