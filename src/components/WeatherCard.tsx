import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

import cloudyIcon from "../assets/icon/cloudy.png";
import sunnyIcon from "../assets/icon/sunny.png";
import rainCloudIcon from "../assets/icon/rainCloud.png";
import stormIcon from "../assets/icon/storm.png";

import { FaMapMarkerAlt } from "react-icons/fa";


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

const WeatherCard: React.FC<WeatherCardProps> = ({ city, day, date, time, temp, high, low, feelsLike, condition, icon,}) => {
  const theme = useTheme();
  const selectedIcon = iconMap[icon];
    const { t } = useTranslation();


  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: "24px",
        p: 4,
        display: "flex",
        gap: 20,
      }}
    >
        <Stack>
        <Stack>
            <Box
                sx={{
                display: "flex",
                alignItems: "center",
                background: "#CDD9E0",
                width: 146,
                height: 30,
                opacity: 1,
                gap: "12px",
                borderRadius: "50px",
                padding: "10px 12px",
                color: theme.palette.text.primary
                }}
            >
                <FaMapMarkerAlt />
                <Typography  fontWeight={200}>
                {city}
                </Typography>
            </Box>
        </Stack>
        <Stack>

            <Typography
            variant="h4">
            {day}
            </Typography>

            <Typography
            variant="subtitle1"
            sx={{display: "flex",justifyContent:" flex-start", gap:"20px", color: theme.palette.text.secondary }}
            >
                <p>{date}</p>
                <p>{time}</p>
            </Typography>
        </Stack>

        <Stack>
            <Typography
                variant="h4"
                fontWeight={400}
                sx={{ color: theme.palette.text.primary }}
            >
                {temp}
            </Typography>

            <Typography
                variant="subtitle1"
                fontWeight={400}
                sx={{ color: theme.palette.text.secondary }}
            >
                {t("maxTemp")}: {high}   {t("minTemp")}: {low}
            </Typography>

        </Stack>


        </Stack>
        <Stack sx={{display: "flex", }}>
            <Box
            component="img"
            src={selectedIcon}
            alt={condition}
            sx={{ width: 150, height: 150, objectFit: "contain" }}
            />

            <Typography
                variant="h6"
                fontWeight={400}
                sx={{ color: theme.palette.text.primary, textAlign: "center" }}
            >
                {condition}
            </Typography>
            <Typography
                variant="h6"
                fontWeight={400}
                sx={{ color: theme.palette.text.primary, textAlign: "center" }}
            >
                {t("feelsLike")}{feelsLike}
            </Typography>
        </Stack>
    </Box>
  );
};

export default WeatherCard;
