import { Button, Popper } from "@mui/base";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled(Popper)`
  display: none;
  flex-direction: column;

  height: calc(100vh - var(--header-height));
  min-width: 80vw;

  background-color: rgb(var(--background-secondary), 0.788);
  backdrop-filter: blur(10px);
  z-index: 102;

  @media screen and (max-width: 40rem) {
    display: flex;
  }
`;

export const MobileNavButton = styled(Button)`
  font-family: unset;

  position: relative;
  height: 3rem;
  width: 100%;

  background-color: transparent;
  color: var(--text-primary);

  border: 1px solid transparent;

  text-align: left;
  padding-left: 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 1rem;
    right: 1rem;
    height: 1px;
    background-color: rgb(var(--accent-primary), 0.25);
  }
`;
export const MobileNavLink = styled(Link)`
  height: 3rem;
  width: 100%;
`;