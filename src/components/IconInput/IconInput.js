import { colors } from "@storybook/node-logger";
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    icon: {
      size: 16,
      strokeWidth: 1,
    },
    styles: {
      "--font-size": "14px",
      "--height": `${24 / 16}rem`,
      "--border-width": "1px",
    },
  },
  large: {
    icon: {
      size: 18,
      strokeWidth: 2,
    },
    styles: {
      "--font-size": "18px",
      "--height": `${36 / 16}rem`,
      "--border-width": "2px",
    },
  },
};
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const SIZE = SIZES[size];
  return (
    <Wrapper style={{ ...SIZE.styles, "--width": `${width}px` }}>
      <IconWrapper id={icon} {...SIZE.icon} />
      <Input placeholder={placeholder} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  height: var(--height);
  font-size: var(--font-size);
  color: ${COLORS.gray700};
  padding: 2px;
  width: max-content;
  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: var(--border-width) solid black;
  padding-left: var(--height);
  color: inherit;
  font-size: inherit;
  width: var(--width);
  font-weight: 700;
  outline-offset: 2px;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled(Icon)`
  margin: auto;
  bottom: 0;
  top: 0;
  position: absolute;
  margin-left: 2px;
`;

export default IconInput;
