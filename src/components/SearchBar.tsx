import React, { useEffect } from "react";
import { Box, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  selectedCityKey: string;
  setSelectedCityKey: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  selectedCityKey,
  setSelectedCityKey,
}) => {
  const { t, i18n } = useTranslation();

  const cityKeys = [
    "tehran", "mashhad", "isfahan", "shiraz", "tabriz", "karaj",
    "ahvaz", "qom", "kermanshah", "rasht", "sanfrancisco", "newyork",
    "losangeles", "london", "paris", "tokyo", "dubai", "istanbul",
    "moscow", "toronto"
  ];

  useEffect(() => {
    if (!selectedCityKey) {
      const savedCity = localStorage.getItem("selectedCityKey");
      if (savedCity) setSelectedCityKey(savedCity);
    }
  }, [selectedCityKey, setSelectedCityKey]);

  const handleChange = (event: any) => {
    const newCityKey = event.target.value;
    setSelectedCityKey(newCityKey);
    localStorage.setItem("selectedCityKey", newCityKey);
  };

  return (
    <Box dir={i18n.dir()} sx={{ width: "250px" }}>
      <FormControl fullWidth>
        <InputLabel>{t("searchLabel")}</InputLabel>
        <Select
          value={selectedCityKey || "tehran"}
          onChange={handleChange}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 48 * 8,
                overflowY: "auto",
              },
            },
          }}
        >
          {cityKeys.map((key) => (
            <MenuItem key={key} value={key}>
              {t(key)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
