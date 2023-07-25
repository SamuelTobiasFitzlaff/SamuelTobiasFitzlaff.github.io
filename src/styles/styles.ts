import { Button } from "@mui/base";
import Image from "next/image";
import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 2.5rem 1rem;
  margin: auto;
`;

export const HomePageContainer = styled(PageContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;

  font-size: 1.125rem;
  p {
    max-width: 70ch;
    margin-top: 1rem;
  }

  @media screen and (max-width: 40rem) {
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
  }
`;

export const ProfilePhoto = styled(Image)`
  border-radius: 50%;
  width: 35%;
  height: 35%;
  object-fit: cover;
`;

export const ContactButton = styled(Button)`
  color: ${(props) => props.theme.accentSecondary};
  font-size: 1.25rem;
  padding: 0.5em 1em;
  margin-top: 1rem;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.accentSecondary};
  border-radius: 0.5em;
  cursor: pointer;
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
