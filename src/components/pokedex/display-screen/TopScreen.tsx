import React from "react";
import DisplayScreen from "./DisplayScreen";
import MetadataScreen from "./MetadataScreen";
import Flex from "../../../patterns/Flex";
import DisplayWindow from "./DisplayWindow";

function TopScreen({ selectedPokemon }: { selectedPokemon?: PokemonType }) {
  return (
    <Flex height="200px" border="3px solid black" borderRadius="small">
      <DisplayWindow>
        <DisplayScreen selectedPokemon={selectedPokemon} />
      </DisplayWindow>
      <DisplayWindow>
        <MetadataScreen selectedPokemon={selectedPokemon} />
      </DisplayWindow>
    </Flex>
  );
}
export default TopScreen;
