import React from "react";
import DisplayListItem from "./DisplayListItem";

function DisplayList({
  pokemonList = [],
  onSelectPokemon,
}: {
  pokemonList: PokemonType[];
  onSelectPokemon: (selectedPokemon: PokemonType) => void;
}) {
  const [hoveredId, setHoveredId] = React.useState<number | null>(null);
  const [selectedId, setHovered] = React.useState<number | null>(null);
  return (
    <ul>
      {pokemonList.map((pokemon) => (
        <DisplayListItem
          name={pokemon.name}
          hovered={hoveredId === pokemon.id}
          selected={selectedId === pokemon.id}
          onClick={() => {
            onSelectPokemon(pokemon);
          }}
          onMouseEnter={() => {
            setHoveredId(pokemon.id);
          }}
        />
      ))}
    </ul>
  );
}
export default DisplayList;
