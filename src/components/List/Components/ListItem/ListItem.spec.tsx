import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListItem } from './ListItem';

describe('<ListItem/>', () => {
  it('should render a ListItem', () => {
    const children = 'children';
    const { container } = render(<ListItem>{children}</ListItem>);
    const childrenElement = screen.getByText(children);
    expect(childrenElement).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
