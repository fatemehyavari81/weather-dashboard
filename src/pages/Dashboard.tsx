// import React, { useEffect, useState } from "react";
// import { Box, CircularProgress } from "@mui/material";
// import { Grid } from '@mui/material';
// import SearchBar from "../components/SearchBar";
// import WeatherCard from "../components/WeatherCard";
// import { fetchCurrentWeather } from "../utils/weatherService";
// import { useTranslation } from "react-i18next";
// import type { WeatherData } from "../types/weather";


// const Dashboard: React.FC = () => {
//   const [city, setCity] = useState("Tehran");
//   const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

//   const [loading, setLoading] = useState(false);
//   const { i18n } = useTranslation();

//   const handleSearch = (newCity: string) => {
//     setCity(newCity);
//   };

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

//   return (
//     <Box p={3}>
//       <Box mb={3}>
//         <SearchBar onSearch={handleSearch} />
//       </Box>

//       <Grid container spacing={3}>
//         <Grid item xs={12} md={7}>
//           {loading ? (
//             <CircularProgress />
//           ) : weatherData ? (
//             <WeatherCard data={weatherData} />
//           ) : (
//             <Box>No data available. Try searching for a city.</Box>
//           )}
//         </Grid>

//         {/* Placeholder for Chart (Next Phase) */}
//         <Grid item xs={12} md={5}>
//           <Box
//             p={3}
//             sx={{
//               bgcolor: "background.paper",
//               borderRadius: 2,
//               height: "100%",
//             }}
//           >
//             {/* Coming soon: Chart Section */}
//             Chart section coming soon...
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Dashboard;





import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { fetchCurrentWeather } from "../utils/weatherService";
import { useTranslation } from "react-i18next";
import type { WeatherData } from "../types/weather";

const Dashboard: React.FC = () => {
  const [city, setCity] = useState("Tehran");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const { i18n } = useTranslation();

  const handleSearch = (newCity: string) => {
    setCity(newCity);
  };

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

  return (
    <Box p={3}>
      {/* Search Bar */}
      <Box mb={3}>
        <SearchBar onSearch={handleSearch} />
      </Box>

      {/* Responsive Layout using Box + Flex */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={3}
      >
        {/* Weather section */}
        <Box flex={1}>
          {loading ? (
            <CircularProgress />
          ) : weatherData ? (
            <WeatherCard data={weatherData} />
          ) : (
            <Box>No data available. Try searching for a city.</Box>
          )}
        </Box>

        {/* Placeholder for Chart */}
        <Box
          flex={1}
          p={3}
          sx={{
            bgcolor: "background.paper",
            borderRadius: 2,
          }}
        >
          Chart section coming soon...
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
