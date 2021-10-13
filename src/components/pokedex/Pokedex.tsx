import React, { useReducer } from "react";
import Dashboard from "./dashboard/Dashboard";
import DisplayList from "./display-list/DisplayList";
import DisplayScreen from "./display-screen/DisplayScreen";
import { reducer, initialState } from "../../state/index";
import PokemonService from "../../services/PokemonService";
import TopScreen from "./display-screen/TopScreen";
import Box from "../../patterns/Box";


// Create a context to manage state


function Pokedex({}: {}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  React.useEffect(() => {
    //TODO: Set this to query via generation;
    async function getInitialData() {
      const d = await PokemonService.getPokemonsList({ offset: 0, limit: 151 });
      dispatch({ type: "set-pokemon-list", pokemonList: d.results });
    }
    getInitialData();
  }, []);
  return (
    <Box bg="red" borderRadius="small" p="huge" mt="auto" mb="auto" style={{}}>
      <TopScreen selectedPokemon={state.selectedPokemon} />
      <Dashboard />
      <DisplayList
        pokemonList={state.pokemonList ? [...state.pokemonList] : []}
        selectedPokemon={state.selectedPokemon}
        onSelectPokemon={async (selectedPokemon) => {
          const p = await PokemonService.getPokemonByName(selectedPokemon.name);
          return dispatch({ type: "set-selected-pokemon", selectedPokemon: p });
        }}
      />
    </Box>
  );
}
export default Pokedex;
