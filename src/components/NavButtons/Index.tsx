import { MouseEvent, useCallback, useRef, useState } from "react";
import {
  ButtonContainer,
  ContactButton,
  RegularButton,
  StyledPopper,
  StyledListbox,
  MenuLink,
  HamburgerMenu,
  ButtonLink,
  StyledChevron,
  ChevronContainer,
  HamburgerMenuContainer,
} from "./styles";
import { ClickAwayListener, Menu, MenuActions, MenuItem } from "@mui/base";
import { ListActionTypes } from "@mui/base/useList";

import { CheckDirection } from "@/utils/DirectionAware";

import { Menu as FeatherMenu } from "react-feather";
import MobileNavigation from "../MobileNavigation";

export default function NavButtons() {
  const [projectsButtonElement, setProjectsButtonElement] =
    useState<HTMLButtonElement | null>(null);

  const [mobileButtonElement, setMobileButtonElement] =
    useState<HTMLButtonElement | null>(null);

  const [isOpenProjects, setIsOpenProjects] = useState(false);
  const [direction, setDirection] = useState([
    { direction: 0, hover: false },
    { direction: 0, hover: false },
    { direction: 0, hover: false },
  ]);

  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const menuActions = useRef<MenuActions>(null);
  const preventReopenProjects = useRef(false);

  const updateAnchorProjects = useCallback((node: HTMLButtonElement | null) => {
    setProjectsButtonElement(node);
  }, []);

  const updateAnchorMobile = useCallback((node: HTMLButtonElement | null) => {
    setMobileButtonElement(node);
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
          <ChevronContainer>
            Projects
            <StyledChevron open={isOpenProjects} size="1rem" />
          </ChevronContainer>
        </RegularButton>

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

        <ButtonLink href="/experience" tabIndex={-1}>
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
        </ButtonLink>

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
      <ClickAwayListener
        onClickAway={() => {
          setIsOpenMobile(false);
        }}
      >
        <HamburgerMenuContainer>
          <HamburgerMenu
            onClick={() => {
              setIsOpenMobile((prev) => !prev);
            }}
            ref={updateAnchorMobile}
          >
            <FeatherMenu size="2rem" />
          </HamburgerMenu>

          <MobileNavigation
            open={isOpenMobile}
            setOpen={setIsOpenMobile}
            buttonElement={mobileButtonElement}
          />
        </HamburgerMenuContainer>
      </ClickAwayListener>
    </>
  );
}
