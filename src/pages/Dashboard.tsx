// import React, { useEffect, useState } from "react";
// import { Box, CircularProgress, Stack, Typography, useTheme, useMediaQuery, } from "@mui/material";
// import WeatherCard from "../components/WeatherCard";
// import ForecastCard from "../components/ForecastCard";
// import Footer from "../components/Footer";
// import TopBar from "../components/TopBar";
// import MonthlyTempChart from "../components/MonthlyTempChart";
// import { fetchCurrentWeather } from "../utils/weatherService";
// import { useTranslation } from "react-i18next";
// import type { WeatherData } from "../types/weather";
// import type { ThemeMode } from "../theme";



// interface DashboardProps {
//   currentMode: ThemeMode;
//   setMode: (m: ThemeMode) => void;
// }



// interface DashboardProps {
//   currentMode: ThemeMode;
//   setMode: (m: ThemeMode) => void;
// }  const { t, i18n } = useTranslation();
//   const theme = useTheme();


//   const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
//   const isXs = useMediaQuery(theme.breakpoints.only("xs"));
//   const isSm = useMediaQuery(theme.breakpoints.only("sm"));
//   const isMd = useMediaQuery(theme.breakpoints.only("md"));
//   const isLg = useMediaQuery(theme.breakpoints.up("lg"));

//   // ✅ Load from storage or fallback to "tehran"
//   const [selectedCityKey, setSelectedCityKey] = useState<string>(() => {
//     return localStorage.getItem("selectedCityKey") || "tehran";
//   });


//   const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   // ✅ Persist selected city whenever updated
//   useEffect(() => {
//     localStorage.setItem("selectedCityKey", selectedCityKey);
//   }, [selectedCityKey]);

//   // ✅ Auto-fetch on change
//   useEffect(() => {
//     const getWeather = async () => {
//       setLoading(true);
//       try {
//         const data = await fetchCurrentWeather(selectedCityKey, i18n.language);
//         setWeatherData(data);
//       } catch (error) {
//         console.error("Error fetching weather:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (selectedCityKey) getWeather();
//   }, [selectedCityKey, i18n.language]);

//   const dummyForecast = [
//     { day: "monday", icon: "src/assets/icon/sunny.png", temp: "25°C" },
//     { day: "tuesday", icon: "src/assets/icon/cloudy.png", temp: "22°C" },
//     { day: "wednesday", icon: "src/assets/icon/rainCloud.png", temp: "18°C" },
//     { day: "thursday", icon: "src/assets/icon/storm.png", temp: "20°C" },
//     { day: "friday", icon: "src/assets/icon/sunny.png", temp: "23°C" },
//     { day: "saturday", icon: "src/assets/icon/cloudy.png", temp: "21°C" },
//     { day: "sunday", icon: "src/assets/icon/rainCloud.png", temp: "19°C" },
//     { day: "monday", icon: "src/assets/icon/sunny.png", temp: "25°C" },
//     { day: "tuesday", icon: "src/assets/icon/cloudy.png", temp: "22°C" },
//     { day: "wednesday", icon: "src/assets/icon/rainCloud.png", temp: "18°C" },
//     { day: "thursday", icon: "src/assets/icon/storm.png", temp: "20°C" },
//     { day: "friday", icon: "src/assets/icon/sunny.png", temp: "23°C" },
//     { day: "saturday", icon: "src/assets/icon/cloudy.png", temp: "21°C" },
//     { day: "sunday", icon: "src/assets/icon/rainCloud.png", temp: "19°C" },
//   ];

//   const getVisibleForecastCount = () => {
//     if (isXs) return 3;
//     if (isSm) return 4;
//     if (isMd) return 7;
//     if (isLg) return 10;
//     return 14;
//   };



//   const visibleForecast = dummyForecast.slice(0, getVisibleForecastCount());





//   return (
//     <>
//     <Box p={2}>



//       <Box p={2}>

//               <TopBar
//                 currentMode={currentMode}
//                 setMode={setMode}
//                 selectedCityKey={selectedCityKey}
//                 onCityChange={setSelectedCityKey}
//               />


//         {/* rest of the page */}
//       </Box>



//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: isMdUp ? "row" : "column",
//           gap: 2,
//         }}
//       >
//         <Box sx={{ flex: isMdUp ? 0.4 : "1 1 auto" }}>
//           {loading ? (
//             <CircularProgress />
//           ) : weatherData ? (
//             <WeatherCard {...weatherData} />
//           ) : (
//             <Box>No data available. Try searching for a city.</Box>
//           )}
//         </Box>

//         <Box
//           sx={{
//             flex: isMdUp ? 0.6 : "1 1 auto",
//             bgcolor: "background.paper",
//             borderRadius: 2,
//             height: 300,
//             width: "100%",
//             position: "relative",
//           }}
//         >
//           <MonthlyTempChart />
//         </Box>
//       </Box>

