import { render, screen, fireEvent } from '@testing-library/react';
import AddOrUpdateUser from '../index';

const setIsRemoveModalVisible = jest.fn();

const deleteProps = {
  isRemoveModalVisible: true,
  setIsRemoveModalVisible,
  handleRemove: jest.fn(),
  selected: undefined,
  isLoading: false
};

describe('Users Tests', () => {

  it('should be rendered with true visible props', () => {
    render(<AddOrUpdateUser {...deleteProps}/>);
    const deleteModal = screen.queryByTestId('delete-modal');
    expect(deleteModal).toBeInTheDocument();
  });

  it('setIsRemoveModalVisible should not called after cancle button clicked', () => {
    render(<AddOrUpdateUser {...deleteProps}/>);
    const cancelButton = screen.getByTestId('delete-cancel-button');
    fireEvent.click(cancelButton);
    expect(setIsRemoveModalVisible).toBeCalled();
    expect(setIsRemoveModalVisible).toBeCalledWith(false);
    expect(setIsRemoveModalVisible).toBeCalledTimes(1);
  });

});