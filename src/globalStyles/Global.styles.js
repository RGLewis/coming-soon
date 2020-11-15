import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const baseFontSize = 16;

export const lightTheme = {
  background: '#1F6CC7',
  font: '#ffffff',
  accent: '#5cdb95',
};

export const darkTheme = {
  background: '#200C90',
  font: '#ffffff',
  accent: '#5cdb95',
};

export const globalTheme = {
  baseFontSize: `${baseFontSize}px`,
  fonts: {
    roboto: 'Roboto, monospace',
    montserrat: 'Montserrat, monospace',
  },
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    extraBold: '700',
    black: '900',
  },
  breakpoints: {
    small: '576',
    medium: '768',
    large: '992',
    extraLarge: '1200',
  },
  globalValues: {
    sidebar: 400,
  },
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }

h1 {
    margin: 0;
    color: ${({ theme }) => theme.font};
  }

  img {
    max-width:100%;
    width: 100%;
    display: block;
  }

  ul {
      padding: 0;
      margin: 0;
    }

  button, input, textarea {
    outline: none;
    border: 1px solid transparent;

    &:focus, &:active {
     border-color: ${({ theme }) => theme.font};
    }
  }

  a {
    text-decoration: none;
    outline: 1px solid transparent;

    &:focus, &:active {
      outline-color: ${({ theme }) => theme.font};
    }
  }


  html {
    font-size: ${baseFontSize}px;
  }

  body {
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    color: ${({ theme }) => theme.primaryFont};
    line-height: 1.6;
    background: ${({ theme }) => theme.background};
  }
`;
