import LoginRegister from "@/components/LoginRegister/LoginRegister";
import React from "react";

export default function page() {
  const type = "Register";
  const url = "api/user/register/"
  return <LoginRegister {...{ type,url }} />;
}
