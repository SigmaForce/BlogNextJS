import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { List } from './List';

describe('<List/>', () => {
  it('should render a list', () => {
    const children = 'children';

    const { container } = render(<List>{children}</List>);
    const childrenElement = screen.getByText(children);
    expect(childrenElement).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
