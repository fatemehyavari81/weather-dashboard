import "./login.css";
import { useTranslation } from "react-i18next";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import moonRain from "../assets/moonrain.png";
import moonWind from "../assets/moonwindpng.png";
import sunCloud from "../assets/suncloudpng.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Login() {
   const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim()) {
      localStorage.setItem("username", name);
      navigate("/dashboard");
    }
  }
  const { t, i18n } = useTranslation();

  const toggleLanguage = (e: React.ChangeEvent<{ value: unknown }>) => {
    i18n.changeLanguage(e.target.value as string);
  };

  const isRTL = i18n.language === "fa";

  return (
    <div className="app-wrapper">

      <div className="login-page">

        <div className="login-container">
          <div className="login-box">
            <div className="form-group">
              <label htmlFor="name">{t("login")}</label>
              <input type="text" name="name" id="name" placeholder={t("loginPlaceholder")} onChange={e => setName(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-btn" onClick={handleLogin}>
              {t("loginBtn")}
            </button>
          </div>

          <div className="login-image">
            <img src={moonRain} alt="Moon Rain" className="weather-img" id="rain"/>
            <img src={sunCloud} alt="Sun Cloud" className="weather-img" id="sun"/>
            <img src={moonWind} alt="Moon Wind" className="weather-img" id="wind"/>
          </div>
        </div>



      </div>

      <TextField
        select
        label={t("lan")}
        value={i18n.language}
        onChange={toggleLanguage}
        variant="standard"

        sx={{
          alignItems: "stretch",
          alignContent: "center",
          justifyContent: "center",

          direction: isRTL ? "rtl" : "ltr",
          minWidth: 200,
          top: 40,
          right: 40,
          "& .MuiInputBase-input": {
            textAlign: isRTL ? "right" : "left",
            direction: isRTL ? "rtl" : "ltr",
          },
          "& .MuiSelect-select": {
            textAlign: isRTL ? "right" : "left",
            direction: isRTL ? "rtl" : "ltr",
          },
          "& .MuiInputLabel-root": {
            left: isRTL ? "auto" : "0",
            right: isRTL ? "0" : "auto",
            color: "black",
          },
          "& .MuiInputLabel-shrink": {
            transformOrigin: isRTL ? "top right" : "top left",
            color: "black",
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "black",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "black",
          },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottomColor: "black",
          },
          "& .MuiSvgIcon-root": {
            color: "black",
          }
        }}
        SelectProps={{
          renderValue: (value) => {
            const selectedValue = value as string;
            return (
              <span style={{
                textAlign: isRTL ? "right" : "left",
                direction: isRTL ? "rtl" : "ltr",
                width: "100%",
                display: "block",
                color: "black",
              }}>
                {selectedValue === "fa" ? t("lanFa") : t("lanEn")}
              </span>
            );
          },
          MenuProps: {
            PaperProps: {
              sx: {
                direction: isRTL ? "rtl" : "ltr",
                "& .MuiMenuItem-root": {
                  direction: isRTL ? "rtl" : "ltr",
                  justifyContent: isRTL ? "flex-end" : "flex-start",
                  textAlign: isRTL ? "right" : "left",
                  color: "black",
                }
              },
            },
          },
          sx: {
            color: "black",
          }
        }}
      >
        <MenuItem
          value="fa"
          sx={{
            direction: "rtl",
            textAlign: "right",
            justifyContent: "flex-end",
            color: "black",
          }}
        >
          {t("lanFa")}
        </MenuItem>
        <MenuItem
          value="en"
          sx={{
            direction: "rtl",
            textAlign: "right",
            justifyContent: "flex-end",
            color: "black",
          }}
        >
          {t("lanEn")}
        </MenuItem>
      </TextField>
    </div>
  );
}

export default Login;