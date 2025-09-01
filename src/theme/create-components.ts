import {
  createTheme,
  filledInputClasses,
  paperClasses,
  Theme,
  Components,
  alpha,
} from '@mui/material';
import { white } from '@/theme/colors';

const muiTheme = createTheme();

interface PaletteConfig {
  primary: { main: string };
  secondary?: { main: string };
  error: { main: string };
  warning: { main: string };
  info: { main: string };
  success: { main: string };
  neutral: Record<number, string>;
  text: { secondary: string };
  action: { hover: string };
  divider: string;
}

interface ThemeConfig {
  palette: PaletteConfig;
}

export function createComponents(
  config: ThemeConfig
): Components<Omit<Theme, 'components'>> {
  const { palette } = config;

  // Common Label styles for all fields
  const commonInputLabelStyles = {
    fontSize: '11px',
    color: 'secondary.main',
  };

  // Common custom styles for text fields
  const commonTextFieldStyles = {
    my: 1.5, // Slightly more vertical spacing

    '& .MuiOutlinedInput-root': {
      transition: 'all 0.2s ease-in-out',

      '& fieldset': {
        borderRadius: 8,
        borderWidth: '1px',
        borderColor: palette.neutral[300],
      },

      '&:hover fieldset': {
        borderRadius: 8,
        borderColor: palette.neutral[400],
      },

      '&.Mui-focused fieldset': {
        borderColor: palette.primary.main,
        borderRadius: 8,
        borderWidth: '2px',
        boxShadow: `0 0 0 ${palette.primary.main}`,
      },

      '&.Mui-error fieldset': {
        borderColor: palette.error.main,
        borderRadius: 8,
        borderWidth: '1px',
        boxShadow: `0 0 0 1px ${palette.error}`,
      },

      // Add transition for hover state
      '&:hover': {
        backgroundColor: palette.action.hover,
      },
    },

    '& .MuiInputLabel-root': {
      ...commonInputLabelStyles,
      fontSize: '0.875rem',
      fontWeight: 500,

      '&.Mui-focused': {
        color: palette.primary.main,
        fontWeight: 600,
      },

      '&.Mui-error': {
        color: palette.error.main,
        fontWeight: 600,
      },

      '&.MuiFormLabel-filled': {
        transform: 'translate(14px, -9px) scale(0.75)',
      },
    },

    '& .MuiInputBase-input': {
      padding: '14px 16px',
      fontWeight: 400,
      '&::placeholder': {
        opacity: 0.7,
      },
    },

    // Add helper text styling
    '& .MuiFormHelperText-root': {
      marginLeft: '4px',
      fontSize: '0.75rem',
      '&.Mui-error': {
        color: palette.error.main,
      },
    },

    // Add focus and hover transitions
    '& .MuiOutlinedInput-notchedOutline': {
      transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    },
  };

  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          letterSpacing: 0,
          fontSize: '1rem',
          aspectRatio: '1/1',
          color: palette.primary.main,
          backgroundColor: '#F5FFF7',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'pointer',
          },
          borderRadius: '12px',
          textTransform: 'none',
        },
        sizeSmall: {
          padding: '6px 16px',
        },
        sizeMedium: {
          padding: '8px 20px',
        },
        sizeLarge: {
          padding: '11px 24px',
        },
        textSizeSmall: {
          padding: '7px 12px',
        },
        textSizeMedium: {
          padding: '9px 16px',
        },
        textSizeLarge: {
          padding: '12px 16px',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          [`&.${paperClasses.elevation1}`]: {
            boxShadow:
              '0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)',
          },
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '32px 24px',
          '&:last-child': {
            paddingBottom: '32px',
          },
        },
      },
    },

    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6',
        },
        subheaderTypographyProps: {
          variant: 'body2',
        },
      },
      styleOverrides: {
        root: {
          padding: '32px 24px 16px',
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        '#__next': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        },
        '#nprogress': {
          pointerEvents: 'none',
        },
        '#nprogress .bar': {
          backgroundColor: palette.primary.main,
          height: 3,
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 2000,
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            opacity: 1,
          },
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '24px',
          '&::placeholder': {
            color: palette.text.secondary,
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: 'auto',
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: 'none',
          '& + &': {
            marginLeft: 24,
          },
        },
      },
    },

    // Table
    MuiTable: {
      styleOverrides: {
        root: {
          color: palette.text.secondary,
        },
      },
    },
    // Table Head
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#F9FAFB',
          '& .MuiTableCell-root': {
            color: palette.text.secondary,
            fontWeight: 600,
          },
        },
      },
    },
    // Table Body
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            color: palette.text.secondary,
          },
        },
      },
    },
    // Table Cell
    MuiTableCell: {
      styleOverrides: {
        root: {
          py: 1.5,
          '& .MuiTableCell-root': {
            color: palette.text.secondary,
          },
        },
      },
    },
    // Table Row
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#F5F5F5',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1C2536',
        },
      },
    },

    // MUI FIELDS
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          ...commonTextFieldStyles,
        },
      },
    },

    // Custom Textfields with styling
    MuiFormLabel: {
      styleOverrides: {
        root: {
          ...commonTextFieldStyles['& .MuiInputLabel-root'],
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          ...commonTextFieldStyles['& .MuiOutlinedInput-root'],
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
          '&.Mui-focused': {
            backgroundColor: 'transparent',
          },

          '&.MuiInputBase-sizeSmall': {
            height: '35px',
            '& .MuiOutlinedInput-input': {
              fontSize: 12,
              fontWeight: 500,
              lineHeight: '20px',
              padding: '8px 12px',
              '&::placeholder': {
                fontSize: 10,
                color: palette.text.secondary,
                opacity: 1,
              },
            },
          },

          '&.MuiInputBase-sizeMedium': {
            height: '45px',
            '& .MuiOutlinedInput-input': {
              fontSize: 14,
              fontWeight: 500,
              lineHeight: '24px',
              padding: '10px 14px',
              '&::placeholder': {
                fontSize: 12,
                color: palette.text.secondary,
                opacity: 1,
              },
            },
          },
        },

        // Default input styles (for all sizes unless overridden)
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '30px',
          padding: '8px 12px',
          '&::placeholder': {
            fontSize: 10,
            color: palette.text.secondary,
            opacity: 1,
          },
        },

        notchedOutline: {
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          borderRadius: 8,
          borderStyle: 'solid',
          borderWidth: 1,
          overflow: 'hidden',
          transition: muiTheme.transitions.create([
            'border-color',
            'box-shadow',
          ]),
          '&:hover': {
            backgroundColor: palette.action.hover,
          },
          '&:before': {
            display: 'none',
          },
          '&:after': {
            display: 'none',
          },
          [`&.${filledInputClasses.disabled}`]: {
            backgroundColor: 'transparent',
          },
          [`&.${filledInputClasses.focused}`]: {
            backgroundColor: 'transparent',
            borderColor: palette.primary.main,
            boxShadow: `${palette.primary.main} 0 0 0 2px`,
          },
          [`&.${filledInputClasses.error}`]: {
            borderColor: palette.error.main,
            boxShadow: `${palette.error.main} 0 0 0 2px`,
          },
        },
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '24px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: alpha(white.main, 0.2),
            transform: 'scale(1.05)',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          minWidth: 260,
          backgroundColor: '#1C2536',
          color: 'white',
          paddingTop: '2rem',
          height: '100vh',
          // Add any other drawer-specific styles here
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontWeight: 400,
          '&.MuiSelect-filled': {
            backgroundColor: 'transparent',
          },
          '&.MuiSelect-filled.Mui-filled': {
            backgroundColor: 'rgb(232, 240, 254)',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          '&.Mui-selected': {
            fontWeight: 400,
          },
        },
      },
    },
  };
}
