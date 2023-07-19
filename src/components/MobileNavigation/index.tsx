import { Container, MobileNavButton, MobileNavLink } from "./styles";
import { Dispatch, SetStateAction } from "react";

interface INavBarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  buttonElement: HTMLButtonElement | null;
}

export default function MobileNavigation({
  open,
  setOpen,
  buttonElement,
}: INavBarProps) {
  return (
    <Container open={open} anchorEl={buttonElement}>
      <MobileNavLink href="/projects/dev" tabIndex={-1}>
        <MobileNavButton
          onClick={() => {
            setOpen(false);
          }}
        >
          Dev
        </MobileNavButton>
      </MobileNavLink>
      <MobileNavLink href="/projects/photos" tabIndex={-1}>
        <MobileNavButton
          onClick={() => {
            setOpen(false);
          }}
        >
          Photos
        </MobileNavButton>
      </MobileNavLink>
      <MobileNavLink href="/projects/blender" tabIndex={-1}>
        <MobileNavButton
          onClick={() => {
            setOpen(false);
          }}
        >
          Blender
        </MobileNavButton>
      </MobileNavLink>
      <MobileNavLink href="/experience" tabIndex={-1}>
        <MobileNavButton
          onClick={() => {
            setOpen(false);
          }}
        >
          Experience
        </MobileNavButton>
      </MobileNavLink>
      <MobileNavButton
        onClick={() => {
          setOpen(false);
        }}
      >
        Contato
      </MobileNavButton>
    </Container>
  );
}
