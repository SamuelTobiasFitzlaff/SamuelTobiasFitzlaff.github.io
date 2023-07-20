import { useEffect, useState } from "react";
import { FooterContainer, SocialsButton, ThemeToggle } from "./styles";

import { Sun, Moon, GitHub, Instagram, Linkedin } from "react-feather";
import Link from "next/link";
import { CheckDirection } from "@/utils/DirectionAware";

export default function Footer() {
  const [theme, setTheme] = useState("dark");
  const [direction, setDirection] = useState([
    { direction: 0, hover: false },
    { direction: 0, hover: false },
    { direction: 0, hover: false },
  ]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
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

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);

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
          <GitHub />
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
          <Linkedin />
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
          <Instagram />
        </SocialsButton>
      </Link>
      <ThemeToggle onClick={toggleTheme}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </ThemeToggle>
    </FooterContainer>
  );
}
