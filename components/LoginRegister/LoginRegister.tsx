"use client";
import * as React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import api from "@/public/constants/api";
import { useRouter } from "next/navigation";
import { Constants } from "@/public/constants/constants";
import { GithubIcon } from "lucide-react";
import SignIn from "../Auth/Auth";
import axios from "axios";
interface LoginRegisterProps {
  type: string;
  url: string;
  setIsSuccess?: React.Dispatch<React.SetStateAction<boolean>>;
}
type UserType = {
  username: string;
  password: string;
};

const LoginRegister: React.FC<LoginRegisterProps> = ({
  type,
  url,
  setIsSuccess,
}) => {
  const [user, SetUser] = useState<UserType | null>(null);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    SetUser((prev) => {
      if (prev === null) {
        return { [id]: value } as UserType;
      }
      return { ...prev, [id]: value };
    });
  };
  console.log(process.env, "log");

  

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (user && user.username && user.password) {
      try {
        const response = await api.post(url, {
          username: user.username,
          password: user.password,
        });
        if (type === "Login") {
          localStorage.setItem(Constants.ACCESS_TOKEN, response.data.access);
          localStorage.setItem(Constants.REFRESH_TOKEN, response.data.refresh);
          if (setIsSuccess) {
            setIsSuccess((prev) => !prev);
          }
        } else if (type == "Register") {
          router.push("/register");
        }
        console.log(response);
      } catch (error) {
        console.log(`Error during api call ${error}`);
      }
    } else {
      console.log(`Username and password are required`);
    }
  };
  

  console.log(user, "checkUserr");

  return (
    <Card className="w-[350px] mt-8 mx-auto">
      <CardHeader>
        <CardTitle> {type} </CardTitle>
        <CardDescription>Please {type} to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Type your username"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input
                id="password"
                placeholder="Type your password"
                onChange={handleChange}
              />
              {/* <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select> */}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button className="ml-auto w-full" onClick={handleClick}>
          {" "}
          {type}{" "}
        </Button>
        <div className="flex w-full gap-2">
          <SignIn />
          <Button variant="outline" className="w-full">
            <GithubIcon className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginRegister;
