import { useRouter } from "next/router";
import { HeaderContainer, Underscore, Title, Path, TitleLink } from "./styles";

import NavButtons from "@/components/NavButtons/Index";
import { useEffect, useState } from "react";

export default function Header() {
  const [asPath, setAsPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    setAsPath(router.asPath);
  }, [router.asPath]);

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
