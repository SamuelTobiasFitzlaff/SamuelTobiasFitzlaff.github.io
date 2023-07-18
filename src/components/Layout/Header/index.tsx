import { MouseEvent, useCallback, useRef, useState } from "react";
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
  MenuLink,
} from "./styles";
import Link from "next/link";
import { Menu, MenuActions, MenuItem } from "@mui/base";
import { ListActionTypes } from "@mui/base/useList";

import { CheckDirection } from "../../../utils/DirectionAware";

export default function Header() {
  const { asPath } = useRouter();

  const [projectsButtonElement, setProjectsButtonElement] =
    useState<HTMLButtonElement | null>(null);
  const [isOpenProjects, setIsOpenProjects] = useState(false);
  const [direction, setDirection] = useState([
    { direction: 0, hover: false },
    { direction: 0, hover: false },
    { direction: 0, hover: false },
  ]);

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

  const handleMouseEvent = (e: MouseEvent, button: number, hover: boolean) => {
    if (!e) return;
    const target = e.currentTarget as HTMLElement;
    const element = {
      target: {
        offsetWidth: target.offsetWidth,
        offsetHeight: target.offsetHeight,
        offsetLeft: target.offsetLeft,
        offsetTop: target.offsetTop,
      },
      clientX: e.clientX,
      clientY: e.clientY,
    };

    setDirection((prevDirection) => {
      const updatedDirection = [...prevDirection];
      updatedDirection[button] = {
        direction: CheckDirection(element),
        hover: hover,
      };
      return updatedDirection;
    });
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
            aria-controls={isOpenProjects ? "projects-menu" : undefined}
            aria-expanded={isOpenProjects || undefined}
            aria-haspopup="menu"
            onMouseEnter={(e: MouseEvent) => {
              handleMouseEvent(e, 0, true);
            }}
            onMouseLeave={(e: MouseEvent) => {
              handleMouseEvent(e, 0, false);
            }}
            direction={direction[0]}
          >
            Projects^
          </RegularButton>
          <Link style={{ height: "inherit" }} href="/experience" tabIndex={-1}>
            <RegularButton
              onMouseEnter={(e: MouseEvent) => {
                handleMouseEvent(e, 1, true);
              }}
              onMouseLeave={(e: MouseEvent) => {
                handleMouseEvent(e, 1, false);
              }}
              direction={direction[1]}
            >
              Experience
            </RegularButton>
          </Link>
          <Menu
            actions={menuActions}
            open={isOpenProjects}
            onOpenChange={(open) => {
              setIsOpenProjects(open);
            }}
            anchorEl={projectsButtonElement}
            slots={{ root: StyledPopper, listbox: StyledListbox }}
            slotProps={{ listbox: { id: "projects-menu" } }}
          >
            <MenuItem
              slots={{ root: MenuLink }}
              slotProps={{ root: { href: "/projects/dev" } as any }}
              onClick={handleProjectsItemClick}
            >
              Dev
            </MenuItem>
            <MenuItem
              slots={{ root: MenuLink }}
              slotProps={{ root: { href: "/projects/photos" } as any }}
              onClick={handleProjectsItemClick}
            >
              Photos
            </MenuItem>
            <MenuItem
              slots={{ root: MenuLink }}
              slotProps={{ root: { href: "/projects/blender" } as any }}
              onClick={handleProjectsItemClick}
            >
              Blender
            </MenuItem>
          </Menu>

          <ContactButton
            onMouseEnter={(e: MouseEvent) => {
              handleMouseEvent(e, 2, true);
            }}
            onMouseLeave={(e: MouseEvent) => {
              handleMouseEvent(e, 2, false);
            }}
            direction={direction[2]}
          >
            Contact
          </ContactButton>
        </ButtonContainer>
      </HeaderContainer>
    </>
  );
}
