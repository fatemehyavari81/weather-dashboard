// import React, { useEffect, useState } from "react";
// import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";

// import WeatherCard from "../components/WeatherCard";
// import ForecastCard from "../components/ForecastCard";
// import Footer from "../components/Footer";
// import TopBar from "../components/TopBar";
// import { fetchCurrentWeather } from "../utils/weatherService";
// import { useTranslation } from "react-i18next";
// import type { WeatherData } from "../types/weather";

// const Dashboard: React.FC = () => {
//   const { t, i18n } = useTranslation();

//   const [city, setCity] = useState("Tehran");
//   const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     const getWeather = async () => {
//       setLoading(true);
//       try {
//         const data = await fetchCurrentWeather(city, i18n.language);
//         setWeatherData(data);
//       } catch (error) {
//         console.error("Error fetching weather:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (city) getWeather();
//   }, [city, i18n.language]);



//     const dummyForecast = [
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
//     ];

//   return (
//     <Box p={3}>
//       {/* Top Bar */}
//       <TopBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

//       {/* Search Bar */}

//       {/* Weather + Chart */}
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={7}>
//           {loading ? (
//             <CircularProgress />
//           ) : weatherData ? (
//             <WeatherCard {...weatherData} />
//           ) : (
//             <Box>No data available. Try searching for a city.</Box>
//           )}
//         </Grid>
//         <Grid item xs={12} md={5}>
//           <Box
//             sx={{
//               bgcolor: "background.paper",
//               borderRadius: 2,
//               p: 3,
//               height: "100%",
//             }}
//           >
//             Chart section coming soon...
//           </Box>
//         </Grid>
//       </Grid>

//       {/* 2 Weeks Forecast */}
//       <Box mt={5}>
//         <Typography variant="h6" mb={2}>
//           {t("forecastTitle")}
//         </Typography>
//         <Stack direction="row" spacing={2} overflow="auto">
//           {dummyForecast.map((f, idx) => (
//             <ForecastCard key={idx} {...f} />
//           ))}
//         </Stack>
//       </Box>

//       {/* Footer */}
//       <Footer />
//     </Box>
//   );
// };

// export default Dashboard;



import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";

import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import { fetchCurrentWeather } from "../utils/weatherService";
import { useTranslation } from "react-i18next";
import type { WeatherData } from "../types/weather";

const Dashboard: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  // Media query breakpoints
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  const [city, setCity] = useState("Tehran");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      try {
        const data = await fetchCurrentWeather(city, i18n.language);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    };
    if (city) getWeather();
  }, [city, i18n.language]);

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

  // Determine how many forecast cards to show based on screen size
  const getVisibleForecastCount = () => {
    if (isXs) return 3;
    if (isSm) return 4;
    if (isMd) return 7;
    if (isLg) return 10;
    return 14;
  };

  const visibleForecast = dummyForecast.slice(0, getVisibleForecastCount());

  return (
    <Box p={3}>
      {/* Top Bar */}
      <TopBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Search Bar */}

      {/* Weather + Chart */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          {loading ? (
            <CircularProgress />
          ) : weatherData ? (
            <WeatherCard {...weatherData} />
          ) : (
            <Box>No data available. Try searching for a city.</Box>
          )}
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 2,
              p: 3,
              height: "100%",
            }}
          >
            Chart section coming soon...
          </Box>
        </Grid>
      </Grid>

      {/* 2 Weeks Forecast */}
      <Box mt={5}>
        <Typography variant="h6" mb={2}>
          {t("forecastTitle")}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          overflow="auto"
          sx={{
            '&::-webkit-scrollbar': {
              height: 8,
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2d3447' : '#f1f1f1',
              borderRadius: 4,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: theme.palette.mode === 'dark' ? '#555' : '#c1c1c1',
              borderRadius: 4,
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: theme.palette.mode === 'dark' ? '#777' : '#a8a8a8',
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
  );
};

export default Dashboard;