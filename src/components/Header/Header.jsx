import "./Header.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import categories from "../Data/category";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const Header = ({ category, setCategory, word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: lightMode ? "#000" : "#fff",
      },
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            label="Search a word"
            variant="standard"
            className="search"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          {/* <TextField
            className="select"
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField> */}
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
