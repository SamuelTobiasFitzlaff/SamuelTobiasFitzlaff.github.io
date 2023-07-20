import { Button } from "@mui/base";
import styled, { css, keyframes } from "styled-components";

export const FooterContainer = styled.div`
  background-color: rgb(var(--background-secondary), 0.788);
  color: rgb(var(--text-secondary));

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
  height: var(--header-height);
  aspect-ratio: 1/1;

  cursor: pointer;
  overflow: hidden;
  user-select: none;

  border: none;
  outline: 1px solid transparent;

  transition: background-color 0.2s ease-in-out;

  &:focus-visible {
    background-color: rgb(var(--accent-primary), 0.25);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: rgb(var(--accent-primary));

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
        opacity: 0.25;
      `}
    ${({ direction }) =>
      direction.direction === 3 &&
      direction.hover &&
      css`
        animation: ${inLeft} 0.25s ease forwards;
        opacity: 0.25;
      `}
    
    ${({ direction }) =>
      direction.direction === 3 &&
      !direction.hover &&
      css`
        animation: ${outLeft} 0.25s ease forwards;
        opacity: 0.25;
      `}
    ${({ direction }) =>
      direction.direction === 1 &&
      !direction.hover &&
      css`
        animation: ${outRight} 0.25s ease forwards;
        opacity: 0.25;
      `}

    ${({ direction }) =>
      direction.direction !== 1 &&
      direction.direction !== 3 &&
      direction.hover &&
      css`
        opacity: 0.25;
      `}
  }
  @media (hover: none) {
    &::after {
      content: none;
      animation: none;
    }
  }
`;

export const ThemeToggle = styled(Button)`
  background-color: rgb(var(--background-primary));
  color: rgb(var(--text-primary));
  border: 1px solid transparent;

  position: absolute;
  right: 1rem;

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100vmax;

  cursor: pointer;
`;
