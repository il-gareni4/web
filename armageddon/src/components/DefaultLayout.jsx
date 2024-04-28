import React from "react";
import BaseContainer from "./BaseContainer";
import Header from "./Header";

export default function DefaultLayout({ children }) {
  return (
    <BaseContainer>
      <Header />
      <hr />
      {children}
    </BaseContainer>
  );
}
