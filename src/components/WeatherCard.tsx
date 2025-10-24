import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import type { WeatherData } from "../types/weather";

interface WeatherCardProps {
  data: WeatherData;
}


const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const weather = data.weather[0];

  return (
    <Paper
      elevation={3}
      sx={{ p: 3, borderRadius: 2, bgcolor: "background.paper" }}
    >
      <Typography variant="h5" fontWeight="bold">
        {data.name}
      </Typography>

      <Typography variant="h3" fontWeight="bold" mt={2}>
        {temp}°C
      </Typography>

      <Typography variant="body1" mt={1}>
        Feels like: {feelsLike}°C
      </Typography>

      <Box mt={2}>
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
        />
      </Box>

      <Typography variant="h6" mt={1} textTransform="capitalize">
        {weather.description}
      </Typography>
    </Paper>
  );
};

export default WeatherCard;
