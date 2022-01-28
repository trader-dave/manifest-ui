import { Theme } from './types';

const breakpoints = ['37.5rem', '64rem', '80rem', '120rem'];

export const defaultTheme: Theme = {
  breakpoints,
  borderWidths: {
    small: 1,
    medium: 2,
    large: 3,
  },
  colors: {
    background: '#FFFFFF',
    brand: {
      50: '#ECF4FE',
      100: '#C9E1FB',
      200: '#95C5F8',
      300: '#62A9F4',
      400: '#308DF1',
      500: '#0072EC',
      600: '#005CBE',
      700: '#00458E',
      800: '#003772',
      900: '#002956',
    },
    black: '#000000',
    danger: {
      50: '#fbe5ea',
      100: '#f6becb',
      200: '#f095a9',
      300: '#ea6d88',
      400: '#e35470',
      500: '#dd425a',
      600: '#cd3d57',
      700: '#b73853',
      800: '#a3324f',
      900: '#7d2a47',
    },
    gradient: {
      0: `linear-gradient(90deg, #0072EC 0%, #4E00C6 163.65%, #8C18E2 191.59%)`,
      20: `linear-gradient(0deg, rgba(10, 21, 33, 0.2), rgba(10, 21, 33, 0.2)), linear-gradient(90deg, #0072EC 0%, #8C18E2 191.59%)`,
      40: `linear-gradient(0deg, rgba(10, 21, 33, 0.4), rgba(10, 21, 33, 0.4)), linear-gradient(90deg, #0072EC 0%, #8C18E2 191.59%)`,
      60: `linear-gradient(0deg, rgba(10, 21, 33, 0.6), rgba(10, 21, 33, 0.6)), linear-gradient(90deg, #0072EC 0%, #8C18E2 191.59%)`,
    },
    neutral: {
      50: '#FAFAFB',
      100: '#F4F4F5',
      200: '#D5D7D9',
      300: '#B8BBBF',
      400: '#9DA1A6',
      500: '#80858C',
      600: '#646B72',
      700: '#49515A',
      800: '#2A343F',
      900: '#0A1521',
    },
    success: {
      50: '#e8f5e9',
      100: '#c8e6c9',
      200: '#a5d6a7',
      300: '#81c784',
      400: '#66bb6a',
      500: '#4caf50',
      600: '#43a047',
      700: '#388e3c',
      800: '#2e7d32',
      900: '#1b5e20',
    },
    text: '#0A1521',
    warning: {
      50: '#fff8e1',
      100: '#ffecb3',
      200: '#ffe082',
      300: '#ffd54f',
      400: '#ffca28',
      500: '#ffc107',
      600: '#ffb300',
      700: '#ffa000',
      800: '#ff8f00',
      900: '#ed6700',
    },
    white: '#FFFFFF',
  },
  direction: 'ltr',
  fonts: {
    body: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  },
  fontSizes: {
    1: '2rem',
    2: '1.75rem',
    3: '1.5rem',
    4: '1.25rem',
    5: '1.125rem',
    6: '1rem',
    7: '0.875rem',
    8: '0.75rem',
    9: '0.625rem',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  letterSpacings: {
    tight: '-0.02em',
    normal: '-0.01em',
    wide: '0.04em',
  },
  lineHeights: {
    1: '2.5rem',
    2: '2rem',
    3: '1.5rem',
    4: '1rem',
    5: '0.875rem',
  },
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[1]})`,
    medium: `@media screen and (min-width: ${breakpoints[2]})`,
    large: `@media screen and (min-width: ${breakpoints[3]})`,
    'x-large': `@media screen and (min-width: ${breakpoints[4]})`,
  },
  mode: 'light',
  radii: {
    none: 0,
    medium: 2,
    full: 9999,
  },
  shadows: {
    'x-large':
      '0px 16px 24px 2px rgba(0, 0, 0, 0.05), 0px 6px 30px 5px rgba(0, 0, 0, 0.04), 0px 8px 10px -5px rgba(0, 0, 0, 0.06)',
  },
  sizes: {},
  space: ['0', '0.25rem', '0.5rem', '0.75rem', '1rem', '1.25rem', '2.5rem'],
  transitions: {
    duration: {
      base: '200ms',
      fast: '125ms',
      slow: '300ms',
    },
    property: {
      common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
    },
    timingFunction: {
      ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    },
  },
  zIndices: {},
};
