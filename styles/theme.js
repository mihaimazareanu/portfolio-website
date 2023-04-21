import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '@/contexts/ThemeContext';

import {lightTheme, darkTheme} from "../themes/default";
import GlobalStyles from './globals';
import { useContext, useState } from 'react';

const Theme = ({ children }) => {
  const {isDarkTheme} = useContext(ThemeContext);

  return (
  <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme }>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)};

export default Theme;