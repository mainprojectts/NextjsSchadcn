import LoginRegister from "@/components/LoginRegister/LoginRegister";
import React from "react";

export default function page() {
  const type = "Register";
  return <LoginRegister {...{ type }} />;
}
