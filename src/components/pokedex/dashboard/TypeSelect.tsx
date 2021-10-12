import React from "react";
import Box from "../../../patterns/Box";
import Select from "../../../patterns/Select";

function getTypeValueOptions() {
  return [
    "flying",
    "fire",
    "water",
    "fairy",
    "fighting",
    "electric",
    "ice",
    "rock",
    "ground",
    "steel",
    "normal",
    "poison",
    "ghost",
    "dragon",
    "dark",
    "grass",
    "bug",
    "psychic",
  ].map((t) => <option value={t}>{t}</option>);
}

function TypeSelect({
  value,
  onChange,
  id,
  placeholder,
}: {
  value?: TypeValue | "";
  onChange: (type: TypeValue | "") => void;
  id: string;
  placeholder?: string;
}) {
  return (
    <Select
      value={value ?? ""}
      placeholder={placeholder}
      id={id}
      onChange={(value) => {
        onChange((value as TypeValue) ?? "");
      }}
      nullable
    >
      {getTypeValueOptions()}
    </Select>
  );
}
export default TypeSelect;
