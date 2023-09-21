import React from "react";
import Items from "../../components/items/Items";
import HLayout from "../../components/header/HLayout";
import Auth from "../../components/Auth";

export default function page() {
  return (
    <>
      <Auth type="user">
        <HLayout>
          <Items />
        </HLayout>
      </Auth>
    </>
  );
}
