import React from "react";
import {
  Popover,
  Box,
  Typography,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Props = {
  anchorEl: HTMLElement | null; // <-- instead of open:boolean
  onClose: () => void;
  currentMode: "light" | "dark";
  setMode: (m: "light" | "dark") => void;
};

const SettingsPopover: React.FC<Props> = ({ anchorEl, onClose, currentMode, setMode }) => {
  const open = Boolean(anchorEl);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleLang = (lng: "en" | "fa") => {
    if (i18n.language !== lng) i18n.changeLanguage(lng);
  };

  const handleExit = () => {
    localStorage.removeItem("username");
    onClose();
    navigate("/");
  };

  const handleModeChange = (_: React.MouseEvent<HTMLElement>, value: "light" | "dark" | null) => {
    if (value) setMode(value);
  };


  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      PaperProps={{ sx: { p: 2, width: 260, borderRadius: 3 } }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="subtitle1">{t("settingsTitle") || "Settings"}</Typography>
        <IconButton size="small" onClick={onClose}><CloseIcon /></IconButton>
      </Box>

      {/* Mode */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {t("mode") || "Mode"}
        </Typography>
        <ToggleButtonGroup
          value={currentMode}
          exclusive
          onChange={handleModeChange}
          size="small"
        >
          <ToggleButton value="light" > {t("light") || "Light"} </ToggleButton>
          <ToggleButton value="dark"> {t("dark") || "Dark"}</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Language */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {t("language") || "Language"}
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant={i18n.language === "en" ? "contained" : "outlined"}
            size="small"
            onClick={() => handleLang("en")}
          >
            EN
          </Button>
          <Button
            variant={i18n.language === "fa" ? "contained" : "outlined"}
            size="small"
            onClick={() => handleLang("fa")}
          >
            FA
          </Button>
        </Box>
      </Box>

      {/* Exit */}
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {t("exit") || "Exit"}
      </Typography>
      <Button variant="outlined" color="error" fullWidth onClick={handleExit}>
        ↩ {t("exit") || "Exit"}
      </Button>
    </Popover>
  );
};

export default SettingsPopover;
