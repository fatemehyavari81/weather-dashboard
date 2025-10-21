// // src/providers/ThemeProvider.tsx
// import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";
// import rtlPlugin from "stylis-plugin-rtl";
// import i18n from "./i18n";

// type Mode = "light" | "dark";
// const ThemeContext = createContext({
//   mode: "light" as Mode,
//   toggle: () => {},
//   setMode: (m: Mode) => {}
// });

// export const useAppTheme = () => useContext(ThemeContext);

// export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [mode, setMode] = useState<Mode>(() => (localStorage.getItem("theme_mode") as Mode) || "light");
//   const [lang, setLang] = useState<string>(() => localStorage.getItem("i18nextLng") || i18n.language || "en");

//   // update localStorage when theme changes
//   useEffect(() => {
//     localStorage.setItem("theme_mode", mode);
//   }, [mode]);

//   // watch i18n language changes and update direction
//   useEffect(() => {
//     const handle = () => {
//       const current = i18n.language || "en";
//       setLang(current);
//       document.documentElement.dir = current === "fa" ? "rtl" : "ltr";
//       localStorage.setItem("i18nextLng", current);
//     };
//     // call once
//     handle();

//     // subscribe to languageChanged event
//     i18n.on("languageChanged", handle);
//     return () => {
//       i18n.off("languageChanged", handle);
//     };
//   }, []);

//   // emotion cache for RTL — only needed when rtl active, but we can create both and choose
//   const cacheLtr = useMemo(() => createCache({ key: "muiltr" }), []);
//   const cacheRtl = useMemo(
//     () =>
//       createCache({
//         key: "muirtl",
//         stylisPlugins: [rtlPlugin]
//       }),
//     []
//   );

//   const theme = useMemo(
//     () =>
//       createTheme({
//         direction: lang === "fa" ? "rtl" : "ltr",
//         palette: {
//           mode
//         },
//         typography: {
//           fontFamily: lang === "fa" ? `'Vazirmatn', 'Inter', 'Roboto', sans-serif` : ["Inter", "Roboto", "sans-serif"].join(",")
//         }
//       }),
//     [mode, lang]
//   );

//   const toggle = () => setMode((m) => (m === "light" ? "dark" : "light"));

//   // choose cache based on direction
//   const cache = theme.direction === "rtl" ? cacheRtl : cacheLtr;

//   return (
//     <ThemeContext.Provider value={{ mode, toggle, setMode }}>
//       <CacheProvider value={cache}>
//         <ThemeProvider theme={theme}>{children}</ThemeProvider>
//       </CacheProvider>
//     </ThemeContext.Provider>
//   );
// };
