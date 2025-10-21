import { createTheme } from '@mui/material/styles';

export const getTheme = (direction: 'ltr' | 'rtl') => {
  return createTheme({
    direction,
    typography: {
      fontFamily: direction === 'rtl' ? 'Vazir, sans-serif' : 'Roboto, sans-serif',
    },
    palette: {
      mode: 'light', // later we’ll toggle light/dark mode
    },
  });
};
