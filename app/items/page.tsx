import React from "react";
import Items from "../components/items/Items";
import HLayout from "../components/header/HLayout";

export default function page() {
  return (
    <>
      <HLayout>
        <Items />
      </HLayout>
    </>
  );
}
