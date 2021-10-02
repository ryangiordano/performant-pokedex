import React from "react";
import Dropdown from "./Dropdown";
import { SelectOptionType } from "./SelectOption";

function SelectButton({
  value,
  onClick,
}: {
  value: string;
  onClick: () => void;
}) {
  return <button type="button">{value}</button>;
}

function Select({
  options,
  onChange,
  value,
}: {
  options: SelectOptionType[];
  onChange: (value: string) => void;
  value: string;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <SelectButton
        value={value}
        onClick={() => {
          setOpen(!open);
        }}
      />
      <Dropdown
        options={options}
        selectedValue={value}
        onChange={(f) => {
          onChange(f);
        }}
      />
    </>
  );
}
export default Select;
