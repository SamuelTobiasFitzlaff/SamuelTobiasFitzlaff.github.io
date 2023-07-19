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
    0 0 30px rgb(var(--accent-tertiary)) inset;
  background-color: rgb(var(--background-secondary), 0.788);
  color: rgb(var(--text-secondary));
  backdrop-filter: blur(10px);
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  margin-left: 1rem;

  user-select: none;
  white-space: nowrap;

  @media screen and (max-width: 56rem) {
    font-size: 1.125rem;
  }
`;

export const TitleLink = styled(Link)`
  color: rgb(var(--accent-secondary));
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
