import { useState } from "react";
import { FooterContainer, SocialsButton } from "./styles";

import { GitHub, Instagram, Linkedin } from "react-feather";
import Link from "next/link";
import { CheckDirection } from "@/utils/DirectionAware";
import Pixelfed from "@/assets/Pixelfed";

import { useTheme } from "styled-components";

export default function Footer() {
  const theme = useTheme();
  const [direction, setDirection] = useState([
    { direction: 0, hover: false },
    { direction: 0, hover: false },
    { direction: 0, hover: false },
    { direction: 0, hover: false },
  ]);

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
    <FooterContainer>
      <Link
        href="https://github.com/SamuelTobiasFitzlaff"
        target="_blank"
        tabIndex={-1}
      >
        <SocialsButton
          onMouseEnter={(e: MouseEvent) => {
            handleMouseEvent(e, 0, true);
          }}
          onMouseLeave={(e: MouseEvent) => {
            handleMouseEvent(e, 0, false);
          }}
          direction={direction[0]}
        >
          <GitHub width="2rem" height="2rem" />
        </SocialsButton>
      </Link>
      <Link
        href="https://www.linkedin.com/in/samuel-tobias-f-78530b157/"
        target="_blank"
        tabIndex={-1}
      >
        <SocialsButton
          onMouseEnter={(e: MouseEvent) => {
            handleMouseEvent(e, 1, true);
          }}
          onMouseLeave={(e: MouseEvent) => {
            handleMouseEvent(e, 1, false);
          }}
          direction={direction[1]}
        >
          <Linkedin width="2rem" height="2rem" />
        </SocialsButton>
      </Link>
      <Link
        href="https://instagram.com/samuelfitzlaff32"
        target="_blank"
        tabIndex={-1}
      >
        <SocialsButton
          onMouseEnter={(e: MouseEvent) => {
            handleMouseEvent(e, 2, true);
          }}
          onMouseLeave={(e: MouseEvent) => {
            handleMouseEvent(e, 2, false);
          }}
          direction={direction[2]}
        >
          <Instagram width="2rem" height="2rem" />
        </SocialsButton>
      </Link>
      <Link
        href="https://pixelfed.social/SamFitzlaff"
        target="_blank"
        tabIndex={-1}
      >
        <SocialsButton
          onMouseEnter={(e: MouseEvent) => {
            handleMouseEvent(e, 3, true);
          }}
          onMouseLeave={(e: MouseEvent) => {
            handleMouseEvent(e, 3, false);
          }}
          direction={direction[3]}
        >
          <Pixelfed
            fill={theme.textSecondary}
            width="2.25rem"
            height="2.25rem"
          />
        </SocialsButton>
      </Link>
    </FooterContainer>
  );
}
