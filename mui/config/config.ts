import {
  PaletteColorOptions,
  createTheme,
  PaletteOptions,
} from "@mui/material/styles";
import { Open_Sans } from "next/font/google";
import { APP_COLORS } from "../colors/colors";

const openSans = Open_Sans({
  weight: ["400", "700", "800", "300", "600", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface CustomPalette {
    milkWhite?: PaletteColorOptions;
    google?: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface Theme extends CustomPalette {}
  interface ThemeOptions extends CustomPalette {}
}

// Override button props
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    milkWhite: true;
    google: true;
  }
}
export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;
export const DEFAULT_THEME: AllowedTheme = "dark";
const defaultTheme = createTheme({});
const { augmentColor } = defaultTheme.palette;
const createColor = (mainColor: any) =>
  augmentColor({
    color: {
      main: mainColor,
    },
  });
export const lightTheme = createTheme({
  palette: {
    primary: { main: APP_COLORS.PRIMARY_COLOR },
    secondary: { main: APP_COLORS.SECONDARY_COLOR },
    mode: "light",
    milkWhite: createColor(APP_COLORS.WHITE),
    google: createColor(APP_COLORS.GOOGLE),
  },
  typography: {
    fontFamily: [openSans.style.fontFamily].join(","),
    h1: {
      fontSize: 30,
      fontWeight: 700,
      lineHeight: "39px",
    },

    subtitle1: {
      fontSize: 22,
      lineHeight: "28px",
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: 18,
      lineHeight: "28px",
      fontWeight: 600,
    },
    body1: {
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: "0.5px",
    },
    caption: {
      color: defaultTheme.palette.text.secondary,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
        color: "primary",
        fullWidth: true,
        size: "large",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        sizeLarge: {
          height: 50,
        },
        containedPrimary: {
          color: defaultTheme.palette.common.white,
          fontSize: 16,
          fontWeight: 500,
        },
        outlinedInherit: {
          border: `1px solid ${defaultTheme.palette.divider}`,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "medium",
      },
      styleOverrides: {},
    },
    MuiAppBar: {
      defaultProps: {
        color: "primary",
        elevation: 0,
      },
      styleOverrides: {
        colorInherit: {
          color: defaultTheme.palette.text.primary,
          borderBottom: `1px solid ${defaultTheme.palette.divider}`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: 16,
          lineHeight: "20px",
          letterSpacing: 0.1,
        },
      },
    },
  },
});
