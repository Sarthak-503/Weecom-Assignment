import { alpha } from '@mui/material/styles';

type ColorVariant = {
  lightest: string;
  light: string;
  main: string;
  dark: string;
  darkest: string;
  contrastText: string;
};

type AlphaVariants = {
  alpha4: string;
  alpha8: string;
  alpha12: string;
  alpha30: string;
  alpha50: string;
};

type ExtendedColor = ColorVariant & AlphaVariants;

const withAlphas = (color: ColorVariant): ExtendedColor => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.3),
    alpha50: alpha(color.main, 0.5),
  };
};

export const neutral: Record<number, string> = {
  50: '#F8F9FA',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D2D6DB',
  400: '#9DA4AE',
  500: '#6C737F',
  600: '#4D5761',
  700: '#2F3746',
  800: '#1C2536',
  900: '#111927',
};

export const green: ExtendedColor = withAlphas({
  lightest: '#F1FFF5',
  light: '#B5FFC9',
  main: '#34A853',
  dark: '#1A7533',
  darkest: '#1B5E20',
  contrastText: '#FFFFFF',
});
export const black: ExtendedColor = withAlphas({
  lightest: '#919299',
  light: '#919299',
  main: '#2A2A44',
  dark: '#212121',
  darkest: '#556DA7',
  contrastText: '#FFFFFF',
});
export const white: ExtendedColor = withAlphas({
  lightest: '#FFFFFF',
  light: '#FFFFFF',
  main: '#FFFFFF',
  dark: '#F5F5F5',
  darkest: '#E0E0E0',
  contrastText: '#000000',
});
export const text: ExtendedColor = withAlphas({
  lightest: '#919299',
  light: '#667085', //  light text
  main: '#101828', // dark
  dark: '#212121', // Black Color Shades
  darkest: '#556DA7', // Black Color Shades
  contrastText: '#FFFFFF', // Black Color Shades
});
export const purple: ExtendedColor = withAlphas({
  lightest: '#74154', // Done
  light: '#283243', // Done
  main: '#1C2536', // Done
  dark: '#212121', // Black Color Shades
  darkest: '#556DA7', // Black Color Shades
  contrastText: '#FFFFFF', // Black Color Shades
});
export const linkColor = '#4285F4';

export const indigo: ExtendedColor = withAlphas({
  lightest: '#F5F7FF',
  light: '#EBEEFE',
  main: '#6366F1',
  dark: '#4338CA',
  darkest: '#312E81',
  contrastText: '#FFFFFF',
});

export const success: ExtendedColor = withAlphas({
  lightest: '#F0FDF9',
  light: '#3FC79A',
  main: '#10B981',
  dark: '#0B815A',
  darkest: '#134E48',
  contrastText: '#FFFFFF',
});

export const info: ExtendedColor = withAlphas({
  lightest: '#ECFDFF',
  light: '#CFF9FE',
  main: '#06AED4',
  dark: '#0E7090',
  darkest: '#164C63',
  contrastText: '#FFFFFF',
});

export const warning: ExtendedColor = withAlphas({
  lightest: '#FFFAEB',
  light: '#FEF0C7',
  main: '#F79009',
  dark: '#B54708',
  darkest: '#7A2E0E',
  contrastText: '#FFFFFF',
});

export const error: ExtendedColor = withAlphas({
  lightest: '#FEF3F2',
  light: '#FEE4E2',
  main: '#F04438',
  dark: '#B42318',
  darkest: '#7A271A',
  contrastText: '#FFFFFF',
});
