import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";


interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
    const { t } = useTranslation();


  const handleSearchClick = () => {
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
      setInputValue(""); // Optional: clear after search
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }


  };

  return (
    <Box display="flex" gap={2} width="100%" maxWidth={500}>
      <TextField
        fullWidth
        label={t("searchLabel")}
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <IconButton
        color="primary"
        onClick={handleSearchClick}
        sx={{ borderRadius: 2 }}
      >
      </IconButton>
    </Box>
  );
};

export default SearchBar;
