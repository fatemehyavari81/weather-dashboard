import React from "react";
import { Box, Typography } from "@mui/material";

interface ForecastCardProps {
  day: string;
  icon: string; // can use your existing weather icons
  temp: string;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ day, icon, temp }) => {
  return (
    <Box
      sx={{
        minWidth: 100,
        p: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="subtitle2">{day}</Typography>
      <Box
        component="img"
        src={icon}
        alt={day}
        sx={{ width: 40, height: 40, my: 1 }}
      />
      <Typography variant="body2">{temp}</Typography>
    </Box>
  );
};

export default ForecastCard;
