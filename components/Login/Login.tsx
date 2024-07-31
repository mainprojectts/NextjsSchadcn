import LoginRegister from "@/components/LoginRegister/LoginRegister";
import React from "react";

interface LoginProps{
setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps>=({setIsSuccess})=> {
  const type = "Login";
  const url="/api/token"

  return (
    <LoginRegister {...{type,url,setIsSuccess}} />
  )
}

export default Login;