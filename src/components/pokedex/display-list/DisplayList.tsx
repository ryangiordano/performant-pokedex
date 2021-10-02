import React from "react";

function DisplayList({
  pokemonList = [],
  onSelectPokemon,
}: {
  pokemonList: PokemonType[];
  onSelectPokemon: (selectedPokemon: PokemonType) => void;
}) {
  return (
    <ul>
      {pokemonList.map((p) => (
        <li
          onClick={() => {
            onSelectPokemon(p);
          }}
        >
          {p.name}
        </li>
      ))}
    </ul>
  );
}
export default DisplayList;
