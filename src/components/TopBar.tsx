import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Switch, } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTranslation } from "react-i18next";
import icon from "../assets/weatherIcon.png";
import SearchBar from "../components/SearchBar";


interface TopBarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ darkMode, toggleDarkMode }) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const switchLanguage = (lang: "en" | "fa") => {
    i18n.changeLanguage(lang);
    handleClose();
  };
  const handleSearch = (newCity: string) => setCity(newCity);


  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Logo + title */}
        <Typography variant="h6" fontWeight={600} sx={{display: "flex", alignItems: "center", gap:"10px"}}>
            <img src={icon} alt="icon" width={"56px"} height={"56px"} style={{ borderRadius: '50%' }}/>
            <h3>{t("WeatherDashboard")}</h3>

        </Typography>

        {/* Right: Settings */}
        <Box>
          <IconButton onClick={handleSettingsClick}>
            <SettingsIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              Mode:
              <Switch checked={darkMode} onChange={toggleDarkMode} />
            </MenuItem>
            <MenuItem onClick={() => switchLanguage("en")}>EN</MenuItem>
            <MenuItem onClick={() => switchLanguage("fa")}>FA</MenuItem>
            <MenuItem onClick={() => (window.location.href = "/")}>
              Exit
            </MenuItem>
          </Menu>
          <Box my={3}>
            <SearchBar onSearch={handleSearch} />
          </Box>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
