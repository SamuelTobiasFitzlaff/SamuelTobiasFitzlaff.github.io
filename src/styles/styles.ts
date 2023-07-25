import { Button } from "@mui/base";
import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 75rem;
  padding-top: 2.5rem;
  margin: auto;

  img {
    border-radius: 50%;
  }
`;

export const ThemeToggle = styled(Button)`
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.textPrimary};
  border: 1px solid transparent;

  position: absolute;
  right: 0.625rem;
  bottom: 0.625rem;

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100vmax;

  cursor: pointer;
`;
