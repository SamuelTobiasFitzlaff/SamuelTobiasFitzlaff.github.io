import { Button } from "@mui/base";
import { Container } from "./styles";
import Link from "next/link";

interface INavBarProps {
  open: boolean;
  buttonElement: HTMLButtonElement | null;
}

export default function MobileNavigation({
  open,
  buttonElement,
}: INavBarProps) {
  return (
    <Container open={open} anchorEl={buttonElement}>
      <Link href="/projects/dev" tabIndex={-1}>
        <Button>Dev</Button>
      </Link>
      <Link href="/projects/photos" tabIndex={-1}>
        <Button>Photos</Button>
      </Link>
      <Link href="/projects/blender" tabIndex={-1}>
        <Button>Blender</Button>
      </Link>
      <Link href="/experience" tabIndex={-1}>
        <Button>Experience</Button>
      </Link>
      <Button>Contato</Button>
    </Container>
  );
}
