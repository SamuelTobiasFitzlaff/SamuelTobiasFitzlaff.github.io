import { Button } from "@mui/base";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: rgb(var(--background-secondary), 0.788);
  color: rgb(var(--text-secondary));
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeToggle = styled(Button)`
  color: rgb(var(--text-primary));
  background-color: rgb(var(--background-primary));
  border: 1px solid transparent;

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100vmax;

  cursor: pointer;
`;
