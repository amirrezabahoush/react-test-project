import React from 'react';

const ConfigContext = React.createContext<boolean>(false);

export const ConfigContextProvider = ConfigContext.Provider;
export const ConfigContextConsumer = ConfigContext.Consumer;

export default ConfigContext;