import { useEffect, useState } from "react";
import { FooterContainer, ThemeToggle } from "./styles";

import { Sun, Moon } from "react-feather";

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
      <div>
        <h1>Footer</h1>
        <p>Lorem ipsum</p>
      </div>
      <ThemeToggle onClick={toggleTheme}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </ThemeToggle>
    </FooterContainer>
  );
}
