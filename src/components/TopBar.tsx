import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTranslation } from "react-i18next";
import iconImg from "../assets/weatherIcon.png";
import SearchBar from "./SearchBar";
import SettingsModal from "./SettingsModal";
import type { ThemeMode } from "../theme";

interface TopBarProps {
  currentMode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  selectedCityKey: string;
  onCityChange: (cityKey: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({
  currentMode,
  setMode,
  selectedCityKey,
  onCityChange,
}) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
            alignItems: "center",
          }}
          dir={i18n.language === "fa" ? "rtl" : "ltr"}
        >
          <Box display="flex"  alignItems="center" gap={2}>
            <img
              src={iconImg}
              alt="logo"
              style={{ width: 56, height: 56, borderRadius: 28 }}
            />
            <Typography variant="h6" fontWeight={600}>
              {t("WeatherDashboard")}
            </Typography>
          </Box>

          <Box display="flex"  alignItems="center" gap={10}>
            <Box>
              <SearchBar 
                selectedCityKey={selectedCityKey}
                setSelectedCityKey={onCityChange}
              />
            </Box>

            <Box >

            <IconButton onClick={handleOpen}>
              <SettingsIcon />
            </IconButton>
            </Box>

            <SettingsModal
              anchorEl={anchorEl}
              onClose={handleClose}
              currentMode={currentMode}
              setMode={setMode}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
