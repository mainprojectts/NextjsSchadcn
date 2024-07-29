import * as React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
interface LoginRegisterProps {
    type: string;
  }
  type UserType={
    username:string;
    password:string
  }

  const LoginRegister: React.FC<LoginRegisterProps> = ({ type }) => {  
    
    const [user,SetUser]=useState<UserType | null >(null)

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
              <Input id="username" placeholder="Type your username" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input id="password" placeholder="Type your password"/>
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
      <CardFooter className="flex">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button className="ml-auto"> {type} </Button>
      </CardFooter>
    </Card>
  )
}

export default LoginRegister