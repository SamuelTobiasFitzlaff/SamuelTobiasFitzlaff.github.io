import { Button, Popper } from "@mui/base";
import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2),
    0 0 30px var(--accent-quaternary) inset;
  background-color: var(--background-secondary);
  color: var(--text-secondary);
  backdrop-filter: blur(10px);
  height: var(--header-height);
  padding-inline: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.25rem;

  user-select: none;
  white-space: nowrap;

  @media screen and (max-width: 56rem) {
    font-size: 1.125rem;
  }
`;

export const TitleLink = styled(Link)`
  color: var(--accent-secondary);
  font-size: 1.1em;
`;

export const Path = styled.span`
  @media screen and (max-width: 50rem) {
    display: none;
  }
`;

export const Underscore = styled.span`
  animation: blink 1s infinite cubic-bezier(1, 0, 0, 1);
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const DefaulButton = styled(Button)`
  font-family: var(--font-family);
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;

  padding-right: 1rem;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 600;

  transition: color 0.2s ease-in-out;

  &:first-child {
    padding-left: 1rem;
  }

  @media screen and (max-width: 56rem) {
    font-size: 0.875rem;
  }
`;

export const ContactButton = styled(DefaulButton)`
  color: var(--accent-secondary);
  &:hover {
    color: var(--accent-secondary-variant);
  }
`;

export const RegularButton = styled(DefaulButton)`
  color: var(--text-secondary);
  &:hover {
    color: #fff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: inherit;

  ${DefaulButton}:not(:first-child):before {
    content: "";
    border-left: 1px solid var(--text-secondary);
    margin-right: 1rem;
  }
`;

export const StyledPopper = styled(Popper)`
  z-index: 101;
`;

export const StyledListbox = styled("ul").withConfig({
  shouldForwardProp: (prop) => prop !== "ownerState",
})`
  box-sizing: border-box;

  min-width: 120px;
  padding: 0.75rem 1rem;
  border-radius: 0 0 0.25rem 0.25rem;

  background: var(--background-secondary);
  border: 1px solid transparent;
  color: var(--text-secondary);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);

  overflow: auto;
  list-style: none;
`;
