// src/components/SettingsModal.tsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Props = {
  open: boolean;
  onClose: () => void;
  currentMode: "light" | "dark";
  setMode: (m: "light" | "dark") => void;
};

const SettingsModal: React.FC<Props> = ({ open, onClose, currentMode, setMode }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleLang = (lng: "en" | "fa") => {
    if (i18n.language !== lng) i18n.changeLanguage(lng);
  };

  const handleExit = () => {
    // Clear auth/localStorage as needed
    localStorage.removeItem("username");
    onClose();
    navigate("/"); // back to login
  };

  const handleModeChange = (_: React.MouseEvent<HTMLElement>, value: "light" | "dark" | null) => {
    if (value) setMode(value);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {t("settingsTitle") || "Settings"}
        <IconButton aria-label="close" onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {/* Mode */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {t("mode") || "Mode"}
          </Typography>
          <ToggleButtonGroup
            value={currentMode}
            exclusive
            onChange={handleModeChange}
            aria-label="mode"
            size="small"
          >
            <ToggleButton value="light" aria-label="light">
              ☀ {t("light") || "Light"}
            </ToggleButton>
            <ToggleButton value="dark" aria-label="dark">
              🌙 {t("dark") || "Dark"}
            </ToggleButton>
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
        <Box>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {t("exit") || "Exit"}
          </Typography>
          <Button variant="outlined" color="error" startIcon={<span>↩</span>} onClick={handleExit}>
            {t("exit") || "Exit"}
          </Button>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>{t("close") || "Close"}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingsModal;
