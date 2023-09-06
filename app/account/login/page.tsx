import React from "react";
import HeaderAccount from "../../components/account/HeaderAccount";
import SectionLogin from "../../components/account/SectionLogin";

export default function Login() {
  return (
    <>
      <div className="bg-[#eee] min-h-screen w-full p-[20px_70px]">
        <HeaderAccount Type="login" />
        <SectionLogin />
      </div>
    </>
  );
}
