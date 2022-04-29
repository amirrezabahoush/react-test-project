import { render, screen, fireEvent } from '@testing-library/react';
import AddOrUpdateUser from '../index';

const addOrUpdateProps = {
  handleAddOrUpdateUser: jest.fn(),
  handleCancel: jest.fn(),
  isVisible: true,
  form: {
    current: {
      setFieldsValue: jest.fn()
    }
  }

};

describe('Users Tests', () => {

  it('should be rendered with true visible props', () => {
    render(<AddOrUpdateUser {...addOrUpdateProps} type='ADD' />);
    const addModal = screen.queryByTestId('add-or-update');
    expect(addModal).toBeInTheDocument();
  });

  it('submit form button text shoud be add', () => {
    render(<AddOrUpdateUser {...addOrUpdateProps} type='ADD' />);
    const button = screen.getByTestId('ADD');
    expect(button.textContent).toBe('افزودن');
  });

  it('submit form button text shoud be edit', () => {
    render(<AddOrUpdateUser {...addOrUpdateProps} type='EDIT' />);
    const button = screen.getByTestId('EDIT');
    expect(button.textContent).toBe('ویرایش');
  });

  it('form elements should be rendered', () => {
    render(<AddOrUpdateUser {...addOrUpdateProps} type='ADD' />);
    const form = screen.getByTestId('add-or-update');
    const firstNameInput = screen.getByTestId('firstName');
    fireEvent.change(firstNameInput, { target: { value: 'امیر' } });
    expect(firstNameInput).toBeInTheDocument();
    expect(screen.getByLabelText(/نام خانوادگی/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/کدملی/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/تلفن همراه/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/قابلیت حذف/i)).toBeInTheDocument();
    // fireEvent.change(screen.getByLabelText(/نام خانوادگی/i), { target: { value: 'عظیمیان' } });
    // fireEvent.change(screen.getByLabelText(/کدملی/i), { target: { value: '0019878687' } });
    // fireEvent.change(screen.getByLabelText(/تلفن همراه/i), { target: { value: '09213344561' } });
    // fireEvent.change(screen.getByLabelText(/قابلیت حذف/i), { target: { value: true } });
    // fireEvent.submit(form);
  });
});