import "./App.css";
import Pokedex from "./components/pokedex/Pokedex";
import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";
import React from "react";
import { PokedexStateContextProvider } from "./state/PokedexStateContext";

function App() {
  return (
    <PokedexStateContextProvider>
      <ThemeProvider theme={theme}>
        <div
          className="App"
          style={{
            width: "800px",
            height: "100vh",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Pokedex />
        </div>
      </ThemeProvider>
    </PokedexStateContextProvider>
  );
}

export default App;
