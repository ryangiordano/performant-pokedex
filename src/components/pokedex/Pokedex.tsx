import React, { useReducer } from "react";
import Dashboard from "./dashboard/Dashboard";
import DisplayList from "./display-list/DisplayList";
import DisplayScreen from "./display-screen/DisplayScreen";
import { reducer, initialState } from "../../state/index";
import PokemonService from "../../services/PokemonService";

function Pokedex({}: {}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  React.useEffect(() => {
    async function getInitialData() {
      const d = await PokemonService.getPokemonByName("golduck");
      dispatch({ type: "set-pokemon-list", pokemonList: [d] });
    }
    getInitialData();
  }, []);
  console.log(state)
  return (
    <div style={{}}>
      <DisplayScreen selectedPokemon={state.selectedPokemon} />
      <Dashboard />
      <DisplayList
        //TODO
        pokemonList={state.pokemonList ? [...state.pokemonList] : []}
        onSelectPokemon={(selectedPokemon) =>
          dispatch({ type: "set-selected-pokemon", selectedPokemon })
        }
      />
    </div>
  );
}
export default Pokedex;
