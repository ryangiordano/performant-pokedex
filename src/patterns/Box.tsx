import React from "react";
import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

export interface BoxProps
  extends LayoutProps,
    PositionProps,
    BorderProps,
    SpaceProps,
    ColorProps,
    TypographyProps {
  children: React.ReactNode;
}

const Box = styled.div<BoxProps>(
  {
    boxSizing: "border-box",
  },
  space,
  layout,
  color,
  border,
  typography
);

Box.displayName = "Box";
export default Box;
