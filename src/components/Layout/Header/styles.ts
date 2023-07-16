import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: var(--background-secondary);
  color: var(--text-secondary);
  backdrop-filter: blur(10px);
  height: 60px;

  display: flex;
  justify-content: space-between;

  h1 {
    margin: auto 0 auto 1rem;
    font-size: 1.5rem;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 0.75rem 0.5rem;
  gap: 0.5rem;
`;

const DefaultLink = styled(Link)`
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 100vmax;
  padding: 0.5rem 1rem;

  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.1);
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
