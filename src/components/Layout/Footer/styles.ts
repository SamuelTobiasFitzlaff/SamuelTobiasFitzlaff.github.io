import { Button } from "@mui/base";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: rgb(var(--background-secondary), 0.788);
  color: rgb(var(--text-secondary));

  position: relative;

  display: flex;
  align-items: center;

  justify-content: center;
`;

export const SocialsButton = styled(Button)`
  background-color: transparent;
  height: var(--header-height);
  aspect-ratio: 1/1;

  cursor: pointer;

  border: none;
  outline: 1px solid transparent;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgb(var(--accent-primary), 0.25);
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
