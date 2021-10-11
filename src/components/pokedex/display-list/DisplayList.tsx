import React from "react";
import Box from "../../../patterns/Box";
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
  return (
    <Box maxHeight="500px" overflowY="scroll">
      <Box as="ul" p="0" m="0" className="list-group">
        {pokemonList.map((pokemon) => (
          <DisplayListItem
            name={pokemon.name}
            selected={selectedPokemon?.name === pokemon.name}
            onClick={() => {
              onSelectPokemon(pokemon);
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
export default DisplayList;
