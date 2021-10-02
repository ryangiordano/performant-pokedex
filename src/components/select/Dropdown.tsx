import React from "react";
import SelectOption, { SelectOptionType } from "./SelectOption";

function Dropdown({
  selectedValue,
  options,
  onChange,
}: {
  selectedValue: string;
  options: SelectOptionType[];
  onChange: (f: string) => void;
}) {
  return (
    <div style={{ border: "1px solid black" }}>
      {options.map((o) => (
        <SelectOption value={o.value} selected={o.value === selectedValue} />
      ))}
    </div>
  );
}
export default Dropdown;
