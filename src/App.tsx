import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DevicesStates from "./page/devicesStates/DevicesStates";

const theme = createTheme({ palette: { mode: "dark" } });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DevicesStates />
    </ThemeProvider>
  );
}

export default App;
