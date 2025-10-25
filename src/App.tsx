// import { useState, useMemo } from "react";
// import { getTheme } from "./theme";
// import type { ThemeMode } from "./theme";
// import AppRoutes from "./routes/AppRoutes";
// import { useTranslation } from "react-i18next";
// import { ThemeProvider } from "@mui/material/styles";
// import { CacheProvider } from "@emotion/react";
// import CssBaseline from "@mui/material/CssBaseline";
// import { createEmotionCache } from "./utils/createEmotionCache";



// function App() {

//   const { i18n } = useTranslation();
//   const [mode] = useState<ThemeMode>("light");

//   const direction = i18n.language === "fa" ? "rtl" : "ltr";

//   const cache = useMemo(() => createEmotionCache(direction), [direction]);
//   const theme = useMemo(() => getTheme(direction, mode), [direction, mode]);

//   document.documentElement.dir = direction;

//   return (
//     <CacheProvider value={cache}>

//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <AppRoutes />

//       </ThemeProvider>
//     </CacheProvider>
//   );
// }

// export default App;



import { useState, useMemo } from "react";
import { getTheme } from "./theme";
import type { ThemeMode } from "./theme";
import AppRoutes from "./routes/AppRoutes";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { createEmotionCache } from "./utils/createEmotionCache";

function App() {
  const { i18n } = useTranslation();

  // ✅ allow mode updates
  const [mode, setMode] = useState<ThemeMode>("light");

  const direction = i18n.language === "fa" ? "rtl" : "ltr";

  const cache = useMemo(() => createEmotionCache(direction), [direction]);
  const theme = useMemo(() => getTheme(direction, mode), [direction, mode]);

  document.documentElement.dir = direction;

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* ✅ Pass setMode into your routes or layout where SettingsPopover is used */}
        <AppRoutes setMode={setMode} currentMode={mode} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
