import { useEffect, useState } from "react";
import { FooterContainer, SocialsButton, ThemeToggle } from "./styles";

import { Sun, Moon, GitHub, Instagram, Linkedin } from "react-feather";
import Link from "next/link";

export default function Footer() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);

  return (
    <FooterContainer>
      <Link href="https://github.com/SamuelTobiasFitzlaff" target="_blank">
        <SocialsButton>
          <GitHub />
        </SocialsButton>
      </Link>
      <Link
        href="https://www.linkedin.com/in/samuel-tobias-f-78530b157/"
        target="_blank"
      >
        <SocialsButton>
          <Linkedin />
        </SocialsButton>
      </Link>
      <Link href="https://instagram.com/samuelfitzlaff32" target="_blank">
        <SocialsButton>
          <Instagram />
        </SocialsButton>
      </Link>
      <ThemeToggle onClick={toggleTheme}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </ThemeToggle>
    </FooterContainer>
  );
}
