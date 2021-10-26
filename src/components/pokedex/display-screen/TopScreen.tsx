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
        style={{
          background:
            "linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(231,231,231,1) 35%, rgba(196,196,196,1) 100%)",
        }}
      ></Box>
      <Flex
        width="80%"
        height="100%"
        borderColor="black"
        borderRadius="small"
        backgroundColor="black"
        style={{
          background:
            "linear-gradient(273deg, rgba(91,91,91,1) 0%, rgba(124,124,124,1) 48%, rgba(119,119,119,1) 100%)",
        }}
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
        style={{
          background:
            "linear-gradient(273deg, rgba(238,238,238,1) 0%, rgba(231,231,231,1) 35%, rgba(196,196,196,1) 100%)",
        }}
      ></Box>
    </Flex>
  );
}
export default React.memo(TopScreen);
