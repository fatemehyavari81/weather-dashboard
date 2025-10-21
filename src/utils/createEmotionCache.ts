import createCache from '@emotion/cache';
import stylisRTLPlugin from 'stylis-plugin-rtl';

export const createEmotionCache = (direction: 'ltr' | 'rtl') => {
  return createCache({
    key: direction === 'rtl' ? 'mui-rtl' : 'mui',
    stylisPlugins: direction === 'rtl' ? [stylisRTLPlugin] : [],
  });
};
