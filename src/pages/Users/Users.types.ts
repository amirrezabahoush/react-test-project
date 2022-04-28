import { UserRoleTypes } from "types/User";

export type FormValues = {
  id: number;
  firstName: string;
  lastName: string;
  nationalCode: string;
  phoneNumber: string;
  role: UserRoleTypes;
};

export type UserTypes = FormValues & {
  creationDate: string;
  deletable: boolean;
};