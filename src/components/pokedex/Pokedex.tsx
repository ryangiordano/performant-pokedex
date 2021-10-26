import React from "react";
import Dashboard from "./dashboard/Dashboard";
import DisplayList from "./display-list/DisplayList";
import PokemonService from "../../services/PokemonService";
import TopScreen from "./display-screen/TopScreen";
import Box from "../../patterns/Box";
import { PokedexStateContext } from "../../state/PokedexStateContext";
import { GenerationMap } from "../../data/Generations";

function Pokedex({}: {}) {
  const { state, dispatch } = React.useContext(PokedexStateContext);

  React.useEffect(() => {
    async function getInitialData() {
      const generation = GenerationMap.get(state.generation ?? 1);
      const d = await PokemonService.getPokemonsList({
        offset: 0,
        limit: generation,
      });
      dispatch({ type: "set-pokemon-list", pokemonList: d.results });
    }
    getInitialData();
  }, [state.generation]);

  return (
    <Box bg="red" borderRadius="small" p="huge" mt="auto" mb="auto">
      <TopScreen selectedPokemon={state.selectedPokemon} />
      <Dashboard />
      <DisplayList
        pokemonList={state.pokemonList ?? []}
        selectedPokemon={state.selectedPokemon}
        onSelectPokemon={async (selectedPokemon) => {
          const p = await PokemonService.getPokemonByName(selectedPokemon.name);
          return dispatch({
            type: "set-selected-pokemon",
            selectedPokemon: p,
          });
        }}
      />
    </Box>
  );
}

export default Pokedex;
