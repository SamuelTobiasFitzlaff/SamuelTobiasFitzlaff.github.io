import { Button, Modal } from "@mui/base";
import { Backdrop } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 1rem;
  margin: auto;
`;

export const HomePageContainer = styled(PageContainer)`
  display: grid;
  grid-template-columns: 3fr 2fr;
  justify-content: space-around;
  gap: 1rem;

  font-size: 1.125rem;
  p {
    max-width: 70ch;
    margin-top: 1rem;
  }

  @media screen and (max-width: 40rem) {
    font-size: 1rem;
    grid-template-columns: 1fr;
  }
`;

export const ExperiencePageContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 7fr 4fr;
  gap: 1rem;

  @media screen and (max-width: 92rem) {
    grid-template-columns: 4fr 7fr 2fr;
  }
  @media screen and (max-width: 82rem) {
    grid-template-columns: auto;
  }
`;

export const PageTextContainer = styled.div`
  background: ${(props) => props.theme.textBackground};
  padding: 1rem;

  p {
    text-align: justify;
  }
  ul {
    margin: 1rem;
  }
`;

export const ProfilePhoto = styled(Image)`
  object-fit: cover;
  width: 100%;
  max-height: 40rem;
  @media screen and (max-width: 40rem) {
    grid-row: 1;
    max-height: 25rem;
  }
`;

export const ContactButton = styled(Button)`
  color: ${(props) => props.theme.accentSecondary};
  font-size: 1.25rem;
  padding: 0.5em 1em;
  margin-top: 1rem;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.accentSecondary};

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.accentSecondary};
    color: ${(props) => props.theme.textPrimary};
  }
`;

export const ThemeToggle = styled(Button)`
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.textPrimary};
  border: 1px solid transparent;

  position: absolute;
  right: 0.625rem;
  bottom: -3.125rem;

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100vmax;

  cursor: pointer;
`;

export const StyledModal = styled(Modal)`
  position: fixed;
  top: 8vh;
  left: 10vw;
  right: 10vw;
  bottom: 4vh;

  z-index: 1000;

  max-width: 80vw;
  max-height: 88vh;

  @media screen and (max-width: 56rem) {
    max-width: 98vw;
    max-height: 80vh;

    top: 12vh;
    left: 1vw;
    right: 1vw;
    bottom: 8vh;
  }
`;

export const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const ModalContent = styled.div`
  outline: 2px solid ${(props) => props.theme.backgroundSecondaryTransparent};
  background-color: ${(props) => props.theme.backgroundSecondaryTransparent};
  backdrop-filter: blur(10px);

  border-radius: 4px;
  overflow: hidden;
  height: 100%;
`;

export const CloseModalButton = styled(Button)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: ${(props) => props.theme.textPrimary};
  background-color: ${(props) => props.theme.backgroundPrimary};
  border: 1px solid transparent;
  border-radius: 100vmax;
  padding: 0.25rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  z-index: 1001;
  user-select: none;
`;
