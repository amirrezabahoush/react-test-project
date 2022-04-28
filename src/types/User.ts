export enum UserRoles {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type UserRoleTypes = `${UserRoles}`;

export const USER_ROLES_PERSIAN = {
  [UserRoles.SUPER_ADMIN]: 'مدیر ارشد',
  [UserRoles.ADMIN]: 'مدیر',
  [UserRoles.USER]: 'کاربر',
}