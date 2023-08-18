import { Button } from "@mui/base";
import styled, { css, keyframes } from "styled-components";

export const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondaryTransparent};
  color: ${(props) => props.theme.textSecondary};

  display: flex;
  align-items: center;

  justify-content: center;
`;

const inLeft = keyframes`
  from { transform: translateX(-101%); }
  to { transform: translateX(0); };
  `;

const inRight = keyframes`
  from { transform: translateX(101%); }
  to { transform: translateX(0); };
  `;

const outLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-101%); };
  `;

const outRight = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(101%); };
  `;

export const SocialsButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => prop !== "direction",
})<{ direction: { direction: number; hover: boolean } }>`
  position: relative;
  background-color: transparent;
  height: ${(props) => props.theme.headerHeight};
  aspect-ratio: 1/1;

  cursor: pointer;
  overflow: hidden;
  user-select: none;

  border: none;
  outline: 1px solid transparent;

  transition: background-color 0.2s ease-in-out;

  z-index: 1;

  &:focus-visible {
    background-color: ${(props) => props.theme.accentPrimaryTransparent};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.accentPrimaryTransparent};

    z-index: -1;
    opacity: 0;

    transition: opacity 0.2s ease-in-out;
  }

  &::after {
    ${({ direction }) =>
      direction.direction === 1 &&
      direction.hover &&
      css`
        animation: ${inRight} 0.25s ease forwards;
        opacity: 1;
      `}
    ${({ direction }) =>
      direction.direction === 3 &&
      direction.hover &&
      css`
        animation: ${inLeft} 0.25s ease forwards;
        opacity: 1;
      `}
    
    ${({ direction }) =>
      direction.direction === 3 &&
      !direction.hover &&
      css`
        animation: ${outLeft} 0.25s ease forwards;
        opacity: 1;
      `}
    ${({ direction }) =>
      direction.direction === 1 &&
      !direction.hover &&
      css`
        animation: ${outRight} 0.25s ease forwards;
        opacity: 1;
      `}

    ${({ direction }) =>
      direction.direction !== 1 &&
      direction.direction !== 3 &&
      direction.hover &&
      css`
        opacity: 1;
      `}
  }

  @media (hover: none) {
    &::after {
      content: none;
      animation: none;
    }
  }
`;
