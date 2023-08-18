import { Button, Popper } from "@mui/base";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

const SlideDown = keyframes`
  from {
    max-height: 0;
  }
  to {
    max-height: 15.5rem;
  }
`;

export const Container = styled(Popper)`
  display: none;
  flex-direction: column;
  overflow: hidden;

  min-width: 100vw;

  background-color: ${(props) => props.theme.backgroundSecondaryTransparent};
  backdrop-filter: blur(10px);
  z-index: 102;

  animation: ${SlideDown} 0.2s ease-in-out;

  @media screen and (max-width: 40rem) {
    display: flex;
  }
`;

export const MobileNavButton = styled(Button)`
  font-family: unset;

  position: relative;
  min-height: 3rem;
  width: 100%;

  background-color: transparent;

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
    background-color: ${(props) => props.theme.accentPrimaryTransparent};
  }
`;
export const MobileNavLink = styled(Link)`
  min-height: 3rem;
  width: 100%;
`;
