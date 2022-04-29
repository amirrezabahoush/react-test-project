import { FormInstance } from "antd";
import { Ref } from "react";
import { FormValues, UserTypes } from "../Users.types";

export type DeleteUserProps = {
  isRemoveModalVisible: boolean;
  setIsRemoveModalVisible: (val: boolean) => void;
  handleRemove: () => void;
  selected: UserTypes | undefined;
  isLoading: boolean;
};