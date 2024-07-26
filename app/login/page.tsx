import LoginRegister from "@/components/LoginRegister/LoginRegister";


export default function CardWithForm() {
  const type = "Login";

  return (
    <LoginRegister {...{type}} />
  )
}
