import { UserTypes } from 'pages/Users/Users.types';
import React from 'react';

const UserContext = React.createContext<UserTypes | undefined>(undefined);

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;