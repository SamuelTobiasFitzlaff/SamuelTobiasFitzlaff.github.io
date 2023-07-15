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
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 0.75rem 0.5rem;
  gap: 0.5rem;
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 100vmax;
  min-width: 6rem;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const ContactButton = styled(Button)`
  background-color: var(--accent-secondary);
  color: var(--text-secondary);
  font-weight: 1000;
`;

export const RegularButton = styled(Button)`
  background-color: var(--accent-tertiary);
  color: var(--text-primary);
  font-weight: 600;
`;
