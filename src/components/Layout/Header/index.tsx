import { useRouter } from "next/router";
import { HeaderContainer, Underscore, Title, Path, TitleLink } from "./styles";

import NavButtons from "@/components/NavButtons/Index";

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
        <NavButtons />
      </HeaderContainer>
    </>
  );
}
