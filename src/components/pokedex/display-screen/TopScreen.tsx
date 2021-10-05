import React from "react";
import DisplayScreen from "./DisplayScreen";
import MetadataScreen from "./MetadataScreen";

function TopScreen({ selectedPokemon }: { selectedPokemon?: PokemonType }) {
  return (
    <div style={{ display: "flex" }}>
      <DisplayScreen selectedPokemon={selectedPokemon} />
      <MetadataScreen selectedPokemon={selectedPokemon} />
    </div>
  );
}
export default TopScreen;
