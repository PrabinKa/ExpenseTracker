import React, {createContext, useEffect, useState, useContext} from 'react';
import {lightColors, darkColors} from './Colors';

import {useColorScheme} from 'react-native';

export const ThemeContext = createContext({
  dark: false,
  colors: lightColors,
  setScheme: () => {},
});

export const ThemeProvider = ({children}) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme == 'dark');

  useEffect(() => {
    setIsDark(colorScheme == 'dark');
  }, [colorScheme]);

  const defaultTheme = {
    dark: isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: scheme => setIsDark(scheme === 'dark')
  }

  return(
    <ThemeContext.Provider value={defaultTheme}>
        {children}
    </ThemeContext.Provider>
  )
};

export const useTheme = () => useContext(ThemeContext);
