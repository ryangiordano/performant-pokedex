import React from "react";
import Box from "./Box";

function Select({
  value,
  onChange,
  nullable,
  onBlur,
  placeholder,
  id,
  children,
}: {
  value: string | null;
  id: string;
  onChange: (value: string | null) => void;
  nullable?: boolean;
  onBlur?: () => void;
  placeholder?: string;
  children: React.ReactNode;
}) {
  return (
    <Box style={{ position: "relative", width: "100%" }}>
      <select
        id={id}
        className="form-control"
        value={value ?? undefined}
        onChange={(e) => {
          onChange(e.target.value as TypeValue);
        }}
      >
        <option disabled selected value={""}>
          {placeholder}
        </option>
        {children}
      </select>
      {value && nullable && (
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            position: "absolute",
            right: "5px",
            top: "5px",
            fontWeight: "bold",
          }}
          type="button"
          onClick={() => onChange("")}
        >
          x
        </button>
      )}
    </Box>
  );
}
export default Select;
