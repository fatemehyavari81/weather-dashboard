import React, { useState } from "react";
import { TextField, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.trim()) {
      onSearch(value.trim());
      setValue("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        p: "4px 8px",
        borderRadius: 2,
      }}
    >
      <TextField
        variant="standard"
        fullWidth
        placeholder="Enter city name..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        InputProps={{ disableUnderline: true }}
      />
      <IconButton onClick={handleSubmit}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
