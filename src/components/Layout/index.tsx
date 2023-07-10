import React from "react";

import { Container } from "./styles";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Samuel Tobias Fitzlaff</title>
      </Head>
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};

export { Layout };
