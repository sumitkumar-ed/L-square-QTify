import React, { useState } from "react";
import { Autocomplete, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.css";

const searchSuggestions = [
  // Add some sample suggestions or fetch from your API
  { label: "Song 1" },
  { label: "Song 2" },
  { label: "Song 3" },
];

function Search({ placeholder, searchData }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (event, newValue) => {
    setInputValue(newValue);
    if (newValue) {
      searchData(newValue);
    }
  };

  const handleButtonClick = () => {
    alert(inputValue);
    searchData(inputValue);
  };

  return (
    <Autocomplete
      freeSolo
      options={searchSuggestions.map((option) => option.label)}
      value={inputValue}
      onInputChange={handleSearch}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <button
                  className={styles.searchButton}
                  onClick={handleButtonClick}
                >
                  <SearchIcon />
                </button>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          size="small"
          fullWidth
          className={styles.searchBar}
        />
      )}
      className={styles.autocomplete}
    />
  );
}

export default Search;
