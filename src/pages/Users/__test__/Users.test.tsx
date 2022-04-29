import { render, screen, fireEvent } from '@testing-library/react';
import Users from '../index';

describe('Users Tests', () => {
  it('should render users table', () => {
    render(<Users />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  it('should not render Delete user modal at first', async () => {
    render(<Users />);
    const deleteModal = screen.queryByTestId('delete-modal');
    expect(deleteModal).not.toBeInTheDocument();
  });

  it('should not render AddOrUpdate user modal at first', async () => {
    render(<Users />);
    const addOrUpdateModal = screen.queryByTestId('add-or-update');
    expect(addOrUpdateModal).not.toBeInTheDocument();
  });

  it('should render add user modal after add button clicked', async () => {
    render(<Users />);
    const addButton = screen.getByRole('button');
    fireEvent.click(addButton);
    const addOrUpdateModal = screen.getByTestId('add-or-update');
    expect(addOrUpdateModal).toBeInTheDocument();
  });
})