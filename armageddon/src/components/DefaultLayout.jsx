import React from "react";
import BaseContainer from "./BaseContainer";
import Header from "./Header";
import Footer from './Footer';

export default function DefaultLayout({ children }) {
  return (
    <BaseContainer>
      <Header />
      <hr />
      {children}
      <Footer />
    </BaseContainer>
  );
}
