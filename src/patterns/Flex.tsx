import React from "react";
import styled from "styled-components";
import {
  space,
  layout,
  color,
  flexbox,
  FlexProps,
  border,
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  AlignContentProps,
  JustifyContentProps,
  AlignItemsProps,
} from "styled-system";

interface FlexBoxProps
  extends LayoutProps,
    PositionProps,
    BorderProps,
    SpaceProps,
    ColorProps,
    FlexProps,
    AlignContentProps,
    AlignItemsProps,
    JustifyContentProps {
  children: React.ReactNode;
}

const Flex = styled.div<FlexBoxProps>(
  {
    display: "flex",
  },
  border,
  space,
  layout,
  color,
  flexbox
);

Flex.displayName = "Flex";

export default Flex;
