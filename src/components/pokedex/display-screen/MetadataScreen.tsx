import React from "react";

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
    <>
      <section
        style={{
          height: "200px",
          border: "3px solid black",
          borderRadius: "5px",
          width: "50%",
          textAlign: "left",
          flex: 1,
        }}
      >
        <div style={{ padding: "20px" }}>
          <h1 style={{ margin: 0, padding: 0 }}>{selectedPokemon?.name}</h1>
          <h2>{selectedPokemon?.types.map((t) => `${t.type.name} `)}</h2>
          <span style={{ display: "flex", flexDirection: "column" }}>
            <b>
              Height: {heightInFeet ? `${heightInFeet}'` : undefined}{" "}
              {heightInches ? `${heightInches}''` : undefined}
            </b>
            <b>Weight: {weightInPounds}lbs</b>
          </span>
          {/* <h1>{selectedPokemon?.name}</h1>
        <h1>{selectedPokemon?.name}</h1> */}
        </div>
      </section>
    </>
  );
}
export default MetadataScreen;
