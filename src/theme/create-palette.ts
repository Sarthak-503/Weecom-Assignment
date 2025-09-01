import { alpha } from '@mui/material/styles';
import { common } from '@mui/material/colors';
import {
  error,
  info,
  success,
  warning,
  neutral,
  purple,
  text,
  green,
} from '@/theme/colors';

interface PaletteConfig {
  text: {
    primary: string;
    secondary: string;
    light: string;
    disabled: string;
  };
}

type CustomPaletteColor = {
  main: string;
  light?: string;
  lightest?: string;
  dark?: string;
  contrastText?: string;
};

type CustomPalette = PaletteConfig & {
  neutral: Record<number, string>;
  primary: CustomPaletteColor;
  secondary: CustomPaletteColor;
  error: CustomPaletteColor;
  info: CustomPaletteColor;
  success: CustomPaletteColor;
  warning: CustomPaletteColor;
  action: {
    active: string;
    disabled: string;
    disabledBackground: string;
    focus: string;
    hover: string;
    selected: string;
  };
  background: {
    default: string;
    paper: string;
  };
  divider: string;
  mode: 'light' | 'dark';
};

export const createPalette = () => {
  const palette: CustomPalette = {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12),
    },
    background: {
      default: common.white,
      paper: common.white,
    },
    divider: '#F2F4F7',
    mode: 'light',
    primary: {
      main: green.main,
      light: green.light,
      lightest: green.lightest, // Laga Diya
      dark: green.dark,
      contrastText: green.contrastText,
    },
    secondary: {
      main: purple.main,
      light: purple.light,
      lightest: purple.lightest,
      dark: purple.dark,
      contrastText: purple.contrastText,
    },
    error: {
      main: error.main,
      light: error.light,
      dark: error.dark,
      contrastText: error.contrastText,
    },
    info: {
      main: info.main,
      light: info.light,
      dark: info.dark,
      contrastText: info.contrastText,
    },
    success: {
      main: success.main,
      light: success.light,
      dark: success.dark,
      contrastText: success.contrastText,
    },
    warning: {
      main: warning.main,
      light: warning.light,
      dark: warning.dark,
      contrastText: warning.contrastText,
    },
    text: {
      primary: text.main,
      secondary: text.light,
      light: text.dark,
      disabled: text.lightest,
    },
    neutral,
  };

  return palette;
};
