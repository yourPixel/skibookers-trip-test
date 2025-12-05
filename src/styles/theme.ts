import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
    desktop: 1440,
    laptop: 1280,
    tablet: 768,
    mobile: 360,
};

const colors = {
    // Surfaces
    bg: '#EAF4FF',
    bg2: '#F6FBFF',
    card: '#FFFFFF',

    // Text
    text: '#1A2A3B',
    textStrong: '#102132',
    textHero: '#0B1B2B',
    muted: '#6C8AA4',
    muted700: '#3C5A73',

    // Brand
    brand600: '#2F7BFF',
    brand500: '#4D8BFF',
    brand300: '#9BC2FF',
    brand100: '#D9E8FF',
    aqua: '#3DD6FF',
    pink: '#FF6FB5',

    // States
    ok: '#2ECC71',
    warn: '#FFC857',
    danger: '#FF5A5F',

    // Borders
    border: '#D6E4F2',
    borderStrong: '#C8DAEA',
};

const radii = {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
};

const shadows = {
    s1: '0 8px 24px rgba(17, 60, 100, 0.10), 0 2px 6px rgba(17, 60, 100, 0.06)',
    s2: '0 18px 40px rgba(17, 60, 100, 0.16), 0 6px 14px rgba(17, 60, 100, 0.10)',
};

export const skiTheme = {
    breakpoints,
    colors,
    radii,
    shadows,
};

export const GlobalStyle = createGlobalStyle`
  :root {
      font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      font-weight: 400;

      color-scheme: light;
      color: rgba(255, 255, 255, 0.87);
      background-color: #242424;

      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  
  *, *::before, *::after { 
      box-sizing: border-box; 
  }
  
  html, body, #root { 
      min-height: 100%; 
  }
  html {
      -webkit-font-smoothing: antialiased;
  }
  body {
      overscroll-behavior: none;
  }
  p {
      margin: 0
  }
  body {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, "Helvetica Neue", Arial, "Noto Sans";
    color: ${({ theme }) => theme.colors.text};
    background:
      radial-gradient(1400px 900px at 10% -5%, #F0F8FF 0%, transparent 50%) no-repeat fixed,
      radial-gradient(1000px 700px at 110% 0%, #E6F3FF 0%, transparent 40%) no-repeat fixed,
      linear-gradient(180deg, ${({ theme }) => theme.colors.bg}, ${({ theme }) => theme.colors.bg2});
    line-height: 1.45;
  }

  a, button {
      cursor: pointer;
      text-decoration: none;

      &:disabled {
          cursor: default;
      }

      &:hover, &:focus, &:active {
          outline: 0;
      }
  }
`;
