import Link from "next/link";
import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.div`
  font-family: "fira code", monospace;

  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2),
    0 0 30px ${(props) => props.theme.accentTertiary} inset;
  background-color: ${(props) => props.theme.backgroundSecondaryTransparent};
  color: ${(props) => props.theme.textSecondary};
  backdrop-filter: blur(10px);
  height: ${(props) => props.theme.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-left: 1rem;

  user-select: none;
  white-space: nowrap;

  @media screen and (max-width: 56rem) {
    font-size: 1.125rem;
  }
`;

export const TitleLink = styled(Link)`
  color: ${(props) => props.theme.accentSecondary};
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
