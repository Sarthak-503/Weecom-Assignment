import { createTheme as createMuiTheme } from '@mui/material';
import { createPalette } from '@/theme/create-palette';
import { createComponents } from '@/theme/create-components';
import { createTypography } from '@/theme/create-typography';

export function createTheme() {
  const palette = createPalette();
  const components = createComponents({ palette });
  const typography = createTypography();

  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440,
      },
    },
    components,
    palette,
    shadows: [
      'none',
      '0px 1px 2px rgba(0, 0, 0, 0.08)',
      '0px 1px 5px rgba(0, 0, 0, 0.08)',
      '0px 1px 8px rgba(0, 0, 0, 0.08)',
      '0px 1px 10px rgba(0, 0, 0, 0.08)',
      '0px 1px 14px rgba(0, 0, 0, 0.08)',
      '0px 1px 18px rgba(0, 0, 0, 0.08)',
      '0px 2px 16px rgba(0, 0, 0, 0.08)',
      '0px 3px 14px rgba(0, 0, 0, 0.08)',
      '0px 3px 16px rgba(0, 0, 0, 0.08)',
      '0px 4px 18px rgba(0, 0, 0, 0.08)',
      '0px 4px 20px rgba(0, 0, 0, 0.08)',
      '0px 5px 22px rgba(0, 0, 0, 0.08)',
      '0px 5px 24px rgba(0, 0, 0, 0.08)',
      '0px 5px 26px rgba(0, 0, 0, 0.08)',
      '0px 6px 28px rgba(0, 0, 0, 0.08)',
      '0px 6px 30px rgba(0, 0, 0, 0.08)',
      '0px 6px 32px rgba(0, 0, 0, 0.08)',
      '0px 7px 34px rgba(0, 0, 0, 0.08)',
      '0px 7px 36px rgba(0, 0, 0, 0.08)',
      '0px 8px 38px rgba(0, 0, 0, 0.08)',
      '0px 8px 40px rgba(0, 0, 0, 0.08)',
      '0px 8px 42px rgba(0, 0, 0, 0.08)',
      '0px 9px 44px rgba(0, 0, 0, 0.08)',
      '0px 9px 46px rgba(0, 0, 0, 0.08)',
    ],
    shape: {
      borderRadius: 8,
    },
    typography,
  });
}
