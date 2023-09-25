import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/styles/styles";
import { Moon, Sun } from "react-feather";

type ThemeName = "light" | "dark";

type ThemeType = {
  [theme in ThemeName]: {
    backgroundPrimary: string;
    backgroundSecondary: string;
    backgroundSecondaryTransparent: string;
    accentPrimary: string;
    accentPrimaryTransparent: string;
    accentSecondary: string;
    accentTertiary: string;
    textPrimary: string;
    textSecondary: string;
    textBackground: string;
    headerHeight: string;
  };
};

const GlobalStyle = createGlobalStyle`
  :root{
    font-family: "Roboto", sans-serif;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    background-color: ${(props) => props.theme.backgroundPrimary};
  }

  a {
    color: ${(props) => props.theme.textSecondary};
    text-decoration: none;
  }
  button {
    color: ${(props) => props.theme.textSecondary};
  }
`;

const theme: ThemeType = {
  light: {
    backgroundPrimary: "rgb(221, 221, 221)",
    backgroundSecondary: "rgb(4, 29, 53)",
    backgroundSecondaryTransparent: "rgb(4, 29, 53, 0.788)",
    accentPrimary: "rgb(34, 40, 49)",
    accentPrimaryTransparent: "rgb(34, 40, 49,0.25)",
    accentSecondary: "rgb(240, 84, 84)",
    accentTertiary: "rgb(48, 71, 94)",
    textPrimary: "rgb(34, 40, 49)",
    textSecondary: "rgb(221, 221, 221)",
    textBackground: "rgb(255, 255,255, 0.788)",
    headerHeight: "3.75rem",
  },
  dark: {
    backgroundPrimary: "rgb(34, 40, 49)",
    backgroundSecondary: "rgb(15, 19, 26)",
    backgroundSecondaryTransparent: "rgb(15, 19, 26, 0.788)",
    accentPrimary: "rgb(48, 71, 94)",
    accentPrimaryTransparent: "rgb(48, 71, 94, 0.25)",
    accentSecondary: "rgb(240, 84, 84)",
    accentTertiary: "rgb(18, 23, 31)",
    textPrimary: "rgb(221, 221, 221)",
    textSecondary: "rgb(221, 221, 221)",
    textBackground: "rgb(15, 19, 26, 0.788)",
    headerHeight: "3.75rem",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("dark");
  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) setCurrentTheme(theme as ThemeName);
  }, []);
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Layout>
        <ThemeToggle onClick={toggleTheme}>
          {currentTheme === "dark" ? <Sun /> : <Moon />}
        </ThemeToggle>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
