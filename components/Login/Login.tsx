import LoginRegister from "@/components/LoginRegister/LoginRegister";


export default function Login() {
  const type = "Login";

  return (
    <LoginRegister {...{type}} />
  )
}
