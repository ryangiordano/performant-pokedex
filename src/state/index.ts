export type PokedexState = {
  selectedPokemon?: PokemonType;
  pokemonList?: PokemonType[];
  searchValue?: string;
  filterType1?: TypeValue;
  filterType2?: TypeValue;
  generation?: number;
};

export type PokedexAction = {
  type:
    | "set-selected-pokemon"
    | "set-pokemon-list"
    | "set-search-value"
    | "set-generation"
    | "set-type-1"
    | "set-type-2";
  selectedPokemon?: PokemonType;
  pokemonList?: PokemonType[];
  searchValue?: string;
  filterType1?: TypeValue;
  filterType2?: TypeValue;
  generation?: number;
};

export const initialState = { selectedPokemon: undefined };

export const reducer = (state: PokedexState, action: PokedexAction) => {
  switch (action.type) {
    case "set-selected-pokemon":
      return { ...state, selectedPokemon: action.selectedPokemon };
    case "set-pokemon-list":
      return { ...state, pokemonList: action.pokemonList };
    case "set-search-value":
      return { ...state, searchValue: action.searchValue };
    case "set-type-1":
      return {
        ...state,
        filterType1: action.filterType1,
      };
    case "set-type-2":
      return {
        ...state,
        filterType2: action.filterType2,
      };
    case "set-generation":
      return {
        ...state,
        generation: action.generation,
      };
    default:
      throw new Error("State not available");
  }
};
