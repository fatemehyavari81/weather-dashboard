// import React, { useState, useEffect } from "react";
// import { Box, Typography } from "@mui/material";
// import { useTranslation } from "react-i18next";
// import icon from "../assets/footerIcon.png";
// import { MdMail } from 'react-icons/md';
// import { BsCalendar2Week } from "react-icons/bs";

// const Footer: React.FC = () => {
//   const { t, i18n } = useTranslation();
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatDateTime = (date: Date, language: string) => {
//     if (language === 'fa') {
//       // Farsi/Persian format
//       const time = date.toLocaleTimeString('fa-IR', {
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: false
//       });

//       const options: Intl.DateTimeFormatOptions = {
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//           weekday: 'long',
//       };

//       const persianDate = new Intl.DateTimeFormat('fa-IR', options).format(date);
//       return `${time} ${persianDate}`;
//     } else {
//       // English format
//       const time = date.toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: false
//       });

//       const dateStr = date.toLocaleDateString('en-US', {
//         weekday: 'long',
//         day: 'numeric',
//         month: 'long',
//         year: 'numeric'
//       });

//       return `${time} . ${dateStr}`;
//     }
//   };

//   return (
//     <Box
//       display="flex"
//       justifyContent="space-between"
//       alignItems="center"
//       mt={5}
//       p={3}
//       sx={{ bgcolor: "background.paper", borderRadius: 2 }}
//     >
//       <Typography variant="body2" sx={{display: "flex", alignItems: "center", gap:"10px"}}>
//         <img src={icon} alt="icon" width={"50px"} height={"50px"} style={{ borderRadius: '50%' }}/>
//         <p>{t("footerPolicy")}</p>
//        </Typography>
//       <Typography variant="body2" sx={{display: "flex", flexDirection: "row", gap: "20px"}}>
//         <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
//           <MdMail/>  {t("contactUs")} info@nadin.ir
//         </p>
//         <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
//           <BsCalendar2Week/> {formatDateTime(currentTime, i18n.language)}
//         </p>
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;


import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import icon from "../assets/footerIcon.png";
import { MdMail } from 'react-icons/md';
import { BsCalendar2Week } from "react-icons/bs";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = () => {
    const isPersian = i18n.language === 'fa';

    if (isPersian) {
      // Farsi format: year, month, day, weekday, time
      const time = currentTime.toLocaleTimeString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });

      const year = new Intl.DateTimeFormat('fa-IR', { year: 'numeric' }).format(currentTime);
      const month = new Intl.DateTimeFormat('fa-IR', { month: 'long' }).format(currentTime);
      const day = new Intl.DateTimeFormat('fa-IR', { day: 'numeric' }).format(currentTime);
      const weekday = new Intl.DateTimeFormat('fa-IR', { weekday: 'long' }).format(currentTime);

      return `${time} ${weekday} ${day} ${month} ${year}`;
    } else {
      // English format: time . weekday day month year
      const time = currentTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });

      const dateStr = currentTime.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });

      return `${time} . ${dateStr}`;
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={5}
      p={3}
      sx={{ bgcolor: "background.paper", borderRadius: 2 }}
    >
      <Typography variant="body2" sx={{display: "flex", alignItems: "center", gap:"10px"}}>
        <img src={icon} alt="icon" width={"50px"} height={"50px"} style={{ borderRadius: '50%' }}/>
        <p>{t("footerPolicy")}</p>
       </Typography>
      <Typography variant="body2" sx={{display: "flex", flexDirection: "row", gap: "20px"}}>
        <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <MdMail/>  {t("contactUs")} : info@nadin.ir
        </p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <BsCalendar2Week/> {formatDateTime()}
        </p>
      </Typography>
    </Box>
  );
};

export default Footer;