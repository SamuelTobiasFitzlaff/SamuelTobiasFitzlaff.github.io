import { useRouter } from "next/router";
import {
  HeaderContainer,
  LinkContainer,
  ContactLink,
  RegularLink,
  Underscore,
  Title,
  Path,
  TitleLink,
} from "./styles";
import Link from "next/link";
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
          <RegularLink href="/projects/dev">Dev</RegularLink>
          <RegularLink href="/projects/photos">Photos</RegularLink>
          <RegularLink href="/projects/blender">Blender</RegularLink>
          <ContactLink href="/">Contact</ContactLink>
        </LinkContainer>
      </HeaderContainer>
    </>
  );
}
