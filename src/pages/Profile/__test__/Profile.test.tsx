import { render, screen } from '@testing-library/react';
import Profile from '../index';

describe('Profile Tests', () => {
  it('should render list items based on items count', () => {
    render(<Profile />);
    const listItems = screen.getAllByTestId('list-item');
    expect(listItems.length).toBe(6);
    expect(listItems[0].children.length).toBe(2);
  });
})