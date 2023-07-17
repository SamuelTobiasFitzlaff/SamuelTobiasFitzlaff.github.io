import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  HeaderContainer,
  ButtonContainer,
  ContactButton,
  RegularButton,
  Underscore,
  Title,
  Path,
  TitleLink,
  StyledPopper,
  StyledListbox,
} from "./styles";
import Link from "next/link";
import { Menu, MenuActions, MenuItem } from "@mui/base";
import { ListActionTypes } from "@mui/base/useList";
export default function Header() {
  const { asPath } = useRouter();

  const [projectsButtonElement, setProjectsButtonElement] =
    useState<HTMLButtonElement | null>(null);
  const [isOpenProjects, setIsOpenProjects] = useState(false);

  const menuActions = useRef<MenuActions>(null);
  const preventReopenProjects = useRef(false);

  const updateAnchorProjects = useCallback((node: HTMLButtonElement | null) => {
    setProjectsButtonElement(node);
  }, []);

  const handleProjectsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (preventReopenProjects.current) {
      event.preventDefault();
      preventReopenProjects.current = false;
      return;
    }

    setIsOpenProjects((prev) => !prev);
  };

  const handleProjectsItemClick = () => {
    setIsOpenProjects((prev) => !prev);
  };

  const handleProjectsKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setIsOpenProjects(true);
      if (event.key === "ArrowUp") {
        menuActions.current?.dispatch({
          type: ListActionTypes.keyDown,
          key: event.key,
          event,
        });
      }
    }
  };

  return (
    <>
      <HeaderContainer>
        <Title>
          <TitleLink href={"/"}>Samuel@Fitzlaff</TitleLink>:~
          <Path>{asPath !== "/" && asPath}</Path>&nbsp;$
          <Underscore>_</Underscore>
        </Title>

        <ButtonContainer>
          <RegularButton
            onClick={handleProjectsClick}
            type="button"
            onKeyDown={handleProjectsKeyDown}
            ref={updateAnchorProjects}
            aria-controls={isOpenProjects ? "simple-menu" : undefined}
            aria-expanded={isOpenProjects || undefined}
            aria-haspopup="menu"
          >
            Projects^
          </RegularButton>
          <RegularButton>
            <Link href="/experience" tabIndex={-1}>
              Experience
            </Link>
          </RegularButton>
          <Menu
            actions={menuActions}
            open={isOpenProjects}
            onOpenChange={(open) => {
              setIsOpenProjects(open);
            }}
            anchorEl={projectsButtonElement}
            slots={{ root: StyledPopper, listbox: StyledListbox }}
            slotProps={{ listbox: { id: "simple-menu" } }}
          >
            <MenuItem>
              <Link href="/projects/dev" onClick={handleProjectsItemClick}>
                Dev
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/projects/photos" onClick={handleProjectsItemClick}>
                Photos
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/projects/blender" onClick={handleProjectsItemClick}>
                Blender
              </Link>
            </MenuItem>
          </Menu>

          <ContactButton>Contact</ContactButton>
        </ButtonContainer>
      </HeaderContainer>
    </>
  );
}
