import { createTheme } from "@mui/material/styles";

export type ThemeMode = "light" | "dark";

export const getTheme = (direction: "ltr" | "rtl", mode: ThemeMode = "light") => {
  const isRtl = direction === "rtl";

  return createTheme({
    direction,
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#1976d2" : "#90caf9",
      },
      background: {
        default: mode === "light" ? "#D3E1E7" : "#3E4660",
        paper: mode === "light" ? "#fff" : "#2d3447",
      },
    },
    typography: {
      // use BYekan only for RTL/Farsi, otherwise Roboto (default)
      fontFamily: isRtl
        ? "'BYekan', 'Vazir', sans-serif"
        : "Roboto, 'Helvetica Neue', Arial, sans-serif",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          /* keep your previous overrides here if you want */
          ...(mode === "dark" && {
            ".login-container": {
              backgroundColor: "#2d3447",
            },
            ".login-image img": {
              backgroundColor: "transparent",
            },
          }),
          ...(mode === "light" && {
            ".login-container": {
              backgroundColor: "#ffffff",
            },
            ".login-image img": {
              backgroundColor: "transparent",
            },
          }),
        },
      },
    },
  });
};
