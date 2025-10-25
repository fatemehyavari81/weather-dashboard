import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";

import cloudyIcon from "../assets/icon/cloudy.png";
import sunnyIcon from "../assets/icon/sunny.png";
import rainCloudIcon from "../assets/icon/rainCloud.png";
import stormIcon from "../assets/icon/storm.png";

type WeatherCardProps = {
  city: string;
  day: string;
  date: string;
  time: string;
  temp: string;
  high: string;
  low: string;
  feelsLike: string;
  condition: string;
  icon: "cloudy" | "sunny" | "rainCloud" | "storm";
};

const iconMap = {
  cloudy: cloudyIcon,
  sunny: sunnyIcon,
  rainCloud: rainCloudIcon,
  storm: stormIcon,
};

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  day,
  date,
  time,
  temp,
  high,
  low,
  feelsLike,
  condition,
  icon,
}) => {
  const theme = useTheme();
  const selectedIcon = iconMap[icon];

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: "24px",
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {/* Location */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{ color: theme.palette.text.primary }}
        >
          {city}
        </Typography>
      </Stack>

      {/* Day + Date */}
      <Stack direction="row" justifyContent="space-between">
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.text.secondary }}
        >
          {day}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.text.secondary }}
        >
          {date} | {time}
        </Typography>
      </Stack>

      {/* Main Weather Info */}
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack>
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{ color: theme.palette.text.primary }}
          >
            {temp}
          </Typography>

          <Typography
            variant="h6"
            fontWeight={500}
            sx={{ color: theme.palette.text.secondary }}
          >
            High: {high} | Low: {low}
          </Typography>

          <Typography
            variant="body1"
            mt={1}
            sx={{ color: theme.palette.text.secondary }}
          >
            Feels Like: {feelsLike}
          </Typography>
        </Stack>

        <Box
          component="img"
          src={selectedIcon}
          alt={condition}
          sx={{ width: 120, height: 120, objectFit: "contain" }}
        />
      </Stack>

      {/* Condition */}
      <Typography
        variant="h6"
        fontWeight={500}
        sx={{ color: theme.palette.text.primary, textAlign: "center" }}
      >
        {condition}
      </Typography>
    </Box>
  );
};

export default WeatherCard;
