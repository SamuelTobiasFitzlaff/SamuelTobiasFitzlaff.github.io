import { useRouter } from "next/router";
import {
  HeaderContainer,
  LinkContainer,
  ContactButton,
  RegularButton,
  Underscore,
  Title,
  Path,
  TitleLink,
} from "./styles";
import Link from "next/link";
import { Button } from "@mui/base";
export default function Header() {
  const { asPath } = useRouter();
  return (
    <>
      <HeaderContainer>
        <Title>
          <TitleLink href={"/"}>Samuel@Fitzlaff</TitleLink>:~
          <Path>{asPath !== "/" && asPath}</Path>&nbsp;$
          <Underscore>_</Underscore>
        </Title>
        <LinkContainer>
          <Link href="/projects/dev" tabIndex={-1}>
            <RegularButton>Dev</RegularButton>
          </Link>
          <Link href="/projects/photos" tabIndex={-1}>
            <RegularButton>Photos</RegularButton>
          </Link>
          <Link href="/projects/blender" tabIndex={-1}>
            <RegularButton>Blender</RegularButton>
          </Link>
          <ContactButton>Contact</ContactButton>
        </LinkContainer>
      </HeaderContainer>
    </>
  );
}
