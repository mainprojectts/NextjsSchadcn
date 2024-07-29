import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../../public/constants/constants";
import { jwtDecode } from "jwt-decode";
import Login from "../Login/Login";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);


  useEffect(()=>{
    auth().catch((error)=>setIsAuthorized(false))
  },[])

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      return;
    }
    const decoded = jwtDecode(token);
    console.log(decoded, "checkDecoded");
  };

  if (isAuthorized) {
    return children;
  }

  return <Login/>
};
export default ProtectedRoute;
