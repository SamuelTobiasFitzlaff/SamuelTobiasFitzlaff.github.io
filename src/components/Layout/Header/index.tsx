import { useRouter } from "next/router";
import {
  HeaderContainer,
  LinkContainer,
  ContactLink,
  RegularLink,
  Underscore,
} from "./styles";
import Link from "next/link";
export default function Header() {
  const { asPath } = useRouter();
  return (
    <>
      <HeaderContainer>
        <h1>
          <Link style={{ color: "var(--accent-secondary)" }} href={"/"}>
            Samuel@Fitzlaff
          </Link>
          :~{`${asPath !== "/" ? asPath : ""} `}$<Underscore>_</Underscore>
        </h1>
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
