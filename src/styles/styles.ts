import { Button } from "@mui/base";
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
  bottom: 0.625rem;

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100vmax;

  cursor: pointer;
`;
