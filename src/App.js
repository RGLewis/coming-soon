// Package imports
import React from 'react';

// Context/Hook imports
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyle,
  globalTheme,
  darkTheme,
  lightTheme,
} from './globalStyles/Global.styles';
import { Context } from './context/context';
import { UseColorMode } from './hooks/useColorMode';

// Component Imports
import ComingSoon from './ui/organisms/ComingSoon/ComingSoon';

const App = () => {
  // manage light/dark mode
  const { isLightMode, toggleLightMode } = UseColorMode();

  return (
    <Context.Provider
      value={{
        isLightMode,
        toggleLightMode,
      }}
    >
      <ThemeProvider theme={globalTheme}>
        <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
          <GlobalStyle />
          <main>
            <ComingSoon />
          </main>
        </ThemeProvider>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
