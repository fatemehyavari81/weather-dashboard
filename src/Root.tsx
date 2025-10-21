import { useTranslation } from 'react-i18next';
import App from './App';
import { getTheme } from './theme';
import { createEmotionCache } from './utils/createEmotionCache';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

const Root = () => {
  const { i18n } = useTranslation();

  const direction = i18n.language === 'fa' ? 'rtl' : 'ltr';
  const cache = createEmotionCache(direction);
  const theme = getTheme(direction);

  // Set document direction
  document.documentElement.dir = direction;

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Root;