//       <Box mt={5}>
//         <Typography variant="h6" mb={2}>
//           {t("forecastTitle")}
//         </Typography>
//         <Stack
//           direction="row"
//           spacing={2}
//           overflow="auto"
//           sx={{
//             "&::-webkit-scrollbar": { height: 8 },
//             "&::-webkit-scrollbar-track": {
//               backgroundColor:
//                 theme.palette.mode === "dark" ? "#2d3447" : "#f1f1f1",
//               borderRadius: 4,
//             },
//             "&::-webkit-scrollbar-thumb": {
//               backgroundColor:
//                 theme.palette.mode === "dark" ? "#555" : "#c1c1c1",
//               borderRadius: 4,
//             },
//             "&::-webkit-scrollbar-thumb:hover": {
//               backgroundColor:
//                 theme.palette.mode === "dark" ? "#777" : "#a8a8a8",
//             },
//           }}
//         >
//           {visibleForecast.map((f, idx) => (
//             <ForecastCard key={idx} {...f} />
//           ))}
//         </Stack>
//       </Box>

//       <Footer />
//     </Box>
//     </>
//   );
// };

// export default Dashboard;




import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Stack, Typography, useTheme, useMediaQuery, } from "@mui/material";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import MonthlyTempChart from "../components/MonthlyTempChart";
import { fetchCurrentWeather } from "../utils/weatherService";
import { useTranslation } from "react-i18next";
import type { WeatherData } from "../types/weather";
import type { ThemeMode } from "../theme";

interface DashboardProps {
  currentMode: ThemeMode;
  setMode: (m: ThemeMode) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ currentMode, setMode }) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  // ✅ Load from storage or fallback to "tehran"
  const [selectedCityKey, setSelectedCityKey] = useState<string>(() => {
    return localStorage.getItem("selectedCityKey") || "tehran";
  });

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);


  // ✅ Persist selected city whenever updated
  useEffect(() => {
    localStorage.setItem("selectedCityKey", selectedCityKey);
  }, [selectedCityKey]);

  // ✅ Auto-fetch on change
  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      try {
        const data = await fetchCurrentWeather(selectedCityKey, i18n.language);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    };
    if (selectedCityKey) getWeather();
  }, [selectedCityKey, i18n.language]);

  const dummyForecast = [
    { day: "monday", icon: "src/assets/icon/sunny.png", temp: "25°C" },
    { day: "tuesday", icon: "src/assets/icon/cloudy.png", temp: "22°C" },
    { day: "wednesday", icon: "src/assets/icon/rainCloud.png", temp: "18°C" },
    { day: "thursday", icon: "src/assets/icon/storm.png", temp: "20°C" },
    { day: "friday", icon: "src/assets/icon/sunny.png", temp: "23°C" },
    { day: "saturday", icon: "src/assets/icon/cloudy.png", temp: "21°C" },
    { day: "sunday", icon: "src/assets/icon/rainCloud.png", temp: "19°C" },
    { day: "monday", icon: "src/assets/icon/sunny.png", temp: "25°C" },
    { day: "tuesday", icon: "src/assets/icon/cloudy.png", temp: "22°C" },
    { day: "wednesday", icon: "src/assets/icon/rainCloud.png", temp: "18°C" },
    { day: "thursday", icon: "src/assets/icon/storm.png", temp: "20°C" },
    { day: "friday", icon: "src/assets/icon/sunny.png", temp: "23°C" },
    { day: "saturday", icon: "src/assets/icon/cloudy.png", temp: "21°C" },
    { day: "sunday", icon: "src/assets/icon/rainCloud.png", temp: "19°C" },
  ];

  const getVisibleForecastCount = () => {
    if (isXs) return 3;
    if (isSm) return 4;
    if (isMd) return 7;
    if (isLg) return 10;
    return 14;
  };

  const visibleForecast = dummyForecast.slice(0, getVisibleForecastCount());

  return (
    <>
      <Box p={2}>
        <Box p={2}>
          <TopBar
            currentMode={currentMode}
            setMode={setMode}
            selectedCityKey={selectedCityKey}
            onCityChange={setSelectedCityKey}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMdUp ? "row" : "column",
            gap: 2,
          }}
        >
          <Box sx={{ flex: isMdUp ? 0.4 : "1 1 auto" }}>
            {loading ? (
              <CircularProgress />
            ) : weatherData ? (
              <WeatherCard {...weatherData} />
            ) : (
              <Box>No data available. Try searching for a city.</Box>
            )}
          </Box>

          <Box
            sx={{
              flex: isMdUp ? 0.6 : "1 1 auto",
              bgcolor: "background.paper",
              borderRadius: "24px",
              height: 300,
              width: "100%",
              position: "relative",

            }}
          >
            <MonthlyTempChart />
          </Box>
        </Box>

        <Box mt={5} >
          <Typography variant="h6" mb={2}>
            {t("forecastTitle")}
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            overflow="auto"
            sx={{
              "&::-webkit-scrollbar": { height: 8 },
              "&::-webkit-scrollbar-track": {
                backgroundColor:
                  theme.palette.mode === "dark" ? "#2d3447" : "#f1f1f1",
                borderRadius: 4,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor:
                  theme.palette.mode === "dark" ? "#555" : "#c1c1c1",
                borderRadius: 4,
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor:
                  theme.palette.mode === "dark" ? "#777" : "#a8a8a8",
              },
            }}
          >
            {visibleForecast.map((f, idx) => (
              <ForecastCard key={idx} {...f} />
            ))}
          </Stack>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default Dashboard;