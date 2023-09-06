import React from "react";
import SectionSignup from "../../components/account/SectionSignup";
import HeaderAccount from "../../components/account/HeaderAccount";

export default function Signup() {
  return (
    <div className="bg-[#eee] min-h-screen w-full p-[20px_70px]">
      <HeaderAccount Type="signup" />
      <SectionSignup />
    </div>
  );
}
