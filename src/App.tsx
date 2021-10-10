import "./App.css";
import Pokedex from "./components/pokedex/Pokedex";
import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          width: "800px",
          height: "100vh",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Pokedex />
      </div>
    </ThemeProvider>
  );
}

export default App;
