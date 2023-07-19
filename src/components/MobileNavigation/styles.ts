import { Popper } from "@mui/base";
import styled, { keyframes } from "styled-components";

export const Container = styled(Popper)`
  display: flex;
  flex-direction: column;

  height: calc(100vh - var(--header-height));
  min-width: 80vw;

  background-color: rgb(var(--background-secondary), 0.788);
  backdrop-filter: blur(10px);
  z-index: 102;
`;
