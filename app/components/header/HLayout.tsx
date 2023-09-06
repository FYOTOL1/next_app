import React from "react";
import Header from "./Header";

export default function HLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
