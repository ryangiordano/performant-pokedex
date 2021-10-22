import React, { useReducer } from "react";
import { initialState, PokedexAction, PokedexState, reducer } from ".";

export type PokedexContextType = {
  state: PokedexState;
  dispatch: React.Dispatch<PokedexAction>;
};

export const PokedexStateContext = React.createContext<PokedexContextType>({
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
