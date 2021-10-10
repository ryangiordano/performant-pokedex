import React from "react";
import Box from "../../../patterns/Box";
import Flex from "../../../patterns/Flex";

function MetadataScreen({
  selectedPokemon,
}: {
  selectedPokemon?: PokemonType;
}) {
  if (!selectedPokemon) {
    return null;
  }
  const heightInFeet = Math.floor(selectedPokemon.height / 3.048);
  const heightInches = Math.floor(selectedPokemon.height % 3.048);
  const weightInPounds = Math.floor(selectedPokemon.weight / 4.536);
  return (
    <Box p="huge" textAlign="left">
      <h1 style={{ margin: 0, padding: 0 }}>{selectedPokemon?.name}</h1>
      <h2>{selectedPokemon?.types.map((t) => `${t.type.name} `)}</h2>
      <Flex>
        <b>
          Height: {heightInFeet ? `${heightInFeet}'` : undefined}{" "}
          {heightInches ? `${heightInches}''` : undefined}
        </b>
        <b>Weight: {weightInPounds}lbs</b>
      </Flex>
    </Box>
  );
}
export default MetadataScreen;
