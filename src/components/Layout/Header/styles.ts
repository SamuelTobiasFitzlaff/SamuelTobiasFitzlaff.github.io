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

  @media screen and (max-width: 60rem) {
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

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0.5rem;
`;

const DefaultLink = styled(Link)`
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 100vmax;
  padding: 0.5rem 1rem;
  height: fit-content;
  user-select: none;

  font-size: 1rem;

  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }

  @media screen and (max-width: 60rem) {
    font-size: 0.875rem;
  }
`;

export const ContactLink = styled(DefaultLink)`
  background-color: var(--accent-secondary);
  color: var(--text-secondary);
  font-weight: 1000;
`;

export const RegularLink = styled(DefaultLink)`
  background-color: var(--accent-tertiary);
  color: var(--text-primary);
  font-weight: 600;
`;
