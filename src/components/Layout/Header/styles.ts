import { Button, MenuItem, Popper } from "@mui/base";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

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

const UnderscoreBlink = keyframes`
0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
`;

export const Underscore = styled.span`
  animation: ${UnderscoreBlink} 1s infinite cubic-bezier(1, 0, 0, 1);
`;

const DefaultButton = styled(Button)`
  font-family: var(--font-family);
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;
  height: inherit;

  padding-right: 1rem;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 600;

  transition: color 0.2s ease-in-out;

  @media screen and (max-width: 56rem) {
    font-size: 0.875rem;
  }
`;

export const ContactButton = styled(DefaultButton)`
  color: var(--accent-secondary);
  &:hover {
    color: var(--accent-secondary-variant);
  }
`;

export const RegularButton = styled(DefaultButton)`
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

  ${DefaultButton}:first-child:not(a>${DefaultButton}) {
    padding-left: 1rem;
  }

  ${DefaultButton}:not(:first-child):before, a>${RegularButton}:before {
    content: "";
    border-left: 1px solid var(--text-secondary);
    margin-right: 1rem;
  }
`;

export const StyledPopper = styled(Popper)`
  z-index: 101;
`;

const ListIn = keyframes`
  from {
    transform: translateY(-1rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StyledListbox = styled("ul").withConfig({
  shouldForwardProp: (prop) => prop !== "ownerState",
})`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  min-width: 120px;
  border-radius: 0 0 0.25rem 0.25rem;

  background: var(--background-secondary);
  border: 1px solid transparent;
  color: var(--text-secondary);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);

  overflow: auto;
  list-style: none;

  animation: ${ListIn} 0.2s ease-out;
`;

export const MenuLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== "ownerState",
})`
  padding: 0.75rem 1rem;

  transition: color 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }
`;
