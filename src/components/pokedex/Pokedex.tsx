import React, { useReducer } from "react";
import Dashboard from "./dashboard/Dashboard";
import DisplayList from "./display-list/DisplayList";
import DisplayScreen from "./display-screen/DisplayScreen";
import { reducer, initialState } from "../../state/index";
import PokemonService from "../../services/PokemonService";
import TopScreen from "./display-screen/TopScreen";

function Pokedex({}: {}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  React.useEffect(() => {
    //TODO: Set this to query via generation;
    async function getInitialData() {
      const d = await PokemonService.getPokemonsList({ offset: 0, limit: 151 });
      console.log(d);
      dispatch({ type: "set-pokemon-list", pokemonList: d.results });
    }
    getInitialData();
  }, []);
  return (
    <div style={{}}>
      <TopScreen selectedPokemon={state.selectedPokemon} />
      <Dashboard />
      <DisplayList
        pokemonList={state.pokemonList ? [...state.pokemonList] : []}
        onSelectPokemon={async (selectedPokemon) => {
          const p = await PokemonService.getPokemonByName(selectedPokemon.name);
          return dispatch({ type: "set-selected-pokemon", selectedPokemon: p });
        }}
      />
    </div>
  );
}
export default Pokedex;
