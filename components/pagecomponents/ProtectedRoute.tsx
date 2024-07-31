import { useEffect, useState } from "react";
import { Constants } from "../../public/constants/constants";
import { jwtDecode } from "jwt-decode";
import api from "@/public/constants/api";
import { useRouter } from "next/navigation";
import Login from "../Login/Login";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const router = useRouter();
  const [isLoading, setIsloading] = useState<boolean>(false);

  console.log(isAuthorized, "checkauthorization");

  useEffect(() => {
    auth().catch((error) => setIsAuthorized(false));
  }, [isSuccess]);

  const auth = async () => {
    const token = localStorage.getItem(Constants.ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      setIsloading(true);
      return;
    }
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;
    console.log("checkTokenexpired", tokenExpiration && tokenExpiration < now);

    if (tokenExpiration && tokenExpiration < now) {
      await refreshToken();
    } else {
      setIsAuthorized(true);
      setIsloading(true);
    }
    console.log(decoded, now, "checkDecoded");
  };

  const refreshToken = async () => {
    const refreshtoken = localStorage.getItem(Constants.REFRESH_TOKEN);
    try {
      const res = await api.post(Constants.refresh, {
        refresh: refreshtoken,
      });
      if (res.status === 200) {
        localStorage.setItem(Constants.ACCESS_TOKEN, res.data.access);
        setIsAuthorized(true);
        setIsloading(true);
      }
    } catch (error) {
      console.log(error);
      setIsAuthorized(false);
      setIsloading(true);
    }
  };
  console.log(isAuthorized, "checkauthorization");

  if (isLoading) {
    if (isAuthorized) {
     
      return <>{children}</>
    } else {
      return <Login {...{setIsSuccess}} />
    }
  } else {
    return <LoadingSkeleton/>
  }
};
export default ProtectedRoute;
