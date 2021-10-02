import "./App.css";
import Pokedex from "./components/pokedex/Pokedex";

function App() {
  return (
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
  );
}

export default App;
