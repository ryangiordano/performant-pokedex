import React from "react";
import Box from "../../../patterns/Box";
import {
  PokedexContextType,
  PokedexStateContext,
} from "../../../state/PokedexStateContext";
import DisplayListItem from "./DisplayListItem";

function DisplayList({
  pokemonList = [],
  onSelectPokemon,
  selectedPokemon,
}: {
  pokemonList: PokemonType[];
  onSelectPokemon: (selectedPokemon: PokemonType) => void;
  selectedPokemon?: PokemonType;
}) {
  const { state } = React.useContext<PokedexContextType>(PokedexStateContext);

  const filteredPokemonList = pokemonList.filter((p) =>
    p.name.includes(state.searchValue ?? "")
  );

  return (
    <Box maxHeight="500px" overflowY="scroll">
      <Box as="ul" p="0" m="0" className="list-group">
        {filteredPokemonList.map((pokemon) => (
          <DisplayListItem
            name={pokemon.name}
            selected={selectedPokemon?.name === pokemon.name}
            onClick={(name: string) => {
              const pokemon = pokemonList.find((p) => p.name === name);
              if (pokemon) {
                onSelectPokemon(pokemon);
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default DisplayList;
