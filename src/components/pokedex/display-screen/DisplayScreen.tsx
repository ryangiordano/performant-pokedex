import React from "react";
import Flex from "../../../patterns/Flex";

function DisplayScreen({ selectedPokemon }: { selectedPokemon?: PokemonType }) {
  return (
    <Flex flex={1} justifyContent="center" alignItems="center" height="100%">
      {selectedPokemon && (
        <img height="100%" src={selectedPokemon.sprites.front_default} />
      )}
    </Flex>
  );
}
export default DisplayScreen;
