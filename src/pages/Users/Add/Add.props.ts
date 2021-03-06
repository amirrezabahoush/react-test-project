import { FormInstance } from "antd";
import { Ref } from "react";
import { FormValues, UserTypes } from "../Users.types";

export type AddUserProps = {
  isVisible: boolean;
  handleCancel: () => void;
  handleAddOrUpdateUser: (values: FormValues) => void;
  form: Ref<FormInstance> | any;
  type: "ADD" | "EDIT";
  selected?: UserTypes;
};