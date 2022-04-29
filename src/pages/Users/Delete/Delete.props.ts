import { UserTypes } from "../Users.types";

export type DeleteUserProps = {
  isRemoveModalVisible: boolean;
  setIsRemoveModalVisible: (val: boolean) => void;
  handleRemove: () => void;
  selected: UserTypes | undefined;
  isLoading: boolean;
};