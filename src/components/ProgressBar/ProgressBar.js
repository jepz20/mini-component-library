/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  medium: {
    "--border-radius": "4px",
    "--border-radius-outer": "4px",
    "--height": "12px",
  },
  small: {
    "--border-radius": "4px",
    "--border-radius-outer": "4px",
    "--height": "8px",
  },
  large: {
    "--border-radius": "6px",
    "--border-radius-outer": "8px",
    "--height": "24px",
    "--padding": "4px",
  },
};
const ProgressBar = ({ value, size }) => {
  const currentSize = SIZES[size];
  console.log(currentSize);
  return (
    <Container
      role="progressbar"
      style={currentSize}
      value={value}
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <BarContainer>
        <VisuallyHidden>{value}</VisuallyHidden>
        <Bar value={value}></Bar>
      </BarContainer>
    </Container>
  );
};

const BarContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${(p) => p.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`;
const Container = styled.div`
  height: var(--height);
  border-radius: var(--border-radius-outer);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
`;
export default ProgressBar;
