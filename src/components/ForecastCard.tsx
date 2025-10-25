import {useEffect} from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";


interface ForecastCardProps {
  day: string;
  icon: string; // can use your existing weather icons
  temp: string;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ day, icon, temp }) => {
  const theme = useTheme();
  const { t , i18n} = useTranslation();

   useEffect(() => {

}, [i18n.language]);


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        minWidth: 80,
        minHeight: 240,
        p: 2,
        bgcolor: theme.palette.mode === 'dark' ? '#3F4861' : '#CDD9E0',
        borderRadius: "24px",
        textAlign: "center",
      }}
    >
        <Box>

        <Typography variant="subtitle2">{t(day)}</Typography>
      <Box
        sx={{
          width: "60px",
          height: "0px",
          border: "2px solid",
          borderImageSource: "linear-gradient(90deg, rgba(54, 54, 54, 0) 0%, #7E7E7E 48.5%, rgba(54, 54, 54, 0) 100%)",
          borderImageSlice: 1,
          opacity: 1,
        }}
      />
        </Box>

            <Box
        component="img"
        src={icon}
        alt={day}
        sx={{
          width: 60,
          height: 60,
          my: 1,
          mx: "auto",
          filter: `
            drop-shadow(0 4px 8px rgba(0,0,0,0.2))
            drop-shadow(0 6px 12px rgba(0,0,0,0.1))
          `,
          transform: 'perspective(500px) rotateY(0deg) rotateX(5deg)',
          transition: 'all 0.5s ease-in-out',
          animation: 'float 3s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': {
              transform: 'perspective(500px) rotateY(0deg) rotateX(5deg) translateY(0px)',
            },
            '50%': {
              transform: 'perspective(500px) rotateY(5deg) rotateX(3deg) translateY(-5px)',
            }
          },
          '&:hover': {
            transform: 'perspective(500px) rotateY(10deg) rotateX(8deg) scale(1.1)',
            filter: `
              drop-shadow(0 6px 12px rgba(0,0,0,0.3))
              drop-shadow(0 10px 20px rgba(0,0,0,0.15))
              brightness(1.1)
            `,
          }
        }}
      />

      <Typography variant="body2">{temp}</Typography>

    </Box>
  );
};

export default ForecastCard;