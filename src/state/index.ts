import { useReducer } from "react";

export type PokedexState = {
  selectedPokemon?: PokemonType;
  pokemonList?: PokemonType[];
};

type PokedexAction = {
  type: "set-selected-pokemon" | "set-pokemon-list";
  selectedPokemon?: PokemonType;
  pokemonList?: PokemonType[];
};

export const initialState = { selectedPokemon: undefined };

export const reducer = (state: PokedexState, action: PokedexAction) => {
  debugger
  switch (action.type) {
    case "set-selected-pokemon":
      return { ...state, selectedPokemon: action.selectedPokemon };
    case "set-pokemon-list":
      return { ...state, pokemonList: action.pokemonList };
    default:
      throw new Error("State not available");
  }
};
