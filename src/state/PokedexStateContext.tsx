import React, { useReducer } from "react";
import { initialState, PokedexAction, PokedexState, reducer } from ".";

export const PokedexStateContext = React.createContext<{
  state: PokedexState;
  dispatch: React.Dispatch<PokedexAction>;
}>({
  state: {
    selectedPokemon: undefined,
    pokemonList: [],
    searchValue: "",
    filterType1: undefined,
    filterType2: undefined,
    generation: undefined,
  },
  dispatch: () => {},
});

export const PokedexStateContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PokedexStateContext.Provider value={{ state, dispatch }}>
      {children}
    </PokedexStateContext.Provider>
  );
};
