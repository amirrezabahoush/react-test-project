import { FormInstance } from "antd";
import { Ref } from "react";
import { FormValues } from "../Users.types";

export type AddUserProps = {
  isVisible: boolean;
  handleCancel: () => void;
  handleAddUser: (values: FormValues) => void;
  form: Ref<FormInstance>;
  type: "ADD" | "EDIT";
};