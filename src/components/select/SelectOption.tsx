import React from "react";

export type SelectOptionType = {
  value: string;
  selected: boolean;
};

function SelectOption({
  value,
  selected,
}: {
  value: string;
  selected: boolean;
}) {
  return (
    <div
      style={{
        backgroundColor: selected ? "blue" : "transparent",
        color: "white",
      }}
    >
      {value}
    </div>
  );
}
export default SelectOption;
