import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Container>
      <SelectContainer value={value} onChange={onChange}>
        {children}
      </SelectContainer>
      <Label>
        {displayedValue}
        <IconWrapper id="chevron-down" size="24" />
      </Label>
    </Container>
  );
};

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 24px;
  right: 10px;
`;

const Container = styled.div`
  position: relative;
  isolation: isolate;
  width: max-content;
  border-radius: 8px;
`;
const SelectContainer = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Label = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  padding: 12px 48px 12px 16px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  ${SelectContainer}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${SelectContainer}:hover + & {
    color: black;
  }
`;

export default Select;
