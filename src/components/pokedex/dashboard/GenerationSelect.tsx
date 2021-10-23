import React from "react";
import Box from "../../../patterns/Box";
import Select from "../../../patterns/Select";

function GenerationSelect({
  value,
  onChange,
  id,
}: {
  value: number | null;
  onChange: (generation: number | null) => void;
  id: string;
}) {
  return (
    <Box minWidth="50px">
      <Select
        value={`${value}` ?? ""}
        id={id}
        onChange={(value) => {
          if (value) {
            onChange(Number(value));
          } else {
            onChange(null);
          }
        }}
        placeholder="Generation"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </Select>
    </Box>
  );
}
export default GenerationSelect;
