import { createTheme } from "@mui/material/styles";

export type ThemeMode = "light" | "dark";

export const getTheme = (direction: "ltr" | "rtl", mode: ThemeMode = "light") => {
  return createTheme({
    direction,
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#1976d2" : "#90caf9",
      },
      background: {
        default: mode === "light" ? "#D3E1E7" : "#3E4660", // updated background
        paper: mode === "light" ? "#fff" : "#2d3447",
      },
    },
    typography: {
      fontFamily: direction === "rtl" ? "Vazir, sans-serif" : "Roboto, sans-serif",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
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
