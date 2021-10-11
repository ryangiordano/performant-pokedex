import React from "react";
import DisplayScreen from "./DisplayScreen";
import MetadataScreen from "./MetadataScreen";
import Flex from "../../../patterns/Flex";
import DisplayWindow from "./DisplayWindow";
import Box from "../../../patterns/Box";

function TopScreen({ selectedPokemon }: { selectedPokemon?: PokemonType }) {
  return (
    <Flex height="200px" alignItems="center" mb="large">
      <Box
        top="0"
        height="80%"
        width="10%"
        bg="ultra_light_gray"
        borderRight="none"
        borderColor="black"
        borderTopLeftRadius="small"
        borderBottomLeftRadius="small"
      ></Box>
      <Flex
        width="80%"
        height="100%"
        borderColor="black"
        borderRadius="small"
        backgroundColor="black"
        p="huge"
      >
        <Flex width="100%" bg="white" borderRadius="small">
          <DisplayWindow>
            <DisplayScreen selectedPokemon={selectedPokemon} />
          </DisplayWindow>
          <DisplayWindow>
            <MetadataScreen selectedPokemon={selectedPokemon} />
          </DisplayWindow>
        </Flex>
      </Flex>
      <Box
        top="0"
        height="80%"
        width="10%"
        bg="ultra_light_gray"
        borderLeft="none"
        borderColor="black"
        borderTopRightRadius="small"
        borderBottomRightRadius="small"
      ></Box>
    </Flex>
  );
}
export default TopScreen;
