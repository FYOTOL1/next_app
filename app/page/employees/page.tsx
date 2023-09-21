import React from "react";
import HLayout from "../../components/header/HLayout";
import Employee from "../../components/employees/Employes";
import Auth from "../../components/Auth";

export default function page() {
  return (
    <>
      <Auth type="admin">
        <HLayout>
          <Employee />
        </HLayout>
      </Auth>
    </>
  );
}
