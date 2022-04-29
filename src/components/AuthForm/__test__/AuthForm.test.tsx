import { render, screen, fireEvent } from '@testing-library/react';
import AuthPureForm from '../PureForm';

const mockedHandleSubmit = jest.fn();

const AuthFormProps = {
  title: 'فرم ورود',
  submitText: 'ثبت',
  onFinish: mockedHandleSubmit
}

describe('PureAuthFormTests', () => {
  it('should render title and button text', () => {
    render(<AuthPureForm {...AuthFormProps} />);
    const title = screen.getByText(/ورود/i);
    expect(title).toBeInTheDocument();
    const button = screen.getByTestId('login-pure-btn');
    expect(button.textContent).toBe('ثبت');
  });

  it('should render its children', () => {
    render(<AuthPureForm {...AuthFormProps} children='children' />);
    const children = screen.getByText(/children/i);
    expect(children).toBeInTheDocument();
  });

  it('should call onFinish when submitted', () => {
    render(<AuthPureForm {...AuthFormProps} />);
    const button = screen.getByTestId('login-pure-btn');
    fireEvent.click(button);
    expect(mockedHandleSubmit).toBeCalled();
  });
})