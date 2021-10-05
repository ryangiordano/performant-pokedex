import React from "react";

function DisplayScreen({ selectedPokemon }: { selectedPokemon?: PokemonType }) {
  return (
    <>
      <div
        style={{
          height: "200px",
          border: "3px solid black",
          borderRadius: "5px",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {selectedPokemon && (
          <img src={selectedPokemon.sprites.front_default} height={"100%"} />
        )}
      </div>
    </>
  );
}
export default DisplayScreen;
