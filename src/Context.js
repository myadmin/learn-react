import React from 'react';

export const ThemeContext = React.createContext({ themeColor: 'red' });
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
