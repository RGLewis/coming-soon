import { createContext } from 'react';

export const Context = createContext({
  // light/dark mode
  isLightMode: true,
  toggleLightMode: () => {},
});
